// Plantillas de los retos de Curiosity: serie, elegir y varias respuestas
const Plantilla = (() => {
  const zona = () => document.getElementById("reto");
  const exito = () => { [523.25, 659.25, 783.99].forEach((f, i) => Comun.tono(f, i * .12, .8, .12, "sine")); Comun.vibrar([30, 50, 30]); setTimeout(() => Comun.superado(), 900); };
  const fallo = (el, msg) => { if (el) { el.classList.remove("mal"); void el.offsetWidth; el.classList.add("mal"); } Comun.tono(160, 0, .25, .12, "sine"); Comun.vibrar([20, 40, 20]); if (msg) Comun.avisar(msg); };

  // Una serie o enunciado; la respuesta se escribe con el botón de respuesta
  function serie({ texto = "", lineas = [] }) {
    zona().innerHTML = `${texto ? `<p class="enunciado">${texto}</p>` : ""}<div class="serie">${lineas.map(l => `<div>${l}</div>`).join("")}</div>`;
  }

  // Una pregunta con varias opciones y una correcta
  function elegir({ pregunta, opciones, ok }) {
    zona().innerHTML = `<p class="enunciado">${pregunta}</p><div class="opciones"></div>`;
    const cont = zona().querySelector(".opciones"); let hecho = false;
    opciones.forEach((o, i) => {
      const b = document.createElement("button"); b.className = "opcion"; b.textContent = o;
      b.addEventListener("click", () => {
        if (hecho || b.disabled) return;
        if (i === ok) { hecho = true; b.classList.add("bien"); exito(); }
        else { b.disabled = true; fallo(b, "No es esa"); }
      });
      cont.appendChild(b);
    });
  }

  // Elegir todas las correctas
  function multi({ pregunta, opciones, oks }) {
    zona().innerHTML = `<p class="enunciado">${pregunta}</p><div class="opciones rejilla"></div><button class="comprobar">Comprobar</button>`;
    const cont = zona().querySelector(".opciones"), marcadas = new Set(); let hecho = false;
    opciones.forEach((o, i) => {
      const b = document.createElement("button"); b.className = "opcion"; b.textContent = o;
      b.addEventListener("click", () => { if (hecho) return; marcadas.has(i) ? marcadas.delete(i) : marcadas.add(i); b.classList.toggle("marcada"); Comun.tono(500, 0, .05, .06, "sine"); });
      cont.appendChild(b);
    });
    zona().querySelector(".comprobar").addEventListener("click", e => {
      if (hecho) return;
      const bien = oks.length === marcadas.size && oks.every(i => marcadas.has(i));
      if (bien) { hecho = true; exito(); } else fallo(e.currentTarget, "Todavía no es correcto");
    });
  }

  return { serie, elegir, multi, exito, fallo };
})();
