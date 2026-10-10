// ============================================================
//  CONFIGURACIÓN DEL RANKING Y LAS VALORACIONES
//  Pega aquí la URL de tu Google Apps Script (mira LEEME.md).
//  Si se deja vacía, el juego funciona igual pero sin ranking.
// ============================================================
const SERVIDOR = "";

// Utilidades compartidas por todos los niveles
const Comun = (() => {
  // Orden de los niveles (cada uno es un archivo .html) y su código para volver a él
  const NIVELES = ["arbol", "vela", "globo", "arcoiris", "espejo", "madriguera", "oscuridad", "eco", "reloj", "brujula", "polar", "silencio", "siete", "conejo", "fases", "pez", "gato", "pera", "llave", "dormir", "zanahoria", "tarde", "tumbado", "susurro", "trebol", "escondite", "sonido", "luna", "semaforo", "piano", "cafe", "manana", "agujero", "32", "faro", "pi", "laberinto", "eclipse", "melodia", "beethoven", "6", "42", "1969", "bach", "13", "roma", "radio", "mozart", "14", "la", "cuba", "10", "taxi", "pulso", "dado", "16", "prisma", "verde", "312211", "cumpleanos", "23", "647", "oido", "relojero", "75", "violin", "octava", "bravo"];
  const CODIGOS = {"arbol": "GPYH", "vela": "9G9F", "globo": "JXP8", "arcoiris": "KVUG", "espejo": "LXT9", "madriguera": "6U23", "oscuridad": "YTKC", "eco": "4KAG", "reloj": "8PEQ", "brujula": "XEEP", "polar": "JQPF", "silencio": "7HTQ", "siete": "A88E", "conejo": "AFFB", "fases": "7ZC3", "pez": "QJXS", "gato": "ZCHY", "pera": "RKYQ", "llave": "B8EZ", "dormir": "GFWN", "zanahoria": "RHLM", "tarde": "EHR7", "tumbado": "5TFZ", "susurro": "VCX7", "trebol": "HHX4", "escondite": "HQX8", "sonido": "9YFH", "luna": "6MEN", "semaforo": "JLU4", "piano": "CTV2", "cafe": "4TEH", "manana": "G9QQ", "agujero": "J62F", "32": "GMJS", "faro": "DEQ3", "pi": "ABAV", "laberinto": "QWUS", "eclipse": "69K3", "melodia": "54T2", "beethoven": "RN9V", "6": "DZAG", "42": "3WN7", "1969": "PHSA", "bach": "LM5F", "13": "TF9V", "roma": "CQKJ", "radio": "8WV7", "mozart": "GCSH", "14": "848B", "la": "3DJJ", "cuba": "LDH7", "10": "LUZ7", "taxi": "3QUR", "pulso": "FAB4", "dado": "W9N7", "16": "4GL3", "prisma": "JF5A", "verde": "VTDG", "312211": "6TA7", "cumpleanos": "HXLU", "23": "5D4N", "647": "PVFW", "oido": "Q5JX", "relojero": "BRPG", "75": "PQVB", "violin": "4X5A", "octava": "LTE9", "bravo": "96RF"};
  const ELOGIOS = {
    "arbol": "Has seguido sin dudar. Buena señal.",
    "vela": "Viste en la oscuridad lo que otros no ven.",
    "globo": "¡Pum! A la primera.",
    "arcoiris": "Pocos ordenan la luz a la primera.",
    "espejo": "Has cruzado al otro lado. No todos se atreven.",
    "madriguera": "Rápido de reflejos. Y de mente.",
    "oscuridad": "Lo has encontrado antes que la mayoría.",
    "eco": "Has escuchado lo que otros no oyen.",
    "reloj": "Ya piensas como el conejo. Sigue así.",
    "brujula": "Muchos se pierden aquí. Tú no.",
    "polar": "Constancia. Es lo que separa a los que terminan.",
    "silencio": "Pocos saben callar a tiempo.",
    "siete": "Lo difícil ya pasó. Ahora, a disfrutar.",
    "conejo": "Dos manos, una idea. Bien pensado.",
    "fases": "Sabes mirar al cielo. Eso no lo hace cualquiera.",
    "pez": "Buen pulso. El pez ya no tiene hambre.",
    "gato": "Has despertado algo más que un gato.",
    "pera": "Cosecha perfecta.",
    "llave": "Todas las puertas se te abren.",
    "dormir": "Dulces sueños, conejito. Bien hecho.",
    "zanahoria": "Buen ojo para los colores.",
    "tarde": "Llegas justo a tiempo. El conejo no tanto.",
    "tumbado": "Cambiar el punto de vista lo cambia todo.",
    "susurro": "Sabes escuchar. Se nota.",
    "trebol": "La suerte está de tu parte… y el talento también.",
    "escondite": "Te has ganado su confianza.",
    "sonido": "Has entendido lo que dicen los pitidos.",
    "luna": "Hasta la luna te lo agradece.",
    "semaforo": "Memoria de elefante. Y de las buenas.",
    "piano": "Tienes oído y cultura. Una mezcla rara.",
    "cafe": "La paciencia también es una forma de inteligencia.",
    "manana": "El futuro se aclara cuando lo miras de frente.",
    "agujero": "Mirar por un agujero y ver tanto. Bien hecho.",
    "32": "Has descifrado lo que un emperador quiso ocultar.",
    "faro": "Pocos cuentan la luz. Tú la has entendido.",
    "pi": "Pulso firme, mente clara.",
    "laberinto": "Ninguna pared te detiene.",
    "eclipse": "Has visto lo que casi nadie mira.",
    "melodia": "Has reconocido un himno. Eso es cultura.",
    "beethoven": "Equilibrio perfecto. Como tu cabeza.",
    "6": "Encendido, apagado… y resuelto.",
    "42": "Has leído lo que estaba escrito en la luna.",
    "1969": "Ni siquiera el nombre de un compositor se te escapa.",
    "bach": "Contar conejos nunca fue tan elegante.",
    "13": "Del revés también lo ves claro.",
    "roma": "Lees con los dedos y con la cabeza.",
    "radio": "Has sintonizado con un genio.",
    "mozart": "Ves más cuadrados de los que parece.",
    "14": "Oído de director de orquesta.",
    "la": "Química y geografía en la misma mente.",
    "cuba": "Has contado cada segundo.",
    "10": "Hablas el idioma de los teléfonos antiguos.",
    "taxi": "Precisión de relojero.",
    "pulso": "Llevas el ritmo dentro.",
    "dado": "Ves hasta lo que está escondido.",
    "16": "Tienes buen ojo para la luz.",
    "prisma": "La escala de colores no tiene secretos para ti.",
    "verde": "Has descubierto un patrón que casi nadie ve.",
    "312211": "Escuchas al derecho y al revés.",
    "cumpleanos": "Las cuentas claras y la tarta entera.",
    "23": "Abres cajas fuertes con la mente.",
    "647": "Tu oído no necesita colores.",
    "oido": "Afinado como una campana.",
    "relojero": "Hasta los ángulos se te dan bien.",
    "75": "Has puesto cada letra en su sitio.",
    "violin": "Entiendes cómo suena el mundo.",
    "octava": "Lo has recordado todo. Impresionante.",
    "bravo": "Te mereces el aplauso más largo."
  };
  // Curiosidad que aparece al superar cada nivel
  const CURIOSIDADES = {
    "arbol": "El Conejo Blanco aparece en «Alicia en el país de las maravillas», que Lewis Carroll publicó en 1865.",
    "vela": "La llama de una vela alcanza unos 1.400 °C en su parte más caliente.",
    "globo": "Michael Faraday fabricó los primeros globos de goma en 1824 para sus experimentos con hidrógeno.",
    "arcoiris": "Un arcoíris es en realidad un círculo completo: desde el suelo solo vemos la mitad, pero desde un avión se puede ver entero.",
    "espejo": "Las madrigueras de los conejos forman redes de túneles que pueden tener decenas de entradas.",
    "madriguera": "Un conejo puede correr a más de 50 km/h y huye en zigzag para despistar a quien lo persigue.",
    "oscuridad": "Los ojos de un conejo están a los lados de la cabeza: puede ver casi 360° sin girarse.",
    "eco": "Para oír un eco claro, la pared tiene que estar al menos a unos 17 metros: el sonido tarda una décima de segundo en ir y volver.",
    "reloj": "El reloj de pulsera se popularizó durante la Primera Guerra Mundial porque en las trincheras era más práctico que el de bolsillo.",
    "brujula": "Las primeras brújulas se usaron en China hace unos 2.000 años, y al principio servían para la adivinación, no para navegar.",
    "polar": "La escarcha se forma cuando el vapor de agua del aire se congela directamente sobre una superficie fría, sin llegar a ser líquido.",
    "silencio": "Los conejos pueden dormir con los ojos abiertos para estar alerta ante los depredadores.",
    "siete": "Isaac Newton dividió el arcoíris en siete colores para que coincidieran con las siete notas de la escala musical.",
    "conejo": "El Sol es unas 400 veces más grande que la Luna, pero también está unas 400 veces más lejos: por eso parecen del mismo tamaño en un eclipse.",
    "fases": "En Asia se dice que las manchas de la luna dibujan un conejo machacando algo en un mortero.",
    "pez": "Los peces de colores tienen mejor memoria de lo que se cree: pueden recordar cosas durante meses.",
    "gato": "Los gatos duermen entre 12 y 16 horas al día.",
    "pera": "La pera es pariente de la manzana: las dos pertenecen a la familia de las rosas.",
    "llave": "Las cerraduras más antiguas que se conocen eran de madera y tienen unos 4.000 años.",
    "dormir": "Los conejos son crepusculares: están más activos al amanecer y al atardecer.",
    "zanahoria": "Las primeras zanahorias que se cultivaron no eran naranjas, sino moradas o amarillas.",
    "tarde": "El Conejo Blanco de Alicia siempre llega tarde y lleva un reloj de bolsillo en el chaleco.",
    "tumbado": "Cuando un conejo está muy contento, a veces salta en el aire retorciéndose; en inglés se llama «binky».",
    "susurro": "Las orejas de un conejo pueden girar por separado para localizar de dónde viene un sonido.",
    "trebol": "Se calcula que solo uno de cada 5.000 tréboles tiene cuatro hojas.",
    "escondite": "Los conejos golpean el suelo con las patas traseras para avisar a los demás de un peligro.",
    "sonido": "El primer mensaje en morse por una línea de telégrafo se envió en 1844, entre Washington y Baltimore.",
    "luna": "La Luna se aleja de la Tierra unos 3,8 centímetros cada año.",
    "semaforo": "El primer semáforo se instaló en Londres en 1868 y funcionaba con gas.",
    "piano": "Los nombres do, re, mi… vienen de las primeras sílabas de un himno medieval en latín.",
    "cafe": "Según la leyenda, el café se descubrió cuando un pastor de Etiopía vio a sus cabras muy animadas tras comer sus frutos.",
    "manana": "Intentar ver el futuro en una bola de cristal se llama cristalomancia, y ya se practicaba en la Edad Media.",
    "agujero": "Las mirillas usan una lente de ojo de pez que permite ver hasta unos 180° desde dentro.",
    "32": "Julio César usaba este cifrado, con un desplazamiento de tres letras, en sus mensajes militares.",
    "faro": "El Faro de Alejandría, una de las siete maravillas del mundo antiguo, medía más de 100 metros.",
    "pi": "Se han calculado más de 100 billones de cifras de pi, y nunca se repiten de forma periódica.",
    "laberinto": "Según el mito, Dédalo construyó el laberinto de Creta para encerrar al Minotauro.",
    "eclipse": "Un eclipse total de Sol nunca dura más de unos 7 minutos y medio en un mismo lugar.",
    "melodia": "Beethoven compuso la Novena Sinfonía cuando ya estaba prácticamente sordo.",
    "beethoven": "La balanza es uno de los instrumentos de medida más antiguos: ya se usaba en Egipto hace más de 4.000 años.",
    "6": "En la «Guía del autoestopista galáctico», un superordenador tarda millones de años en calcular que la respuesta a todo es 42.",
    "42": "Las huellas de los astronautas siguen en la Luna, porque allí no hay viento ni lluvia que las borre.",
    "1969": "Bach usó las notas B-A-C-H en «El arte de la fuga», y muchos compositores le han rendido homenaje con esas cuatro notas.",
    "bach": "Fibonacci planteó este problema de los conejos en 1202, en su libro «Liber Abaci».",
    "13": "Una palabra que al revés forma otra distinta, como «amor» y «Roma», se llama anacíclica.",
    "roma": "Louis Braille inventó su sistema de lectura cuando tenía solo 15 años.",
    "radio": "Mozart compuso sus primeras piezas cuando tenía unos cinco años.",
    "mozart": "En un tablero de ajedrez de 8×8 hay 204 cuadrados en total.",
    "14": "Los 440 hercios del «la» se acordaron como estándar internacional en 1939.",
    "la": "El cobre es uno de los primeros metales que usó el ser humano, hace más de 10.000 años.",
    "cuba": "Las cuentas atrás de los cohetes se inspiraron en una película alemana de 1929, «La mujer en la luna».",
    "10": "El primer SMS de la historia se envió en 1992 y decía «Merry Christmas».",
    "taxi": "En los Juegos Olímpicos, las carreras se cronometran hasta la milésima de segundo.",
    "pulso": "El corazón de un conejo late entre 130 y 325 veces por minuto.",
    "dado": "En un dado, las caras opuestas siempre suman 7: el 1 está frente al 6, el 2 frente al 5 y el 3 frente al 4.",
    "16": "Isaac Newton fue el primero en demostrar con un prisma que la luz blanca está formada por todos los colores.",
    "prisma": "Algunas personas con sinestesia ven colores al escuchar música.",
    "verde": "Esta serie se llama «mira y di», y el matemático John Conway estudió cómo crece.",
    "312211": "La melodía del «Cumpleaños feliz» procede de una canción infantil de 1893 llamada «Good Morning to All».",
    "cumpleanos": "Con 70 personas en una sala, la probabilidad de que dos cumplan años el mismo día supera el 99,9 %.",
    "23": "Las cerraduras de combinación se popularizaron en las cajas fuertes durante el siglo XIX.",
    "647": "Se calcula que solo 1 de cada 10.000 personas tiene oído absoluto: reconoce una nota sin ninguna referencia.",
    "oido": "Cuando dos notas casi iguales suenan juntas se oye un vaivén llamado «batido»; los afinadores lo usan para afinar.",
    "relojero": "Las agujas de un reloj se superponen 22 veces al día.",
    "75": "La palabra «violín» viene del italiano «violino», que significa «viola pequeña».",
    "violin": "Cada vez que subes una octava, la frecuencia de la nota se duplica.",
    "octava": "Un piano de cola tiene 88 teclas, que cubren algo más de siete octavas.",
    "bravo": "«Bravo» viene del italiano: en la ópera se dice «brava» a una cantante y «bravi» a un grupo."
  };
  const ALIAS = { en: {"burrow": "madriguera", "hole": "agujero", "echo": "eco", "clock": "reloj", "compass": "brujula", "polaris": "polar", "northstar": "polar", "silence": "silencio", "seven": "siete", "rabbit": "conejo", "bunny": "conejo", "whiterabbit": "conejo", "five": "cinco", "sun": "sol", "pear": "pera", "clover": "trebol", "moon": "luna", "future": "futuro", "tomorrow": "manana", "lighthouse": "faro", "rome": "roma", "a": "la", "green": "verde", "birthday": "cumpleanos", "happybirthday": "cumpleanos", "octave": "octava", "violin": "violin", "rome": "roma", "copper": "cuba", "eight": "octava", "love": "amor"} };

  // Si el nivel se carga dentro de index.html, los permisos ya se pidieron allí
  const marco = (() => {
    try { return (window.parent !== window && window.parent.ES_MARCO) ? window.parent : null; }
    catch (e) { return null; }
  })();
  const leer = (k, d) => { try { return localStorage.getItem(k) || d; } catch (e) { return d; } };
  const guardar = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const idioma = leer("idioma", "es");
  // Identidad del jugador (se guarda en su móvil)
  let jugador = leer("jugador", "");
  if (!jugador) { jugador = Math.random().toString(36).slice(2, 10) + Date.now().toString(36); guardar("jugador", jugador); }
  const nombre = () => leer("nombre", "Anónimo");
  function enviar(datos) {
    if (!SERVIDOR) return;
    try {
      fetch(SERVIDOR, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(Object.assign({ id: jugador, nombre: nombre() }, datos)) }).catch(() => {});
    } catch (e) {}
  }
  const archivo = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "");
  const indice = NIVELES.indexOf(archivo);

  // ---------- Traducción ----------
  const DIC = (idioma !== "es" && window.TRADUCCION && window.TRADUCCION[idioma]) || null;
  function t(s) {
    if (!DIC || s == null) return s;
    const k = String(s).replace(/\s+/g, " ").trim();
    if (!k) return s;
    if (Object.prototype.hasOwnProperty.call(DIC.textos, k)) return DIC.textos[k];
    for (const [re, rep] of DIC.patrones) { if (re.test(String(s))) return String(s).replace(re, rep); if (re.test(k)) return k.replace(re, rep); }
    return s;
  }
  function traducir(n) {
    if (n.nodeType === 3) {
      const v = n.nodeValue; if (!v.trim()) return;
      const tr = t(v); if (tr !== v) n.nodeValue = tr;
    } else if (n.nodeType === 1 && n.tagName !== "SCRIPT" && n.tagName !== "STYLE") {
      if (n.placeholder) n.placeholder = t(n.placeholder);
      n.childNodes.forEach(traducir);
    }
  }
  if (DIC && document.body) {
    document.documentElement.lang = idioma;
    traducir(document.body);
    new MutationObserver(ms => ms.forEach(m => {
      if (m.type === "characterData") traducir(m.target);
      else m.addedNodes.forEach(traducir);
    })).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  // ---------- Sonido y vibración ----------
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
    const t0 = c.currentTime + cuando;
    const o = c.createOscillator(), g = c.createGain();
    o.type = tipo; o.frequency.value = freq;
    g.gain.setValueAtTime(.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + .015);
    g.gain.exponentialRampToValueAtTime(.0001, t0 + dur);
    o.connect(g).connect(c.destination);
    o.start(t0); o.stop(t0 + dur + .05);
  }
  const vibrar = p => { if (navigator.vibrate) navigator.vibrate(p); };
  const normalizar = s => s.toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

  function ir(url, espera = 650) {
    document.querySelector(".fundido")?.classList.add("activo");
    setTimeout(() => { location.href = url; }, espera);
  }
  async function existe(ruta) {
    if (location.protocol === "file:") return NIVELES.includes(ruta.replace(/\.html$/, "")) || ruta === "fin.html";
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

  // ---------- Nivel superado ----------
  let pasando = false;
  function superado(url) {
    if (pasando) return; pasando = true;
    const siguiente = url.replace(/\.html$/, "");
    const nSig = NIVELES.indexOf(siguiente);
    const frase = ELOGIOS[archivo] || "";
    const codigo = nSig >= 0 ? `<span class="sup-codigo">Código del nivel ${nSig + 1}: <b>${CODIGOS[siguiente]}</b></span>` : "";
    const fila = (k, simbolo) => `<div class="v-fila" data-k="${k}">${[1, 2, 3, 4, 5].map(n => `<button data-v="${n}" aria-label="${n}">${simbolo === "n" ? n : simbolo}</button>`).join("")}</div>`;
    document.body.insertAdjacentHTML("beforeend", `
      <div class="superado" role="status">
        <span class="sup-nivel">Nivel ${indice + 1} superado</span>
        <p>${frase}</p>
        ${CURIOSIDADES[archivo] ? `<div class="curiosidad"><span class="cur-titulo">¿Sabías que…?</span><p class="cur-texto">${CURIOSIDADES[archivo]}</p></div>` : ""}
        ${codigo}
        <div class="valorar">
          <span class="v-titulo">¿Te ha divertido?</span>
          ${fila("diversion", "★")}
          <span class="v-titulo">¿Cómo de difícil te ha parecido?</span>
          ${fila("dificultad", "n")}
        </div>
        <button class="sup-seguir">Continuar</button>
      </div>`);
    const el = document.querySelector(".superado");
    const voto = {};
    el.querySelectorAll(".v-fila").forEach(f => f.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
      const v = +b.dataset.v; voto[f.dataset.k] = v;
      f.querySelectorAll("button").forEach(x => x.classList.toggle("on", +x.dataset.v <= v));
      tono(500 + v * 80, 0, .1, .08, "sine");
    })));
    el.querySelector(".sup-seguir").addEventListener("click", () => {
      if (voto.diversion || voto.dificultad) enviar({ tipo: "voto", nivel: indice + 1, diversion: voto.diversion || "", dificultad: voto.dificultad || "" });
      location.href = url;
    });
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("visible")));
  }

  const CONEJO = `<svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
    <ellipse cx="14" cy="10" rx="4" ry="10"/><ellipse cx="26" cy="10" rx="4" ry="10"/>
    <circle cx="20" cy="26" r="11"/></svg>`;

  // ---------- Menú: nivel anterior, código, idioma, ranking ----------
  function irACodigo(texto) {
    const c = texto.toUpperCase().replace(/[^A-Z0-9]/g, "");
    const n = Object.keys(CODIGOS).find(k => CODIGOS[k] === c);
    return n || null;
  }
  function menu() {
    const anterior = indice > 0 ? NIVELES[indice - 1] : null;
    const otro = idioma === "es" ? "English" : "Español";
    document.body.insertAdjacentHTML("beforeend", `
      <button class="boton-menu" aria-label="Menú">☰</button>
      <div class="panel-menu" role="dialog" aria-modal="true" aria-label="Menú">
        <div class="tarjeta">
          <span class="contador">Nivel ${indice + 1}</span>
          <p class="mi-codigo">Código de este nivel: <b>${CODIGOS[archivo] || "—"}</b></p>
          ${anterior ? `<button class="accion" data-a="atras">← Nivel anterior</button>` : ""}
          <div class="fila-codigo">
            <input type="text" maxlength="6" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Código" aria-label="Código de nivel">
            <button class="accion corta" data-a="codigo">Ir</button>
          </div>
          <button class="accion" data-a="idioma">🌐 ${otro}</button>
          ${SERVIDOR ? `<button class="accion" data-a="ranking">🏆 Ranking</button>` : ""}
          <button class="accion" data-a="portada">🏠 Portada</button>
          <button class="cerrar">Volver al juego</button>
        </div>
      </div>`);
    const boton = document.querySelector(".boton-menu"), panel = document.querySelector(".panel-menu");
    const input = panel.querySelector("input");
    boton.addEventListener("click", e => { e.stopPropagation(); audio(); panel.classList.add("abierto"); });
    const cerrar = () => panel.classList.remove("abierto");
    panel.querySelector(".cerrar").addEventListener("click", cerrar);
    panel.addEventListener("click", e => { if (e.target === panel) cerrar(); });
    [boton, panel].forEach(el => el.addEventListener("pointerdown", e => e.stopPropagation()));
    panel.querySelectorAll(".accion").forEach(b => b.addEventListener("click", () => {
      const a = b.dataset.a;
      if (a === "atras") location.href = anterior + ".html";
      if (a === "idioma") { guardar("idioma", idioma === "es" ? "en" : "es"); if (marco && marco.aplicarIdioma) marco.aplicarIdioma(); location.reload(); }
      if (a === "ranking") (marco || window).location.href = "ranking.html";
      if (a === "portada") (marco || window).location.href = "index.html";
      if (a === "codigo") {
        const n = irACodigo(input.value);
        if (n) location.href = n + ".html";
        else { input.value = ""; input.placeholder = t("Código no válido"); tono(150, 0, .25, .12, "sine"); }
      }
    }));
    input.addEventListener("keydown", e => { if (e.key === "Enter") panel.querySelector('[data-a="codigo"]').click(); });
  }

  // Monta el número de nivel, el menú y la barra donde se escribe la palabra.
  // La palabra correcta es el nombre del siguiente archivo: palabra.html
  function nivel(_numero, casi = {}) {
    document.body.insertAdjacentHTML("beforeend",
      `<div class="numero">${indice >= 0 ? indice + 1 : ""}</div><p class="aviso" aria-live="polite"></p>`);
    if (indice >= 0) {
      menu();
      guardar("actual", archivo);
      const max = parseInt(leer("max", "0"), 10) || 0;
      if (indice + 1 > max) { guardar("max", String(indice + 1)); enviar({ tipo: "progreso", nivel: indice + 1 }); }
    }
    addEventListener("pageshow", e => { if (e.persisted) location.reload(); });
    if (casi === null) { document.body.insertAdjacentHTML("beforeend", `<div class="fundido"></div>`); return; }
    document.body.insertAdjacentHTML("beforeend", `
      <div class="respuesta">
        <button class="boton-ojo" aria-label="Escribir la palabra">${CONEJO}</button>
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
      let w = normalizar(input.value);
      if (!w) { r.classList.remove("abierta"); return; }
      if (ALIAS[idioma] && ALIAS[idioma][w]) w = ALIAS[idioma][w];
      if (casi[w]) { avisar(casi[w]); tono(330, 0, .3, .12, "sine"); return; }
      const siguiente = indice >= 0 ? (NIVELES[indice + 1] || "fin") : null;
      if (w === siguiente && await existe(w + ".html")) {
        input.blur();
        tono(523.25, 0, .5, .18); tono(783.99, .12, .8, .18);
        vibrar(40); superado(w + ".html");
      } else {
        campo.classList.remove("error"); void campo.offsetWidth; campo.classList.add("error");
        tono(150, 0, .25, .15, "sine"); vibrar([20, 40, 20]);
        avisar("Esa palabra no abre nada");
        input.select();
      }
    }
    r.querySelector(".entrar").addEventListener("click", probar);
    input.addEventListener("keydown", e => { if (e.key === "Enter") probar(); });
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
    [boton, panel].forEach(el => el.addEventListener("pointerdown", e => e.stopPropagation()));
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

  return { audio, tono, vibrar, normalizar, ir, avisar, nivel, inicio, superado, pistas, t, idioma,
           NIVELES, CODIGOS, irACodigo, leer, guardar, enviar, nombre, jugador, servidor: SERVIDOR,
           pedirOrientacion, pedirMovimiento, pedirMicro };
})();
