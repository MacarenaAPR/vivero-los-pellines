# Inventario de datos y terceros

**Proyecto:** Vivero Los Pellines  
**Fecha de revisión:** 28 de octubre de 2026  
**Alcance:** código y archivos disponibles en este repositorio. Las operaciones realizadas fuera del sitio (por ejemplo, conversaciones en WhatsApp, logs del hosting y gestión interna de fotografías) requieren información del responsable.

## DATA_INVENTORY

| Dato o categoría | Titular / origen | Finalidad observable | Ubicación y acceso | Terceros potenciales | Retención / eliminación | Fuente de licitud | Estado |
|---|---|---|---|---|---|---|---|
| Fotografías identificables de personas adultas | Archivos aportados al proyecto | Difusión de actividades del vivero | `src/assets`, repositorio, build y hosting; acceso público una vez desplegado | Hosting/CDN no identificado | No definida. Eliminar del repositorio y build, desplegar nuevamente y purgar cachés/CDN | REQUIERE VALIDACIÓN LEGAL y evidencia de autorización o de otra fuente de licitud aplicable | REQUIERE INFORMACIÓN DEL RESPONSABLE |
| Fotografías identificables de niños, niñas o adolescentes | Archivos `niños*.png`, `imagen8.png` y otras imágenes que puedan contener menores | Difusión educativa y comunitaria | `src/assets`, repositorio, build y hosting; acceso público una vez desplegado | Hosting/CDN no identificado | No definida. Mismo proceso de eliminación, incluyendo copias y cachés | REQUIERE REVISIÓN LEGAL ESPECIALIZADA, documentación del interés superior y autorizaciones aplicables | CUMPLE PARCIALMENTE: existe control técnico de publicación, pero no evidencia jurídica/organizativa |
| Número de contacto publicado | Código fuente; titularidad no confirmada | Recibir consultas, visitas y colaboraciones | `src/App.jsx`, `src/components/Header.jsx` y código no renderizado en `Cards.jsx`; acceso público | WhatsApp/Meta al seguir el enlace | Mientras sea el canal oficial; retirar del código y volver a desplegar | REQUIERE VALIDACIÓN DEL RESPONSABLE sobre titularidad y autorización de publicación | REQUIERE INFORMACIÓN DEL RESPONSABLE |
| Mensaje y metadatos enviados por WhatsApp | Persona visitante, solo después de salir del sitio y decidir contactar | Gestionar consultas | No se almacenan en esta aplicación; podrían quedar en WhatsApp y dispositivos/cuentas del vivero | WhatsApp/Meta | No definida en este repositorio | La fuente de licitud y la retención dependen de la gestión real de consultas: REQUIERE VALIDACIÓN LEGAL | NO IMPLEMENTADO fuera del sitio |
| Dirección IP, User-Agent y metadatos de la petición de fuente | Navegador del visitante | Descargar tipografías | No se almacenan en la aplicación; solicitud directa a Google Fonts | Google | No determinable desde el repositorio | REQUIERE VALIDACIÓN LEGAL; evaluar interés legítimo o autoalojar fuentes | CUMPLE PARCIALMENTE: referrer limitado, dependencia externa permanece |
| Dirección IP y logs de acceso del hosting | Visitante / infraestructura | Entrega, seguridad y operación del sitio | Proveedor de hosting no identificado | Hosting/CDN por confirmar | REQUIERE DEFINIR POLÍTICA DE RETENCIÓN con el proveedor | REQUIERE VALIDACIÓN LEGAL según configuración y finalidad reales | REQUIERE INFORMACIÓN DEL RESPONSABLE |

### Datos que el sitio no recopila

No se detectaron formularios, newsletter, registro, login, perfiles, RUT, dirección, geolocalización, pagos, carrito, pedidos, reservas, carga de archivos, base de datos, backend ni API. Tampoco se detectaron `localStorage`, `sessionStorage`, `document.cookie`, analytics, pixels publicitarios, mapas, reCAPTCHA o widgets embebidos.

## Retención propuesta para decisión del responsable

| Dato | Finalidad | Retención propuesta | Eliminación / anonimización | Justificación |
|---|---|---|---|---|
| Fotografías de adultos | Memoria y difusión de actividades | Mientras la publicación conserve finalidad y exista fuente de licitud documentada; revisión periódica | Retirar archivo y referencia, reconstruir, desplegar y purgar caché; revisar copias del repositorio | REQUIERE DEFINIR POLÍTICA DE RETENCIÓN |
| Fotografías de menores | Difusión educativa/comunitaria | Plazo limitado, documentado y revisado con mayor frecuencia | Igual que el anterior; registrar la solicitud y verificar todas las réplicas controladas | REQUIERE REVISIÓN LEGAL ESPECIALIZADA |
| Consultas de WhatsApp | Responder y coordinar | Solo el tiempo necesario para gestionar la consulta y obligaciones aplicables | Borrado en WhatsApp, dispositivos, respaldos y registros internos controlados | REQUIERE DEFINIR POLÍTICA DE RETENCIÓN |
| Logs de hosting | Operación y seguridad | Ventana corta proporcional al riesgo, definida con el proveedor | Expiración automática o eliminación en panel/API del proveedor | REQUIERE INFORMACIÓN DEL PROVEEDOR Y VALIDACIÓN LEGAL |

## Mecanismo proporcional para derechos de titulares

Para este sitio estático no se justifican seis controles públicos independientes. Debe existir un canal verificable administrado por el responsable para solicitudes de acceso, rectificación, supresión, oposición, portabilidad y bloqueo. El número de WhatsApp podría servir operacionalmente solo si el responsable lo confirma, documenta el procedimiento y puede autenticar razonablemente al solicitante. No se debe publicar una dirección o identidad inventada.

Proceso técnico disponible para fotografías: localizar por nombre/actividad, retirar la referencia y el asset, reconstruir el sitio, desplegarlo y purgar cachés. Debe complementarse con un registro interno de solicitudes y una revisión de repositorios, respaldos y proveedores.

## THIRD_PARTY_DATA_MAP

| Proveedor | Datos involucrados | Finalidad | Ubicación | Rol aparente | Riesgo | Acción pendiente |
|---|---|---|---|---|---|---|
| Google Fonts / Google | IP, User-Agent, URL/referrer limitado y datos técnicos de conexión | Entregar DM Sans y Newsreader | No determinable desde el repositorio; POSIBLE TRANSFERENCIA INTERNACIONAL | Tercero independiente o encargado: REQUIERE VALIDACIÓN LEGAL | Medio | Evaluar autoalojar fuentes; revisar condiciones y transferencia |
| WhatsApp / Meta | Datos de cuenta, IP, metadatos y contenido que el usuario decida enviar tras salir del sitio | Canal de contacto | No determinable desde el repositorio; POSIBLE TRANSFERENCIA INTERNACIONAL | Tercero independiente o encargado: REQUIERE VALIDACIÓN LEGAL | Medio | Validar cuenta/número, informar el canal y definir retención interna |
| Hosting/CDN | IP, logs técnicos, contenido público y fotografías | Publicar el sitio | Proveedor no identificado | Encargado o tercero: REQUIERE VALIDACIÓN | Indeterminado | Identificar proveedor, región, logs, retención, contrato, subencargados, backups y borrado |
| Repositorio/CI | Código y fotografías; datos de colaboradores | Versionado y despliegue | Proveedor no identificado | Encargado o tercero: REQUIERE VALIDACIÓN | Indeterminado | Confirmar visibilidad, accesos, MFA, región, retención y eliminación de historial |

No se debe asumir cumplimiento de un proveedor por el solo hecho de utilizarlo.

