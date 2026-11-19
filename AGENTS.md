# LMR: repositorio independiente

## Integración editorial22 — 18/11/2026

Leer docs/obsidian/22_Integracion_Editorial_Cloud.md. Medios aprobados/SHA opcionales en build:demo; sin inventario conserva demo actual. Workflow manual preparado, App/secretos/prueba CI del panel pendientes. No confundir adaptador con publicador habilitado; no publicar borradores reales o enviar mails.

## Corrección21 de fichas en demo — 2026-11-18

Leer docs/obsidian/21_Fichas_Completas_Demo.md. Publicado commit funcional296013b, build525ec2cf-c037-4f06-be2c-b89f9dc5cd89 success. La publicación20 excluía ejemplos y dejaba solo el alcance confirmado; ahora build:demo activa projectPlaceholders:true para mostrar la misma estructura completa que el local. Seis dossiers idénticos por hash tras normalizar prefijo, cinco apartados/tres fotos, doce casos1440/390 correctos y84 recursos verificados.39 pruebas/check/build correctos. Esto supera restricciones históricas de ejemplos solo locales en19/20. Build normal/panel sin ejemplos y producción definitiva los rechaza. Noindex/material privado/destino institucional conservados; cero correos/activaciones, DNS/cuentas/ERP intactos. Panel155 registros/cuatro borradores conservados al refrescar hash. Cierre documental posterior sin cambios de interfaz; verificar último check.

## Publicación20 verificada — 2026-11-18

Mejoras16–19 publicadas en la demo existente: commit funcional de81c03, check Cloudflare completed/success, build4ccf918c-08a8-41b2-ae6c-96fa7b42cad4. Leer docs/obsidian/20_Publicacion_Mejoras_LMR.md.84 recursos y diez casos responsive correctos, seis popups/filtros/CTA verificados;39 pruebas/check/build. Se publica solo build:demo, sin ejemplos de revisión ni fuentes privadas, con noindex. Formulario dirigido a infolmr@solution.com.ar; cero envíos/activaciones, recepción sin validar. No tocar DNS, plan, dominio final, panel o ERP. Notas previas de «sin publicar» son históricas. Cierre documental en commit posterior; comprobar último check remoto.

## Revisión local19 — 2026-11-18

Leer docs/obsidian/19_Revision_Visual_y_Maqueta_Proyectos.md. Mayor aire en Servicios y CTA azul de Proyectos. `npm run dev` usa `--review` para mostrar textos/fotos de posición solo donde falta material, conservando datos reales. Build normal/demo/panel sin ejemplos; producción los rechaza.39 pruebas/check/build:demo correctos; no publicar el dist de revisión. LMR sigue local; sin emails/activaciones, DNS, cuentas ni cambios a ERP. Panel155 registros/cuatro borradores conservados después de refrescar renderizadores.

## Etapa local18 — 2026-11-18

Leer docs/obsidian/18_Hero_Servicios_Proyectos_y_Contacto.md: hero de Servicios, introducción por rubros y seis popups con alcance confirmado. Modelo opcional de cliente/ubicación/objetivo/solución/resultado y galería compatible con panel. Formulario local y artefacto futuro dirigidos a infolmr@solution.com.ar, sin aviso inicial y sin enviar solicitudes o activaciones. Recepción no validada; no prometer Recibidos. 36 pruebas/check/build y QA1440/390 correctos; panel 26 pruebas, 155 registros/cuatro borradores preservados. **LMR sigue local, sin publicación**: este turno autoriza publicar i-Solution. No modificar ERP, dominio, DNS, cuentas o archivos privados.


- Etapa17 local: soporte opcional de formatting (B/I) para equipo, servicios, proyectos y galerías; atributos/SEO planos y escapados. Diálogos clonan nodos seguros, Empresa omite referencias ocultas. Leer docs/obsidian/17_Formato_Editorial_Panel.md.36 tests/check/build:demo correctos; JSON/medios/PDF/correo sin cambios y sin deploy. Panel separado conserva borradores/usuarios futuros, no incorporarlo aqu?.

