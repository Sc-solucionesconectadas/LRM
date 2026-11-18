import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { getConfig, projectRoot } from '../scripts/build.mjs';
import { demoDirectory, prepareLmrDemo } from '../scripts/prepare-lmr-demo.mjs';

test('publicar una revisión no habilita proyectos pendientes en producción', () => {
  assert.equal(getConfig().includePreviewProjects, true);
  assert.equal(getConfig({ includePreviewProjects: false }).includePreviewProjects, false);
  assert.equal(getConfig({ mode: 'production', publicBaseUrl: 'https://example.com/lmr/', includePreviewProjects: true }).includePreviewProjects, false);
  assert.throws(() => getConfig({ includePreviewProjects: 'false' }), /booleano/);
});

test('los ejemplos de texto y fotos requieren revisión explícita y se rechazan en producción', () => {
  assert.equal(getConfig().projectPlaceholders,false);
  assert.equal(getConfig({projectPlaceholders:true}).projectPlaceholders,true);
  assert.throws(()=>getConfig({projectPlaceholders:'true'}),/booleano/);
  assert.throws(()=>getConfig({mode:'production',publicBaseUrl:'https://example.com/lmr/',projectPlaceholders:true}),/revisión local/);
});

test('demo preparada de LMR: noindex, material autorizado y formulario dirigido solo al correo institucional', async () => {
  const report = await prepareLmrDemo();
  assert.equal(report.pages, 5);
  assert.equal(report.basePath, '/');
  for (const slug of ['', 'empresa/', 'servicios/', 'referencias/', 'contacto/']) {
    const html = await readFile(resolve(demoDirectory, slug, 'index.html'), 'utf8');
    assert.match(html, /name="robots" content="noindex, nofollow"/);
    assert.doesNotMatch(html, /rel="canonical"|unidad-penal-8|pinero-|formspree\.io\/f\//);
    assert.doesNotMatch(html, /(?:href|src)="\/lmr\//);
    for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
      const localPath = match[1].endsWith('/') ? `${match[1]}index.html` : match[1];
      await access(resolve(demoDirectory, `.${localPath}`));
    }
  }
  const projects = await readFile(resolve(demoDirectory, 'referencias/index.html'), 'utf8');
  assert.equal((projects.match(/data-portfolio-project/g) || []).length, 6);
  assert.doesNotMatch(projects,/Acá iría|project-pending-section|project-photo-slot/);
  assert.ok(!(await readdir(resolve(demoDirectory, 'assets'))).some(file => file.startsWith('pinero-')));
  const contact=await readFile(resolve(demoDirectory,'contacto/index.html'),'utf8');
  assert.match(contact,/data-endpoint="https:\/\/formsubmit\.co\/ajax\/infolmr@solution\.com\.ar"/);
  assert.doesNotMatch(contact,/El envío desde la web aún no está habilitado/);
  assert.doesNotMatch(contact,/<button[^>]*contact-submit[^>]*disabled/);
  assert.match(await readFile(resolve(demoDirectory, '_headers'), 'utf8'), /X-Robots-Tag: noindex, nofollow, noarchive/);
  assert.match(await readFile(resolve(demoDirectory, 'robots.txt'), 'utf8'), /Disallow: \//);
  assert.match(await readFile(resolve(demoDirectory, '404.html'), 'utf8'), /Volver al inicio/);
  for (const file of ['sitemap.xml', 'instrumental-solution', 'docs', '.env', 'lmr-demo-report.json']) {
    await assert.rejects(access(resolve(demoDirectory, file)));
  }
  const manifest = JSON.parse(await readFile(resolve(projectRoot, '.qa/cloudflare/lmr-demo-report.json'), 'utf8'));
  assert.ok(manifest.inventory.every(file => file.bytes <= 25 * 1024 * 1024));
  assert.ok(manifest.files < 20000);
});
