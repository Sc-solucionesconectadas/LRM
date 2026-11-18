# Servicios, proyectos y contacto

Fecha: 2026-11-18. Implementación local solicitada por el usuario. La autorización de publicar en este turno corresponde a i-Solution; **LMR queda local para revisión**, sin commit/push/deploy.

## Cambios visuales

Servicios tiene un hero de ancho completo con el activo industrial existente `empresa-panorama`, overlay marino, tipografía legible y CTA «Ver especialidades»/consulta. Mantiene las diez especialidades, filtros y popups. Sin dependencias o imágenes nuevas.

Proyectos incorpora una introducción humana y tres bloques de rubros: salud, agua/infraestructura e industria. Sus textos describen trabajos ya documentados. No se inventan clientes satisfechos, cifras, resultados, testimonios o métodos de trabajo.

Las seis referencias abren «Ver proyecto». El popup muestra institución/instalación identificada, rubro y «Qué hicimos» desde el alcance confirmado. Conserva Escape/clic exterior, historial, foco, consulta contextual y galería con flechas/miniaturas cuando hay fotografías. Las notas source/reference/context no se publican como relato.

## Modelo común para completar cada proyecto

| Campo | Contenido |
|---|---|
| title | Título confirmado, obligatorio |
| work | Resumen confirmado de la intervención, obligatorio |
| sector | Rubro, obligatorio |
| client | Cliente/institución, opcional; no inferir al contratante |
| location | Ubicación, opcional |
| status | Sin especificar, in-progress o completed, según confirmación |
| challenge | Necesidad/objetivo inicial, opcional; obra nueva no requiere un problema inventado |
| solution | Qué hicimos/solución, opcional; si falta se usa work |
| description | Alcance adicional, opcional |
| result | Resultado confirmado, opcional |
| logo | Logo autorizado del cliente/institución, opcional |
| photos | Primera foto como portada y restantes como galería; image/alt/caption por foto |

Los campos vacíos no crean bloques de relleno o avisos internos. Sin fotos se conserva el fallback LMR de la tarjeta; la galería aparece al cargarlas. No se alteraron los seis casos fuente para completar datos desconocidos.

El panel independiente incorpora los cinco campos opcionales nuevos en esquema/importación/exportación, con B/I, límites de 1.000 caracteres para cliente/ubicación y 12.000 para textos extensos. Campos ausentes en registros antiguos se conservan; no se reimportó la base. Ver `C:/Proyectos/Solution-Group-Admin/docs/obsidian/22_Modelo_Proyectos_LMR_e_Indice_PDF.md`.

## Formulario configurado, sin envíos

Destino: **infolmr@solution.com.ar**. Endpoint fuente: `https://formsubmit.co/ajax/infolmr@solution.com.ar`.

La preparación de demo deja de reemplazar el endpoint por vacío, por instrucción expresa. Build local y artefacto futuro muestran el formulario habilitado sin el aviso «El envío desde la web aún no está habilitado». Mantienen noindex y exclusión de material no autorizado. El preview privado del panel sigue forzando endpoint vacío.

**No hubo envíos, activaciones ni solicitudes al endpoint del destinatario.** El destino está configurado; activación y recepción real no se comprobaron. No se garantiza entrega en Recibidos. El formulario solo confirma éxito si el proveedor responde explícitamente; conserva errores/activación sin simular recepción.

## Verificaciones

- Check y 36 pruebas LMR correctos. Los tests de transporte usan respuestas simuladas, no envían emails.
- Artefacto preparado: cinco páginas, 85 archivos, noindex, destinatario correcto y material privado excluido.
- Servicios/Proyectos/Contacto en 1440 y 390 px sin overflow ni errores JS; seis fichas, Escape/clic exterior, enlaces y galería preparada.
- Inspección del formulario: endpoint institucional, botón habilitado y mensaje inicial oculto. Cero solicitudes al proveedor; no se pulsó Enviar.
- Panel: 26 pruebas y flujo aislado correctos; cliente/ubicación/objetivo/solución/resultado llegan a la plantilla real. Backup y comparación exacta: 155 registros y cuatro borradores conservados.
- Capturas y reportes privados en `.qa/lmr-refresh-2026-11-18`; muestras visuales del hero/introducción/popup revisadas.

Archivos principales: services-page.mjs, projects-page.mjs, projects-model.js, projects.js, contact-page.mjs, textos.json, services-catalog.css, projects.css, preparación de demo, validación y pruebas de sitio/proyectos/demo.

## Pendientes

- Revisión local: http://127.0.0.1:4174/lmr/servicios/ y http://127.0.0.1:4174/lmr/referencias/.
- Cliente aporta textos, resultados y fotos autorizadas. No reactivar material privado de Piñero por esta mejora.
- Publicación LMR posterior solo autorizada; la demo remota conserva su versión anterior.
- Activación/recepción del destinatario se valida únicamente cuando se autoricen pruebas reales.
