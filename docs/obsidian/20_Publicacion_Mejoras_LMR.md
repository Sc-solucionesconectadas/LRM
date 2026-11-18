# Publicación de mejoras de LMR

Fecha: 2026-11-18. El usuario autoriza publicar LMR en la demo existente.

## Alcance

Publicar las mejoras locales16–19: compatibilidad de contenido/formato, hero de Servicios y separación del catálogo, introducción de Proyectos por rubros, CTA destacado y fichas de cada referencia. Fuentes: C:/Proyectos/LRM; repositorio Scsolucionesconectadas/LRM; rama main; Worker lmr-demo.

Destino: https://lmr-demo.scsolucionesconectadas.com.ar/.

## Preparación

- Artefacto específico `npm run build:demo`, cinco páginas,85 archivos y2.317.455 bytes; fuentes/credenciales/presupuestos/panel/material sin autorización fuera del sitio.
- `projectPlaceholders:false`: los ejemplos de textos y fotos quedan solo en la revisión local. No se publica el dist generado con `--review`.
- Demo sin indexación, dominio provisorio existente, sin tocar DNS/plan o dominio definitivo.
- Formulario configurado a infolmr@solution.com.ar por el pedido previo del usuario. No realizar envíos ni activaciones; la recepción real no está validada.
- Cuenta GitHub y remoto verificados. Se usa la autenticación aislada existente, sin cambiar cuentas globales.
- `npm run check` y `npm run build:demo` correctos. El hook obligatorio de pre-push ejecuta nuevamente pruebas/build antes de subir.

## Despliegue publicado y verificado

- Commit funcional: `de81c031cff917e50d0ae13d87f568f015d6ccf1`.
- Push a main completado con la cuenta aislada Scsolucionesconectadas, sin force-push. Hook de secretos y pre-push correctos;39 pruebas y build pasaron.
- Check GitHub `Workers Builds: lmr-demo`: completed /success.
- Build Cloudflare: `4ccf918c-08a8-41b2-ae6c-96fa7b42cad4`.
- URL pública comprobada: https://lmr-demo.scsolucionesconectadas.com.ar/.
-84 recursos públicos responden200/noindex y coinciden con el artefacto local: binarios por SHA-256, textos normalizando CRLF y la inyección conocida de Cloudflare Analytics, PNG social por formato/dimensiones1200x630 y robots por su directiva Disallow. `_headers` se usa como configuración y no es un recurso publicado.
- Cinco páginas por1440/390px: diez casos correctos, un H1 por página, sin overflow, imágenes rotas detectadas, placeholders ni errores JavaScript.
- Menú móvil, filtro y ficha de Servicios, seis fichas de proyecto con alcance confirmado, Escape y clic exterior correctos. CTA de Proyectos dirige al formulario de Contacto.
- DOM del formulario confirma el destino institucional. Cero solicitudes de envío/activación; no se valida ni promete recepción.
-404 propia y rutas de docs, entorno y Git no expuestas.
- Evidencia ignorada: `.qa/lmr-release-2026-11-18/preflight-report.json`, `public-report.json` y capturas `services-public-desktop.png`, `projects-public-1440.png`, `projects-public-390.png`.

El cierre documental se sincroniza en un commit posterior, sin cambios de interfaz. Comprobar también su check remoto al terminar. El preview local puede reconstruirse con `--review`; no usarlo como artefacto de publicación.

## Pendientes conservados

Material final del cliente y autorizaciones, activación/recepción de correo cuando se autorice, operación y dominio final. Panel administrador independiente y privado. [[19_Revision_Visual_y_Maqueta_Proyectos]] · [[13_Deploy_Infraestructura]] · [[05_Pendientes]].
