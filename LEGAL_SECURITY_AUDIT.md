# Auditoría de privacidad y seguridad

**Proyecto:** Vivero Los Pellines  
**Fecha:** 28 de octubre de 2026  
**Alcance:** revisión estática del repositorio, dependencias instaladas y build local. No incluye infraestructura de producción, cuentas de terceros, dispositivos, contratos ni prácticas internas no presentes en el código.  
**Clasificación:** **NIVEL 1 — sitio estático con tratamiento mínimo y contenido personal público.** No recoge datos dentro de la aplicación, pero publica fotografías identificables —incluidos menores—, un número de contacto y enlaza a terceros.

Referencias oficiales consultadas:

- Ley N.º 19.628 vigente y versión diferida: https://www.bcn.cl/leychile/Navegar?dt=open&idLey=19628
- Ley N.º 21.719, con vigencia desde el 1 de diciembre de 2026: https://www.bcn.cl/leychile/navegar?f=2026-12-01&i=1209272
- Ley N.º 21.663, Marco de Ciberseguridad: https://www.bcn.cl/leychile/navegar?idNorma=1202434
- Información SERNAC sobre comercio electrónico: https://www.sernac.cl/portal/604/w3-article-11727.html

Este documento no constituye asesoría jurídica ni declara cumplimiento legal total.

## 1. Tipo de proyecto

SPA estática construida con React y Vite. Presenta información institucional, experiencias, fotografías, ubicación general y enlaces de contacto a WhatsApp.

| Funcionalidad | Resultado |
|---|---|
| Formularios / newsletter | No existe |
| Registro, login, perfiles, roles o panel | No existe |
| Backend, API, endpoints o base de datos | No existe |
| Cookies, localStorage o sessionStorage | No detectados |
| Analytics, pixels o publicidad | No detectados |
| Pagos, carrito, pedidos o reservas | No existen |
| Subida de archivos o email | No existen |
| Datos sensibles solicitados | No |
| Fotografías identificables | Sí, adultos y menores |
| Servicios externos activos | Google Fonts y enlaces de salida a WhatsApp |
| Comercio electrónico activo | No; hay componentes/datos de productos no renderizados |

La Ley N.º 21.663 se utiliza solo como referencia de buenas prácticas. No existe evidencia de que el vivero sea servicio esencial u operador de importancia vital. **POSIBLE APLICACIÓN LEY 21.663 — REQUIERE VALIDACIÓN** únicamente si la organización pertenece por otros motivos a una categoría regulada no visible en el repositorio.

## 2. Datos personales detectados

El sitio no solicita datos al visitante. Sí trata datos ya incorporados al contenido: imágenes de personas, número de contacto y, de forma condicionada por la infraestructura, IP/logs. El inventario detallado, finalidades, retención y mecanismo de borrado están en [DATA_INVENTORY.md](./DATA_INVENTORY.md).

Punto de riesgo principal: las imágenes `niños1.png`, `niños2.png`, `niños3.png`, `imagen8.png` y otras fotografías muestran personas identificables. El código no permite demostrar autorización, fuente de licitud, información entregada, retención ni proceso de retiro.

## 3. Cookies y almacenamiento

No se detectaron `document.cookie`, cookies propias, `localStorage`, `sessionStorage`, Google Analytics, Google Tag Manager, Meta Pixel, Hotjar, Clarity, SDK publicitario ni iframe.

**Decisión:** no corresponde implementar banner de cookies con la evidencia actual. Debe reevaluarse antes de incorporar analytics, marketing, widgets o embeds.

## 4. Servicios externos

1. **Google Fonts:** el navegador descarga CSS/fuentes desde Google; el proveedor puede recibir IP y metadatos técnicos. Se limitó el referrer, pero permanece una **POSIBLE TRANSFERENCIA INTERNACIONAL**. Autoalojar las fuentes reduciría exposición sin alterar el diseño, pero requiere incorporar correctamente los archivos y licencias.
2. **WhatsApp/Meta:** solo recibe tráfico cuando la persona decide abrir el enlace. Esta aplicación no accede al mensaje ni lo almacena, pero la operación posterior y la retención en cuentas/dispositivos del vivero no son auditables aquí.
3. **Hosting, CDN, repositorio y CI:** no están identificados. Ver `THIRD_PARTY_DATA_MAP` en [DATA_INVENTORY.md](./DATA_INVENTORY.md).

## 5. Autenticación y autorización

