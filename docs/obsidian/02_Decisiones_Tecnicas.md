# Decisiones técnicas

## 2026-11-18 — Ejemplos de proyectos aislados en revisión local

**Decisión:** flag `projectPlaceholders`, explícito con `--review` desde `npm run dev`; relleno de presentación sin escribir `proyectos.json`. Build normal/demo/panel lo mantienen falso y producción rechaza true.

**Motivo:** mostrar al usuario la ficha completa aun sin material del cliente, evitando convertir ejemplos en datos de obra o llevarlos a una publicación.

**Impacto:** plantilla de proyectos, grid de datos/relato/galería, CLI/build y pruebas de aislamiento/conservación. No añade dependencias ni altera el modelo del panel. [[19_Revision_Visual_y_Maqueta_Proyectos]].

**Alternativas consideradas:** insertar textos ficticios en JSON o mostrar ejemplos en todos los entornos; descartadas por confundir contenido real y revisión.

## 2026-11-02 — Preparación productiva hasta el punto 4

**Decisión:** validación progresiva sobre HTML nativo, manejo de borradores en memoria y comprobaciones con transporte simulado. Conservar diseño, JSON/PDF y stack existentes; sin dependencias runtime nuevas.

**Motivo:** corregir fallos reales y preparar funciones para producción, con operación y dominio aplazados por el usuario y sin autorización de envío real.

**Impacto:** apps/lmr/contact.js, contact-model.js, form-validation.js; shared/styles/contact.css; scripts/build.mjs; tests/contact.test.mjs. Detalle/validaciones en [[14_Funcionalidad_y_Calidad]].

**Alternativas:** incorporar una biblioteca de formularios o backend ahora; se mantiene la solución nativa por suficiencia y menor complejidad.

## 2026-11-02 — Repositorio y demo independientes

**Decisión:** LMR pasa a C:/Proyectos/LRM y Scsolucionesconectadas/LRM, con Cloudflare Workers Static Assets. main será la rama de publicación de la demo.

**Motivo:** el usuario solicitó un repositorio por web y actualización de la página al subir cambios. No se migra a GitLab; se mantiene GitHub como fuente y Cloudflare como alojamiento.

**Impacto:** i-Solution y archivos privados no se incorporan. El repo público tiene seis referencias publicables; el material pendiente permanece en SOLUTION-GROUP. La demo solicita noindex y usa un endpoint de correo vacío sin cambiar el destinatario institucional de la fuente. No cambiar indexación, sitio del cliente o correo por una publicación de revisión.

**Alternativas consideradas:** subir todo el monorepo (mezcla sitios/materiales); publicar solo HTML sin fuentes (dificulta mantenimiento); tokens de despliegue en Git (descartado). Se usa la aplicación oficial de Cloudflare limitada a LRM.

**Archivos:** package.json, scripts/prepare-lmr-demo.mjs, deploy/lmr-demo/wrangler.jsonc, content/lmr/, AGENTS.md.

## 2026-11-18 — Modelo público opcional de proyectos

**Decisión:** ampliar fichas existentes con datos confirmados y campos opcionales; no completar resultados o problemas por inferencia. Habilitar destino institucional del formulario en la preparación solicitada, conservando vacío en previews privados.

**Motivo:** dar contexto y permitir carga posterior sin inventar contenido o enviar correos durante el desarrollo.

**Impacto:** plantillas/diálogos, esquema compatible de panel y destino de contacto preparado; no publicación actual de LMR.

**Alternativas consideradas:** inventar casos completos o mostrar placeholders internos. Descartadas.

**Archivos relacionados:** projects-page.mjs, projects-model.js, contact-page.mjs, prepare-lmr-demo.mjs y [[18_Hero_Servicios_Proyectos_y_Contacto]].
