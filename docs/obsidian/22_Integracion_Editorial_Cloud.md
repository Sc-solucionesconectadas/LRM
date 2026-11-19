# Adaptador editorial — 18/11/2026

Preparado para el panel privado central, sin publicar borradores durante esta integración. shared/panel-media.mjs valida un inventario opcional content/lmr/panel-media.json, limita paths a recursos propios, comprueba tamaño/SHA y descarga solo archivos aprobados. prepare-lmr-demo conserva comportamiento previo sin inventario; si existe, agrega X-Solution-Revision para verificar el despliegue.

El workflow editorial preparado es manual y requiere aprobación desde el panel. Revisión privada separada de publicación pública; sin artifacts/caches ni credenciales versionadas. Binarios nuevos llegan al build desde el almacén aprobado, sin copias sucesivas en Git.

Check,39 tests y build:demo correctos. Contenido, seis fichas con ejemplos de demo y formulario institucional conservados. Sin correos enviados. App/secretos y prueba remota del publicador todavía pendientes; el adaptador no equivale a publicación habilitada.

Adaptador base subido en f3823f0; Workers Builds completed/success y demo200. Workflow preparado en commit local, pendiente de instalación mediante App con permiso específico. No se publicaron borradores del cliente.