**NO APLICA.** No hay cuentas, sesiones, tokens, rutas privadas, roles ni recursos por usuario. No hay superficie observable para fuerza bruta, enumeración, IDOR o escalamiento de privilegios.

## 6. Seguridad frontend

Controles verificados o implementados:

- React escapa por defecto el texto renderizado; no se usa `dangerouslySetInnerHTML`, `innerHTML` ni `eval`.
- No se procesa entrada controlada por usuarios.
- Los enlaces con `target="_blank"` usan ahora `noopener noreferrer`.
- Se añadió CSP mediante meta HTML, compatible con los recursos actuales: scripts e imágenes propios, Google Fonts autorizado, objetos/frames/formularios bloqueados y actualización de contenido inseguro.
- Se añadió `strict-origin-when-cross-origin` como política de referrer.
- No se detectó mixed content HTTP.
- No se detectaron secretos en los archivos activos ni nombres de archivos sensibles en el historial consultado.

Limitación: la CSP permite estilos inline porque la aplicación usa estilos React dinámicos. Una CSP por header con nonce y `frame-ancestors` sería más fuerte, pero requiere conocer el hosting y adaptar la implementación.

Headers pendientes en producción:

- `Strict-Transport-Security` solo después de confirmar HTTPS y alcance de subdominios;
- `X-Content-Type-Options: nosniff`;
- `Content-Security-Policy` como header, incluyendo `frame-ancestors 'none'`;
- `Permissions-Policy` restrictiva;
- protección de framing compatible con el proveedor.

**REQUIERE INFORMACIÓN DEL RESPONSABLE/HOSTING.** No se añadió una configuración específica de Vercel, Netlify u otro proveedor no identificado.

## 7. Seguridad backend/API

**NO APLICA.** No existe backend, API, CORS, serialización, SQL, correo ni almacenamiento servidor en el repositorio. Por ello CSRF, SQL injection, command injection, mass assignment, SSRF y rate limiting de endpoints no tienen superficie actual.

El hosting estático sí debe limitar acceso administrativo, usar MFA, HTTPS, logs proporcionados y despliegues confiables. Esto no puede verificarse desde el código.

## 8. Protección de datos

### Preparación para Ley N.º 21.719

| Requisito | Resultado |
|---|---|
| Inventario de tratamientos | CUMPLE TÉCNICAMENTE mediante `DATA_INVENTORY.md` |
| Licitud documentada | REQUIERE VALIDACIÓN LEGAL, especialmente fotografías y menores |
| Minimización | CUMPLE TÉCNICAMENTE para visitantes: no se solicitan datos |
| Retención | NO IMPLEMENTADO organizativamente; propuesta documentada |
| Derechos de titulares | CUMPLE PARCIALMENTE: borrado técnico posible, canal/proceso por definir |
| Transparencia | CUMPLE PARCIALMENTE; no hay responsable, contacto de privacidad ni retención confirmados |
| Privacidad desde el diseño/por defecto | CUMPLE PARCIALMENTE: mínima recopilación y ausencia de tracking; terceros y fotografías pendientes |
| Seguridad basada en riesgo | CUMPLE PARCIALMENTE: controles frontend y dependencias; hosting desconocido |
| Incidentes de datos | CUMPLE TÉCNICAMENTE mediante `DATA_BREACH_RESPONSE.md`; responsables pendientes |
| Terceros y transferencias | CUMPLE TÉCNICAMENTE en inventario; contratos/ubicaciones requieren información |
| Responsabilidad demostrable | CUMPLE PARCIALMENTE con estos documentos; faltan decisiones y evidencias internas |

### Menores de edad

La publicación de fotografías de niños, niñas o adolescentes eleva el riesgo aunque no exista formulario. **REQUIERE REVISIÓN LEGAL ESPECIALIZADA** para verificar fuente de licitud, autorizaciones, información entregada, finalidad, plazo y procedimiento de retiro, atendiendo al interés superior y autonomía progresiva.

### Política de privacidad

No se creó una política pública con datos inventados. Antes de publicarla deben definirse identidad del responsable, canal de derechos, finalidades, fuentes de licitud, retención, terceros, transferencias y prácticas reales de WhatsApp/hosting. Dado que existen fotografías personales y potenciales logs/terceros, **REQUIERE VALIDACIÓN LEGAL** si corresponde publicar un aviso de privacidad y cómo informar a las personas fotografiadas.

## 9. Comercio electrónico

