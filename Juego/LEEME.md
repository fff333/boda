# Sigue al conejo blanco

Juego de adivinanzas para móvil en HTML. 72 niveles.

## 1. Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `conejo-blanco`).
2. Sube **todos** los archivos de esta carpeta (menos la carpeta `servidor`, que no hace falta, aunque no pasa nada si la subes).
3. En el repositorio ve a **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
4. En un minuto tendrás el juego en `https://TU-USUARIO.github.io/conejo-blanco/`.

GitHub Pages usa HTTPS, así que el micrófono, la cámara y el giroscopio funcionan.

## 2. Activar el ranking y las valoraciones (opcional)

GitHub Pages solo sirve archivos: no puede guardar datos. Para el ranking y las
valoraciones se usa una **Hoja de cálculo de Google** como base de datos, que es gratis.

1. Crea una hoja nueva en [sheets.new](https://sheets.new) y ponle un nombre, por ejemplo «Ranking conejo».
2. En el menú, entra en **Extensiones → Apps Script**.
3. Borra lo que haya y pega el contenido de `servidor/Codigo.gs`. Guarda.
4. Pulsa **Implementar → Nueva implementación**.
   - Tipo: **Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier usuario**.
5. Pulsa **Implementar**, acepta los permisos y copia la **URL de la aplicación web** (termina en `/exec`).
6. Abre `comun.js` y pega esa URL al principio, en esta línea:

   ```js
   const SERVIDOR = "https://script.google.com/macros/s/XXXX/exec";
   ```

7. Sube el `comun.js` cambiado a GitHub.

A partir de ahí:

- Cada jugador escribe su nombre en la portada. Cuando llega a un nivel nuevo, se guarda en la pestaña **Progreso** de la hoja.
- Al superar cada nivel, puede puntuar la **diversión** (estrellas) y la **dificultad** (1 a 5). Se guarda en la pestaña **Votos**.
- `ranking.html` muestra quién ha llegado más lejos y `estadisticas.html` la media de cada nivel.
- Desde la hoja de cálculo puedes hacer tus propios gráficos o filtrar los datos.

Si cambias el código de `Codigo.gs`, vuelve a **Implementar → Gestionar implementaciones → Editar → Nueva versión**.

## 3. Cómo funciona

- `index.html` es la portada: pide el nombre, los permisos (una sola vez) y carga los niveles dentro.
- Cada nivel es un archivo. Cuando la respuesta es una palabra, el siguiente nivel se llama igual que la respuesta (`madriguera.html`, `eco.html`…).
- `comun.js` contiene el orden de los niveles, sus códigos, los mensajes de ánimo y el menú (☰): volver al nivel anterior, ir a un nivel con su código, cambiar de idioma y ver el ranking.
- `idiomas.js` contiene las traducciones al inglés. Para añadir otro idioma, copia el bloque `en` y tradúcelo.
- `motor.js` contiene el piano y las herramientas de los niveles musicales.
- La partida se guarda en el móvil de cada jugador: al volver, la portada ofrece «Continuar».
