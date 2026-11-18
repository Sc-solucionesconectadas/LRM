# Fichas completas en la demo de LMR

Fecha: 2026-11-18. El usuario detectó que las fichas publicadas no mostraban todos los cambios solicitados.

## Causa comprobada

La publicación20 sí desplegó sus fuentes y estilos, pero `prepare-lmr-demo.mjs` forzaba `projectPlaceholders:false`. Por eso la ficha pública del Hospital Privado Rosario mostraba solo «Qué hicimos», mientras que la revisión local mostraba cinco apartados y tres posiciones de fotografía. La exclusión fue una interpretación incorrecta del alcance de la demo; no era un problema de caché del navegador.

## Corrección autorizada

El artefacto de la demo provisional usa `projectPlaceholders:true` en modo preview, con los mismos apartados y espacios de fotografías que la revisión local. Los ejemplos siguen explícitos («Acá iría la solución», «Acá iría la foto1/2/3»); campos/fotos reales tienen prioridad y `proyectos.json` no se modifica.

La restricción de ejemplos solo locales de las notas19/20 queda superada para esta demo. Build normal y preview del panel mantienen false; producción definitiva continúa rechazando true. Se conservan noindex, exclusión de proyectos/material sin permiso, correo institucional y prohibición de realizar envíos/activaciones. Sin cambios de DNS, dominio definitivo, cuentas, panel o ERP.

## Preparación y validación

- `npm run check` correcto; `npm run build:demo`: cinco páginas,85 archivos y2.341.821 bytes.
- Regresión actualizada: galerías completas en demo, conservación de datos reales, exclusión de fuentes privadas y rechazo de ejemplos en producción.
- Pendiente registrar commit/build y comprobar las seis fichas públicas contra el local antes del cierre.

Archivos: `scripts/prepare-lmr-demo.mjs`, `scripts/build.mjs`, `tests/lmr-demo.test.mjs` y documentación Obsidian. [[20_Publicacion_Mejoras_LMR]] · [[19_Revision_Visual_y_Maqueta_Proyectos]] · [[05_Pendientes]].
