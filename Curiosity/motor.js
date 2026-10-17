// Herramientas musicales para los niveles de música
const Motor = (() => {
  const ES = ["do", "do♯", "re", "mi♭", "mi", "fa", "fa♯", "sol", "la♭", "la", "si♭", "si"];
  const EN = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"];
  const DE = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B", "H"];
  const NEGRAS = [1, 3, 6, 8, 10];
  const freq = m => 440 * Math.pow(2, (m - 69) / 12);
  const nombre = (m, tipo) => tipo === "en" ? EN[m % 12] : tipo === "de" ? DE[m % 12] : tipo === "es" ? ES[m % 12] : "";

  // Una nota con sonido parecido a un piano suave
  function nota(m, cuando = 0, dur = 1, vol = .22) {
    const c = Comun.audio(); if (!c) return;
    const t = c.currentTime + cuando, f = freq(m);
    [[1, "triangle", vol], [2, "sine", vol * .25], [3, "sine", vol * .08]].forEach(([k, tipo, v]) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = tipo; o.frequency.value = f * k;
      g.gain.setValueAtTime(.0001, t);
      g.gain.exponentialRampToValueAtTime(v, t + .012);
      g.gain.exponentialRampToValueAtTime(.0001, t + dur);
      o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + .05);
    });
  }
  function acorde(ms, cuando = 0, dur = 1.6) { ms.forEach(m => nota(m, cuando, dur, .16)); }

  // Melodía: lista de números MIDI, o {n: MIDI | [acorde] | null, d: pulsos}
  function melodia(lista, { pulso = .42, alNota } = {}) {
    return new Promise(res => {
      let t = 0;
      lista.forEach(it => {
        const n = typeof it === "number" ? it : it.n, d = typeof it === "number" ? 1 : (it.d || 1);
        if (n !== null && n !== undefined) {
          if (Array.isArray(n)) acorde(n, t, d * pulso + .4); else nota(n, t, d * pulso + .35);
          if (alNota) setTimeout(() => alNota(n, d * pulso * 1000), t * 1000);
        }
        t += d * pulso;
      });
      setTimeout(res, t * 1000 + 150);
    });
  }

  // Teclado de piano. Devuelve { iluminar(m, ms), teclas }
  function piano(cont, { desde = 60, hasta = 72, negras = true, etiquetas = "es", colores = null, alTocar } = {}) {
    cont.classList.add("piano");
    const blancas = [];
    for (let m = desde; m <= hasta; m++) if (!NEGRAS.includes(m % 12)) blancas.push(m);
    const ancho = 100 / blancas.length, teclas = {};
    function tecla(m, clase, izq, w) {
      const b = document.createElement("button");
      b.className = clase; b.style.left = izq + "%"; b.style.width = w + "%";
      if (colores && colores[m]) b.style.background = colores[m];
      b.innerHTML = `<span>${nombre(m, etiquetas)}</span>`;
      b.setAttribute("aria-label", nombre(m, "es") || "tecla");
      b.addEventListener("pointerdown", e => {
        e.preventDefault(); nota(m, 0, 1.1); Comun.vibrar(6); iluminar(m, 220);
        if (alTocar) alTocar(m);
      });
      cont.appendChild(b); teclas[m] = b;
    }
    blancas.forEach((m, i) => tecla(m, "tecla-b", i * ancho, ancho));
    if (negras) for (let m = desde; m <= hasta; m++) if (NEGRAS.includes(m % 12)) {
      const i = blancas.indexOf(m - 1); if (i >= 0) tecla(m, "tecla-n", (i + 1) * ancho - ancho * .3, ancho * .6);
    }
    function iluminar(m, ms = 300) {
      const b = teclas[m]; if (!b) return;
      b.classList.add("activa"); setTimeout(() => b.classList.remove("activa"), ms);
    }
    return { iluminar, teclas };
  }

  // Comprueba si las últimas notas tocadas coinciden con una secuencia
  function vigilar(objetivo, alAcertar) {
    let hist = [];
    return m => {
      hist.push(m); hist = hist.slice(-objetivo.length);
      if (hist.length === objetivo.length && hist.every((x, i) => x === objetivo[i])) { hist = []; alAcertar(); }
    };
  }

  function exito(alTerminar, espera = 1200) {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => Comun.tono(f, i * .12, .9, .12, "sine"));
    Comun.vibrar([30, 50, 30]);
    setTimeout(alTerminar, espera);
  }

  return { freq, nombre, nota, acorde, melodia, piano, vigilar, exito, ES, EN };
})();
