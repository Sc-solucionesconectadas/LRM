# Contexto de LMR

## Publicación20 verificada — 2026-11-18

Mejoras16–19 publicadas: commit funcional de81c03, check Cloudflare completed/success y build4ccf918c-08a8-41b2-ae6c-96fa7b42cad4. [[20_Publicacion_Mejoras_LMR]] registra evidencia:84 recursos/diez casos responsive/seis fichas/menú/filtros/CTA correctos,39 pruebas y build. Noindex, raíz /, ejemplos solo locales y destino institucional conservados. Sin envíos/activaciones ni cambios de DNS/plan/dominio final/panel/ERP. Las secciones previas son antecedentes. Cierre documental sincronizado por separado sin cambios de interfaz.

## Revisión local19 — 2026-11-18

[[19_Revision_Visual_y_Maqueta_Proyectos]]: aire entre hero y catálogo de Servicios, CTA destacado después de los rubros y estructura de ficha completa con ejemplos de textos/tres fotos. `npm run dev` activa `--review`; los campos/fotos confirmados prevalecen y la fuente no cambia. Build normal/demo/panel sin ejemplos; producción los rechaza.39 pruebas/check/build:demo y QA1440/768/390 correctos. Panel155 registros/cuatro borradores intactos. **Sin publicación de LMR ni correos.** Destino institucional configurado desde etapa18; activación/recepción pendientes de autorización.

## Etapa local18 — 2026-11-18

[[18_Hero_Servicios_Proyectos_y_Contacto]]: hero de Servicios, introducción por rubros y seis popups con alcance confirmado. Modelo opcional de cliente/ubicación/objetivo/solución/resultado y galería compatible con panel. Formulario local y artefacto futuro dirigidos a infolmr@solution.com.ar, sin aviso inicial y sin enviar solicitudes o activaciones. Recepción no validada; no prometer Recibidos. 36 pruebas/check/build y QA1440/390 correctos; panel 26 pruebas, 155 registros/cuatro borradores preservados. **LMR sigue local, sin publicación**: este turno autoriza publicar i-Solution. No modificar ERP, dominio, DNS, cuentas o archivos privados.


## Formato editorial local17 — 02/11/2026

[[17_Formato_Editorial_Panel]]: B/I opcional en campos de contenido, conservado en diálogos/carrusel/galerías, sin HTML arbitrario ni atributos enriquecidos. Empresa tolera proyectos ocultos.36 tests/check/build:demo correctos; sin modificar JSON/fotos/PDF o publicar.

## 02/11/2026 — Adaptación local para panel separado

[[16_Adaptador_Servicios_Para_Panel_Local]]: portada individual de servicios y contador calculado; atlas/datos conservados.36 pruebas/check/build:demo correctos. Panel privado local fuera de este repo en C:/Proyectos/Solution-Group-Admin. Sin publicación; demo sigue15.

## 02/11/2026 — Actualización pública verificada

Mejoras publicadas en https://lmr-demo.scsolucionesconectadas.com.ar/: commitfbf4e78, check Cloudflare success y build1eb6699f-8ac4-4039-a9e4-a57d7b490ddd. [[15_Actualizacion_Demo_Publica]] registra evidencia y prevalece sobre el estado local histórico de14. Transporte vacío/noindex conservados; material, recepción real y puntos5/6 pendientes.

## 02/11/2026 — Funcionalidad y calidad locales

[[14_Funcionalidad_y_Calidad]] registra las correcciones y la revisión aprobada hasta el punto 4. 36 pruebas/check/build:demo correctos; auditoría conjunta de 31 páginas/124 casos responsive. Cambios locales sin commit/push: demo pública aún conserva su versión anterior. Copia local servida en http://127.0.0.1:4174/lmr/ sin envío. Puntos 5 (operación) y 6 (dominio) diferidos. Material del cliente y activación/prueba real de correo pendientes, sin envíos. [[10_UI_UX_Diseno]].

Fecha: 02/11/2026, America/Buenos_Aires.

## Objetivo y estado

Web institucional de ingeniería, obras eléctricas MT/BT, tableros y PLC, redes/fibra y servicios complementarios. Cinco páginas, diez servicios y seis referencias publicables. Separada de SOLUTION-GROUP por pedido del usuario y preparada para https://github.com/Scsolucionesconectadas/LRM.

Fuente local vigente: C:/Proyectos/LRM. Demo en https://lmr-demo.scsolucionesconectadas.com.ar/. Conexión automática main → Cloudflare comprobada: commit bc8ce28, check Workers Builds: lmr-demo success y versión8367edaa lista. [[13_Deploy_Infraestructura]] conserva evidencia y comandos. Git tiene helper local con sesión aislada de la cuenta Scsolucionesconectadas, sin cambiar la sesión global de otros proyectos.

## Stack

Node.js >=22, módulos ECMAScript, HTML/CSS/JS nativos, Sharp 0.35.5 para imágenes. Contenido JSON; generación estática. Sin backend ni administrador. Cloudflare Workers Static Assets; Wrangler 4.156.1 fijado en el comando de despliegue.

## Ejecución

`npm ci`, `npm run dev`; abrir http://127.0.0.1:4174/lmr/.

`npm run check`, `npm test`, `npm run build:demo`. Ver [[06_Comandos_Runbook]].

## Límites vigentes

Demo pública noindex, formulario configurado a infolmr@solution.com.ar desde publicación20. No enviar pruebas o activaciones; la recepción definitiva no fue comprobada. Material sin permiso de publicación y notas comerciales permanecen fuera del repo público, conservados en el proyecto previo. Ejemplos de textos/fotos solo locales con --review. No cambiar dominio/indexación del cliente por esta separación. No mezclar i-Solution o panel.

[[05_Pendientes]] · [[02_Decisiones_Tecnicas]] · [[03_Bitacora_Desarrollo]] · [[13_Deploy_Infraestructura]].
