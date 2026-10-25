# Curiosity

Juego de retos para móvil en HTML: 106 retos ordenados de fácil a difícil y, detrás de cada uno, una curiosidad.

## Publicarlo en GitHub Pages

1. Crea un repositorio nuevo (por ejemplo `curiosity`) y sube **todos** los archivos de esta carpeta.
2. En **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`, y guarda.
3. En un minuto estará en `https://TU-USUARIO.github.io/curiosity/`.

GitHub Pages usa HTTPS, así que el micrófono, la cámara y los sensores funcionan.

## Cómo funciona

- `index.html` es la portada: pide los permisos una sola vez y carga los retos dentro.
- `comun.js` contiene el orden de los retos (`NIVELES`), las curiosidades (`CURIOSIDADES`) y las respuestas, guardadas como huella.
- `plantillas.js` contiene los tipos de reto reutilizables: series, preguntas y varias respuestas.
- `mapa.html` muestra el camino en cuatro tramos (fácil, intermedio, difícil y experto), con una estrella en los retos superados.
- Desde el menú ☰ de cada reto se puede volver al anterior, abrir el mapa o rendirse y pasar al siguiente.
