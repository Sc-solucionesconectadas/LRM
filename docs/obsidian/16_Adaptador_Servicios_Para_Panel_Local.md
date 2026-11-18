# Adaptador de servicios para el panel local

Fecha02/11/2026. Usuario autorizó desarrollo de panel separado y limitado a equipo/servicios/proyectos LMR; fuente del panel C:/Proyectos/Solution-Group-Admin.

Cambios puntuales en apps/lmr/services-page.mjs y shared/styles/services-catalog.css: admitir card.image/imageAlt cuando se cargue portada individual, conservar atlas como fallback, object-fit:cover y contador calculado con cards.length en vez de10 fijo. No cambia contenido original, fotos, PDF, formulario o configuración de publicación.

Validación: npm run check, npm test36/36, npm run build:demo. Prueba privada del panel con servicio adicional/portada subida, persona y proyecto nuevos: build de plantilla real correcto; hashes de fuentes de contenido/medios intactos durante pruebas. No se guardan registros QA en este repositorio.

Todo local sin commit/push/deploy. Demo pública permanece en versión15. Panel no se agrega a este repo público; sesión local y publicación remota son etapas separadas.
