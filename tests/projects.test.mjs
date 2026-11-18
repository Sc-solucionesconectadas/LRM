import test from 'node:test';
import assert from 'node:assert/strict';
import { galleryIndex, hasProjectDetails, projectSector } from '../apps/lmr/projects-model.js';
import {readFile} from 'node:fs/promises';
import {renderProjects} from '../apps/lmr/projects-page.mjs';

async function reviewContext(project) {
  const copy=JSON.parse(await readFile(new URL('../content/lmr/textos.json',import.meta.url),'utf8'));
  const image=[{file:'sample.webp',width:600,height:400}];
  return {projectPlaceholders:true,copy,projects:[project],projectUi:{sectorById:{},sectors:['Salud']},images:{hero:image,logo:image,rack:image},href:path=>'/lmr/'+path};
}

test('la revisión completa solo los campos y fotos faltantes sin mutar el proyecto',async()=>{
  const project={id:'ejemplo',title:'Obra',sector:'Salud',work:'Instalación confirmada',status:'completed'};
  const before=structuredClone(project);
  const ctx=await reviewContext(project);
  const html=renderProjects(ctx);
  assert.deepEqual(project,before);
  assert.match(html,/Instalación confirmada/);
  assert.match(html,/Acá iría la solución/);
  for(let i=1;i<=3;i++) assert.ok(html.includes(`Acá iría la foto ${i}`));
  assert.equal((html.match(/data-project-photo[ >]/g)||[]).length,3);
  assert.match(html,/class="button button-white" href="\/lmr\/contacto\/">Consultar mi proyecto/);
  assert.doesNotMatch(renderProjects({...ctx,projectPlaceholders:false}),/Acá iría|project-photo-slot|project-pending-section/);
});

test('la revisión conserva solución, resultado y fotos existentes; admite más de tres fotos reales',async()=>{
  const project={id:'completo',title:'Obra',sector:'Salud',work:'Instalación',client:'Cliente confirmado',location:'Rosario',challenge:'Objetivo confirmado',solution:'Solución confirmada',description:'Detalle confirmado',result:'Resultado confirmado',photos:Array.from({length:4},(_,i)=>({image:'rack',alt:`Equipo ${i+1}`,caption:`Foto real ${i+1}`}))};
  const before=structuredClone(project);
  const html=renderProjects(await reviewContext(project));
  assert.deepEqual(project,before);
  for(const text of ['Cliente confirmado','Rosario','Objetivo confirmado','Solución confirmada','Detalle confirmado','Resultado confirmado','Foto real 4']) assert.ok(html.includes(text));
  assert.equal((html.match(/data-project-photo[ >]/g)||[]).length,4);
  assert.doesNotMatch(html,/Acá iría|project-photo-slot|project-pending-section/);
});

test('el trabajo confirmado permite abrir ficha; las notas internas por sí solas no son contenido público', () => {
  assert.equal(hasProjectDetails({work:'Instalación BMS',context:'Contexto interno',reference:'Fuente privada',source:'Folleto'}),true);
  assert.equal(hasProjectDetails({context:'Contexto interno',reference:'Fuente privada',source:'Folleto'}),false);
  assert.equal(hasProjectDetails({description:'   ',photos:[]}),false);
  assert.equal(hasProjectDetails({description:'Rack en proceso de armado.'}),true);
  assert.equal(hasProjectDetails({photos:[{image:'rack'}]}),true);
});

test('la galería manual conserva los límites, incluso con cero o una fotografía', () => {
  assert.equal(galleryIndex(0,-1,3),0);
  assert.equal(galleryIndex(0,1,3),1);
  assert.equal(galleryIndex(2,1,3),2);
  assert.equal(galleryIndex(2,-1,3),1);
  assert.equal(galleryIndex(0,1,1),0);
  assert.equal(galleryIndex(0,1,0),0);
});

test('la presentación separa sector y especialidad sin alterar la fuente del proyecto', () => {
  const project={id:'pinero',sector:'Redes y comunicaciones'};
  assert.equal(projectSector(project,{sectorById:{pinero:'Institucional'}}),'Institucional');
  assert.equal(project.sector,'Redes y comunicaciones');
  assert.equal(projectSector({id:'otro',sector:'Salud'},{sectorById:{}}),'Salud');
});
