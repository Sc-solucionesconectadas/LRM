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
- 39 pruebas y build obligatorios del pre-push correctos.

## Publicación y comparación real

- Commit funcional `296013bea677ae2f5f7c4382972c43901090fad1`, subido a main.
- Cloudflare completed/success, build `525ec2cf-c037-4f06-be2c-b89f9dc5cd89`, versión `2c47ae4c-dc7f-467a-8456-0966f8a22a7d`.
- 84 recursos públicos coinciden con el artefacto, con las normalizaciones documentadas de CRLF/Analytics/robots/PNG social. Sin material privado expuesto.
- Las seis fichas tienen el mismo HTML de dossier que el local, comparado por SHA-256 tras normalizar únicamente el prefijo /lmr/. Incluye cinco apartados y tres fotografías de posición por ficha.
- Doce casos de apertura (seis fichas ×1440/390px) correctos: segunda/tercera foto, retorno Home a primera, cierres con Escape/exterior, cero overflow y cero errores JS.
- Informe ignorado `.qa/lmr-release-2026-11-18/complete-sheets-report.json`, comparaciones6/6 iguales; capturas `complete-project-public-1440.png` y `complete-project-public-390.png`.
- Cero solicitudes de correo. Fuente de proyectos intacta. Refresco del hash de renderizadores del panel con155 registros/cuatro borradores idénticos antes y después; preview privado sin ejemplos ni envío.

Se sincroniza el cierre documental en un commit posterior, sin cambiar interfaz; comprobar también su check remoto. Material final del cliente sigue pendiente y los ejemplos deben retirarse de la versión definitiva.

Archivos: `scripts/prepare-lmr-demo.mjs`, `scripts/build.mjs`, `tests/lmr-demo.test.mjs` y documentación Obsidian. [[20_Publicacion_Mejoras_LMR]] · [[19_Revision_Visual_y_Maqueta_Proyectos]] · [[05_Pendientes]].