**NO APLICA al sitio renderizado actualmente.** No hay compra, contratación, carrito, pago, despacho ni pedido. `Cards.jsx` y `src/data/products.js` contienen código de catálogo/consulta que no está importado por `App.jsx`; si se activa, deberá reevaluarse la relación de consumo, precios, identificación del proveedor, términos y condiciones, despacho y derechos del consumidor.

## 10. Hallazgos

### 🟠 ALTO — Publicación de fotografías de menores sin evidencia documental

**Archivo:** `src/assets/niños*.png`, `src/assets/imagen8.png`, `src/data/experiences.js`, `src/data/gallery.js`  
**Problema:** el repositorio no contiene evidencia de autorización, información, fuente de licitud, retención o retiro.  
**Riesgo:** afectación de derechos de menores y dificultad para demostrar licitud/proporcionalidad.  
**Norma/principio relacionado:** Ley 19.628 modificada por Ley 21.719; datos de NNA, finalidad, proporcionalidad, responsabilidad y privacidad por diseño.  
**Corrección:** validar y archivar evidencias; definir revisión/retención; retirar imágenes sin respaldo suficiente.  
**Estado:** REQUIERE REVISIÓN LEGAL ESPECIALIZADA.

### 🟡 MEDIO — Gestión de fotografías de adultos no documentada

**Archivo:** múltiples assets y datos de experiencias/galería.  
**Problema:** no hay inventario previo, fuente de licitud ni proceso organizativo demostrable.  
**Riesgo:** publicación o conservación fuera de finalidad.  
**Norma/principio relacionado:** licitud, finalidad, transparencia, retención y derechos.  
**Corrección:** usar el inventario creado, asociar evidencia y fecha de revisión a cada registro.  
**Estado:** CUMPLE PARCIALMENTE.

### 🟡 MEDIO — Google Fonts implica un tercero no documentado

**Archivo:** `src/styles.css:1`.  
**Problema:** carga remota de tipografías y posible transferencia de metadatos.  
**Riesgo:** dependencia externa y transparencia incompleta.  
**Norma/principio relacionado:** minimización, terceros, transparencia y transferencias internacionales.  
**Corrección:** evaluar autoalojamiento o documentar fundamento/proveedor.  
**Estado:** CUMPLE PARCIALMENTE; referrer restringido.

### 🟡 MEDIO — Hosting y headers de producción desconocidos

**Archivo:** no existe configuración de hosting.  
**Problema:** no es posible comprobar HTTPS, HSTS, headers, logs, región, backups o borrado.  
**Riesgo:** configuración insegura o falta de trazabilidad.  
**Norma/principio relacionado:** seguridad basada en riesgo, confidencialidad, integridad, disponibilidad y resiliencia.  
**Corrección:** identificar proveedor y aplicar/verificar headers después del deploy.  
**Estado:** REQUIERE INFORMACIÓN DEL RESPONSABLE.

### 🟡 MEDIO — Número de WhatsApp pendiente de validación

**Archivo:** `src/App.jsx`, `src/components/Header.jsx`, `src/components/Cards.jsx`.  
**Problema:** el propio código incluye un TODO para validar el número.  
**Riesgo:** dirigir comunicaciones a una cuenta incorrecta o publicar un dato sin autorización.  
**Norma/principio relacionado:** exactitud, seguridad y transparencia.  
**Corrección:** confirmar titularidad, acceso, MFA y uso como canal oficial.  
**Estado:** REQUIERE INFORMACIÓN DEL RESPONSABLE.

### 🔵 BAJO — Enlaces externos requerían aislamiento explícito

**Archivo:** `src/App.jsx`, `src/components/Header.jsx`, `src/components/Cards.jsx`.  
**Problema:** usaban solo `noreferrer`.  
**Riesgo:** defensa menos explícita frente a acceso a `window.opener`.  
**Norma/principio relacionado:** seguridad por diseño.  
**Corrección:** `rel="noopener noreferrer"`.  
**Estado:** CORREGIDO.

### 🟢 CORRECTO — Sin tracking ni recopilación innecesaria

**Archivo:** aplicación completa.  
**Problema:** no aplica.  
**Riesgo:** bajo dentro de la aplicación.  
**Norma/principio relacionado:** minimización y privacidad por defecto.  
**Corrección:** mantener y reevaluar antes de añadir integraciones.  
**Estado:** CUMPLE TÉCNICAMENTE.

### 🟢 CORRECTO — Dependencias vulnerables corregidas

