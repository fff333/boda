// Utilidades compartidas por todos los niveles
const Comun = (() => {
  // Orden de los niveles (cada uno es un archivo .html) y su código para volver a él
  const NIVELES = ["arcoiris", "cronometro", "eclipse", "pleyades", "vela", "avestruz", "dormir", "cuentaatras", "betelgeuse", "globo", "puntociego", "tumbado", "hora", "brujula", "eco", "jirafa", "cementerio", "montyhall", "stroop", "cueva", "viernes13", "saturno", "silencio", "escondite", "ambulancia", "vuelta", "gigantes", "estatua", "yensid", "bocabajo", "sol", "salto", "hal", "cafe", "anagrama", "segundo", "polar", "diapason", "gallina", "kamelos", "dados", "laberinto", "bisiesto", "ventana", "maracas", "lengua", "unos", "canica", "berlin", "pitagoras", "silbido", "circulo", "pulso", "memoria", "reyes", "cuadrados", "gregoriano", "escape", "sos", "cesar", "bombillas", "afinar", "braille", "agujas", "cantar", "t9", "theremin", "shakespeare", "cumple", "mirasidi", "cajafuerte", "bravo"];
  const CODIGOS = {"arcoiris": "HWGQ", "cronometro": "496R", "eclipse": "AFHU", "pleyades": "G6A9", "vela": "WP3S", "avestruz": "YY2E", "dormir": "XFUU", "cuentaatras": "7KVB", "betelgeuse": "ZZ75", "globo": "F39H", "puntociego": "593S", "tumbado": "48BQ", "hora": "JDG5", "brujula": "8K8Q", "eco": "H78S", "jirafa": "3V83", "cementerio": "5NUT", "montyhall": "ACK7", "stroop": "9ZNS", "cueva": "9795", "viernes13": "CUW7", "saturno": "G6S6", "silencio": "M58E", "escondite": "T9ZG", "ambulancia": "N4K6", "vuelta": "AFA6", "gigantes": "FNRH", "estatua": "CTYK", "yensid": "AW9J", "bocabajo": "Q8JU", "sol": "F4LJ", "salto": "V42K", "hal": "N2AG", "cafe": "2EDY", "anagrama": "YBB8", "segundo": "WV6W", "polar": "H97L", "diapason": "KP5X", "gallina": "7QE3", "kamelos": "CNMC", "dados": "D6N8", "laberinto": "BJPJ", "bisiesto": "LM2T", "ventana": "54F2", "maracas": "VMYM", "lengua": "S794", "unos": "U7MW", "canica": "86HT", "berlin": "GPQA", "pitagoras": "F7X4", "silbido": "MBYL", "circulo": "YPHT", "pulso": "PUTJ", "memoria": "GSG5", "reyes": "LGDY", "cuadrados": "MGWT", "gregoriano": "EUWL", "escape": "SSEA", "sos": "4S4A", "cesar": "DGRB", "bombillas": "VHGY", "afinar": "W7C3", "braille": "WP75", "agujas": "HZS2", "cantar": "UYD5", "t9": "BUXU", "theremin": "HV4W", "shakespeare": "BXND", "cumple": "HLHH", "mirasidi": "CJYV", "cajafuerte": "B5JY", "bravo": "422R"};
  const ELOGIOS = {
    "arcoiris": "Bien visto.",
    "cronometro": "Impecable.",
    "eclipse": "Pocos lo sacan a la primera.",
    "pleyades": "Eso es pensar con calma.",
    "vela": "Muy fino.",
    "avestruz": "Directo al grano.",
    "dormir": "Así se hace.",
    "cuentaatras": "Mente curiosa, mente despierta.",
    "betelgeuse": "Ni un detalle se te escapa.",
    "globo": "Has mirado donde nadie mira.",
    "puntociego": "Elegante.",
    "tumbado": "Eso no lo sabe cualquiera.",
    "hora": "Bien visto.",
    "brujula": "Impecable.",
    "eco": "Pocos lo sacan a la primera.",
    "jirafa": "Eso es pensar con calma.",
    "cementerio": "Muy fino.",
    "montyhall": "Directo al grano.",
    "stroop": "Así se hace.",
    "cueva": "Mente curiosa, mente despierta.",
    "viernes13": "Ni un detalle se te escapa.",
    "saturno": "Has mirado donde nadie mira.",
    "silencio": "Elegante.",
    "escondite": "Eso no lo sabe cualquiera.",
    "ambulancia": "Bien visto.",
    "vuelta": "Impecable.",
    "gigantes": "Pocos lo sacan a la primera.",
    "estatua": "Eso es pensar con calma.",
    "yensid": "Muy fino.",
    "bocabajo": "Directo al grano.",
    "sol": "Así se hace.",
    "salto": "Mente curiosa, mente despierta.",
    "hal": "Ni un detalle se te escapa.",
    "cafe": "Has mirado donde nadie mira.",
    "anagrama": "Elegante.",
    "segundo": "Eso no lo sabe cualquiera.",
    "polar": "Bien visto.",
    "diapason": "Impecable.",
    "gallina": "Pocos lo sacan a la primera.",
    "kamelos": "Eso es pensar con calma.",
    "dados": "Muy fino.",
    "laberinto": "Directo al grano.",
    "bisiesto": "Así se hace.",
    "ventana": "Mente curiosa, mente despierta.",
    "maracas": "Ni un detalle se te escapa.",
    "lengua": "Has mirado donde nadie mira.",
    "unos": "Elegante.",
    "canica": "Eso no lo sabe cualquiera.",
    "berlin": "Bien visto.",
    "pitagoras": "Impecable.",
    "silbido": "Pocos lo sacan a la primera.",
    "circulo": "Eso es pensar con calma.",
    "pulso": "Muy fino.",
    "memoria": "Directo al grano.",
    "reyes": "Así se hace.",
    "cuadrados": "Mente curiosa, mente despierta.",
    "gregoriano": "Ni un detalle se te escapa.",
    "escape": "Has mirado donde nadie mira.",
    "sos": "Elegante.",
    "cesar": "Eso no lo sabe cualquiera.",
    "bombillas": "Bien visto.",
    "afinar": "Impecable.",
    "braille": "Pocos lo sacan a la primera.",
    "agujas": "Eso es pensar con calma.",
    "cantar": "Muy fino.",
    "t9": "Directo al grano.",
    "theremin": "Así se hace.",
    "shakespeare": "Mente curiosa, mente despierta.",
    "cumple": "Ni un detalle se te escapa.",
    "mirasidi": "Has mirado donde nadie mira.",
    "cajafuerte": "Elegante.",
    "bravo": "Eso no lo sabe cualquiera."
  };
  // Curiosidad que aparece al superar cada nivel
  const CURIOSIDADES = {
    "arcoiris": "En un arcoíris doble, el segundo tiene los colores al revés, y el cielo entre los dos es más oscuro: se llama banda de Alejandro, por Alejandro de Afrodisias, que la describió hacia el año 200.",
    "cronometro": "Al mirar un reloj de agujas, el primer segundo parece durar más que los demás. Se llama cronostasis: el cerebro «rellena» con la imagen nueva el instante en que movías los ojos.",
    "eclipse": "La Luna se aleja de la Tierra unos 3,8 cm cada año. Dentro de unos 600 millones de años parecerá demasiado pequeña para tapar el Sol entero: los eclipses totales tienen fecha de caducidad.",
    "pleyades": "«Subaru» es el nombre japonés de las Pléyades, y las seis estrellas de su logotipo son ese cúmulo. A simple vista se ven unas seis o siete; en realidad son más de mil.",
    "vela": "En gravedad cero, una vela arde con una llama redonda y azulada: sin «arriba» ni «abajo», el aire caliente no sube y la llama no se estira.",
    "avestruz": "El ojo de un avestruz mide unos 5 cm y es más grande que su cerebro. Y no, no esconde la cabeza en la arena: la agacha para darle la vuelta a sus huevos en el nido.",
    "dormir": "La luz azul de las pantallas frena la melatonina, la hormona que te avisa de que es de noche. Tus ojos tienen unas células que no sirven para ver, sino para medir esa luz.",
    "cuentaatras": "La cuenta atrás de los cohetes la inventó el cine: Fritz Lang la usó en «La mujer en la Luna» (1929) para crear tensión. Los ingenieros alemanes del programa de cohetes la adoptaron después.",
    "betelgeuse": "Entre 2019 y 2020, Betelgeuse perdió casi dos tercios de su brillo y muchos pensaron que iba a estallar. Era una nube de polvo que había expulsado ella misma. Algún día será supernova, pero puede tardar 100.000 años.",
    "globo": "El helio que llena los globos sale casi todo de los yacimientos de gas natural y es un recurso escaso: una vez liberado, escapa de la atmósfera al espacio y no vuelve.",
    "puntociego": "Cada ojo tiene un punto ciego donde el nervio óptico sale del ojo y no hay células sensibles a la luz. No lo notas porque tu cerebro rellena el hueco con lo que hay alrededor.",
    "tumbado": "En el ecuador, la superficie de la Tierra gira a unos 1.670 km/h, y alrededor del Sol vamos a unos 107.000 km/h. No lo notamos porque la velocidad es constante.",
    "hora": "España vive con la hora de Berlín desde 1940. Por su longitud le correspondería la de Londres, como a Portugal: por eso aquí se come y se cena más tarde que en casi toda Europa.",
    "brujula": "El polo norte magnético no está quieto: se desplaza unos 50 km al año hacia Siberia. Además, el campo magnético terrestre se ha invertido cientos de veces; la última, hace unos 780.000 años.",
    "eco": "Es un mito que el «cuac» de un pato no haga eco. En 2003, la Universidad de Salford lo comprobó en una cámara de reverberación: sí lo hace, pero se confunde con el propio graznido, que se apaga poco a poco.",
    "jirafa": "Las jirafas suelen dormir de pie y a ratos muy cortos, de pocos minutos, para poder huir rápido. A veces se tumban y apoyan la cabeza sobre el lomo, pero casi nunca más de unos minutos seguidos.",
    "cementerio": "«Cementerio» viene del griego koimetérion, que significa «dormitorio»: el lugar donde se duerme. Los primeros cristianos lo usaban porque creían que los muertos solo dormían hasta la resurrección.",
    "montyhall": "Es el problema de Monty Hall: si cambias de puerta, ganas 2 de cada 3 veces. Cuando Marilyn vos Savant lo explicó en 1990, miles de lectores, cientos de ellos doctores, le escribieron diciendo que se equivocaba. Tenía razón.",
    "stroop": "Es el efecto Stroop (1935): cuando la palabra y el color no coinciden, el cerebro tarda más, porque leer es automático y no puedes evitarlo. Se usa para medir la atención.",
    "cueva": "Las pinturas de Altamira se hicieron a la luz de lámparas de grasa. Con esa luz parpadeante, los bisontes parecen moverse: algunos investigadores creen que los artistas lo buscaban a propósito.",
    "viernes13": "Todo mes que empieza en domingo tiene un viernes 13, y todos los años tienen al menos uno (como mucho, tres). El miedo a ese día tiene nombre: parascevedecatriafobia.",
    "saturno": "Los anillos de Saturno no son de roca: son en más de un 95 % hielo de agua, en trozos que van del tamaño de un grano de arena al de una casa. Y se están deshaciendo: caen poco a poco sobre el planeta.",
    "silencio": "En la sala anecoica de Microsoft, una de las más silenciosas del mundo, se han medido −20 decibelios. Dentro, la gente empieza a oír su propio latido, su respiración… e incluso el roce de sus articulaciones.",
    "escondite": "Hasta los 8 meses, más o menos, un bebé cree que lo que deja de ver deja de existir. Por eso el «¿dónde está…? ¡aquí!» le resulta tan sorprendente: está aprendiendo la permanencia del objeto.",
    "ambulancia": "Los espejos no invierten izquierda y derecha: invierten delante y detrás. Por eso «AMBULANCIA» se escribe al revés en el frontal: para leerse bien en el retrovisor del coche de delante.",
    "vuelta": "Los bailarines evitan marearse con un truco: fijan la vista en un punto y giran la cabeza de golpe. Además, con años de práctica su cerebro aprende a ignorar parte de la señal del oído interno.",
    "gigantes": "Júpiter y Saturno son gigantes gaseosos y Urano y Neptuno, gigantes helados: no tienen una superficie donde posarse. Una nave que «aterrizara» se hundiría en capas de gas cada vez más densas y calientes hasta ser aplastada.",
    "estatua": "Las mariposas saborean con las patas: tienen receptores del gusto en ellas, y así saben si una hoja es buena para poner sus huevos.",
    "yensid": "En «Fantasía» (1940), el hechicero de Mickey se llama Yen Sid: Disney escrito al revés. Los animadores le pusieron además las cejas que Walt levantaba cuando algo no le gustaba.",
    "bocabajo": "La primera noche en un sitio nuevo dormimos peor por algo que se llama «efecto primera noche»: la mitad izquierda del cerebro duerme más ligera y queda vigilando, como los delfines.",
    "sol": "En un solo segundo, el Sol emite unos 3,8 × 10²⁶ julios: miles de veces más energía de la que ha consumido la humanidad en toda su historia.",
    "salto": "Una pulga salta más de 100 veces su propio tamaño. No lo consigue con músculo, sino con una proteína elástica, la resilina, que acumula energía como un muelle.",
    "hal": "HAL, el ordenador de «2001: Una odisea del espacio», está a una letra de IBM. Arthur C. Clarke juró que era casualidad: HAL viene de «Heuristically programmed ALgorithmic computer».",
    "cafe": "Harían falta unas 100 tazas de café seguidas para tomar una dosis peligrosa de cafeína. Y la cafeína tarda unas 5 horas en reducirse a la mitad en tu cuerpo.",
    "anagrama": "En 2011 se subastó un Stradivarius, el «Lady Blunt», por casi 16 millones de dólares. Se donó todo a las víctimas del terremoto de Japón.",
    "segundo": "Desde 1972 se han añadido 27 «segundos intercalares» para compensar que la Tierra gira de forma irregular: ese día, el reloj oficial marca 23:59:60. Ha tumbado webs y sistemas de reservas de aerolíneas, y en 2022 se acordó dejar de añadirlos antes de 2035.",
    "polar": "La Polar no será siempre la estrella del norte. El eje de la Tierra «cabecea» como una peonza en ciclos de 26.000 años, y hacia el año 14.000 la estrella polar será Vega.",
    "diapason": "Desde 1939 la nota «la» se afina a 440 hercios. La idea de que 432 Hz es una frecuencia «natural» o sanadora no tiene ninguna base científica.",
    "gallina": "El vuelo más largo registrado de una gallina duró 13 segundos. Las gallinas descienden de un ave de la jungla asiática, el gallo bankiva, que sí vuela distancias cortas.",
    "kamelos": "Hay una hipótesis sobre el «camello que pasa por el ojo de una aguja»: en griego, kámelos (camello) y kámilos (soga gruesa de barco) se escribían casi igual. Es una teoría discutida, pero haría la frase mucho más lógica.",
    "dados": "En Pompeya se han encontrado dados trucados con plomo. Los más antiguos conocidos tienen unos 5.000 años y aparecieron en la Ciudad Quemada, en Irán, junto a un tablero.",
    "laberinto": "El laberinto de setos más antiguo que se conserva en el Reino Unido es el de Hampton Court, plantado hacia 1690. Su truco clásico, poner siempre la mano en la misma pared, no funciona en todos los laberintos.",
    "bisiesto": "Un año es bisiesto si es múltiplo de 4, salvo los múltiplos de 100… que sí lo son si también lo son de 400. Por eso 1900 no lo fue y 2000 sí. Excel, por herencia de Lotus 1-2-3, sigue creyendo que existió el 29 de febrero de 1900.",
    "ventana": "Más de un tercio de la humanidad, y el 80 % de los norteamericanos, ya no puede ver la Vía Láctea desde su casa por la contaminación lumínica.",
    "maracas": "Las maracas tradicionales se fabrican con el fruto seco de la tapara o totumo, vaciado y relleno de semillas. Ya las usaban los pueblos taínos antes de la llegada de Colón.",
    "lengua": "No solo hay tres animales con la lengua azul: también la tienen las jirafas y los okapis (que la usan como protección solar), los perros chow chow y el eslizón de lengua azul, entre otros.",
    "unos": "111.111.111 × 111.111.111 = 12.345.678.987.654.321. Funciona con cualquier número de unos hasta nueve: el resultado sube hasta ese número y vuelve a bajar.",
    "canica": "Cuando bebes, la habitación da vueltas porque el alcohol llega al líquido del oído interno y cambia su densidad: el sensor del equilibrio cree que te estás moviendo.",
    "berlin": "Galicia está más al oeste que casi todo el Reino Unido, pero va una hora por delante. En verano, en Vigo, el sol del mediodía llega pasadas las dos de la tarde.",
    "pitagoras": "Pitágoras descubrió que las notas que suenan bien juntas salen de cuerdas con longitudes en proporciones sencillas, como 1:2 (la octava) o 2:3 (la quinta).",
    "silbido": "En La Gomera existe el silbo gomero, un lenguaje silbado que reproduce el español y se oye a varios kilómetros. Es Patrimonio Inmaterial de la UNESCO y se enseña en los colegios de la isla.",
    "circulo": "Se han calculado más de 100 billones de decimales de pi, pero la NASA solo usa 15 para navegar por el sistema solar. Con 40 decimales se calcularía el universo observable con la precisión de un átomo.",
    "pulso": "Tu corazón late unas 100.000 veces al día y más de 2.500 millones en toda una vida. Un colibrí puede superar las 1.200 pulsaciones por minuto.",
    "memoria": "En 1956, George Miller publicó que podemos retener «siete, más o menos dos» elementos a la vez. Estudios más recientes rebajan esa cifra a unos cuatro.",
    "reyes": "Según la tradición francesa, los reyes de la baraja representan a reyes históricos: picas, David; tréboles, Alejandro Magno; corazones, Carlomagno; diamantes, Julio César. Es una costumbre, no una regla.",
    "cuadrados": "En un tablero de ajedrez hay 204 cuadrados si cuentas todos los tamaños, y 1.296 rectángulos.",
    "gregoriano": "En 1582, el papa Gregorio XIII corrigió el calendario y se saltaron diez días: del jueves 4 de octubre se pasó al viernes 15. Santa Teresa de Jesús murió esa misma noche, así que la enterraron «once días después» al día siguiente.",
    "escape": "Para escapar de la gravedad terrestre sin más impulso hay que alcanzar 11,2 km/s: unos 40.000 km/h. En la Luna bastan 2,4 km/s, y en un agujero negro no basta ni la velocidad de la luz.",
    "sos": "SOS no significa «Save Our Souls»: se eligió en 1906 porque en morse (· · · − − − · · ·) es imposible de confundir. El Titanic fue uno de los primeros barcos en usarlo.",
    "cesar": "El cifrado César se sigue usando como chiste: en internet se usa ROT13 (mover 13 letras) para ocultar spoilers. Como el abecedario inglés tiene 26 letras, aplicarlo dos veces devuelve el texto original.",
    "bombillas": "El primer «bug» informático fue un bicho de verdad: en 1947, el equipo de Grace Hopper encontró una polilla atascada en un relé del Harvard Mark II y la pegó en el cuaderno de registro.",
    "afinar": "Los afinadores de piano escuchan los «batidos»: el vaivén que se oye cuando dos notas casi iguales suenan juntas. Cuanto más lento es el vaivén, más cerca están.",
    "braille": "El braille nació de la «escritura nocturna» que Charles Barbier inventó para que los soldados de Napoleón leyeran órdenes a oscuras. Louis Braille la simplificó con solo 15 años.",
    "agujas": "Las agujas de un reloj se superponen 22 veces al día, no 24: entre las 11 y la 1 solo coinciden una vez, a las 12.",
    "cantar": "Solo 1 de cada 10.000 personas tiene oído absoluto, pero entre quienes hablan lenguas tonales desde niños, como el mandarín, es muchísimo más frecuente.",
    "t9": "Los SMS tienen 160 caracteres porque, en 1985, Friedhelm Hillebrand tecleó frases y postales en su máquina de escribir y comprobó que casi todo lo importante cabía en ese espacio.",
    "theremin": "El theremín, inventado en 1920, se toca sin tocarlo: las manos alteran un campo eléctrico. Su inventor, Léon Theremin, se lo enseñó a Lenin en 1922, que llegó a tocar una pieza de Glinka.",
    "shakespeare": "Cervantes y Shakespeare no murieron el mismo día: Inglaterra aún usaba el calendario juliano. El «23 de abril» de Shakespeare fue el 3 de mayo en el calendario de Cervantes, que en realidad murió el 22 y fue enterrado el 23.",
    "cumple": "Con 23 personas hay más de un 50 % de probabilidades de que dos cumplan años el mismo día. Con 70, más del 99,9 %.",
    "mirasidi": "Esta serie, «mira y di», la estudió John Conway: cada término es aproximadamente un 30 % más largo que el anterior, según una constante que tiene su nombre.",
    "cajafuerte": "Durante años, el código para lanzar los misiles nucleares Minuteman de Estados Unidos fue, según un exoficial de lanzamiento, 00000000. Así no se perdía tiempo en caso de ataque.",
    "bravo": "La ovación más larga registrada duró 80 minutos: fue para Plácido Domingo en la Ópera de Viena en 1991, con 101 salidas a saludar."
  };
  // La historia: lo que pasa al superar cada nivel
  const HISTORIA = {};

  // Capítulos: empiezan en estos niveles
  const CAPITULOS = {};
  // Personajes que se asoman en algunas pantallas
  const APARICIONES = {};
  // Comentarios de los personajes al pedir la primera pista
  const BURLAS = {};
  // Respuestas de cada reto (guardadas como huella, no en claro)
  const RESPUESTAS = {"cuentaatras": [5859364, 2087386359], "brujula": [187763717], "eco": [2087777041], "viernes13": [985092821], "silencio": [1429953438], "ambulancia": [2214441750], "yensid": [952350759, 1126390473], "hal": [193418371], "segundo": [3820287982], "diapason": [5861000], "dados": [5859362], "unos": [746460316], "berlin": [5859367, 2085884967], "cuadrados": [5859360], "gregoriano": [5859361, 3319905752], "escape": [193359095], "sos": [193433706], "cesar": [2087589023], "bombillas": [5859203], "braille": [194663892], "agujas": [5859303], "t9": [2087952001], "shakespeare": [5859365, 2087898114], "cumple": [5859396], "mirasidi": [3861827527], "cajafuerte": [193355920]};
  const huella = s => { let x = 5381; for (const ch of s) x = (Math.imul(x, 33) ^ ch.charCodeAt(0)) >>> 0; return x; };
  const ALIAS = { en: {"burrow": "madriguera", "hole": "agujero", "echo": "eco", "clock": "reloj", "compass": "brujula", "polaris": "polar", "northstar": "polar", "silence": "silencio", "seven": "siete", "rabbit": "conejo", "bunny": "conejo", "whiterabbit": "conejo", "five": "cinco", "sun": "sol", "pear": "pera", "clover": "trebol", "moon": "luna", "future": "futuro", "tomorrow": "manana", "lighthouse": "faro", "rome": "roma", "a": "la", "green": "verde", "birthday": "cumpleanos", "happybirthday": "cumpleanos", "octave": "octava", "violin": "violin", "rome": "roma", "copper": "cuba", "eight": "octava", "love": "amor"} };

  // Si el nivel se carga dentro de index.html, los permisos ya se pidieron allí
  const marco = (() => {
    try { return (window.parent !== window && window.parent.ES_MARCO) ? window.parent : null; }
    catch (e) { return null; }
  })();
  const leer = (k, d) => { try { return localStorage.getItem(k) || d; } catch (e) { return d; } };
  const guardar = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  // Listas guardadas (niveles superados y saltados)
  const leerLista = k => { const v = leer(k, ""); if (!v) return []; try { const x = JSON.parse(v); return Array.isArray(x) ? x : []; } catch (e) { return String(v).split(",").filter(Boolean); } };
  const guardarLista = (k, l) => guardar(k, JSON.stringify(l));
  const idioma = leer("idioma", "es");
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
  // Cada nivel suena a través de su propia «salida». Al cambiar de nivel se desconecta,
  // así ningún sonido (la radio, un zumbido…) sigue sonando en el nivel siguiente.
  let salida = null;
  function prepararSalida(c) {
    if (!c || (salida && salida.context === c)) return;
    try {
      if (!c.__destinoReal) c.__destinoReal = c.destination;
      salida = c.createGain(); salida.connect(c.__destinoReal);
      Object.defineProperty(c, "destination", { value: salida, configurable: true, writable: true });
    } catch (e) { salida = null; }
  }
  addEventListener("pagehide", () => {
    if (!salida) return;
    try {
      salida.disconnect();
      const c = salida.context;
      Object.defineProperty(c, "destination", { value: c.__destinoReal, configurable: true, writable: true });
    } catch (e) {}
    salida = null;
  });
  function audio() {
    let c;
    if (marco && marco.AUDIO) c = marco.AUDIO;
    else { if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} } c = ctx; }
    if (!c) return null;
    if (c.state === "suspended") c.resume();
    prepararSalida(c);
    return c;
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
  function superado(url, saltado = false) {
    url = (NIVELES[indice + 1] || "fin") + ".html";
    if (pasando) return; pasando = true;
    if (indice >= 0) {
      const clave = saltado ? "saltados" : "superados", lista = leerLista(clave);
      if (!lista.includes(archivo)) { lista.push(archivo); guardarLista(clave, lista); }
    }
    document.querySelectorAll(".panel-pista, .panel-menu, .rendirse").forEach(p => p.classList.remove("abierto"));
    const siguiente = url.replace(/\.html$/, "");
    const nSig = NIVELES.indexOf(siguiente);
    const frase = ELOGIOS[archivo] || "";
    const codigo = nSig >= 0 ? `<span class="sup-codigo">Código del reto ${nSig + 1}: <b>${CODIGOS[siguiente]}</b></span>` : "";
    const luz = Math.round((indice + 1) / NIVELES.length * 100);
    document.body.insertAdjacentHTML("beforeend", `
      <div class="superado" role="status">
        <span class="sup-nivel">Reto ${indice + 1} ${saltado ? "saltado" : "superado"}</span>
        <span class="sup-curio">¿Sabías que…?</span>
        <p class="relato">${CURIOSIDADES[archivo] || ""}</p>
        ${saltado ? "" : `<p class="elogio">${frase}</p>`}
        <div class="luz-tilin"><span class="lt-txt">Progreso</span><div class="lt-barra"><span style="width:${luz}%"></span></div><span class="lt-num">${luz} %</span></div>
        ${codigo}
        <button class="sup-seguir">Continuar</button>
      </div>`);
    const el = document.querySelector(".superado");
    el.querySelector(".sup-seguir").addEventListener("click", () => { location.href = url; });
    // Apagar los sonidos del nivel (la radio, los zumbidos…) poco después de la melodía de victoria
    if (salida) { const c = audio(); salida.gain.setTargetAtTime(0, c.currentTime + 1.2, .25); }
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("visible")));
  }

  const CONEJO = `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M8 32 L10 24 L27 7 L33 13 L16 30 Z"/><path d="M23 11 L29 17"/></svg>`;

  // ---------- Menú: nivel anterior, código e idioma ----------
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
          <p class="mi-codigo">Código de este reto: <b>${CODIGOS[archivo] || "—"}</b></p>
          ${anterior ? `<button class="accion" data-a="atras">← Reto anterior</button>` : ""}
          <button class="accion" data-a="rendirse">🏳️ Me rindo, pasar de reto</button>
          <div class="fila-codigo">
            <input type="text" maxlength="6" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Código" aria-label="Código de nivel">
            <button class="accion corta" data-a="codigo">Ir</button>
          </div>
          <button class="accion" data-a="mapa">🗺️ Mapa</button>
          <button class="accion" data-a="portada">🏠 Portada</button>
          <button class="cerrar">Volver al juego</button>
        </div>
      </div>`);
    const boton = document.querySelector(".boton-menu"), panel = document.querySelector(".panel-menu");
    [boton, panel].forEach(el => el.addEventListener("pointerdown", e => e.stopPropagation()));
    const input = panel.querySelector("input");
    boton.addEventListener("click", e => { e.stopPropagation(); audio(); panel.classList.add("abierto"); });
    const cerrar = () => panel.classList.remove("abierto");
    panel.querySelector(".cerrar").addEventListener("click", cerrar);
    panel.addEventListener("click", e => { if (e.target === panel) cerrar(); });
    [boton, panel].forEach(el => el.addEventListener("pointerdown", e => e.stopPropagation()));
    panel.querySelectorAll(".accion").forEach(b => b.addEventListener("click", () => {
      const a = b.dataset.a;
      if (a === "atras") location.href = anterior + ".html";
      if (a === "rendirse") rendirse();
      if (a === "idioma") { guardar("idioma", idioma === "es" ? "en" : "es"); if (marco && marco.aplicarIdioma) marco.aplicarIdioma(); location.reload(); }
      if (a === "portada") (marco || window).location.href = "index.html";
      if (a === "mapa") location.href = "mapa.html?desde=" + encodeURIComponent(archivo);
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
    if (indice >= 0 && CAPITULOS[archivo]) {
      const [num, titulo] = CAPITULOS[archivo];
      document.body.insertAdjacentHTML("beforeend", `<div class="capitulo"><span class="cap-num">${num}</span><h2>${titulo}</h2></div>`);
      const cap = document.querySelector(".capitulo");
      requestAnimationFrame(() => requestAnimationFrame(() => cap.classList.add("visible")));
      const quitar = () => { cap.classList.remove("visible"); setTimeout(() => cap.remove(), 900); };
      const t = setTimeout(quitar, 1700);
      cap.addEventListener("pointerdown", e => { e.stopPropagation(); clearTimeout(t); quitar(); });
    }
    if (indice >= 0) {
      aparicion();
      if (archivo === "siete") { const n = document.querySelector(".numero"); n.innerHTML = '<s>13</s> 12½'; n.title = "La sombra ha cambiado el número"; }
      menu();
      guardar("actual", archivo);
      const max = parseInt(leer("max", "0"), 10) || 0;
      if (indice + 1 > max) guardar("max", String(indice + 1));
    }
    addEventListener("pageshow", e => { if (e.persisted) location.reload(); });
    if (casi === null) { document.body.insertAdjacentHTML("beforeend", `<div class="fundido"></div>`); return; }
    document.body.insertAdjacentHTML("beforeend", `
      <div class="respuesta">
        <button class="boton-ojo" aria-label="Escribir la respuesta">${CONEJO}</button>
        <div class="campo">
          <input type="text" autocomplete="off" autocapitalize="none" autocorrect="off"
                 spellcheck="false" placeholder="palabra" enterkeyhint="go" aria-label="Palabra">
          <button class="entrar" aria-label="Probar">→</button>
        </div>
      </div>
      <div class="fundido"></div>`);
    const r = document.querySelector(".respuesta");
    r.addEventListener("pointerdown", e => e.stopPropagation());
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
      if (indice >= 0 && (RESPUESTAS[archivo] || []).includes(huella(w))) {
        input.blur();
        tono(523.25, 0, .5, .18); tono(783.99, .12, .8, .18);
        vibrar(40); superado();
      } else {
        campo.classList.remove("error"); void campo.offsetWidth; campo.classList.add("error");
        tono(150, 0, .25, .15, "sine"); vibrar([20, 40, 20]);
        avisar("No es la respuesta");
        input.select();
      }
    }
    r.querySelector(".entrar").addEventListener("click", probar);
    input.addEventListener("keydown", e => { if (e.key === "Enter") probar(); });
  }

  // Pantalla inicial: desbloquea el audio y pide permisos con un toque
  function inicio(texto, boton, alEmpezar = async () => {}) {
    if (marco) { audio(); setTimeout(async () => { try { await alEmpezar(); } catch (e) {} }, 50); return; }
    document.body.insertAdjacentHTML("beforeend",
      `<section class="inicio"><p>${texto}</p><button>${boton}</button></section>`);
    const s = document.querySelector(".inicio");
    s.addEventListener("pointerdown", e => e.stopPropagation());
    s.querySelector("button").addEventListener("click", async () => {
      audio();
      try { await alEmpezar(); } catch (e) {}
      s.classList.add("oculto");
    }, { once: true });
  }

  // ---------- Personajes ----------
  const FIGURAS = {
    // La sombra: un espectro oscuro con orejas de conejo
    sombra: `<svg viewBox="0 0 120 150"><defs><linearGradient id="gSom" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05070E" stop-opacity=".95"/><stop offset=".75" stop-color="#0B1020" stop-opacity=".8"/><stop offset="1" stop-color="#0B1020" stop-opacity="0"/></linearGradient></defs>
      <path d="M44 8 C38 22 39 40 44 52 C30 58 24 72 24 88 C24 112 30 130 22 146 C34 140 40 148 48 140 C56 150 64 140 72 148 C80 140 88 148 98 144 C90 128 96 110 96 88 C96 72 90 58 76 52 C82 40 83 22 76 8 C70 20 68 34 66 48 C63 47 57 47 54 48 C52 34 50 20 44 8Z" fill="url(#gSom)"/>
      <path d="M47 72 Q52 68 57 72 Q52 75 47 72Z M63 72 Q68 68 73 72 Q68 75 63 72Z" fill="#E9A6B8"/><path d="M47 72 Q52 68 57 72 Q52 75 47 72Z M63 72 Q68 68 73 72 Q68 75 63 72Z" fill="#FFF" opacity=".5"/></svg>`,
    // Don Cuervo: silueta elegante con brillo azulado
    cuervo: `<svg viewBox="0 0 140 110"><defs><linearGradient id="gCue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2A3446"/><stop offset="1" stop-color="#07090D"/></linearGradient></defs>
      <path d="M14 70 C28 52 46 44 70 44 C86 44 98 38 108 30 C116 26 124 28 128 34 L138 38 L127 42 C124 52 116 58 106 62 C102 78 88 88 66 90 L52 104 L54 90 C36 88 22 82 14 70Z" fill="url(#gCue)"/>
      <path d="M40 60 C56 40 80 34 100 40 C84 46 68 56 54 70Z" fill="#3A4660" opacity=".7"/><path d="M30 72 C44 66 58 66 72 70" stroke="#4A5878" stroke-width="1.5" fill="none" opacity=".6"/>
      <circle cx="116" cy="34" r="2.6" fill="#E9C46A"/><path d="M62 90 L58 106 M72 88 L72 104" stroke="#3A3A3A" stroke-width="2.5"/></svg>`,
    // El Sombrero: chistera con cinta granate y mirada serena
    sombrero: `<svg viewBox="0 0 130 120"><defs><linearGradient id="gSom2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#14141C"/><stop offset=".45" stop-color="#2E2E3C"/><stop offset="1" stop-color="#101016"/></linearGradient></defs>
      <ellipse cx="65" cy="104" rx="60" ry="12" fill="#101016"/><path d="M30 100 L34 18 Q65 8 96 18 L100 100 Q65 110 30 100Z" fill="url(#gSom2)"/>
      <ellipse cx="65" cy="18" rx="31" ry="7" fill="#22222E"/><path d="M32 76 Q65 84 98 76 L99 90 Q65 98 31 90Z" fill="#6E1E2B"/><path d="M32 76 Q65 84 98 76" stroke="#9A3344" stroke-width="1.2" fill="none"/>
      <path d="M50 52 Q56 48 62 52 M68 52 Q74 48 80 52" stroke="#E9DCC0" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="56" cy="55" r="2.2" fill="#E9DCC0"/><circle cx="74" cy="55" r="2.2" fill="#E9DCC0"/></svg>`,
    // La Abuela Tortuga: caparazón con relieve y gafas redondas
    tortuga: `<svg viewBox="0 0 150 100"><defs><radialGradient id="gTor" cx=".4" cy=".3"><stop offset="0" stop-color="#8FA86A"/><stop offset="1" stop-color="#4A5E36"/></radialGradient></defs>
      <path d="M20 66 C22 34 48 18 76 18 C104 18 124 36 124 66 Z" fill="url(#gTor)"/>
      <g fill="none" stroke="#33422A" stroke-width="2"><path d="M58 30 L72 24 L86 30 L86 46 L72 52 L58 46Z"/><path d="M58 46 L44 54 L40 66 M86 46 L100 54 L106 66 M72 52 L72 66 M58 30 L42 36 M86 30 L102 36"/></g>
      <path d="M16 66 L128 66 Q124 74 112 74 L32 74 Q20 74 16 66Z" fill="#B9A77E"/>
      <path d="M122 60 C130 48 146 50 146 62 C146 72 136 76 126 72Z" fill="#9AAF7C"/><circle cx="136" cy="59" r="5" fill="none" stroke="#3A3A3A" stroke-width="1.5"/><circle cx="136" cy="59" r="1.6" fill="#1A1A1A"/>
      <path d="M30 74 L26 90 L40 90 L42 74 M98 74 L100 90 L114 90 L110 74" fill="#9AAF7C"/></svg>`,
    // Tilín: un destello de cuatro puntas con un brillo suave
    tilin: `<svg viewBox="0 0 100 100"><defs><radialGradient id="gTil"><stop offset="0" stop-color="#FFF8DC"/><stop offset=".5" stop-color="#FFD54F" stop-opacity=".55"/><stop offset="1" stop-color="#FFD54F" stop-opacity="0"/></radialGradient></defs>
      <circle cx="50" cy="50" r="46" fill="url(#gTil)"/><path d="M50 8 C53 38 62 47 92 50 C62 53 53 62 50 92 C47 62 38 53 8 50 C38 47 47 38 50 8Z" fill="#FFE9A0"/>
      <circle cx="44" cy="50" r="2.4" fill="#5A4410"/><circle cx="56" cy="50" r="2.4" fill="#5A4410"/></svg>`
  };

  function vozPersonaje(quien) {
    if (quien === "sombra") [660, 784, 880].forEach((f, i) => tono(f, i * .09, .12, .06, "sine"));
    if (quien === "cuervo") { const c = audio(); if (!c) return; const t = c.currentTime, o = c.createOscillator(), g = c.createGain(); o.type = "sawtooth"; o.frequency.setValueAtTime(700, t); o.frequency.exponentialRampToValueAtTime(300, t + .25);
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.08, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + .3); o.connect(g).connect(c.destination); o.start(t); o.stop(t + .35); }
    if (quien === "sombrero") [196, 247].forEach((f, i) => tono(f, i * .18, .2, .08, "triangle"));
    if (quien === "tortuga") [147, 131].forEach((f, i) => tono(f, i * .4, .45, .08, "sine"));
    if (quien === "tilin") [1568, 2093, 1568].forEach((f, i) => tono(f, i * .12, .3, .05, "sine"));
  }
  function aparicion() {
    const a = APARICIONES[archivo]; if (!a) return;
    const [quien, texto] = a, lado = Math.random() < .5 ? "izq" : "der";
    const mostrar = () => {
      if (document.querySelector(".superado")) return;
      if (document.querySelector(".inicio:not(.oculto)") || document.querySelector(".capitulo") || document.querySelector(".panel-pista.abierto, .panel-menu.abierto")) { setTimeout(mostrar, 1500); return; }
      document.body.insertAdjacentHTML("beforeend", `<div class="aparicion ${lado}"><span class="bocadillo-ap">${texto}</span><div class="figura">${FIGURAS[quien]}</div></div>`);
      const el = document.body.lastElementChild;
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("dentro")));
      vozPersonaje(quien);
      setTimeout(() => { el.classList.remove("dentro"); setTimeout(() => el.remove(), 900); }, 3200);
    };
    setTimeout(mostrar, 2500 + Math.random() * 2500);
  }

  // La sombra traviesa aparece en un punto de la pantalla (x, y en píxeles) con un bocadillo
  function sombra(x, y, texto = "", ms = 2600, ancho = 80) {
    const medio = Math.max(ancho, texto ? 160 : 0) / 2 + 8;
    x = Math.min(Math.max(x, medio), innerWidth - medio);
    y = Math.max(y, ancho * 1.1 + (texto ? 70 : 10));
    document.body.insertAdjacentHTML("beforeend", `<div class="sombra-trav" style="left:${x}px;top:${y}px;width:${ancho}px">${texto ? `<span class="bocadillo-ap">${texto}</span>` : ""}<div class="figura">${FIGURAS.sombra}</div></div>`);
    const el = document.body.lastElementChild;
    vozPersonaje("sombra");
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("dentro")));
    if (ms) setTimeout(() => { el.classList.remove("dentro"); setTimeout(() => el.remove(), 500); }, ms);
    return el;
  }

  // Rendirse: pasa al siguiente nivel después de confirmarlo
  function rendirse() {
    if (indice < 0) return;
    let r = document.querySelector(".rendirse");
    if (!r) {
      document.body.insertAdjacentHTML("beforeend", `
        <div class="panel-pista rendirse" role="dialog" aria-modal="true">
          <div class="tarjeta">
            <span class="contador">Me rindo</span>
            <p class="texto-pista">¿Seguro? Pasarás al siguiente reto sin resolver este. Siempre podrás volver a él desde el mapa.</p>
            <div class="acciones">
              <button class="otra si">Sí, pasar de reto</button>
              <button class="cerrar no">Seguir intentándolo</button>
            </div>
          </div>
        </div>`);
      r = document.querySelector(".rendirse");
      r.addEventListener("pointerdown", e => e.stopPropagation());
      r.querySelector(".no").addEventListener("click", () => r.classList.remove("abierto"));
      r.querySelector(".si").addEventListener("click", () => {
        r.classList.remove("abierto");
        superado((NIVELES[indice + 1] || "fin") + ".html", true);
      });
    }
    document.querySelectorAll(".panel-pista, .panel-menu").forEach(p => p.classList.remove("abierto"));
    r.classList.add("abierto");
  }

  // Botón de pistas: se revelan de una en una, de la más sutil a la más clara
  function pistas(lista, alMostrar) {
    let vistas = 0;
    document.body.insertAdjacentHTML("beforeend", `
      <button class="boton-pista" aria-label="Pedir una pista">?</button>
      <div class="panel-pista" role="dialog" aria-modal="true" aria-label="Pista">
        <div class="tarjeta">
          <p class="burla" hidden></p>
          <span class="contador"></span>
          <p class="texto-pista"></p>
          <div class="acciones">
            <button class="otra">Otra pista</button>
            <button class="cerrar">Seguir pensando</button>
            <button class="me-rindo">🏳️ Me rindo</button>
          </div>
        </div>
      </div>`);
    const boton = document.querySelector(".boton-pista");
    const panel = document.querySelector(".panel-pista");
    const texto = panel.querySelector(".texto-pista"), contador = panel.querySelector(".contador");
    const otra = panel.querySelector(".otra");
    panel.querySelector(".me-rindo").addEventListener("click", e => { e.stopPropagation(); rendirse(); });
    function mostrar() {
      contador.textContent = `Pista ${vistas} de ${lista.length}`;
      const p = lista[vistas - 1];
      texto.textContent = typeof p === "function" ? p() : p;
      if (alMostrar) alMostrar(vistas);
      otra.style.display = vistas < lista.length ? "" : "none";
      panel.querySelector(".me-rindo").style.display = vistas < lista.length ? "none" : "";
    }
    boton.addEventListener("click", e => {
      e.stopPropagation(); audio();
      if (vistas === 0) { vistas = 1; const b = panel.querySelector(".burla"); if (BURLAS[archivo]) { b.textContent = BURLAS[archivo]; b.hidden = false; } }
      else panel.querySelector(".burla").hidden = true;
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

  // Dirección de la gravedad en coordenadas de pantalla (x a la derecha, y hacia abajo, z hacia fuera de la pantalla).
  // iPhone y Android dan los valores con signos contrarios: aquí se igualan.
  const esIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  function gravedad(e) {
    const a = e.accelerationIncludingGravity; if (!a || a.x == null) return null;
    const k = esIOS ? -1 : 1, x = -k * a.x, y = k * a.y, z = k * a.z;
    return { x, y, z, m: Math.hypot(x, y, z) };
  }
  // Analizador de frecuencias del micrófono (para silbidos y notas cantadas)
  async function pedirAnalizador() {
    if (marco) return marco.ANALIZADOR || null;
    try {
      const flujo = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
      const c = audio(), an = c.createAnalyser(); an.fftSize = 2048;
      c.createMediaStreamSource(flujo).connect(an); return an;
    } catch (e) { return null; }
  }
  // Frecuencia de la nota que se canta o silba (o null si no hay una nota clara)
  function frecuencia(an) {
    const n = an.fftSize, buf = new Float32Array(n); an.getFloatTimeDomainData(buf);
    let rms = 0; for (let i = 0; i < n; i++) rms += buf[i] * buf[i]; rms = Math.sqrt(rms / n);
    if (rms < .015) return null;
    const sr = an.context.sampleRate, min = Math.floor(sr / 1500), max = Math.floor(sr / 70);
    let mejor = -1, valor = 0;
    for (let lag = min; lag <= max; lag++) {
      let s = 0; for (let i = 0; i < n - lag; i++) s += buf[i] * buf[i + lag];
      if (s > valor) { valor = s; mejor = lag; }
    }
    let e = 0; for (let i = 0; i < n; i++) e += buf[i] * buf[i];
    if (mejor < 0 || valor / e < .5) return null;
    return sr / mejor;
  }

  return { sombra, audio, tono, vibrar, normalizar, ir, avisar, nivel, inicio, superado, pistas, t, idioma, gravedad, pedirAnalizador, frecuencia,
           NIVELES, CODIGOS, irACodigo, leer, guardar, leerLista,
           pedirOrientacion, pedirMovimiento, pedirMicro };
})();
