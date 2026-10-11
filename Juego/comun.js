// Utilidades compartidas por todos los niveles
const Comun = (() => {
  // Orden de los niveles (cada uno es un archivo .html) y su código para volver a él
  const NIVELES = ["arbol", "vela", "globo", "arcoiris", "espejo", "madriguera", "oscuridad", "eco", "reloj", "brujula", "polar", "silencio", "siete", "conejo", "fases", "pez", "gato", "pera", "llave", "dormir", "zanahoria", "tarde", "tumbado", "susurro", "trebol", "escondite", "vaso", "arena", "estatua", "diente", "salto", "silbido", "toctoc", "canica", "bocabajo", "vuelta", "maracas", "cueva", "iman", "sonido", "luna", "telescopio", "liebre", "betelgeuse", "australia", "osamayor", "giro", "pleyades", "sirio", "ventana", "astronauta", "planetas", "pesoluna", "semaforo", "piano", "cafe", "manana", "agujero", "32", "faro", "pi", "jeroglificos", "anubis", "escarabajo", "piramide", "pitagoras", "eureka", "ariadna", "acueducto", "mosaico", "romano", "laberinto", "eclipse", "melodia", "beethoven", "6", "42", "1969", "bach", "13", "roma", "radio", "mozart", "14", "la", "cuba", "10", "taxi", "pulso", "dado", "16", "prisma", "verde", "312211", "cumpleanos", "23", "647", "oido", "relojero", "75", "violin", "octava", "theremin", "copas", "cantar", "director", "bravo"];
  const CODIGOS = {"arbol": "GPYH", "vela": "9G9F", "globo": "JXP8", "arcoiris": "KVUG", "espejo": "LXT9", "madriguera": "6U23", "oscuridad": "YTKC", "eco": "4KAG", "reloj": "8PEQ", "brujula": "XEEP", "polar": "JQPF", "silencio": "7HTQ", "siete": "A88E", "conejo": "AFFB", "fases": "7ZC3", "pez": "QJXS", "gato": "ZCHY", "pera": "RKYQ", "llave": "B8EZ", "dormir": "GFWN", "zanahoria": "RHLM", "tarde": "EHR7", "tumbado": "5TFZ", "susurro": "VCX7", "trebol": "HHX4", "escondite": "HQX8", "vaso": "WK3D", "arena": "EGZD", "estatua": "PCF5", "diente": "4ERF", "salto": "5DHQ", "silbido": "D3DQ", "toctoc": "CJU4", "canica": "KHVM", "bocabajo": "GNZG", "vuelta": "EDP9", "maracas": "5W77", "cueva": "ZVRM", "iman": "RFV9", "sonido": "9YFH", "luna": "6MEN", "telescopio": "HBTR", "liebre": "QJGF", "betelgeuse": "5CBF", "australia": "PQBN", "osamayor": "4Q6T", "giro": "AL5X", "pleyades": "TKPX", "sirio": "GF2G", "ventana": "YYSC", "astronauta": "X6UE", "planetas": "H4LX", "pesoluna": "K94C", "semaforo": "JLU4", "piano": "CTV2", "cafe": "4TEH", "manana": "G9QQ", "agujero": "J62F", "32": "GMJS", "faro": "DEQ3", "pi": "ABAV", "jeroglificos": "EWXY", "anubis": "97EF", "escarabajo": "T8ED", "piramide": "V6U2", "pitagoras": "YB7Y", "eureka": "LH9D", "ariadna": "PUJR", "acueducto": "339F", "mosaico": "L63T", "romano": "J5T4", "laberinto": "QWUS", "eclipse": "69K3", "melodia": "54T2", "beethoven": "RN9V", "6": "DZAG", "42": "3WN7", "1969": "PHSA", "bach": "LM5F", "13": "TF9V", "roma": "CQKJ", "radio": "8WV7", "mozart": "GCSH", "14": "848B", "la": "3DJJ", "cuba": "LDH7", "10": "LUZ7", "taxi": "3QUR", "pulso": "FAB4", "dado": "W9N7", "16": "4GL3", "prisma": "JF5A", "verde": "VTDG", "312211": "6TA7", "cumpleanos": "HXLU", "23": "5D4N", "647": "PVFW", "oido": "Q5JX", "relojero": "BRPG", "75": "PQVB", "violin": "4X5A", "octava": "LTE9", "theremin": "Y2QK", "copas": "FMKQ", "cantar": "QA9M", "director": "SUAK", "bravo": "96RF"};
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
    "telescopio": "Buen ojo de astrónomo.",
    "liebre": "La Liebre ya tiene quien la dibuje.",
    "betelgeuse": "Sabes leer la temperatura de las estrellas.",
    "australia": "Has visto el cielo desde el otro lado del mundo.",
    "osamayor": "Ya nunca te perderás de noche.",
    "giro": "El cielo gira, y tú lo entiendes.",
    "pleyades": "Has visto lo que el ojo no alcanza.",
    "sirio": "Sabes quién brilla más.",
    "ventana": "Esta noche, mira arriba: ya sabes dónde buscar.",
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
    "bravo": "Te mereces el aplauso más largo.",
    "vaso": "Ni una gota se te resiste.",
    "arena": "El tiempo está de tu parte.",
    "estatua": "Paciencia de estatua.",
    "diente": "Deseo concedido.",
    "salto": "¡Qué salto! El conejito está orgulloso.",
    "silbido": "Sabes llamar con delicadeza.",
    "toctoc": "Buen ritmo en los nudillos.",
    "canica": "Pulso de equilibrista.",
    "bocabajo": "Buenas noches… y buen trabajo.",
    "vuelta": "Lo encontraste sin marearte.",
    "maracas": "Llevas el ritmo en el cuerpo.",
    "cueva": "Has traído la luz.",
    "iman": "Atraes las soluciones.",
    "astronauta": "Aterrizaje perfecto.",
    "planetas": "Conoces bien tu barrio del espacio.",
    "pesoluna": "Ligero como en la Luna.",
    "jeroglificos": "Escribes como un escriba.",
    "anubis": "Corazón ligero, mente clara.",
    "escarabajo": "Has movido el Sol.",
    "piramide": "Has salido de la pirámide.",
    "pitagoras": "Pitágoras estaría orgulloso.",
    "eureka": "¡Eureka! Lo has encontrado.",
    "ariadna": "No has perdido el hilo.",
    "acueducto": "Ingeniería romana.",
    "mosaico": "Pieza a pieza, como un artista.",
    "romano": "Lees el tiempo como un romano.",
    "theremin": "Tocas el aire.",
    "copas": "Afinado como el cristal.",
    "cantar": "Tienes una voz afinada.",
    "director": "La orquesta te sigue."
  };
  // Curiosidad que aparece al superar cada nivel
  const CURIOSIDADES = {
    "arbol": "Las crías de conejo nacen sin pelo y con los ojos cerrados, y los abren a los diez días.",
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
    "tarde": "Antes de los relojes, la gente sabía la hora mirando la longitud de su propia sombra.",
    "tumbado": "Cuando un conejo está muy contento, a veces salta en el aire retorciéndose; en inglés se llama «binky».",
    "susurro": "Las orejas de un conejo pueden girar por separado para localizar de dónde viene un sonido.",
    "trebol": "Se calcula que solo uno de cada 5.000 tréboles tiene cuatro hojas.",
    "escondite": "Los conejos golpean el suelo con las patas traseras para avisar a los demás de un peligro.",
    "sonido": "El primer mensaje en morse por una línea de telégrafo se envió en 1844, entre Washington y Baltimore.",
    "luna": "La Luna se aleja de la Tierra unos 3,8 centímetros cada año.",
    "telescopio": "Las tres estrellas del cinturón de Orión se llaman Alnitak, Alnilam y Mintaka, y en España se las conoce como «las Tres Marías».",
    "liebre": "La Liebre es una de las 48 constelaciones que describió Ptolomeo hace casi 2.000 años, y está a los pies de Orión, el cazador.",
    "betelgeuse": "Betelgeuse es tan grande que, si estuviera en el lugar del Sol, llegaría más allá de la órbita de Marte.",
    "australia": "Desde el hemisferio sur no se ve la estrella Polar: para orientarse se usa la Cruz del Sur.",
    "osamayor": "Las dos estrellas de la Osa Mayor que apuntan a la Polar se llaman Merak y Dubhe.",
    "giro": "En realidad no gira el cielo: es la Tierra la que da una vuelta sobre sí misma cada día.",
    "pleyades": "Las Pléyades son un grupo de más de mil estrellas jóvenes, a unos 440 años luz de nosotros.",
    "sirio": "Sirio brilla tanto porque está muy cerca: su luz tarda unos 8,6 años en llegar hasta nosotros.",
    "ventana": "En una noche oscura, lejos de las ciudades, se pueden ver a simple vista unas 2.500 estrellas a la vez.",
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
    "bravo": "«Bravo» viene del italiano: en la ópera se dice «brava» a una cantante y «bravi» a un grupo.",
    "vaso": "Un vaso puede llenarse un poco por encima del borde sin derramarse, gracias a la tensión superficial del agua.",
    "arena": "Los relojes de arena se usaban en los barcos para medir el tiempo y calcular la velocidad.",
    "estatua": "Las mariposas saborean con las patas: tienen receptores del gusto en ellas.",
    "diente": "Las semillas del diente de león pueden viajar con el viento decenas de kilómetros.",
    "salto": "Un conejo puede saltar casi un metro de altura y hasta tres metros de largo.",
    "silbido": "Los conejos oyen sonidos mucho más agudos que los que podemos oír las personas.",
    "toctoc": "Los conejos se comunican golpeando el suelo con las patas traseras, y el sonido viaja por los túneles de la madriguera.",
    "canica": "Las canicas son uno de los juguetes más antiguos: se han encontrado en tumbas del antiguo Egipto.",
    "bocabajo": "La luz de las pantallas puede dificultar el sueño; por eso se recomienda dejar el móvil un rato antes de dormir.",
    "vuelta": "Al dar vueltas te mareas porque el líquido del oído interno sigue girando un momento después de parar.",
    "maracas": "Las primeras maracas se hacían con calabazas secas rellenas de semillas.",
    "cueva": "En las cuevas más profundas viven animales que nunca han visto la luz y han perdido los ojos.",
    "iman": "Las zanahorias de verdad no se pegan a los imanes, pero el hierro, el níquel y el cobalto sí.",
    "astronauta": "En el espacio, algo que empujas sigue moviéndose sin parar hasta que choca con otra cosa.",
    "planetas": "Júpiter es tan grande que dentro de él cabrían más de 1.300 Tierras.",
    "pesoluna": "En la Luna podrías saltar unas seis veces más alto que en la Tierra.",
    "jeroglificos": "Los jeroglíficos se pudieron leer gracias a la piedra de Rosetta, que tenía el mismo texto en tres escrituras.",
    "anubis": "Para los antiguos egipcios, la pluma representaba a Maat, la diosa de la verdad y la justicia.",
    "escarabajo": "Los escarabajos peloteros se orientan de noche guiándose por la Vía Láctea.",
    "piramide": "La Gran Pirámide de Guiza fue el edificio más alto del mundo durante unos 3.800 años.",
    "pitagoras": "Pitágoras descubrió que las notas que suenan bien juntas salen de cuerdas con longitudes en proporciones sencillas, como 1:2 o 2:3.",
    "eureka": "Se cuenta que Arquímedes salió corriendo por la calle gritando «¡Eureka!», que significa «¡Lo encontré!».",
    "ariadna": "Según el mito, Ariadna dio a Teseo un ovillo de hilo para que pudiera salir del laberinto tras vencer al Minotauro.",
    "acueducto": "El acueducto de Segovia lleva casi 2.000 años en pie, y sus piedras están unidas sin argamasa.",
    "mosaico": "Las pequeñas piezas de un mosaico se llaman teselas.",
    "romano": "En muchos relojes con números romanos, el 4 se escribe IIII en lugar de IV.",
    "theremin": "El theremín se inventó en 1920 y es uno de los pocos instrumentos que se tocan sin tocarlos.",
    "copas": "Benjamin Franklin inventó un instrumento de copas de cristal, la armónica de cristal, y Mozart compuso música para él.",
    "cantar": "Cuando cantas este «la», tus cuerdas vocales vibran unas 440 veces por segundo.",
    "director": "Los primeros directores marcaban el ritmo golpeando el suelo con un bastón; el compositor Lully se hirió un pie así y murió por la herida."
  };
  // La historia: lo que pasa al superar cada nivel
  const HISTORIA = {
    "arbol": "Aquella noche, una estrella diminuta cayó en el jardín como una chispa perdida. Pompón alargó la pata para tocarla y, en ese mismo instante, su sombra se despegó de él con un chasquido, atrapó la estrella y saltó al agujero del árbol. Pompón, temblando, fue tras ella.",
    "vela": "Allí abajo todo era negro y silencioso. Cuando la llama murió, Pompón oyó una risita junto a su oreja. No era suya, aunque se le parecía muchísimo: era la risa de su propia sombra, que se divertía a su costa desde algún rincón de la oscuridad.",
    "globo": "Entre el confeti que aún flotaba cayó un papel doblado. Por firma tenía una huella negra y, escrita con letra torcida, una sola frase: «¿Me buscas? Date prisa, conejito». Pompón tragó saliva. Su sombra nunca le había hablado así.",
    "arcoiris": "Con los colores de nuevo en su sitio, Pompón se miró las patas y se le encogió el corazón: veía la hierba a través de ellas. Sin su sombra se estaba volviendo transparente, como el vaho que se borra de un cristal.",
    "espejo": "Al otro lado del cristal, el túnel bajaba en espiral hacia la tierra húmeda. Desde lo más hondo subía un tintineo frágil, como de campanillas de cristal. Algo pequeño y brillante estaba allí abajo… y sonaba asustado.",
    "madriguera": "Por fin lo viste de cerca: un conejito blanco de ojos enormes, que se asomaba y se escondía como quien no sabe si fiarse. Pompón nunca había salido de su jardín. Aquella noche, sin embargo, ya no tenía elección.",
    "oscuridad": "«Me has encontrado», susurró con un hilo de voz. «Me llamo Pompón. Mi sombra se ha llevado una estrella y, sin ella, me voy borrando poco a poco». Te miró con aquellos ojos enormes. «¿Me ayudarás a recuperarlas antes de que desaparezca del todo?».",
    "eco": "La montaña te devolvió el grito palabra por palabra. Pero cuando el eco se apagó, quedó flotando otra voz, diminuta y lejana, que no era la tuya: «¡Tilín, tilín! ¡Me llamo Tilín! ¡Por favor, que alguien me saque de aquí!».",
    "reloj": "En lo alto de la colina, un sombrero de copa abandonado bostezó, se estiró y se sacudió el polvo del ala. «¿Una sombra con prisa y una estrella en brazos?», murmuró con voz de terciopelo. «Pasó por aquí hace un rato. Iba hacia el norte».",
    "brujula": "«Disculpad mis modales», dijo el sombrero con una reverencia. «Me llaman Sombrero, a secas. Todo lo que entra en mí puede viajar muy lejos: más allá de las nubes… e incluso hacia atrás en el tiempo. Puede que os haga falta».",
    "polar": "Bajo la escarcha aparecieron dos rastros. Uno era de sombra, ligero y saltarín. El otro tenía tres dedos afilados, como las garras de un pájaro grande. Pompón sintió un escalofrío: alguien más andaba tras la estrella.",
    "silencio": "En aquel silencio, Pompón se dio cuenta de algo inquietante: era demasiado profundo. No cantaban los grillos, no silbaba el viento, no crujía ni una hoja. Alguien se estaba llevando los sonidos del mundo, uno a uno, como quien recoge flores.",
    "siete": "El Sombrero habló muy serio: «Ese tintineo es Tilín, una estrella que se cayó del cielo. Si no vuelve a su sitio antes de perder toda su luz, se apagará para siempre». Hizo una pausa larga. «Y entonces nadie, nunca, volverá a verla».",
    "conejo": "Durante el eclipse, una silueta alada cruzó el cielo graznando. Bajó en picado sobre el tejado de Pompón, arrancó con el pico la veleta dorada y se perdió entre las nubes antes de que nadie pudiera gritar.",
    "fases": "Mirando la luna, Pompón preguntó si allí vivía Tilín. «No», respondió el Sombrero. «Su hogar está mucho más lejos, en una constelación muy especial. Cuando llegue el momento, la reconocerás».",
    "pez": "El pez dorado se acercó al cristal y abrió la boca para contaros algo importante. No salió ningún sonido, ni siquiera una burbuja: también a él le habían robado la voz. Pero sus ojos, muy abiertos, señalaban hacia el tejado.",
    "gato": "El gato bostezó, se estiró y habló con voz de siesta: «Fue un cuervo enorme, negro como el carbón. Iba metiendo los sonidos en frascos de cristal y tapándolos con corcho. Y se reía fatal, eso sí».",
    "pera": "Entre las peras cayó una pluma negra, larga y brillante como el charol. En la punta, alguien había grabado un nombre con letra diminuta y muy presumida: «Don Cuervo». Pompón la guardó en el bolsillo.",
    "llave": "La puerta se abrió con un quejido. Dentro todo estaba revuelto, como si alguien hubiera buscado algo con mucha prisa. Sobre la mesa esperaba otra nota con la huella negra: «No soy quien crees».",
    "dormir": "Esa noche, Pompón soñó con su sombra. En el sueño no huía ni se burlaba de él: estaba muy quieta en mitad de un prado y le señalaba el cielo con una pata, como si quisiera enseñarle un secreto.",
    "zanahoria": "Mientras Pompón comía, apareció la Abuela Tortuga, tan despacio que nadie supo cuándo había llegado. «Las sombras no huyen sin motivo, pequeño», dijo. «Antes de perseguir a la tuya, pregúntate de qué está huyendo».",
    "tarde": "«Sin sombra no hay hora», murmuró la Abuela Tortuga. «Hace mucho tiempo, la gente miraba su sombra para saber qué hora era. Tú has perdido la tuya… y por eso el tiempo se te escapa entre las patas».",
    "tumbado": "Tumbado en la hierba, Pompón contaba estrellas para tranquilizarse. Y entonces lo vio: un hueco oscuro en mitad del cielo, pequeño y redondo, como el sitio vacío que deja un diente que se cae.",
    "susurro": "Pompón te habló muy bajito, casi avergonzado: «Me da miedo desaparecer. Pero me da más miedo no volver a ver a mi sombra. Siempre estaba conmigo… incluso cuando no estaba nadie más».",
    "trebol": "Bajo el trébol había una nota doblada en cuatro: «El cuervo quiere a Tilín para él solo. Yo la estoy escondiendo. Confía en mí». La firma era una huella negra… y Pompón, por primera vez, dudó.",
    "escondite": "Durante un segundo viste a la sombra asomada detrás de un arbusto. No huyó enseguida: te miró, te guiñó un ojo con complicidad y se deshizo en el aire como el humo de una vela. Pompón se quedó muy pensativo.",
    "vaso": "En el fondo del vaso brillaba un frasco diminuto tapado con corcho. Al abrirlo, el jardín se llenó de golpe con el sonido de la lluvia sobre las hojas. Pompón cerró los ojos y sonrió: era el primer sonido rescatado.",
    "arena": "Mientras caía la arena, Pompón notó un cosquilleo en las orejas. Al mirarse en un charco las vio un poquito más nítidas que antes. Cada sonido que volvía al mundo le devolvía también un pedacito de sí mismo.",
    "estatua": "La mariposa se posó un instante en su nariz y le habló al oído: «He visto a Don Cuervo. Esconde los frascos en los sitios más raros: dentro de semillas, entre las zanahorias, hasta en las maracas». Y se fue volando.",
    "diente": "Las semillas se dispersaron como un puñado de estrellas blancas. Una de ellas, sin embargo, cayó pesada: era un frasco con el sonido del viento. Al abrirlo, el aire volvió a silbar entre las ramas. Ya eran dos.",
    "salto": "Con el último salto, a Pompón se le escapó una carcajada. Era la primera risa que se oía en el jardín desde hacía días, y sonó tan bien que hasta los árboles parecieron estirarse para escucharla.",
    "silbido": "A tu silbido le respondió un pájaro desde muy lejos… con la voz robada de un grillo. Pompón se estremeció. Don Cuervo había pasado por allí hacía muy poco, y empezaba a cambiar los sonidos de sitio.",
    "toctoc": "Quien llamaba era la sombra. Cuando abriste, solo quedaba en el umbral un frasco con el murmullo de las hojas. Al lado, escrito con tiza: «Uno más para ti. Sigue buscando». Ya eran tres.",
    "canica": "Dentro de la canica giraba un brillo dorado, idéntico al de Tilín. Pompón la acercó a la oreja y le pareció oír un tintineo muy lejano. ¿Era una pista… o una trampa del cuervo?",
    "bocabajo": "Esa noche, Pompón durmió del tirón por primera vez desde la caída de la estrella. Al despertar, alguien le había echado una manta por encima. Tenía la forma exacta de una sombra.",
    "vuelta": "Dando vueltas, encontraste una pluma negra clavada en la tierra como una flecha. Apuntaba hacia una cueva escondida entre las rocas, de la que salía un zumbido extraño, como de muchas voces encerradas.",
    "maracas": "Las maracas devolvieron el ritmo al jardín. Primero fue un pie, luego una cola, después todas las orejas: hasta el gato acabó moviéndose al compás, aunque juraría que no.",
    "cueva": "La luz desveló el escondite del cuervo: estanterías y más estanterías de frascos llenos de sonidos, ordenados con mimo. Allí estaban el croar de las ranas, el crepitar del fuego, una nana olvidada… pero él ya se había marchado.",
    "iman": "Entre las zanahorias de metal había un frasco con el canto de los pájaros. Cuando lo abriste, el cielo se llenó de trinos y Pompón tuvo que sentarse, emocionado. Ya eran cuatro sonidos rescatados.",
    "sonido": "El mensaje no venía de la tierra, sino de arriba, de muy arriba. Pompón alzó la vista y, por un instante, una estrella le guiñó un ojo. «Nos está llamando», dijo el Sombrero.",
    "luna": "La luna llena se reflejó en el ala del Sombrero como en un espejo. «Agarraos fuerte», dijo, inclinándose. «Ha llegado la hora de subir. Tilín nos espera en el cielo».",
    "telescopio": "Por el telescopio se veía a Don Cuervo surcando el cielo nocturno con un saco a la espalda que tintineaba a cada aleteo. Iba de estrella en estrella, como un ladrón de joyas en una gran ciudad dormida.",
    "liebre": "«¡Mira!», susurró el Sombrero. «La Liebre: la constelación de los conejos. Fíjate bien… le falta una estrella, justo en la punta de la oreja». Pompón sintió que algo encajaba en su pecho.",
    "betelgeuse": "«Tilín es de ahí», explicó el Sombrero. «Una noche se asomó demasiado para ver a los conejos de la Tierra… y se cayó. Por eso eligió tu jardín, Pompón. Quería conocerte».",
    "australia": "Al otro lado del mundo, bajo un cielo del revés, la sombra había dejado otra nota sujeta con una piedra: «El cuervo no se rinde. Yo tampoco. Daos prisa».",
    "osamayor": "La estrella Polar marcó el camino, fija y paciente como siempre. Al seguirla, Pompón se miró las patas: ya casi no se veía la hierba a través de ellas. Estaba volviendo a ser él.",
    "giro": "Mientras el cielo giraba despacio, una sombra pequeña saltaba de estrella en estrella como quien cruza un río por las piedras. Llevaba algo que brillaba entre los brazos, y lo protegía con todo el cuerpo.",
    "pleyades": "Entre mil estrellas hubo una que tintineó distinto. «¡Tilín!», gritó Pompón. La lucecita se volvió, parpadeó dos veces como diciendo «estoy aquí»… y se apagó de golpe, como si alguien la hubiera tapado.",
    "sirio": "La estrella más brillante del cielo habló con voz cansada: «Un cuervo me pidió que le prestara mi brillo. Le dije que no y se enfadó muchísimo. Dijo que nadie le hacía caso nunca. Parecía más triste que malo».",
    "ventana": "Al mirar el cielo de verdad, el de tu ventana, el Sombrero dijo en voz baja: «Desde aquí también se ve la Liebre. Esta noche, búscala. Si ves que le falta una estrella en la oreja, ya sabes por qué».",
    "astronauta": "Dentro de la nave flotaba un frasco que giraba despacio en el aire. Al abrirlo, la cabina se llenó con el ronroneo de un gato, y Pompón se rió solo en mitad del espacio. Ya eran cinco.",
    "planetas": "Entre los planetas apareció Don Cuervo, con las plumas erizadas: «¡Cra! ¿Buscáis esto?». Agitó un frasco brillante delante de vosotros y salió disparado hacia la Luna, dejando una estela de purpurina.",
    "pesoluna": "En la Luna solo quedaba una pluma… y un sombrero idéntico al Sombrero, pero vacío y polvoriento. «Mi hermano», susurró el Sombrero, con la voz rota. «El cuervo lo ha usado para escapar al pasado».",
    "semaforo": "De vuelta en la ciudad, las luces parpadeaban como si quisieran contar algo que no se atrevían a decir. La Abuela Tortuga escuchaba con los ojos cerrados. «Esta ciudad recuerda cosas», dijo. «Y nosotros también».",
    "piano": "Aquella melodía le hizo cosquillas a Pompón en la memoria: su madre se la tarareaba cuando era muy pequeño, antes de dormir. Por un momento olvidó la estrella, el cuervo y la sombra, y solo escuchó.",
    "cafe": "«El cuervo tiene prisa por todo», dijo la Abuela Tortuga, soplando su taza. «Quiere cantar bien ya, tener amigos ya, brillar ya. Y por eso se equivoca tanto. Las cosas buenas, pequeño, se enfrían despacio».",
    "manana": "La bola de cristal se aclaró y mostró a la sombra interponiéndose entre Tilín y el pico del cuervo. Pompón abrió mucho los ojos y, casi sin voz, dijo: «Mi sombra… está protegiéndola».",
    "agujero": "Al otro lado de la mirilla, alguien había dibujado en la pared un mapa con cuatro lugares muy antiguos: una pirámide, un templo, un acueducto y un laberinto. En una esquina, la huella negra de siempre.",
    "32": "Bajo el mensaje del emperador, la sombra había añadido unas palabras con letra apresurada: «El cuervo ha huido al pasado. Seguidle. Yo os esperaré donde la luz se esconde a mediodía».",
    "faro": "La luz del faro barría el mar de un lado a otro, contando números que no terminan nunca. «Así es el tiempo sin una sombra que lo mida», dijo el Sombrero. «Infinito… y un poco solitario».",
    "pi": "En cuanto el círculo se cerró, el Sombrero empezó a girar sobre sí mismo cada vez más deprisa. «¡Agarraos fuerte!», gritó. «¡Nos vamos muy, muy atrás!». Y el mundo se volvió un remolino de arena dorada.",
    "jeroglificos": "En una pared de Egipto, entre escribas y faraones, había un conejo dibujado hace miles de años. Y a su lado, un cuervo con un saco a la espalda. «Ha estado aquí», dijo Pompón. «Y no hace tanto».",
    "anubis": "Cuando el corazón quedó tan ligero como la pluma, la balanza dejó caer un frasco antiguo. Dentro sonaba el arpa de un músico egipcio, dulce como el agua del Nilo. Ya eran seis sonidos.",
    "escarabajo": "Al ponerse el Sol, la sombra de Pompón se dibujó un instante sobre la arena, larga y delgada. Levantó una pata y le saludó. Luego el Sol se hundió en el horizonte y la sombra se fue con él.",
    "piramide": "A la salida de la pirámide, Don Cuervo os esperaba posado en una palmera: «¡Cra! ¡Nunca me alcanzaréis!». Y antes de que pudierais acercaros, se zambulló de cabeza en el sombrero hermano.",
    "pitagoras": "En Grecia, la cuerda vibró y, entre sus notas, Pompón oyó una voz conocida: «Estoy bien, Pompón. Tu sombra me cuida. Pero tengo frío… y cada vez brillo menos».",
    "eureka": "En el fondo de la bañera de Arquímedes, bajo el agua tibia, había un frasco con el rumor de las olas. Al abrirlo, olió a sal y a verano. Ya eran siete sonidos rescatados.",
    "ariadna": "En el centro del laberinto no había ningún monstruo, solo una pluma de cuervo prendida al suelo. Y el hilo, en vez de terminar, seguía desenrollándose… en dirección a Roma.",
    "acueducto": "El agua corrió por fin hasta la ciudad y trajo flotando un frasco que se mecía como un barquito. Dentro sonaba una fuente, fresca y alegre. Ya eran ocho.",
    "mosaico": "Cuando la última pieza encajó, el mosaico mostró a un conejo y a su sombra bailando juntos bajo una estrella. Pompón se quedó mirándolo mucho rato, con una sensación extraña en la barriga.",
    "romano": "Un soldado romano, todavía pálido, juró haber visto «un pájaro negro con sombrero» volar hacia el sol en pleno día. «Iba hacia el sitio donde la luz se esconde», dijo el Sombrero. «Hacia el eclipse».",
    "laberinto": "Al salir del laberinto, la sombra estaba esperando, sentada sobre una piedra. Esta vez no huyó. Se levantó despacio, miró a Pompón a los ojos y dijo: «Ven. Ya es hora de que te lo cuente todo».",
    "eclipse": "En el silencio del eclipse, la sombra habló por fin: «Nunca te robé la estrella, Pompón. La salvé. El cuervo quería encerrarla para siempre y yo era el único lo bastante oscuro para esconderla. Ahora necesito tu ayuda».",
    "melodia": "La sombra os guió hasta la guarida de Don Cuervo: un nido gigantesco hecho de ramas, cintas y cucharillas, lleno de cosas brillantes y frascos que zumbaban como colmenas. Por dentro, sonaba una melodía.",
    "beethoven": "Sobre una balanza del nido había una nota del cuervo, escrita con mucho cuidado: «Cuando tenga todos los sonidos bonitos del mundo, cantaré mejor que nadie. Y entonces me escucharán».",
    "6": "Las bombillas iluminaron un rincón con un frasco muy especial, envuelto en un pañuelo: la risa de los niños. Al abrirlo, el nido entero pareció más pequeño y menos triste. Ya eran nueve.",
    "42": "Junto a una foto de la Luna había un dibujo hecho por el cuervo: él mismo, cantando sobre una rama, rodeado de amigos que aplaudían. Era el único dibujo del nido en el que sonreía.",
    "1969": "«El cuervo no es malo», dijo la Abuela Tortuga, que acababa de llegar, sin que nadie supiera cómo. «De pequeño se reían de su graznido. Solo quiere que alguien lo escuche hasta el final».",
    "bach": "En un cuaderno gastado, el cuervo había apuntado todas las veces que saludó y nadie le contestó. Las páginas estaban llenas de palitos. Pompón cerró el cuaderno con cuidado, como quien tapa a alguien dormido.",
    "13": "Detrás de un corazón pintado en la pared había una puerta pequeña. Desde dentro llegaba un tintineo débil, casi un suspiro: «Tilín… tilín…». Pompón apoyó la oreja y sintió que la luz se apagaba al otro lado.",
    "roma": "La puerta tenía un mensaje en relieve, para leer con los dedos: «Aquí guardo lo más bonito que he encontrado nunca. No lo toquéis». Debajo, más pequeño: «Por favor».",
    "radio": "La radio del nido se encendió sola. Era el cuervo, ensayando una canción para nadie. Desafinaba muchísimo, pero cantaba con tantas ganas que Pompón no pudo evitar mover una oreja al compás.",
    "mozart": "Detrás de un cuadro torcido había un frasco que olía a algas. Al abrirlo, el nido se llenó con el rumor del mar, enorme y tranquilo. Ya eran diez sonidos de vuelta en el mundo.",
    "14": "La nota del diapasón hizo vibrar todos los frascos a la vez, como un coro diminuto. «Los sonidos quieren volver a casa», dijo la sombra. «Igual que Tilín. Igual que yo».",
    "la": "La Abuela Tortuga se sentó, por fin, después de un largo camino. «Paso a paso», dijo sonriendo. «Así se llega a todas partes. Y vosotros ya casi habéis llegado».",
    "cuba": "Al terminar la cuenta atrás, el suelo del nido crujió y se abrió una trampilla secreta. Unas escaleras de ramas bajaban hacia una luz dorada que latía despacio, como un corazón cansado.",
    "10": "En un móvil antiguo había un mensaje del cuervo que nunca llegó a enviar. Solo decía: «¿Queréis ser mis amigos?». Pompón lo leyó dos veces y se quedó callado.",
    "taxi": "Justo a tiempo, la sombra apartó a Pompón de una trampa del cuervo: una red llena de purpurina que habría tardado semanas en sacudirse de las orejas. «Te debo una», dijo Pompón. «Me debes varias», contestó la sombra.",
    "pulso": "El corazón de Pompón latía muy deprisa. Ya se veía entero otra vez: las orejas, la cola, cada bigote. Solo le faltaba una cosa, y caminaba a su lado, en silencio, sin atreverse a volver.",
    "dado": "Bajo los dados encontrasteis un plano del nido dibujado a carboncillo. Una gran X marcaba el lugar, y al lado, con la letra presumida del cuervo: «Mi tesoro. Mi caja de música».",
    "16": "La luz del prisma iluminó la caja de música, pequeña y labrada en plata. Dentro, apagándose como una brasa, estaba Tilín. Al veros, intentó tintinear… pero solo le salió un susurro.",
    "prisma": "«Solo se abre con música», dijo la sombra, acariciando la tapa. «El cuervo la cerró con una canción que solo él conoce. Pero las canciones dejan pistas, igual que las sombras».",
    "verde": "En la tapa, el cuervo había escrito una serie de números que se describe a sí misma. Debajo, con letra pequeña y triste: «Como yo: solo sé hablar de mí, porque nadie me pregunta nada».",
    "312211": "La caja tocó una melodía al revés y, de repente, Pompón lo entendió todo: era una canción de cumpleaños. El cumpleaños del cuervo. Y estaba escondida al revés porque nadie se la había cantado nunca del derecho.",
    "cumpleanos": "«Hoy es su cumpleaños y nadie se ha acordado», dijo la Abuela Tortuga. Pompón miró la tarta que habían encontrado en el nido, sin velas, sin nadie alrededor, y tuvo una idea.",
    "23": "La caja fuerte se abrió con un clic. Dentro estaba la llave de la caja de música… y una vela de cumpleaños sin estrenar, guardada con mimo, como quien guarda una esperanza.",
    "647": "Al sonar la melodía, la tapa de la caja de música se abrió despacio. Tilín salió flotando, débil y pálida, pero sonriendo. «Sabía que vendríais», tintineó. «Lo sabía».",
    "oido": "Entonces se oyó un aleteo. Don Cuervo aterrizó en el borde del nido. No venía a pelear: traía la cabeza gacha, las plumas caídas y, en el pico, la veleta dorada de Pompón.",
    "relojero": "«Solo quería cantar bonito para que alguien me escuchara», graznó el cuervo, y por primera vez su voz no sonó fea, sino triste. Pompón se acercó despacio y le tendió la pata.",
    "75": "«Te escucharemos», dijo Pompón. «Todo lo que quieras contar. Pero los sonidos tienen que volver a su sitio, y Tilín también». El cuervo lo miró un largo rato… y asintió.",
    "violin": "Uno a uno, el cuervo destapó los frascos. Los sonidos salieron volando como pájaros liberados: la lluvia, el viento, las olas, la risa de los niños… y el mundo, poco a poco, volvió a sonar.",
    "octava": "Solo quedaba devolver a Tilín al cielo. «Para llegar tan alto hace falta el sonido más grande de todos», dijo el Sombrero, mirando a cada uno. «Uno que solo podemos hacer juntos».",
    "theremin": "Todos se reunieron para un concierto bajo las estrellas: Pompón, la sombra, el Sombrero, la Abuela Tortuga, el gato, el pez… y Don Cuervo, nervioso, en primera fila, ensayando por lo bajo.",
    "copas": "Con cada nota, Tilín brillaba un poco más, como una brasa que alguien sopla con cariño. La sombra, sin decir nada, dio un paso hacia Pompón. Luego otro.",
    "cantar": "Cantaste, y Don Cuervo, muerto de vergüenza, se animó a cantar contigo. Desafinaba como siempre… y a nadie le importó lo más mínimo. Por primera vez en su vida, alguien le aplaudía.",
    "director": "La música subió y subió hasta rozar las estrellas. Tilín empezó a elevarse, despacio, y la sombra la acompañó un trecho para despedirse, como se acompaña a un amigo hasta la puerta.",
    "bravo": "Con el último aplauso, Tilín volvió a su sitio en la oreja de la Liebre, y el cielo quedó completo. La sombra regresó a los pies de Pompón y se quedó allí, tranquila. Y desde entonces, si miras bien, dentro de ella brilla una estrellita."
  };

  // Capítulos: empiezan en estos niveles
  const CAPITULOS = {
    "arbol": ["Capítulo 1", "La estrella caída"],
    "reloj": ["Capítulo 2", "Un sombrero que habla"],
    "conejo": ["Capítulo 3", "El jardín sin sonidos"],
    "vaso": ["Capítulo 4", "Los frascos del cuervo"],
    "telescopio": ["Capítulo 5", "Rumbo a las estrellas"],
    "semaforo": ["Capítulo 6", "La ciudad de los recuerdos"],
    "jeroglificos": ["Capítulo 7", "Viaje al pasado"],
    "melodia": ["Capítulo 8", "El nido de Don Cuervo"],
    "16": ["Capítulo 9", "La caja de música"],
    "theremin": ["Capítulo 10", "El concierto de las estrellas"]
  };
  // Personajes que se asoman en algunas pantallas
  const APARICIONES = {
    "vela": ["sombra", "Jijiji…"],
    "globo": ["sombra", "¿Te ayudo? Tengo un alfiler…"],
    "madriguera": ["sombra", "¡Por aquí no está! (Sí está.)"],
    "reloj": ["sombrero", "Ejem… ¿alguien me ha llamado?"],
    "polar": ["cuervo", "¡Cra! Eso brilla…"],
    "gato": ["cuervo", "¡Cra! Qué siesta tan larga…"],
    "llave": ["sombra", "Yo ya tengo copia, jiji."],
    "tarde": ["tortuga", "Las prisas no son buenas, pequeño…"],
    "trebol": ["sombra", "Yo tengo tres hojas y soy feliz."],
    "vaso": ["cuervo", "¡Ese frasco es mío! ¡Cra!"],
    "estatua": ["sombra", "¡Te has movido! …Es broma."],
    "toctoc": ["sombra", "¿Quién es? …Yo tampoco lo sé."],
    "vuelta": ["sombra", "Uf… qué mareo."],
    "cueva": ["tortuga", "Yo vivo aquí desde hace cien años."],
    "sonido": ["tilin", "Tilín, tilín…"],
    "astronauta": ["sombrero", "No me gusta nada la gravedad cero."],
    "semaforo": ["sombra", "Rojo, verde… ¡qué aburrido!"],
    "cafe": ["tortuga", "Esperar también es un arte."],
    "jeroglificos": ["sombrero", "Aquí me llamaban «el gran tocado»."],
    "piramide": ["sombra", "¡Buuu! ¿Te he asustado?"],
    "mosaico": ["cuervo", "Esa pieza brillante… ¡mía!"],
    "melodia": ["cuervo", "¡Eh! ¡Esa melodía la robé yo!"],
    "10": ["sombra", "Yo escribo más rápido con las orejas."],
    "taxi": ["tortuga", "¿Cinco segundos? Yo tardo eso en parpadear."],
    "copas": ["tilin", "¡Ya casi estoy en casa!"]
  };
  // Comentarios de los personajes al pedir la primera pista
  const BURLAS = {
    "arcoiris": "Sombra: «¿Una pista? Yo lo resolví en dos segundos»",
    "eco": "Sombrero: «Gritar no es de buena educación… salvo hoy»",
    "siete": "Sombra: «Pista: yo sé la respuesta. Y no te la voy a decir»",
    "pera": "Don Cuervo: «¡Cra! ¿Las pistas brillan? ¿Me das una?»",
    "piano": "Abuela Tortuga: «Escucha despacio. Yo siempre lo hago»",
    "32": "Sombra: «Yo leo al revés, al derecho y de lado»",
    "bach": "Don Cuervo: «Yo también cuento cosas: cuento brillos»",
    "23": "Sombra: «Yo abriría esa caja con una sola mirada. Si tuviera ojos de verdad»"
  };
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
    if (pasando) return; pasando = true;
    if (indice >= 0) {
      const clave = saltado ? "saltados" : "superados", lista = leerLista(clave);
      if (!lista.includes(archivo)) { lista.push(archivo); guardarLista(clave, lista); }
    }
    document.querySelectorAll(".panel-pista, .panel-menu, .rendirse").forEach(p => p.classList.remove("abierto"));
    const siguiente = url.replace(/\.html$/, "");
    const nSig = NIVELES.indexOf(siguiente);
    const frase = ELOGIOS[archivo] || "";
    const codigo = nSig >= 0 ? `<span class="sup-codigo">Código del nivel ${nSig + 1}: <b>${CODIGOS[siguiente]}</b></span>` : "";
    document.body.insertAdjacentHTML("beforeend", `
      <div class="superado" role="status">
        <span class="sup-nivel">Nivel ${indice + 1} ${saltado ? "saltado" : "superado"}</span>
        ${HISTORIA[archivo] ? `<p class="relato">${HISTORIA[archivo]}</p>` : ""}
        ${saltado ? "" : `<p class="elogio">${frase}</p>`}
        ${(() => { const luz = Math.round((indice + 1) / NIVELES.length * 100); return `<div class="luz-tilin"><span class="lt-txt">Luz de Tilín</span><div class="lt-barra"><span style="width:${luz}%"></span></div><span class="lt-num">${luz} %</span></div>`; })()}
        ${codigo}
        <button class="sup-seguir">Continuar</button>
        ${CURIOSIDADES[archivo] ? `<div class="curiosidad"><span class="cur-titulo">¿Sabías que…?</span><p class="cur-texto">${CURIOSIDADES[archivo]}</p></div>` : ""}
      </div>`);
    const el = document.querySelector(".superado");
    el.querySelector(".sup-seguir").addEventListener("click", () => { location.href = url; });
    // Apagar los sonidos del nivel (la radio, los zumbidos…) poco después de la melodía de victoria
    if (salida) { const c = audio(); salida.gain.setTargetAtTime(0, c.currentTime + 1.2, .25); }
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("visible")));
  }

  const CONEJO = `<svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
    <ellipse cx="14" cy="10" rx="4" ry="10"/><ellipse cx="26" cy="10" rx="4" ry="10"/>
    <circle cx="20" cy="26" r="11"/></svg>`;

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
          <p class="mi-codigo">Código de este nivel: <b>${CODIGOS[archivo] || "—"}</b></p>
          ${anterior ? `<button class="accion" data-a="atras">← Nivel anterior</button>` : ""}
          <button class="accion" data-a="rendirse">🏳️ Me rindo, pasar de nivel</button>
          <div class="fila-codigo">
            <input type="text" maxlength="6" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Código" aria-label="Código de nivel">
            <button class="accion corta" data-a="codigo">Ir</button>
          </div>
          <button class="accion" data-a="idioma">🌐 ${otro}</button>
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
        <button class="boton-ojo" aria-label="Escribir la palabra">${CONEJO}</button>
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
            <p class="texto-pista">¿Seguro? Pasarás al siguiente nivel sin resolver este. Siempre podrás volver a él desde el menú.</p>
            <div class="acciones">
              <button class="otra si">Sí, pasar de nivel</button>
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
