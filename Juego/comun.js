// Utilidades compartidas por todos los niveles
const Comun = (() => {
  // Si el nivel se carga dentro de index.html, los permisos ya se pidieron allí
  const marco = (() => {
    try { return (window.parent !== window && window.parent.ES_MARCO) ? window.parent : null; }
    catch (e) { return null; }
  })();
  let ctx = null;
  function audio() {
    if (marco && marco.AUDIO) {
      if (marco.AUDIO.state === "suspended") marco.AUDIO.resume();
      return marco.AUDIO;
    }
    if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
    if (ctx && ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function tono(freq, cuando = 0, dur = .25, vol = .2, tipo = "triangle") {
    const c = audio(); if (!c) return;
    const t = c.currentTime + cuando;
    const o = c.createOscillator(), g = c.createGain();
    o.type = tipo; o.frequency.value = freq;
    g.gain.setValueAtTime(.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + .015);
    g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(g).connect(c.destination);
    o.start(t); o.stop(t + dur + .05);
  }
  const vibrar = p => { if (navigator.vibrate) navigator.vibrate(p); };
  const normalizar = s => s.toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

  function ir(url, espera = 650) {
    document.querySelector(".fundido")?.classList.add("activo");
    setTimeout(() => { location.href = url; }, espera);
  }
  async function existe(ruta) {
    if (location.protocol === "file:") return true;
    try { const r = await fetch(ruta, { method: "HEAD", cache: "no-store" }); return r.ok; }
    catch (e) { return false; }
  }

  let avisoT;
  function avisar(texto, ms = 2800) {
    const a = document.querySelector(".aviso"); if (!a) return;
    a.textContent = texto; a.classList.add("visible");
    clearTimeout(avisoT);
    avisoT = setTimeout(() => a.classList.remove("visible"), ms);
  }

  const ELOGIOS = [
    "Has seguido sin dudar. Buena señal.",
    "Viste en la oscuridad lo que otros no ven.",
    "Pocos ordenan la luz a la primera.",
    "Has cruzado al otro lado. No todos se atreven.",
    "Rápido de reflejos. Y de mente.",
    "Lo has encontrado antes que la mayoría.",
    "Has escuchado lo que otros no oyen.",
    "Paciencia y buen oído. Lo tienes.",
    "Ya piensas como el conejo. Sigue así.",
    "Muchos se pierden aquí. Tú no.",
    "Constancia. Es lo que separa a los que terminan.",
    "Pocos saben callar a tiempo.",
    "Lo difícil ya pasó. Ahora, a disfrutar.",
    "Ni una se te escapa.",
    "El cielo brilla un poco más gracias a ti.",
    "Has despejado el día.",
    "Dos manos, una idea. Bien pensado.",
    "Has entendido lo que dicen los pitidos.",
    "Hasta la luna te lo agradece.",
    "Sabes mirar al cielo. Eso no lo hace cualquiera.",
    "Directo, sin rodeos. Así se hace.",
    "Buen pulso. El pez ya no tiene hambre.",
    "Has despertado algo más que un gato.",
    "Cosecha perfecta.",
    "Todas las puertas se te abren.",
    "Ya hay luz en casa. Y en tu cabeza también.",
    "Dulces sueños, conejito. Bien hecho.",
    "Buen ojo para los colores.",
    "Llegas justo a tiempo. El conejo no tanto.",
    "Cambiar el punto de vista lo cambia todo.",
    "Sabes escuchar. Se nota.",
    "La suerte está de tu parte… y el talento también.",
    "Te has ganado su confianza.",
    "Memoria de elefante. Y de las buenas.",
    "Tienes oído y cultura. Una mezcla rara.",
    "La paciencia también es una forma de inteligencia.",
    "El futuro se aclara cuando lo miras de frente.",
    "Mirar por un agujero y ver tanto. Bien hecho.",
    "Has descifrado lo que un emperador quiso ocultar.",
    "Pocos cuentan la luz. Tú la has entendido.",
    "Pulso firme, mente clara.",
    "Ninguna pared te detiene.",
    "Has visto lo que casi nadie mira."
  ];
  const romano = r => { const v = {I:1,V:5,X:10,L:50}; let n = 0;
    for (let i = 0; i < r.length; i++) { const a = v[r[i]], b = v[r[i+1]] || 0; n += a < b ? -a : a; } return n; };

  // Mensaje sutil de nivel superado y paso al siguiente
  let pasando = false;
  function superado(url, numero) {
    if (pasando) return; pasando = true;
    const n = romano(numero || "I");
    const frase = ELOGIOS[(n - 1) % ELOGIOS.length];
    document.body.insertAdjacentHTML("beforeend", `
      <div class="superado" role="status">
        <span class="sup-nivel">Nivel ${numero} superado</span>
        <p>${frase}</p>
      </div>`);
    const el = document.querySelector(".superado");
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("visible")));
    const irYa = () => { location.href = url; };
    const t = setTimeout(irYa, 3600);
    setTimeout(() => el.addEventListener("pointerdown", () => { clearTimeout(t); irYa(); }), 1200);
  }

  const OJO = `<svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
    <ellipse cx="14" cy="10" rx="4" ry="10"/><ellipse cx="26" cy="10" rx="4" ry="10"/>
    <circle cx="20" cy="26" r="11"/></svg>`;

  // Monta el número de nivel y la barra donde se escribe la palabra.
  // La palabra correcta es el nombre del siguiente archivo: palabra.html
  function nivel(numero, casi = {}) {
    if (casi === null) {
      document.body.insertAdjacentHTML("beforeend",
        `<div class="numero">${numero}</div><p class="aviso" aria-live="polite"></p><div class="fundido"></div>`);
      addEventListener("pageshow", e => { if (e.persisted) location.reload(); });
      return;
    }
    document.body.insertAdjacentHTML("beforeend", `
      <div class="numero">${numero}</div>
      <p class="aviso" aria-live="polite"></p>
      <div class="respuesta">
        <button class="boton-ojo" aria-label="Escribir la palabra">${OJO}</button>
        <div class="campo">
          <input type="text" autocomplete="off" autocapitalize="none" autocorrect="off"
                 spellcheck="false" placeholder="palabra" enterkeyhint="go" aria-label="Palabra">
          <button class="entrar" aria-label="Probar">→</button>
        </div>
      </div>
      <div class="fundido"></div>`);
    const r = document.querySelector(".respuesta");
    const input = r.querySelector("input"), campo = r.querySelector(".campo");
    r.querySelector(".boton-ojo").addEventListener("click", () => {
      audio(); r.classList.add("abierta"); input.focus();
    });
    input.addEventListener("blur", () => setTimeout(() => {
      if (!input.value && document.activeElement !== input) r.classList.remove("abierta");
    }, 200));
    async function probar() {
      const w = normalizar(input.value);
      if (!w) { r.classList.remove("abierta"); return; }
      if (casi[w]) { avisar(casi[w]); tono(330, 0, .3, .12, "sine"); return; }
      if (await existe(w + ".html")) {
        input.blur();
        tono(523.25, 0, .5, .18); tono(783.99, .12, .8, .18);
        vibrar(40); superado(w + ".html", numero);
      } else {
        campo.classList.remove("error"); void campo.offsetWidth; campo.classList.add("error");
        tono(150, 0, .25, .15, "sine"); vibrar([20, 40, 20]);
        avisar("Esa palabra no abre nada");
        input.select();
      }
    }
    r.querySelector(".entrar").addEventListener("click", probar);
    input.addEventListener("keydown", e => { if (e.key === "Enter") probar(); });
    addEventListener("pageshow", e => { if (e.persisted) location.reload(); });
  }

  // Pantalla inicial: desbloquea el audio y pide permisos con un toque
  function inicio(texto, boton, alEmpezar = async () => {}) {
    document.body.insertAdjacentHTML("beforeend",
      `<section class="inicio"><p>${texto}</p><button>${boton}</button></section>`);
    const s = document.querySelector(".inicio");
    s.querySelector("button").addEventListener("click", async () => {
      audio();
      try { await alEmpezar(); } catch (e) {}
      s.classList.add("oculto");
    }, { once: true });
  }

  async function pedirOrientacion() {
    if (marco) return marco.MOVIMIENTO_OK;
    try {
      if (typeof DeviceOrientationEvent !== "undefined" &&
          typeof DeviceOrientationEvent.requestPermission === "function")
        return (await DeviceOrientationEvent.requestPermission()) === "granted";
      return "DeviceOrientationEvent" in window;
    } catch (e) { return false; }
  }
  async function pedirMovimiento() {
    if (marco) return marco.MOVIMIENTO_OK;
    try {
      if (typeof DeviceMotionEvent !== "undefined" &&
          typeof DeviceMotionEvent.requestPermission === "function")
        return (await DeviceMotionEvent.requestPermission()) === "granted";
      return "DeviceMotionEvent" in window;
    } catch (e) { return false; }
  }
  // Devuelve una función que mide el volumen (0 a ~1), o null si no hay micrófono
  async function pedirMicro() {
    if (marco) return marco.MICRO;
    try {
      const flujo = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
      });
      const c = audio();
      const an = c.createAnalyser(); an.fftSize = 1024;
      c.createMediaStreamSource(flujo).connect(an);
      const buf = new Float32Array(an.fftSize);
      return () => {
        an.getFloatTimeDomainData(buf);
        let s = 0; for (let i = 0; i < buf.length; i++) s += buf[i] * buf[i];
        return Math.sqrt(s / buf.length);
      };
    } catch (e) { return null; }
  }

  // Botón de pistas: se revelan de una en una, de la más sutil a la más clara
  function pistas(lista, alMostrar) {
    let vistas = 0;
    document.body.insertAdjacentHTML("beforeend", `
      <button class="boton-pista" aria-label="Pedir una pista">?</button>
      <div class="panel-pista" role="dialog" aria-modal="true" aria-label="Pista">
        <div class="tarjeta">
          <span class="contador"></span>
          <p class="texto-pista"></p>
          <div class="acciones">
            <button class="otra">Otra pista</button>
            <button class="cerrar">Seguir pensando</button>
          </div>
        </div>
      </div>`);
    const boton = document.querySelector(".boton-pista");
    const panel = document.querySelector(".panel-pista");
    const texto = panel.querySelector(".texto-pista"), contador = panel.querySelector(".contador");
    const otra = panel.querySelector(".otra");
    function mostrar() {
      contador.textContent = `Pista ${vistas} de ${lista.length}`;
      const p = lista[vistas - 1];
      texto.textContent = typeof p === "function" ? p() : p;
      if (alMostrar) alMostrar(vistas);
      otra.style.display = vistas < lista.length ? "" : "none";
    }
    boton.addEventListener("click", e => {
      e.stopPropagation(); audio();
      if (vistas === 0) vistas = 1;
      mostrar(); panel.classList.add("abierto");
      tono(880, 0, .15, .06, "sine");
    });
    otra.addEventListener("click", e => {
      e.stopPropagation();
      if (vistas < lista.length) { vistas++; mostrar(); tono(990, 0, .15, .06, "sine"); }
    });
    const cerrar = e => { e.stopPropagation(); panel.classList.remove("abierto"); };
    panel.querySelector(".cerrar").addEventListener("click", cerrar);
    panel.addEventListener("click", e => { if (e.target === panel) cerrar(e); });
    // que tocar el panel no active la mecánica del nivel que hay debajo
    [boton, panel].forEach(el => el.addEventListener("pointerdown", e => e.stopPropagation()));
  }

  return { audio, tono, vibrar, normalizar, ir, avisar, nivel, inicio, superado, pistas,
           pedirOrientacion, pedirMovimiento, pedirMicro };
})();
