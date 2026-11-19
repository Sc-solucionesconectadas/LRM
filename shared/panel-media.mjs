import {readFile,writeFile,mkdir,stat} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const run=promisify(execFile),hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const specs={lmr:{prefix:'content/lmr',assets:'apps/lmr/assets'},isolution:{prefix:'content/instrumental-solution',assets:'apps/instrumental-solution/assets'}};
const max=25*1048576;
export async function prepareEditorialInput(root,site,{fetcher=fetch}={}){
  const spec=specs[site];if(!spec)throw new Error('Empresa inválida.');
  let manifest;try{manifest=JSON.parse(await readFile(path.join(root,spec.prefix,'panel-media.json'),'utf8'));}catch(e){if(e.code==='ENOENT')return null;throw e;}
  if(manifest.schemaVersion!==1||!/^[a-f0-9-]{36}$/.test(manifest.revision)||!Array.isArray(manifest.files)||manifest.files.length>1500)throw new Error('Inventario editorial inválido.');
  for(const entry of manifest.files){
    if(typeof entry.path!=='string'||!entry.path.startsWith(spec.assets+'/')||!/^apps\/[a-z-]+\/assets\/(source|documents|video)\/[a-zA-Z0-9._-]+\.(png|jpg|jpeg|webp|pdf|mp4|vtt)$/.test(entry.path)||entry.path.includes('..')||!/^[a-z0-9-]+$/.test(entry.id)||!/^[a-f0-9]{64}$/.test(entry.digest))throw new Error('Ruta de medio no autorizada.');
    const file=path.resolve(root,entry.path);let valid=false;
    try{valid=(await stat(file)).size<=max&&hash(await readFile(file))===entry.digest;}catch(e){if(e.code!=='ENOENT')throw e;}
    if(valid)continue;
    if(process.env.PANEL_MEDIA_LOCAL==='1')throw new Error('El medio preparado no coincide con su inventario.');
    const response=await fetcher(`https://panel-demo.scsolucionesconectadas.com.ar/api/published-assets/${site}/${entry.id}`,{signal:AbortSignal.timeout(60000)});
    if(!response.ok||Number(response.headers.get('Content-Length')||0)>max)throw new Error('No se pudo descargar un medio aprobado.');
    const chunks=[];let size=0;for await(const chunk of response.body){size+=chunk.length;if(size>max)throw new Error('Medio demasiado grande.');chunks.push(chunk);}
    const bytes=Buffer.concat(chunks);if(hash(bytes)!==entry.digest)throw new Error('La huella del medio no coincide.');
    await mkdir(path.dirname(file),{recursive:true});await writeFile(file,bytes);
  }
  if(site==='isolution'&&process.env.PANEL_PDF_READY!=='1'){
    let python=process.env.PANEL_PYTHON;
    if(!python){
      const directory=path.join(root,'.build-venv');python=path.join(directory,process.platform==='win32'?'Scripts/python.exe':'bin/python');
      try{await stat(python);}catch{await run(process.platform==='win32'?'python':'python3',['-m','venv',directory],{cwd:root,timeout:90000});}
      await run(python,['-m','pip','install','--disable-pip-version-check','-r','requirements-authoring.txt'],{cwd:root,timeout:180000,maxBuffer:2097152});
    }
    for(const name of ['create-instrumental-sheets.py','create-instrumental-catalog.py','render-instrumental-cover.py'])await run(python,[path.join(root,'scripts',name)],{cwd:root,env:{...process.env,PYTHONUTF8:'1'},timeout:180000,maxBuffer:2097152});
  }
  return manifest;
}
