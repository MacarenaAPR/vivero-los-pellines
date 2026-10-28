# Procedimiento de respuesta a incidentes de datos

**Proyecto:** Vivero Los Pellines  
**Versión:** 1.0 — 28 de octubre de 2026  
**Propietario del procedimiento:** `[NOMBRE/CARGO POR DEFINIR]`  
**Canal interno de incidentes:** `[CANAL POR DEFINIR]`

Este procedimiento es proporcional a un sitio estático. Cubre el repositorio, pipeline de despliegue, hosting/CDN, logs y fotografías publicadas. Las conversaciones y dispositivos de WhatsApp deben incorporarse cuando el responsable confirme cómo se administran.

## 1. Detección y registro inicial

1. Registrar fecha, hora, fuente del aviso y persona que lo recibe.
2. Conservar evidencia sin divulgar datos innecesarios: alertas, logs, identificadores de despliegue, commits y capturas pertinentes.
3. Asignar un identificador al incidente.
4. No borrar ni alterar evidencia antes de obtener una copia controlada.

## 2. Contención

Según el caso:

- revocar sesiones, tokens o credenciales del hosting, repositorio y CI;
- activar MFA o recuperar cuentas comprometidas;
- retirar temporalmente un despliegue o asset expuesto;
- bloquear accesos comprometidos;
- purgar cachés/CDN;
- aislar dispositivos afectados;
- contactar al proveedor por su canal de seguridad.

No publicar detalles que faciliten la explotación ni contactar a titulares antes de contar con información verificada, salvo que una medida inmediata sea necesaria para reducir daño.

## 3. Investigación y evaluación

Documentar:

- sistemas y proveedores afectados;
- causa conocida o probable;
- fecha de inicio, detección y contención;
- categorías de datos;
- cantidad aproximada y tipo de titulares;
- presencia de fotografías o datos de niños, niñas o adolescentes;
- confidencialidad, integridad y disponibilidad afectadas;
- descarga, modificación, pérdida, acceso o publicación no autorizada;
- alcance geográfico y posibles transferencias;
- consecuencias plausibles para las personas;
- medidas ya adoptadas y riesgo residual.

## 4. Decisión de notificación

El responsable y su asesoría deben determinar si existe un riesgo razonable para los derechos y libertades de los titulares y si corresponde reportar a la Agencia de Protección de Datos Personales. Cuando se vean involucrados datos personales de niños o niñas menores de catorce años, la comunicación a titulares o representantes merece revisión reforzada.

**REQUIERE VALIDACIÓN LEGAL:** autoridad competente, contenido definitivo, destinatarios, momento y medio de cada comunicación según la normativa vigente y las instrucciones que emita la Agencia. No se fija aquí un plazo numérico no validado.

Toda decisión de notificar o no notificar debe quedar motivada y registrada.

## 5. Contenido mínimo del registro interno

- identificador y cronología;
- naturaleza del incidente;
- categorías de datos y titulares;
- número aproximado de personas y registros;
- efectos observados y riesgos;
- proveedores involucrados;
- acciones de contención, recuperación y prevención;
- responsables de cada acción;
- evidencia preservada;
- decisión y fundamento sobre notificación a autoridad y comunicación a titulares;
- fecha de cierre y aprobación.

## 6. Comunicación

Las comunicaciones deben ser claras, verificables y no especulativas. Cuando corresponda, deben explicar los datos afectados, consecuencias posibles, medidas tomadas, recomendaciones concretas y canal de contacto. No revelar información de otros titulares ni detalles técnicos explotables.

## 7. Recuperación

1. Restaurar desde una versión confiable.
2. Rotar credenciales comprometidas y revisar accesos.
3. Verificar integridad del repositorio y artefactos.
4. Confirmar que el despliegue no exponga recursos retirados.
5. Revisar logs y monitorear recurrencia.
6. Validar funcionamiento y seguridad antes de cerrar.

## 8. Lecciones aprendidas

Dentro de una revisión posterior definida internamente:

- identificar causa raíz;
- actualizar controles, inventario y contratos;
- corregir accesos y retención;
- capacitar a quienes publican fotografías;
- probar nuevamente backups, borrado y recuperación;
- registrar responsables y fechas de seguimiento.

## 9. Contactos por completar

| Función | Persona / proveedor | Canal |
|---|---|---|
| Responsable del sitio | `[POR DEFINIR]` | `[POR DEFINIR]` |
| Responsable de privacidad | `[POR DEFINIR]` | `[POR DEFINIR]` |
| Responsable técnico | `[POR DEFINIR]` | `[POR DEFINIR]` |
| Hosting/CDN | `[POR DEFINIR]` | `[POR DEFINIR]` |
| Repositorio/CI | `[POR DEFINIR]` | `[POR DEFINIR]` |
| Asesoría legal | `[POR DEFINIR]` | `[POR DEFINIR]` |