**Archivo:** `package.json`, `package-lock.json`.  
**Problema original:** Vite 8.3.0 y `source-map-js` tenían avisos de severidad alta aplicables al entorno de desarrollo/build.  
**Riesgo:** exposición local/de desarrollo; no formaban parte del runtime estático publicado.  
**Norma/principio relacionado:** componentes vulnerables y desactualizados (OWASP).  
**Corrección:** Vite 8.3.5 y dependencias transitivas parcheadas; versiones declaradas reproducibles.  
**Estado:** CORREGIDO; `npm audit` informa 0 vulnerabilidades.

## 11. Cambios implementados

- `index.html`: CSP compatible y política de referrer.
- `src/App.jsx`, `src/components/Header.jsx`, `src/components/Cards.jsx`: aislamiento de enlaces externos.
- `package.json`, `package-lock.json`: versiones reproducibles, herramientas de build en `devDependencies` y parches de seguridad.
- `DATA_INVENTORY.md`: inventario, retención, derechos y mapa de terceros.
- `DATA_BREACH_RESPONSE.md`: procedimiento proporcional de incidentes.
- `LEGAL_SECURITY_AUDIT.md`: evidencia de esta auditoría.

No se añadieron cookies, banners, formularios, checkboxes, cuentas, tracking ni textos legales públicos.

## 12. Pendientes

### TÉCNICOS

1. Identificar hosting/CDN/CI y verificar HTTPS, headers, MFA, accesos, backups, logs y borrado.
2. Migrar CSP a header de servidor e incorporar `frame-ancestors 'none'`.
3. Evaluar autoalojar DM Sans y Newsreader para retirar la petición a Google Fonts.
4. Confirmar el número de WhatsApp y proteger la cuenta con MFA/verificación disponible.
5. Definir y probar el procedimiento técnico para retirar assets de builds, cachés y repositorios.
6. Añadir lint/tests si el proyecto crece; actualmente no existen scripts de lint o test.

### LEGALES / ADMINISTRATIVOS

1. Identificar al responsable del tratamiento y un canal para derechos.
2. Revisar y documentar autorización/fuente de licitud de cada fotografía, especialmente menores.
3. Definir política de retención y revisión periódica.
4. Identificar proveedores, contratos, regiones, subencargados y transferencias internacionales.
5. Definir gestión y retención de consultas en WhatsApp y dispositivos/backups.
6. Completar responsables y contactos en `DATA_BREACH_RESPONSE.md`.
7. Validar si corresponde aviso/política de privacidad y su contenido real.

## 13. Checklist final

- [ ] HTTPS — REQUIERE VERIFICACIÓN EN PRODUCCIÓN
- [x] secretos protegidos — no detectados en alcance
- [x] formularios validados — NO APLICA, no existen
- [x] datos minimizados — no se solicitan datos al visitante
- [ ] política de privacidad cuando corresponde — REQUIERE VALIDACIÓN LEGAL e información real
- [x] cookies revisadas — no detectadas
- [x] trackers revisados — no detectados
- [x] consentimiento cuando corresponde — no requerido por funciones actuales; fotografías pendientes de validación específica
- [x] derechos de titulares considerados — mecanismo documentado; canal pendiente
- [x] endpoints protegidos — NO APLICA
- [x] autorización backend — NO APLICA
- [x] CORS revisado — NO APLICA
- [x] CSRF revisado — NO APLICA
- [x] XSS revisado — sin sinks peligrosos ni entrada de usuario; CSP añadida
- [x] SQL injection revisado — NO APLICA
- [x] rate limiting revisado — NO APLICA
- [ ] headers revisados — CSP/referrer implementados; headers del hosting pendientes
- [x] dependencias revisadas — 0 vulnerabilidades después de parchear
- [ ] logs revisados — no hay logs de app; hosting pendiente
- [x] terceros identificados — proveedores concretos/desconocidos documentados
- [x] responsive conservado — sin cambios visuales de layout
- [x] build exitoso
- [x] tests existentes ejecutados — no existen tests ni script de test

## Conclusión limitada

El riesgo técnico de la SPA es bajo porque no recopila datos, no tiene backend, autenticación, pagos ni tracking. El riesgo general se clasifica como **MEDIO** por la publicación de fotografías personales —incluidos menores— sin evidencia documental disponible, y por la falta de información sobre hosting, terceros y prácticas externas.

No se detectaron incumplimientos técnicos evidentes adicionales dentro del alcance de esta auditoría después de las correcciones, pero el cumplimiento jurídico definitivo depende de las prácticas reales de tratamiento, las autorizaciones de las fotografías, los proveedores y las decisiones del responsable, y debe ser validado profesionalmente.

