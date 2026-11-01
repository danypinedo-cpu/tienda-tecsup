# Guía de Contribución a Tienda TECSUP

¡Gracias por tomarte el tiempo de colaborar en **Tienda TECSUP**! Este documento contiene las directrices para mantener la calidad del código, reportar incidencias y proponer nuevas mejoras de forma organizada.

---

## Índice
1. [Código de Conducta](#código-de-conducta)
2. [Cómo Reportar un Error (Bug Report)](#cómo-reportar-un-error-bug-report)
3. [Cómo Proponer una Mejora (Feature Request)](#cómo-proponer-una-mejora-feature-request)
4. [Flujo de Trabajo para Colaborar (Git Workflow)](#flujo-de-trabajo-para-colaborar-git-workflow)
5. [Convención de Commits](#convención-de-commits)
6. [Checklist de Verificación para Pull Requests](#checklist-de-verificación-para-pull-requests)

---

## Código de Conducta

Buscamos fomentar un entorno colaborativo respetuoso, inclusivo y constructivo para todos los estudiantes y desarrolladores. Por favor, mantén un tono profesional y amable en todos los comentarios de issues y revisiones de código.

---

## Cómo Reportar un Error (Bug Report)

Si encuentras una discrepancia visual, un cálculo incorrecto o un error en consola:

1. **Verifica en Issues existentes:** Asegúrate de que nadie haya reportado el mismo problema previamente.
2. **Crea un nuevo Issue:** Utiliza un título claro y la siguiente plantilla de descripción:

```markdown
### Descripción del Problema
Explicación concisa y clara del fallo observado.

### Pasos para Reproducir
1. Abrir `index.html` en Google Chrome / Firefox / Edge.
2. Abrir la consola de desarrollador (tecla F12).
3. Observar la fila o el cálculo de totales.

### Comportamiento Esperado
El total debe mostrar `Total: S/ 68.00` y el diseño debe aplicar la paleta de colores institucional.

### Comportamiento Observado
Descripción de lo que ocurre realmente (ej. cálculo desfasado, hoja de estilo no encontrada).

### Entorno
- Sistema Operativo: (ej. Windows 11, Ubuntu 24.04, macOS)
- Navegador: (ej. Chrome v128, Firefox v130)