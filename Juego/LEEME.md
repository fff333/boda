# Pompón y la estrella perdida

Juego de adivinanzas para móvil en HTML. 107 niveles unidos por una historia: una estrella ha caído en el jardín de Pompón y su sombra se ha escapado con ella.

## 1. Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `conejo-blanco`).
2. Sube **todos** los archivos de esta carpeta.
3. En el repositorio ve a **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
4. En un minuto tendrás el juego en `https://TU-USUARIO.github.io/conejo-blanco/`.

GitHub Pages usa HTTPS, así que el micrófono, la cámara y el giroscopio funcionan.

## 2. Cómo funciona

- `index.html` es la portada: pide los permisos (una sola vez) y carga los niveles dentro.
- Cada nivel es un archivo. Cuando la respuesta es una palabra, el siguiente nivel se llama igual que la respuesta (`madriguera.html`, `eco.html`…).
- `comun.js` contiene el orden de los niveles, la historia (`HISTORIA`), los capítulos (`CAPITULOS`), los personajes que se asoman (`APARICIONES`) y sus comentarios en las pistas (`BURLAS`), sus códigos, los mensajes de ánimo y el menú (☰): volver al nivel anterior, ir a un nivel con su código, y cambiar de idioma.
- `idiomas.js` contiene las traducciones al inglés. Para añadir otro idioma, copia el bloque `en` y tradúcelo.
- `mapa.html` es el mapa del mundo de Pompón: un camino por los 107 niveles, con una estrella en los superados. Se abre desde el menú ☰.
- `motor.js` contiene el piano y las herramientas de los niveles musicales.
- `cielo.js` contiene las estrellas y constelaciones reales (posiciones, brillo y color) de los niveles del cielo.
- La partida se guarda en el móvil de cada jugador: al volver, la portada ofrece «Continuar».
