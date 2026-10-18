// Utilidades compartidas por todos los niveles
const Comun = (() => {
  // Orden de los niveles (cada uno es un archivo .html) y su código para volver a él
  const NIVELES = ["arcoiris", "cronometro", "stroop", "cremallera", "globo", "eclipse", "calendario", "ambulancia", "escape", "estatua", "segundo", "laberinto", "maracas", "silbido", "circulo", "pulso", "gregoriano", "t9", "braille", "cajafuerte", "cuentaatras", "pleyades", "vela", "dormir", "vaso", "betelgeuse", "arena", "tumbado", "diente", "planetas", "liebre", "jeroglificos", "anubis", "pez", "pera", "llave", "zanahoria", "trebol", "hora", "brujula", "eco", "jirafa", "cementerio", "montyhall", "vuelta", "iman", "saturno", "silencio", "escondite", "bocabajo", "astronauta", "gigantes", "yensid", "cafe", "fasesluna", "salto", "hal", "giro", "telescopio", "australia", "sirio", "escarabajo", "mosaico", "copas", "estrellita", "semana", "carbono", "polar", "diapason", "gallina", "dados", "toctoc", "ventana", "lengua", "unos", "canica", "pesoluna", "berlin", "pitagoras", "piramide", "memoria", "eureka", "cuadrados", "ariadna", "acueducto", "romano", "director", "deoido", "balanzas", "alreves", "elementos", "prismaluz", "papel", "frutas", "tabla", "sos", "cesar", "bombillas", "sintonia", "agujas", "himno", "huellas", "theremin", "fibonacci", "notacolor", "cumplealreves", "mirilla", "shakespeare", "cumple", "firma", "mirasidi", "faro", "bravo"];
  const CODIGOS = {"arcoiris": "HWGQ", "cronometro": "496R", "stroop": "AFHU", "cremallera": "G6A9", "globo": "WP3S", "eclipse": "YY2E", "calendario": "XFUU", "ambulancia": "7KVB", "escape": "ZZ75", "estatua": "F39H", "segundo": "593S", "laberinto": "48BQ", "maracas": "JDG5", "silbido": "8K8Q", "circulo": "H78S", "pulso": "3V83", "gregoriano": "5NUT", "t9": "ACK7", "braille": "9ZNS", "cajafuerte": "9795", "cuentaatras": "CUW7", "pleyades": "G6S6", "vela": "M58E", "dormir": "T9ZG", "vaso": "N4K6", "betelgeuse": "AFA6", "arena": "FNRH", "tumbado": "CTYK", "diente": "AW9J", "planetas": "Q8JU", "liebre": "F4LJ", "jeroglificos": "V42K", "anubis": "N2AG", "pez": "2EDY", "pera": "YBB8", "llave": "WV6W", "zanahoria": "H97L", "trebol": "KP5X", "hora": "7QE3", "brujula": "CNMC", "eco": "D6N8", "jirafa": "BJPJ", "cementerio": "LM2T", "montyhall": "54F2", "vuelta": "VMYM", "iman": "S794", "saturno": "U7MW", "silencio": "86HT", "escondite": "GPQA", "bocabajo": "F7X4", "astronauta": "MBYL", "gigantes": "YPHT", "yensid": "PUTJ", "cafe": "GSG5", "fasesluna": "LGDY", "salto": "MGWT", "hal": "EUWL", "giro": "SSEA", "telescopio": "4S4A", "australia": "DGRB", "sirio": "VHGY", "escarabajo": "W7C3", "mosaico": "WP75", "copas": "HZS2", "estrellita": "UYD5", "semana": "BUXU", "carbono": "HV4W", "polar": "BXND", "diapason": "HLHH", "gallina": "CJYV", "dados": "B5JY", "toctoc": "422R", "ventana": "4QJM", "lengua": "B3SK", "unos": "QBBT", "canica": "84SW", "pesoluna": "JFMC", "berlin": "SXWD", "pitagoras": "AR8D", "piramide": "QK3Z", "memoria": "QTXN", "eureka": "ZY77", "cuadrados": "8VNL", "ariadna": "4K9A", "acueducto": "Y4CM", "romano": "FVZS", "director": "JGBP", "deoido": "VC32", "balanzas": "LGFK", "alreves": "2XSV", "elementos": "CNLU", "prismaluz": "UUYJ", "papel": "2NA8", "frutas": "5YLB", "tabla": "MWKL", "sos": "BHAZ", "cesar": "EZVP", "bombillas": "KRJG", "sintonia": "W9GE", "agujas": "2SVH", "himno": "Y89H", "huellas": "RY7Y", "theremin": "FEF9", "fibonacci": "VSQL", "notacolor": "W5XW", "cumplealreves": "93WM", "mirilla": "N7QY", "shakespeare": "Y42P", "cumple": "K6J5", "firma": "TXHW", "mirasidi": "T6SK", "faro": "TQXK", "bravo": "HTU7"};
  const ELOGIOS = {
    "arcoiris": "Bien visto.",
    "cronometro": "Impecable.",
    "stroop": "Pocos lo sacan a la primera.",
    "cremallera": "Eso es pensar con calma.",
    "globo": "Muy fino.",
    "eclipse": "Directo al grano.",
    "calendario": "Así se hace.",
    "ambulancia": "Mente curiosa, mente despierta.",
    "escape": "Ni un detalle se te escapa.",
    "estatua": "Has mirado donde nadie mira.",
    "segundo": "Elegante.",
    "laberinto": "Eso no lo sabe cualquiera.",
    "maracas": "Bien visto.",
    "silbido": "Impecable.",
    "circulo": "Pocos lo sacan a la primera.",
    "pulso": "Eso es pensar con calma.",
    "gregoriano": "Muy fino.",
    "t9": "Directo al grano.",
    "braille": "Así se hace.",
    "cajafuerte": "Mente curiosa, mente despierta.",
    "cuentaatras": "Ni un detalle se te escapa.",
    "pleyades": "Has mirado donde nadie mira.",
    "vela": "Elegante.",
    "dormir": "Eso no lo sabe cualquiera.",
    "vaso": "Bien visto.",
    "betelgeuse": "Impecable.",
    "arena": "Pocos lo sacan a la primera.",
    "tumbado": "Eso es pensar con calma.",
    "diente": "Muy fino.",
    "planetas": "Directo al grano.",
    "liebre": "Así se hace.",
    "jeroglificos": "Mente curiosa, mente despierta.",
    "anubis": "Ni un detalle se te escapa.",
    "pez": "Has mirado donde nadie mira.",
    "pera": "Elegante.",
    "llave": "Eso no lo sabe cualquiera.",
    "zanahoria": "Bien visto.",
    "trebol": "Impecable.",
    "hora": "Pocos lo sacan a la primera.",
    "brujula": "Eso es pensar con calma.",
    "eco": "Muy fino.",
    "jirafa": "Directo al grano.",
    "cementerio": "Así se hace.",
    "montyhall": "Mente curiosa, mente despierta.",
    "vuelta": "Ni un detalle se te escapa.",
    "iman": "Has mirado donde nadie mira.",
    "saturno": "Elegante.",
    "silencio": "Eso no lo sabe cualquiera.",
    "escondite": "Bien visto.",
    "bocabajo": "Impecable.",
    "astronauta": "Pocos lo sacan a la primera.",
    "gigantes": "Eso es pensar con calma.",
    "yensid": "Muy fino.",
    "cafe": "Directo al grano.",
    "fasesluna": "Así se hace.",
    "salto": "Mente curiosa, mente despierta.",
    "hal": "Ni un detalle se te escapa.",
    "giro": "Has mirado donde nadie mira.",
    "telescopio": "Elegante.",
    "australia": "Eso no lo sabe cualquiera.",
    "sirio": "Bien visto.",
    "escarabajo": "Impecable.",
    "mosaico": "Pocos lo sacan a la primera.",
    "copas": "Eso es pensar con calma.",
    "estrellita": "Muy fino.",
    "semana": "Directo al grano.",
    "carbono": "Así se hace.",
    "polar": "Mente curiosa, mente despierta.",
    "diapason": "Ni un detalle se te escapa.",
    "gallina": "Has mirado donde nadie mira.",
    "dados": "Elegante.",
    "toctoc": "Eso no lo sabe cualquiera.",
    "ventana": "Bien visto.",
    "lengua": "Impecable.",
    "unos": "Pocos lo sacan a la primera.",
    "canica": "Eso es pensar con calma.",
    "pesoluna": "Muy fino.",
    "berlin": "Directo al grano.",
    "pitagoras": "Así se hace.",
    "piramide": "Mente curiosa, mente despierta.",
    "memoria": "Ni un detalle se te escapa.",
    "eureka": "Has mirado donde nadie mira.",
    "cuadrados": "Elegante.",
    "ariadna": "Eso no lo sabe cualquiera.",
    "acueducto": "Bien visto.",
    "romano": "Impecable.",
    "director": "Pocos lo sacan a la primera.",
    "deoido": "Eso es pensar con calma.",
    "balanzas": "Muy fino.",
    "alreves": "Directo al grano.",
    "elementos": "Así se hace.",
    "prismaluz": "Mente curiosa, mente despierta.",
    "papel": "Ni un detalle se te escapa.",
    "frutas": "Has mirado donde nadie mira.",
    "tabla": "Elegante.",
    "sos": "Eso no lo sabe cualquiera.",
    "cesar": "Bien visto.",
    "bombillas": "Impecable.",
    "sintonia": "Pocos lo sacan a la primera.",
    "agujas": "Eso es pensar con calma.",
    "himno": "Muy fino.",
    "huellas": "Directo al grano.",
    "theremin": "Así se hace.",
    "fibonacci": "Mente curiosa, mente despierta.",
    "notacolor": "Ni un detalle se te escapa.",
    "cumplealreves": "Has mirado donde nadie mira.",
    "mirilla": "Elegante.",
    "shakespeare": "Eso no lo sabe cualquiera.",
    "cumple": "Bien visto.",
    "firma": "Impecable.",
    "mirasidi": "Pocos lo sacan a la primera.",
    "faro": "Eso es pensar con calma.",
    "bravo": "Muy fino."
  };
  // Curiosidad que aparece al superar cada nivel
  const CURIOSIDADES = {
    "arcoiris": "En un arcoíris doble, el segundo tiene los colores al revés, y el cielo entre los dos es más oscuro: se llama banda de Alejandro, por Alejandro de Afrodisias, que la describió hacia el año 200.",
    "cronometro": "Al mirar un reloj de agujas, el primer segundo parece durar más que los demás. Se llama cronostasis: el cerebro «rellena» con la imagen nueva el instante en que movías los ojos.",
    "stroop": "Es el efecto Stroop (1935): cuando la palabra y el color no coinciden, el cerebro tarda más, porque leer es automático y no puedes evitarlo. Se usa para medir la atención.",
    "cremallera": "YKK son las siglas de Yoshida Kōgyō Kabushiki-gaisha, la empresa japonesa que Tadao Yoshida fundó en 1934. Fabrica miles de millones de cremalleras al año: se calcula que cerca de la mitad de las que hay en el mundo.",
    "globo": "El helio que llena los globos sale casi todo de los yacimientos de gas natural y es un recurso escaso: una vez liberado, escapa de la atmósfera al espacio y no vuelve.",
    "eclipse": "La Luna se aleja de la Tierra unos 3,8 cm cada año. Dentro de unos 600 millones de años parecerá demasiado pequeña para tapar el Sol entero: los eclipses totales tienen fecha de caducidad.",
    "calendario": "Septiembre, octubre, noviembre y diciembre significan «séptimo», «octavo», «noveno» y «décimo»: en el primer calendario romano, el año empezaba en marzo. Julio y agosto llevan los nombres de Julio César y del emperador Augusto.",
    "ambulancia": "Los espejos no invierten izquierda y derecha: invierten delante y detrás. Por eso «AMBULANCIA» se escribe al revés en el frontal: para leerse bien en el retrovisor del coche de delante.",
    "escape": "Para escapar de la gravedad terrestre sin más impulso hay que alcanzar 11,2 km/s: unos 40.000 km/h. En la Luna bastan 2,4 km/s, y en un agujero negro no basta ni la velocidad de la luz.",
    "estatua": "Las mariposas saborean con las patas: tienen receptores del gusto en ellas, y así saben si una hoja es buena para poner sus huevos.",
    "segundo": "Desde 1972 se han añadido 27 «segundos intercalares» para compensar que la Tierra gira de forma irregular: ese día, el reloj oficial marca 23:59:60. Ha tumbado webs y sistemas de reservas de aerolíneas, y en 2022 se acordó dejar de añadirlos antes de 2035.",
    "laberinto": "Si alguna vez te pierdes en un laberinto de setos, el truco clásico es apoyar una mano en la pared y caminar sin despegarla nunca, aunque des rodeos: tarde o temprano llegarás a la salida. Funciona en casi todos; solo falla en los que tienen «islas», paredes sueltas que no tocan el borde, diseñadas precisamente para burlar este truco.",
    "maracas": "Las maracas tradicionales se fabrican con el fruto seco de la tapara o totumo, vaciado y relleno de semillas. Ya las usaban los pueblos taínos antes de la llegada de Colón.",
    "silbido": "En La Gomera existe el silbo gomero, un lenguaje silbado que reproduce el español y se oye a varios kilómetros. Es Patrimonio Inmaterial de la UNESCO y se enseña en los colegios de la isla.",
    "circulo": "Se han calculado más de 100 billones de decimales de pi, pero la NASA solo usa 15 para navegar por el sistema solar. Con 40 decimales se calcularía el universo observable con la precisión de un átomo.",
    "pulso": "Tu corazón late unas 100.000 veces al día y más de 2.500 millones en toda una vida. Un colibrí puede superar las 1.200 pulsaciones por minuto.",
    "gregoriano": "En 1582, el papa Gregorio XIII corrigió el calendario y se saltaron diez días: del jueves 4 de octubre se pasó al viernes 15. Santa Teresa de Jesús murió esa misma noche, así que la enterraron «once días después» al día siguiente.",
    "t9": "Los SMS tienen 160 caracteres porque, en 1985, Friedhelm Hillebrand tecleó frases y postales en su máquina de escribir y comprobó que casi todo lo importante cabía en ese espacio.",
    "braille": "El braille nació de la «escritura nocturna» que Charles Barbier inventó para que los soldados de Napoleón leyeran órdenes a oscuras. Louis Braille la simplificó con solo 15 años.",
    "cajafuerte": "Durante años, el código para lanzar los misiles nucleares Minuteman de Estados Unidos fue, según un exoficial de lanzamiento, 00000000. Así no se perdía tiempo en caso de ataque.",
    "cuentaatras": "La cuenta atrás de los cohetes la inventó el cine: Fritz Lang la usó en «La mujer en la Luna» (1929) para crear tensión. Los ingenieros alemanes del programa de cohetes la adoptaron después.",
    "pleyades": "«Subaru» es el nombre japonés de las Pléyades, y las seis estrellas de su logotipo son ese cúmulo. A simple vista se ven unas seis o siete; en realidad son más de mil.",
    "vela": "En gravedad cero, una vela arde con una llama redonda y azulada: sin «arriba» ni «abajo», el aire caliente no sube y la llama no se estira.",
    "dormir": "La luz azul de las pantallas frena la melatonina, la hormona que te avisa de que es de noche. Tus ojos tienen unas células que no sirven para ver, sino para medir esa luz.",
    "vaso": "El agua es de las pocas sustancias que ocupan más al congelarse. Por eso el hielo flota y los lagos se hielan solo por arriba: el agua de abajo, a unos 4 °C, permite que los peces sobrevivan al invierno.",
    "betelgeuse": "Entre 2019 y 2020, Betelgeuse perdió casi dos tercios de su brillo y muchos pensaron que iba a estallar. Era una nube de polvo que había expulsado ella misma. Algún día será supernova, pero puede tardar 100.000 años.",
    "arena": "Los buenos relojes de arena no llevaban arena de playa: se usaba polvo de mármol o cáscara de huevo molida, que fluyen de forma más regular y no se apelmazan con la humedad.",
    "tumbado": "En el ecuador, la superficie de la Tierra gira a unos 1.670 km/h, y alrededor del Sol vamos a unos 107.000 km/h. No lo notamos porque la velocidad es constante.",
    "diente": "Las semillas del diente de león vuelan gracias a un remolino de aire que se forma justo encima de su penacho. Se descubrió en 2018 y es un tipo de vórtice que no se conocía.",
    "planetas": "Todos los planetas del sistema solar, puestos en fila, cabrían en el hueco entre la Tierra y la Luna… y aún sobraría algo de espacio.",
    "liebre": "Hay 88 constelaciones oficiales. La Unión Astronómica Internacional las fijó en 1922 y en 1930 trazó sus fronteras, como si fueran países del cielo.",
    "jeroglificos": "Los jeroglíficos se descifraron gracias a la piedra de Rosetta, que repetía un mismo decreto en tres escrituras. Champollion lo consiguió en 1822, tras años de trabajo.",
    "anubis": "Los egipcios creían que se pensaba con el corazón. Al momificar, lo dejaban dentro del cuerpo… y el cerebro lo sacaban y lo tiraban.",
    "pez": "La memoria de un pez dorado dura meses, no tres segundos: se les puede entrenar para reconocer colores, sonidos y horarios de comida.",
    "pera": "Las peras se recogen verdes a propósito: si maduran en la rama, se vuelven harinosas por dentro. Maduran mejor fuera del árbol.",
    "llave": "Las cerraduras de pasadores más antiguas que se conocen son egipcias, de madera, y tienen unos 4.000 años. El principio es el mismo que el de muchas cerraduras actuales.",
    "zanahoria": "Las primeras zanahorias cultivadas eran moradas o amarillas. La naranja se popularizó en los Países Bajos en el siglo XVII.",
    "trebol": "Se calcula que solo uno de cada 5.000 tréboles tiene cuatro hojas. El récord es un trébol de 56 hojas, encontrado en Japón en 2009.",
    "hora": "España vive con la hora de Berlín desde 1940. Por su longitud le correspondería la de Londres, como a Portugal: por eso aquí se come y se cena más tarde que en casi toda Europa.",
    "brujula": "El polo norte magnético no está quieto: se desplaza unos 50 km al año hacia Siberia. Además, el campo magnético terrestre se ha invertido cientos de veces; la última, hace unos 780.000 años.",
    "eco": "Es un mito que el «cuac» de un pato no haga eco. En 2003, la Universidad de Salford lo comprobó en una cámara de reverberación: sí lo hace, pero se confunde con el propio graznido, que se apaga poco a poco.",
    "jirafa": "Las jirafas suelen dormir de pie y a ratos muy cortos, de pocos minutos, para poder huir rápido. A veces se tumban y apoyan la cabeza sobre el lomo, pero casi nunca más de unos minutos seguidos.",
    "cementerio": "«Cementerio» viene del griego koimetérion, que significa «dormitorio»: el lugar donde se duerme. Los primeros cristianos lo usaban porque creían que los muertos solo dormían hasta la resurrección.",
    "montyhall": "Es el problema de Monty Hall: si cambias de puerta, ganas 2 de cada 3 veces. Cuando Marilyn vos Savant lo explicó en 1990, miles de lectores, cientos de ellos doctores, le escribieron diciendo que se equivocaba. Tenía razón.",
    "vuelta": "Los bailarines evitan marearse con un truco: fijan la vista en un punto y giran la cabeza de golpe. Además, con años de práctica su cerebro aprende a ignorar parte de la señal del oído interno.",
    "iman": "Un imán de neodimio puede levantar más de mil veces su propio peso. Son tan potentes que dos de ellos pueden pellizcar la piel y romperse al chocar.",
    "saturno": "Los anillos de Saturno no son de roca: son en más de un 95 % hielo de agua, en trozos que van del tamaño de un grano de arena al de una casa. Y se están deshaciendo: caen poco a poco sobre el planeta.",
    "silencio": "En la sala anecoica de Microsoft, una de las más silenciosas del mundo, se han medido −20 decibelios. Dentro, la gente empieza a oír su propio latido, su respiración… e incluso el roce de sus articulaciones.",
    "escondite": "Hasta los 8 meses, más o menos, un bebé cree que lo que deja de ver deja de existir. Por eso el «¿dónde está…? ¡aquí!» le resulta tan sorprendente: está aprendiendo la permanencia del objeto.",
    "bocabajo": "La primera noche en un sitio nuevo dormimos peor por algo que se llama «efecto primera noche»: la mitad izquierda del cerebro duerme más ligera y queda vigilando, como los delfines.",
    "astronauta": "En la Estación Espacial, los astronautas crecen hasta unos 5 cm: sin gravedad, los discos de la columna se estiran. Lo pierden en pocos días al volver a la Tierra.",
    "gigantes": "Júpiter y Saturno son gigantes gaseosos y Urano y Neptuno, gigantes helados: no tienen una superficie donde posarse. Una nave que «aterrizara» se hundiría en capas de gas cada vez más densas y calientes hasta ser aplastada.",
    "yensid": "En «Fantasía» (1940), el hechicero de Mickey se llama Yen Sid: Disney escrito al revés. Los animadores le pusieron además las cejas que Walt levantaba cuando algo no le gustaba.",
    "cafe": "Harían falta unas 100 tazas de café seguidas para tomar una dosis peligrosa de cafeína. Y la cafeína tarda unas 5 horas en reducirse a la mitad en tu cuerpo.",
    "fasesluna": "Siempre vemos la misma cara de la Luna porque tarda exactamente lo mismo en girar sobre sí misma que en dar una vuelta a la Tierra: unos 27 días. Se llama acoplamiento de marea.",
    "salto": "Una pulga salta más de 100 veces su propio tamaño. No lo consigue con músculo, sino con una proteína elástica, la resilina, que acumula energía como un muelle.",
    "hal": "HAL, el ordenador de «2001: Una odisea del espacio», está a una letra de IBM. Arthur C. Clarke juró que era casualidad: HAL viene de «Heuristically programmed ALgorithmic computer».",
    "giro": "Si fotografías el cielo durante horas apuntando a la Polar, las estrellas dibujan círculos perfectos a su alrededor. No se mueven ellas: es la Tierra la que gira.",
    "telescopio": "Las tres estrellas del cinturón de Orión parecen estar juntas, pero no: unas están a unos 700 años luz y otras a casi 2.000. Solo coinciden vistas desde aquí.",
    "australia": "Desde el hemisferio sur, Orión se ve boca abajo, y la Luna también: las manchas que aquí parecen una cara allí aparecen giradas.",
    "sirio": "La escala de brillo de las estrellas va al revés: cuanto menor es el número, más brilla. Sirio, la más brillante de la noche, tiene magnitud negativa: −1,46.",
    "escarabajo": "Los escarabajos peloteros se orientan de noche guiándose por la Vía Láctea. Es el primer animal en el que se demostró algo así.",
    "mosaico": "Las piezas de un mosaico se llaman teselas, y en los mosaicos romanos más finos se cortaban a mano: un metro cuadrado podía tener más de diez mil.",
    "copas": "Benjamin Franklin inventó un instrumento de cuencos de cristal, la armónica de cristal, y Mozart compuso música para él. Llegó a decirse que su sonido volvía loca a la gente.",
    "estrellita": "La melodía de «Estrellita, ¿dónde estás?» es una canción francesa del siglo XVIII, «Ah! vous dirai-je, maman», sobre la que Mozart compuso doce variaciones.",
    "semana": "Los días de la semana vienen de los astros: lunes de la Luna, martes de Marte, miércoles de Mercurio, jueves de Júpiter y viernes de Venus. Sábado viene del hebreo «sabbat» y domingo, del latín «Dominicus», del Señor.",
    "carbono": "El diamante y la mina de un lápiz son lo mismo: carbono puro. Solo cambia cómo se ordenan sus átomos. Con mucha presión y calor, el grafito puede convertirse en diamante.",
    "polar": "La Polar no será siempre la estrella del norte. El eje de la Tierra «cabecea» como una peonza en ciclos de 26.000 años, y hacia el año 14.000 la estrella polar será Vega.",
    "diapason": "Desde 1939 la nota «la» se afina a 440 hercios. La idea de que 432 Hz es una frecuencia «natural» o sanadora no tiene ninguna base científica.",
    "gallina": "El vuelo más largo registrado de una gallina duró 13 segundos. Las gallinas descienden de un ave de la jungla asiática, el gallo bankiva, que sí vuela distancias cortas.",
    "dados": "En Pompeya se han encontrado dados trucados con plomo. Los más antiguos conocidos tienen unos 5.000 años y aparecieron en la Ciudad Quemada, en Irán, junto a un tablero.",
    "toctoc": "Los prisioneros de guerra estadounidenses en Vietnam se comunicaban entre celdas con un código de golpes: el abecedario en una cuadrícula de 5 × 5, con la K sustituida por la C.",
    "ventana": "Más de un tercio de la humanidad, y el 80 % de los norteamericanos, ya no puede ver la Vía Láctea desde su casa por la contaminación lumínica.",
    "lengua": "No solo hay tres animales con la lengua azul: también la tienen las jirafas y los okapis (que la usan como protección solar), los perros chow chow y el eslizón de lengua azul, entre otros.",
    "unos": "111.111.111 × 111.111.111 = 12.345.678.987.654.321. Funciona con cualquier número de unos hasta nueve: el resultado sube hasta ese número y vuelve a bajar.",
    "canica": "Cuando bebes, la habitación da vueltas porque el alcohol llega al líquido del oído interno y cambia su densidad: el sensor del equilibrio cree que te estás moviendo.",
    "pesoluna": "Los astronautas del Apolo descubrieron que en la Luna era más cómodo avanzar dando saltitos, como un canguro, que caminar paso a paso.",
    "berlin": "Galicia está más al oeste que casi todo el Reino Unido, pero va una hora por delante. En verano, en Vigo, el sol del mediodía llega pasadas las dos de la tarde.",
    "pitagoras": "Pitágoras descubrió que las notas que suenan bien juntas salen de cuerdas con longitudes en proporciones sencillas, como 1:2 (la octava) o 2:3 (la quinta).",
    "piramide": "La Gran Pirámide de Guiza fue el edificio más alto del mundo durante unos 3.800 años, hasta que en el siglo XIV la superó la aguja de la catedral de Lincoln.",
    "memoria": "En 1956, George Miller publicó que podemos retener «siete, más o menos dos» elementos a la vez. Estudios más recientes rebajan esa cifra a unos cuatro.",
    "eureka": "La historia de Arquímedes y la corona la contó Vitruvio unos 200 años después. Probablemente es adornada: el método de la bañera no habría sido lo bastante preciso.",
    "cuadrados": "En un tablero de ajedrez hay 204 cuadrados si cuentas todos los tamaños, y 1.296 rectángulos.",
    "ariadna": "El laberinto que aparece en las monedas antiguas de Creta es «unicursal»: un único camino sin bifurcaciones. En él es imposible perderse.",
    "acueducto": "El acueducto de Segovia se levantó sin argamasa: sus bloques de granito se sostienen solo por el equilibrio de su propio peso, desde hace casi 2.000 años.",
    "romano": "En la mayoría de los relojes con números romanos, el 4 se escribe IIII y no IV. Se cree que es por equilibrio visual frente al VIII del otro lado.",
    "director": "Los primeros directores marcaban el ritmo golpeando el suelo con un bastón. El compositor Jean-Baptiste Lully se golpeó un pie así en 1687 y murió por la infección.",
    "deoido": "Las melodías que se te quedan pegadas se llaman «gusanos auditivos». Un estudio de 2015 comprobó que mascar chicle ayuda a quitárselas de la cabeza.",
    "balanzas": "La balanza de dos platos es uno de los instrumentos de medida más antiguos: ya se usaba en Egipto y Mesopotamia hace más de 4.000 años.",
    "alreves": "Las palabras que, leídas al revés, forman otra distinta se llaman anacíclicas: amor y Roma, ateo y oeta, Adán y nada.",
    "elementos": "El símbolo del cobre, Cu, viene del latín cyprium: «de Chipre», la isla de donde los romanos sacaban gran parte de su cobre.",
    "prismaluz": "Isaac Newton fue el primero en demostrar con un prisma que la luz blanca es la suma de todos los colores, y que un segundo prisma puede volver a juntarlos.",
    "papel": "Durante años se dijo que un papel no podía doblarse por la mitad más de 7 veces. En 2002, la estudiante Britney Gallivan lo dobló 12 veces, usando un rollo de papel de más de 1 km de largo.",
    "frutas": "En botánica, un fruto es lo que se forma a partir de la flor y contiene las semillas. Por eso el tomate, el pepino y la berenjena son frutos, y el plátano es técnicamente una baya.",
    "tabla": "El oxígeno es el elemento más abundante de la corteza terrestre: casi la mitad de su masa. Está en las rocas, sobre todo combinado con silicio.",
    "sos": "La creencia popular dice que SOS significa «Save Our Souls» (salvad nuestras almas). Sin embargo, no significa nada: se eligió en 1906 porque en morse (· · · − − − · · ·) es fácil de enviar e imposible de confundir. El Titanic fue uno de los primeros barcos en usarlo.",
    "cesar": "El cifrado César se sigue usando como chiste: en internet se usa ROT13 (mover 13 letras) para ocultar spoilers. Como el abecedario inglés tiene 26 letras, aplicarlo dos veces devuelve el texto original.",
    "bombillas": "El primer «bug» informático fue un bicho de verdad: en 1947, el equipo de Grace Hopper encontró una polilla atascada en un relé del Harvard Mark II y la pegó en el cuaderno de registro.",
    "sintonia": "El «efecto Mozart», la idea de que escuchar a Mozart te hace más listo, nació de un estudio de 1993 con un efecto mínimo y pasajero. Estudios posteriores no lo han confirmado.",
    "agujas": "Las agujas de un reloj se superponen 22 veces al día, no 24: entre las 11 y la 1 solo coinciden una vez, a las 12.",
    "himno": "Beethoven estaba prácticamente sordo cuando compuso la Novena Sinfonía. En el estreno, en 1824, tuvieron que girarlo hacia el público para que viera los aplausos.",
    "huellas": "Las huellas de los astronautas siguen intactas en la Luna: allí no hay viento ni lluvia que las borre. Podrían durar millones de años.",
    "theremin": "El theremín, inventado en 1920, se toca sin tocarlo: las manos alteran un campo eléctrico. Su inventor, Léon Theremin, se lo enseñó a Lenin en 1922, que llegó a tocar una pieza de Glinka.",
    "fibonacci": "Fibonacci planteó el problema de los conejos en 1202. La misma serie aparece en las espirales de las piñas y de los girasoles.",
    "notacolor": "Algunas personas con sinestesia ven colores al oír música. Se calcula que alrededor de un 4 % de la población tiene algún tipo de sinestesia.",
    "cumplealreves": "«Cumpleaños feliz» procede de «Good Morning to All», una canción infantil de 1893. Sus derechos se pagaron en los tribunales hasta 2016, cuando pasó al dominio público.",
    "mirilla": "Las mirillas de las puertas usan una lente de «ojo de pez», que permite ver casi 180 grados desde dentro… y casi nada desde fuera.",
    "shakespeare": "Cervantes y Shakespeare no murieron el mismo día: Inglaterra aún usaba el calendario juliano. El «23 de abril» de Shakespeare fue el 3 de mayo en el calendario de Cervantes, que en realidad murió el 22 y fue enterrado el 23.",
    "cumple": "Con 23 personas hay más de un 50 % de probabilidades de que dos cumplan años el mismo día. Con 70, más del 99,9 %.",
    "firma": "Bach firmó con su nombre en notas: en la notación alemana, B-A-C-H es si bemol, la, do, si. Más de 400 obras de otros compositores usan ese motivo como homenaje.",
    "mirasidi": "Esta serie, «mira y di», la estudió John Conway: cada término es aproximadamente un 30 % más largo que el anterior, según una constante que tiene su nombre.",
    "faro": "Cada faro tiene su propio ritmo de destellos, como una huella dactilar, para que los marinos sepan cuál están viendo. Ese ritmo aparece en las cartas náuticas.",
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
  const RESPUESTAS = {"cremallera": [193435772], "ambulancia": [2214441750], "escape": [193359095], "segundo": [3820287982], "gregoriano": [5859361, 3319905752], "t9": [2087952001], "braille": [194663892], "cajafuerte": [193355920], "cuentaatras": [5859364, 2087386359], "brujula": [187763717], "eco": [2087777041], "cementerio": [1128788970, 3325922795, 3430751799, 3796595045, 3940374379], "saturno": [1743537, 177920610, 472467666, 2087555543], "silencio": [1429953438], "yensid": [952350759, 1126390473], "hal": [193418371], "semana": [2415620861], "carbono": [177606, 3505470137], "diapason": [5861000], "dados": [5859362], "unos": [746460316], "berlin": [5859367, 2085884967], "cuadrados": [5859360], "balanzas": [177555, 2088334857], "alreves": [2088305204], "elementos": [2087777072], "papel": [5859366, 2087388328], "tabla": [177610, 427447032], "sos": [193433706], "cesar": [2087589023], "bombillas": [5859203], "sintonia": [1466999994], "agujas": [5859303], "himno": [2364319273], "huellas": [2085891426], "fibonacci": [5859367, 182277280], "notacolor": [190044133], "cumplealreves": [3621669204], "mirilla": [5859428, 1290554165], "shakespeare": [5859365, 2087898114], "cumple": [5859396], "firma": [2087732461], "mirasidi": [3861827527], "faro": [5861404]};
  // Cómo se responde cada reto: [respuesta, formato del candado o null para fichas]
  const FICHAS = {"segundo": ["235960", "##:##:##"], "gregoriano": ["15", "##"], "shakespeare": ["11", "##"], "berlin": ["1300", "##:##"], "escape": ["112", "##,#"], "unos": ["12345678987654321", null], "yensid": ["DISNEY", null], "hal": ["IBM", null], "ambulancia": ["AMBULANCIA", null], "sos": ["SOS", null], "silencio": ["LATIDO", null], "diapason": ["LA", null], "cesar": ["FARO", null], "braille": ["RADIO", null], "t9": ["TAXI", null], "bombillas": ["42", "##"], "dados": ["16", "##"], "cumple": ["23", "##"], "mirasidi": ["312211", "######"], "agujas": ["75", "##"], "cajafuerte": ["647", "###"], "cuadrados": ["14", "##"], "brujula": ["POLAR", null], "eco": ["CUAC", null], "cuentaatras": ["10", "##"], "cremallera": ["YKK", null], "saturno": ["HIELO", null], "cementerio": ["DORMITORIO", null], "semana": ["MERCURIO", null], "papel": ["12", "##"], "carbono": ["CARBONO", null], "firma": ["BACH", null], "sintonia": ["MOZART", null], "himno": ["BEETHOVEN", null], "balanzas": ["6", "#"], "huellas": ["1969", "####"], "fibonacci": ["13", "##"], "alreves": ["ROMA", null], "elementos": ["CUBA", null], "notacolor": ["VERDE", null], "cumplealreves": ["CUMPLEAÑOS", null], "faro": ["PI", null], "mirilla": ["32", "##"], "tabla": ["O", null]};
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
  const leerMapa = k => { try { const x = JSON.parse(leer(k, "{}")); return x && typeof x === "object" ? x : {}; } catch (e) { return {}; } };
  let pistasUsadas = 0;
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
  // Al salir del nivel: micrófono, sensores y audio en reposo para ahorrar batería
  let flujoPropio = null;
  addEventListener("pagehide", () => {
    if (flujoPropio) { flujoPropio.getTracks().forEach(t => t.stop()); flujoPropio = null; }
    if (marco) { try { marco.cerrarMicro && marco.cerrarMicro(); marco.pararSensores && marco.pararSensores(); marco.dormirAudio && marco.dormirAudio(); } catch (e) {} }
  });
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
    if (flujoPropio) { flujoPropio.getTracks().forEach(t => t.stop()); flujoPropio = null; }
    if (marco) { try { marco.cerrarMicro && marco.cerrarMicro(); marco.pararSensores && marco.pararSensores(); } catch (e) {} }
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
    const est = saltado ? 0 : 3 - Math.min(2, pistasUsadas), mapaE = leerMapa("estrellas");
    if (!saltado && (mapaE[archivo] || 0) < est) { mapaE[archivo] = est; guardar("estrellas", JSON.stringify(mapaE)); }
    const descubiertas = new Set([...leerLista("superados"), ...leerLista("saltados"), archivo]).size;
    document.body.insertAdjacentHTML("beforeend", `
      <div class="superado" role="status">
        <span class="sup-nivel">Reto ${indice + 1} ${saltado ? "saltado" : "superado"}</span>
        ${saltado ? "" : `<div class="sup-estrellas" aria-label="${est} estrellas">${[1, 2, 3].map(k => `<span class="${k <= est ? "on" : ""}" style="animation-delay:${.25 + k * .22}s">★</span>`).join("")}</div>`}
        <span class="sup-curio">¿Sabías que…? · ${descubiertas} de ${NIVELES.length}</span>
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
    if (!saltado) { confeti(); for (let k = 1; k <= est; k++) tono(660 + k * 220, .25 + k * .22, .35, .1, "sine"); }
  }

  // Lluvia de confeti al superar un reto
  function confeti() {
    const cv = document.createElement("canvas"); cv.className = "confeti-cv"; document.body.appendChild(cv);
    const W = cv.width = innerWidth, H = cv.height = innerHeight, x = cv.getContext("2d");
    const COL = ["#FFD54F", "#D9A441", "#64B5F6", "#81C784", "#F3EBDD", "#FFB74D"];
    const ps = Array.from({ length: 90 }, () => ({ x: W / 2, y: H * .35, vx: (Math.random() - .5) * 9, vy: -Math.random() * 9 - 3, r: Math.random() * 6.28, vr: (Math.random() - .5) * .3, c: COL[Math.floor(Math.random() * COL.length)], w: 5 + Math.random() * 5 }));
    let t = 0;
    (function paso() {
      x.clearRect(0, 0, W, H); t++;
      ps.forEach(p => { p.vy += .22; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.globalAlpha = Math.max(0, 1 - t / 110); x.fillRect(-p.w / 2, -p.w / 4, p.w, p.w / 2); x.restore(); });
      if (t < 110) requestAnimationFrame(paso); else cv.remove();
    })();
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
          <button class="accion" data-a="coleccion">📚 Mis curiosidades</button>
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
      if (a === "coleccion") location.href = "coleccion.html?desde=" + encodeURIComponent(archivo);
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
      setTimeout(() => { const b = document.querySelector(".boton-pista"); if (b && !pasando && !pistasUsadas) b.classList.add("llamar-pista"); }, 45000);
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
    // En lugar de escribir: fichas de letras o candado de ruedas
    if (FICHAS[archivo]) {
      r.innerHTML = `<button class="boton-responder" aria-label="Responder"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="15" r="4"/><path d="M11 12 L20 3 M17 6 L20 9 M15 8 L17 10"/></svg><span>Responder</span></button>`;
      r.querySelector("button").addEventListener("click", () => { audio(); abrirRespuesta(FICHAS[archivo]); });
    }
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
    sombra: `<svg viewBox="0 0 120 150"><defs><linearGradient id="gSom" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05070E" stop-opacity=".95"/><stop offset=".75" stop-color="#16292B" stop-opacity=".8"/><stop offset="1" stop-color="#16292B" stop-opacity="0"/></linearGradient></defs>
      <path d="M44 8 C38 22 39 40 44 52 C30 58 24 72 24 88 C24 112 30 130 22 146 C34 140 40 148 48 140 C56 150 64 140 72 148 C80 140 88 148 98 144 C90 128 96 110 96 88 C96 72 90 58 76 52 C82 40 83 22 76 8 C70 20 68 34 66 48 C63 47 57 47 54 48 C52 34 50 20 44 8Z" fill="url(#gSom)"/>
      <path d="M47 72 Q52 68 57 72 Q52 75 47 72Z M63 72 Q68 68 73 72 Q68 75 63 72Z" fill="#D9A441"/><path d="M47 72 Q52 68 57 72 Q52 75 47 72Z M63 72 Q68 68 73 72 Q68 75 63 72Z" fill="#FFF" opacity=".5"/></svg>`,
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

  function abrirRespuesta([valor, formato]) {
    let h = document.querySelector(".hoja-resp");
    if (h) { h.classList.add("abierta"); return; }
    document.body.insertAdjacentHTML("beforeend", `<div class="hoja-resp" role="dialog" aria-modal="true"><div class="hoja-int"><div class="hoja-zona"></div>
      <div class="hoja-acc">${formato ? "" : '<button class="h-borrar">Borrar</button>'}<button class="h-cerrar">Cerrar</button></div></div></div>`);
    h = document.querySelector(".hoja-resp"); const zona = h.querySelector(".hoja-zona");
    h.addEventListener("pointerdown", e => e.stopPropagation());
    h.addEventListener("click", e => { if (e.target === h) h.classList.remove("abierta"); });
    h.querySelector(".h-cerrar").addEventListener("click", () => h.classList.remove("abierta"));
    const comprobar = txt => (RESPUESTAS[archivo] || []).includes(huella(normalizar(txt)));
    const acierto = () => { h.classList.remove("abierta"); tono(523.25, 0, .5, .18); tono(783.99, .12, .8, .18); vibrar(40); setTimeout(() => superado(), 300); };
    if (formato) {
      const ruedas = [];
      zona.innerHTML = `<div class="candado">${[...formato].map(ch => ch === "#" ? '<div class="rueda"><button class="r-arr" aria-label="Subir">▲</button><span class="r-dig">0</span><button class="r-abj" aria-label="Bajar">▼</button></div>' : `<span class="r-sep">${ch}</span>`).join("")}</div>`;
      zona.querySelectorAll(".rueda").forEach(rd => {
        const st = { v: 0, el: rd.querySelector(".r-dig") }; ruedas.push(st);
        const mover = d => { st.v = (st.v + d + 10) % 10; st.el.textContent = st.v; tono(1800, 0, .03, .05, "square"); vibrar(5); if (comprobar(ruedas.map(x => x.v).join(""))) acierto(); };
        rd.querySelector(".r-arr").addEventListener("click", () => mover(1));
        rd.querySelector(".r-abj").addEventListener("click", () => mover(-1));
        let y0 = null;
        rd.addEventListener("pointerdown", e => { y0 = e.clientY; });
        rd.addEventListener("pointermove", e => { if (y0 == null) return; const d = e.clientY - y0; if (Math.abs(d) > 24) { mover(d < 0 ? 1 : -1); y0 = e.clientY; } });
        rd.addEventListener("pointerup", () => y0 = null);
      });
    } else {
      const letras = [...valor], esNum = /^[0-9]+$/.test(valor), abc = "ABCDEFGHIJLMNOPRSTUVZ";
      const extra = Math.min(5, Math.max(3, Math.ceil(letras.length / 2))), monton = [...letras];
      for (let i = 0; i < extra; i++) monton.push(esNum ? String(Math.floor(Math.random() * 10)) : abc[Math.floor(Math.random() * abc.length)]);
      monton.sort(() => Math.random() - .5);
      zona.innerHTML = `<div class="slots">${letras.map(() => '<span class="slot"></span>').join("")}</div><div class="fichas-r">${monton.map(l => `<button class="ficha-r">${l}</button>`).join("")}</div>`;
      const slots = [...zona.querySelectorAll(".slot")], usadas = slots.map(() => null);
      const pintar = () => slots.forEach((s, k) => { s.textContent = usadas[k] ? usadas[k].textContent : ""; s.classList.toggle("lleno", !!usadas[k]); });
      zona.querySelectorAll(".ficha-r").forEach(b => b.addEventListener("click", () => {
        const k = usadas.indexOf(null); if (k < 0 || b.disabled) return;
        usadas[k] = b; b.disabled = true; tono(700 + k * 30, 0, .06, .07, "sine"); pintar();
        if (!usadas.includes(null)) {
          if (comprobar(usadas.map(x => x.textContent).join(""))) acierto();
          else { const fila = zona.querySelector(".slots"); fila.classList.remove("mal"); void fila.offsetWidth; fila.classList.add("mal"); tono(160, 0, .25, .12, "sine"); vibrar([20, 40, 20]); avisar("No es correcto"); }
        }
      }));
      slots.forEach((s, k) => s.addEventListener("click", () => { if (!usadas[k]) return; usadas[k].disabled = false; usadas[k] = null; pintar(); }));
      h.querySelector(".h-borrar").addEventListener("click", () => { usadas.forEach((b, k) => { if (b) { b.disabled = false; usadas[k] = null; } }); pintar(); });
    }
    requestAnimationFrame(() => requestAnimationFrame(() => h.classList.add("abierta")));
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
      pistasUsadas = Math.max(pistasUsadas, vistas);
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
    if (marco) { if (marco.activarSensores) marco.activarSensores(); return marco.MOVIMIENTO_OK; }
    try {
      if (typeof DeviceOrientationEvent !== "undefined" &&
          typeof DeviceOrientationEvent.requestPermission === "function")
        return (await DeviceOrientationEvent.requestPermission()) === "granted";
      return "DeviceOrientationEvent" in window;
    } catch (e) { return false; }
  }
  async function pedirMovimiento() {
    if (marco) { if (marco.activarSensores) marco.activarSensores(); return marco.MOVIMIENTO_OK; }
    try {
      if (typeof DeviceMotionEvent !== "undefined" &&
          typeof DeviceMotionEvent.requestPermission === "function")
        return (await DeviceMotionEvent.requestPermission()) === "granted";
      return "DeviceMotionEvent" in window;
    } catch (e) { return false; }
  }
  // Devuelve una función que mide el volumen (0 a ~1), o null si no hay micrófono
  async function pedirMicro() {
    if (marco) return marco.abrirMicro ? await marco.abrirMicro() : marco.MICRO;
    try {
      const flujo = flujoPropio = await navigator.mediaDevices.getUserMedia({
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
    if (marco) { if (marco.abrirMicro) await marco.abrirMicro(); return marco.ANALIZADOR || null; }
    try {
      const flujo = flujoPropio = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
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
           NIVELES, CODIGOS, irACodigo, leer, guardar, leerLista, leerMapa, CURIOSIDADES,
           pedirOrientacion, pedirMovimiento, pedirMicro };
})();
