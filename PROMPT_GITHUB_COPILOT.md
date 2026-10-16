# Prompt para GitHub Copilot

Actúa como desarrollador web senior y diseñador de experiencias educativas para Formación Profesional. Trabaja sobre este repositorio de GitHub Pages del módulo **Proyecto Intermodular II de 2.º CFGS de Automoción, curso 2026-2027, modalidad semipresencial**.

## Objetivo
Mejora la web estática existente sin introducir procesos de compilación. Debe seguir funcionando al subir directamente `index.html`, `styles.css`, `data.js` y `app.js` a GitHub Pages.

## Requisitos
1. Mantén HTML semántico, CSS moderno y JavaScript nativo sin frameworks.
2. Conserva las cinco unidades y toda la relación entre unidades, tareas, RA y CE.
3. Crea navegación móvil accesible, indicador de sección activa y botón de volver arriba.
4. Añade filtros por unidad, RA y estado: próxima, abierta o cerrada. Calcula el estado desde las fechas de `data.js`.
5. Añade una vista de calendario o línea temporal sin librerías externas.
6. Crea una sección de programación didáctica por unidad con: objetivos, contenidos, temporalización, RA, CE, actividades, metodología, recursos, atención a la diversidad, evidencias, instrumentos y recuperación.
7. Añade botones para imprimir cada unidad y la programación completa con CSS `@media print`.
8. Mejora accesibilidad: contraste AA, foco visible, etiquetas, teclado y `prefers-reduced-motion`.
9. Añade metadatos SEO y Open Graph sin inventar datos del centro.
10. No publiques datos personales del alumnado ni enlaces privados con tokens.
11. No inventes normativa. Señala las referencias pendientes de verificación.
12. Mantén un diseño profesional de automoción: azul muy oscuro, azul técnico, gris claro y ámbar de seguridad.

## Comprobaciones finales
- No debe haber errores en consola.
- Debe verse correctamente desde 360 px hasta escritorio.
- Todos los enlaces internos deben funcionar.
- El buscador y los filtros deben ser utilizables con teclado.
- El repositorio debe seguir desplegándose desde la raíz, sin `npm install`.

Realiza los cambios directamente en los ficheros, resume lo modificado en el README y crea una lista de pruebas manuales.