- Adaptación local16 del02/11/2026: panel separado autorizado en C:/Proyectos/Solution-Group-Admin, limitado a equipo/servicios/proyectos. Aquí solo portada individual opcional de servicios (fallback atlas) y contador dinámico; leer nota16.36 pruebas/check/build:demo correctos; sin editar contenido/fotos/PDF ni publicar. No incorporar backend/borradores a este repo público. Demo sigue15.

- Actualización pública verificada02/11/2026: mejoras14 publicadas con commitfbf4e78, check Cloudflare success y build1eb6699f-8ac4-4039-a9e4-a57d7b490ddd. Leer docs/obsidian/15_Actualizacion_Demo_Publica.md. Conservar noindex/endpoint vacío; cero envíos o activaciones. Material y puntos5/6 pendientes. El estado local histórico de14 queda superado por esta publicación.

- Alcance vigente02/11/2026: implementados localmente los puntos 1–4; leer docs/obsidian/14_Funcionalidad_y_Calidad.md. Puntos 5/6 diferidos; no se hizo push/deploy en esta sesión. 36 pruebas correctas. Mantener envío vacío en copias de revisión; npm run dev puede usar el endpoint fuente. No hacer envíos/activaciones ni tratar la aceptación simulada como recepción real.

- Proyecto local de trabajo: C:/Proyectos/LRM. Remoto autorizado: https://github.com/Scsolucionesconectadas/LRM. La marca es LMR; conservar el nombre LRM del repositorio elegido por el usuario.
- Leer docs/obsidian/00_Contexto_Proyecto.md y 05_Pendientes.md antes de cambios relevantes. Actualizar la documentación al finalizar.
- Contenido en content/lmr/, interfaz y recursos en apps/lmr/, componentes comunes en shared/. No agregar i-Solution, panel administrador, presupuestos o fuentes privadas.
- Este repositorio es público. No versionar credenciales, .env.local, consultas del formulario, fotografías sin autorización, material marcado solo para revisión privada ni documentación comercial interna.
- La demo pública es https://lmr-demo.scsolucionesconectadas.com.ar/. Worker lmr-demo, configuración deploy/lmr-demo/wrangler.jsonc. GitHub main está conectado a Cloudflare Builds: bc8ce28 produjo un despliegue correcto el02/11/2026 (versión8367edaa). Cada push autorizado requiere comprobar el check remoto y URL, no solo el commit.
- Git usa un helper local con configuración aislada de GitHub CLI fuera del repo. La cuenta autorizada es Scsolucionesconectadas; no reemplazar la cuenta/configuración global de otros proyectos ni copiar secretos a Git.
- Build de demo: npm run build:demo. Salida exclusiva .qa/cloudflare/lmr-demo, raíz /, noindex, sin sitemap/canonical definitivo ni material previewOnly. Desde corrección21 sí incluye ejemplos explícitos en las fichas de proyectos para revisar su estructura completa. Producción definitiva los rechaza. Formulario con destino institucional infolmr@solution.com.ar; construir no activa ni envía correo. No enviar pruebas/activaciones.
- No activar producción/indexación/dominio del cliente ni enviar correos sin instrucción expresa. No prometer llegada a Recibidos.
- Una modificación local no se publica hasta commit/push. El usuario autorizó la subida inicial y vinculación automática; para publicaciones posteriores respetar la instrucción vigente de cada tarea.
- Ejecutar npm run check, npm test y npm run build:demo. Revisar Git diff y fuentes públicas antes de commit. No force-push. Comprobar despliegue real tras push autorizado.
- No modificar ERP-AGRIMENSURA ni el proyecto histórico LMR-WEB. El archivo de trabajo completo previo se conserva en SOLUTION-GROUP; desde la separación, esta carpeta es la fuente de LMR.
