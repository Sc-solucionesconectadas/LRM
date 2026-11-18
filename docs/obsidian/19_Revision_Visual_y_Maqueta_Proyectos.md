# Revisión visual y estructura completa de proyectos

Actualización posterior: [[21_Fichas_Completas_Demo]] habilita también estos ejemplos explícitos en la demo provisional por pedido del usuario. Las restricciones de «solo local» de esta nota son históricas; producción definitiva conserva el bloqueo.

Fecha: 2026-11-18. Trabajo local autorizado a partir de la revisión de la etapa18.

## Cambios visibles

- Servicios separa el hero del catálogo con 68px superiores en escritorio/tablet y 44px en móvil. El filtro y las tarjetas conservan su diseño y funciones.
- La invitación después de los tres rubros de Proyectos se convierte en una tarjeta azul oscuro, título destacado, explicación breve y botón blanco «Consultar mi proyecto» que abre Contacto.
- Las fichas de proyecto distribuyen datos generales arriba, relato a la izquierda y galería a la derecha. En móvil se apilan, sin desbordes. La galería usa controles manuales, miniaturas y teclado.

## Textos y fotos de posición: solo revisión local

`npm run dev` construye con `node scripts/build.mjs --review`. Esa opción activa `projectPlaceholders:true` y completa únicamente los campos ausentes de cada ficha:

- Cliente o comitente y ubicación.
- Necesidad inicial / objetivo de obra; admite instalaciones nuevas, no presupone una avería.
- Solución detallada, información de la intervención y resultado/avance.
- Tres posiciones de fotografía: vista general, detalle de trabajos y equipos o resultado final. Muestran «Acá iría la foto 1», 2 y 3, con flechas y miniaturas funcionales.

Los textos existentes siguen presentes como información confirmada; por ejemplo, «Instalación de un sistema BMS integral». Los ejemplos explican qué falta sin inventar datos, métricas ni resultados. `proyectos.json` no se modifica. Fotos y campos reales tienen prioridad; más de tres fotos reales se conservan completas.

El build normal deja `projectPlaceholders:false`; `prepare-lmr-demo.mjs` lo fija explícitamente en falso y producción rechaza un intento de activarlo. El preview privado del panel también conserva su valor falso. No publicar el directorio local `dist` construido con `--review`; usar el artefacto específico de demo. La fuente pública sigue excluyendo material sin permiso.

## Validación

- `npm run check`: correcto.
- `npm test`: 39 pruebas correctas. Incluye aislamiento del modo de revisión, rechazo en producción, ausencia de ejemplos en demo, conservación de campos/fotos existentes y no mutación de registros.
- `npm run build:demo`: cinco páginas /85 archivos /2.317.455 bytes. Sin textos ni slots de posición en el HTML preparado para publicación.
- Navegador: Servicios y Proyectos en1440,768 y390px, sin overflow ni errores JS; distancia del hero comprobada68/44px. CTA legible en hover y navegación real a Contacto, formulario `#consultation` presente.
- Las seis fichas muestran cuatro bloques de texto pendientes y tres fotos de posición; flechas/miniaturas/Home/End, Escape y clic fuera correctos.
- Capturas ignoradas en `.qa/lmr-refresh-2026-11-18/`: services-spacing-desktop/mobile, projects-cta-desktop/mobile y project-review-desktop/mobile.
- Cero solicitudes de correo durante la revisión; sin envíos, activaciones, cambios de cuenta o DNS.
- Panel: refresco de renderizadores tras comparar fuentes;155 registros y cuatro borradores idénticos al respaldo antes y después. No se reimporta ni se altera contenido del cliente.

## Archivos y pendientes

Plantilla `apps/lmr/projects-page.mjs`; CSS `shared/styles/projects.css` y `services-catalog.css`; copy `content/lmr/textos.json`; configuración `scripts/build.mjs`, `prepare-lmr-demo.mjs`, `package.json`; pruebas `tests/projects.test.mjs`, `lmr-demo.test.mjs`, `site.test.mjs`.

Revisar con el usuario, recibir textos/fotos autorizados y cargarlos en los campos reales. Esta etapa no publica LMR. La demo remota conserva su versión previa hasta una autorización específica. El destino institucional del formulario permanece configurado; entrega real/activación solo se revisará cuando se autoricen envíos. [[18_Hero_Servicios_Proyectos_y_Contacto]] · [[06_Comandos_Runbook]] · [[05_Pendientes]].
