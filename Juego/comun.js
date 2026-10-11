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
    "arbol": "Esa noche cayó una estrella diminuta en el jardín. Pompón la tocó… y su sombra se despegó, la cogió y saltó al agujero del árbol.",
    "vela": "Al apagarse la vela se oyó una risita en la oscuridad. No era de Pompón. Era de su sombra.",
    "globo": "Entre el confeti cayó un papel con una huella negra: «¿Me buscas? Tendrás que darte prisa».",
    "arcoiris": "Con los colores en su sitio, Pompón se miró las patas: sin su sombra, se estaba volviendo un poco transparente.",
    "espejo": "En el túnel se oía un tintineo, como de campanillas. Algo pequeño y brillante pedía ayuda allá abajo.",
    "madriguera": "Pompón te miró un segundo antes de esconderse. Estaba asustado: nunca había salido de su jardín.",
    "oscuridad": "«¡Me has encontrado!», susurró Pompón. «Mi sombra se ha llevado una estrella. ¿Me ayudas a recuperarlas antes de que desaparezca del todo?».",
    "eco": "La montaña devolvió tu voz… y una vocecita: «¡Tilín, tilín! ¡Me llamo Tilín! ¡Sacadme de aquí!».",
    "reloj": "De un agujero salió un sombrero de copa que bostezó: «¿Quién me ha despertado? Ah, una sombra con prisa… Pasó por aquí hace un rato».",
    "brujula": "«Me llamo Sombrero», dijo el sombrero. «Todo lo que entra en mí puede viajar muy lejos. ¿Queréis probar?».",
    "polar": "Bajo la escarcha había dos huellas: una de sombra… y otra con tres dedos, como de pájaro. ¿Quién más anda tras la estrella?",
    "silencio": "En el silencio, Pompón oyó algo raro: el jardín ya no sonaba. Ni grillos, ni viento, ni hojas. Alguien se está llevando los sonidos.",
    "siete": "El Sombrero se puso serio: «Ese tintineo es Tilín, una estrella. Si no vuelve a su sitio en el cielo, se apagará para siempre».",
    "conejo": "Durante el eclipse, una mancha negra cruzó el cielo graznando y se llevó algo brillante del tejado de Pompón.",
    "fases": "Tilín vive en la Luna… o eso creía Pompón. «No», dijo el Sombrero, «su casa está más lejos, en una constelación muy especial».",
    "pez": "El pez abrió la boca para contar algo… pero no le salió ningún sonido. También le han robado la voz.",
    "gato": "El gato, medio dormido, dijo: «Fue un cuervo enorme. Iba metiendo sonidos en frascos de cristal».",
    "pera": "Entre las peras cayó una pluma negra y brillante. En la punta tenía escrito: «Don Cuervo».",
    "llave": "Dentro todo estaba revuelto. Sobre la mesa, una nota de la sombra: «No soy quien crees».",
    "dormir": "Pompón soñó con su sombra. En el sueño no huía: le señalaba el cielo.",
    "zanahoria": "Llegó la Abuela Tortuga, despacito: «Las sombras no huyen sin motivo, pequeño. Pregúntate de qué escapa la tuya».",
    "tarde": "«Sin sombra no sabes la hora», dijo la Abuela Tortuga. «Antes la gente miraba su sombra para saber qué hora era».",
    "tumbado": "Tumbado en la hierba, Pompón vio un hueco oscuro en el cielo, como si faltara una estrella.",
    "susurro": "Pompón te contó un secreto: le da miedo desaparecer… pero más miedo le da no volver a ver a su sombra.",
    "trebol": "Bajo el trébol había otra nota: «El cuervo quiere a Tilín. Yo la estoy escondiendo». Firmado: una huella negra.",
    "escondite": "Durante un segundo viste a la sombra detrás de un arbusto. Te guiñó un ojo… y desapareció.",
    "vaso": "En el fondo del vaso había un frasco diminuto. Al abrirlo, sonó la lluvia. ¡Has rescatado el primer sonido!",
    "arena": "Mientras caía la arena, Pompón notó que sus orejas volvían a verse un poco más.",
    "estatua": "La mariposa susurró: «Vi a Don Cuervo. Esconde los frascos de sonidos en sitios muy altos».",
    "diente": "Una semilla no voló: era un frasco con el sonido del viento. ¡Ya van dos sonidos!",
    "salto": "Con el último salto, a Pompón se le escapó una carcajada. Era la primera risa del jardín en muchos días.",
    "silbido": "Al silbar, contestó un pájaro desde lejos… con la voz robada de un grillo. Don Cuervo andaba cerca.",
    "toctoc": "Quien llamaba era la sombra. Cuando abriste, solo quedaba un frasco: el sonido de las hojas. ¡Ya van tres!",
    "canica": "Dentro de la canica giraba un brillo dorado, igual que el de Tilín. ¿Una pista… o una trampa?",
    "bocabajo": "Esa noche, Pompón durmió del tirón. Al despertar, alguien había dejado una manta sobre él. Tenía forma de sombra.",
    "vuelta": "Dando vueltas, encontraste una pluma negra clavada en el suelo, señalando hacia una cueva.",
    "maracas": "Las maracas devolvieron el ritmo al jardín. Hasta el gato movió la cola al compás.",
    "cueva": "La luz desveló el escondite del cuervo: frascos y más frascos llenos de sonidos… pero él ya se había ido.",
    "iman": "Entre las zanahorias había un frasco con el canto de los pájaros. ¡Ya van cuatro sonidos!",
    "sonido": "El mensaje no venía de la Tierra. Venía de arriba, muy arriba.",
    "luna": "La luna llena se reflejó en el Sombrero. «Agarraos a mi ala», dijo. «Tilín nos espera en el cielo».",
    "telescopio": "Por el telescopio se veía a Don Cuervo volando entre las estrellas, con un saco lleno de brillos.",
    "liebre": "«¡Mira!», dijo el Sombrero. «La Liebre: la constelación de los conejos. Le falta una estrella… justo en la oreja».",
    "betelgeuse": "«Tilín es de esa constelación», explicó el Sombrero. «Cayó por intentar ver a los conejos de la Tierra».",
    "australia": "Al otro lado del mundo, la sombra dejó otra nota: «El cuervo no se rinde. Yo tampoco».",
    "osamayor": "La Polar señaló el camino. Al seguirlo, Pompón notó que ya se veía casi entero otra vez.",
    "giro": "Mientras el cielo giraba, una sombra pequeña saltaba de estrella en estrella. Llevaba algo que brillaba.",
    "pleyades": "Entre mil estrellas, una tintineaba distinto. «¡Tilín!», gritó Pompón. Pero desapareció en un parpadeo.",
    "sirio": "La estrella más brillante habló: «Un cuervo me pidió que le prestara mi brillo. Le dije que no y se enfadó muchísimo».",
    "ventana": "Al mirar el cielo de verdad, el Sombrero dijo: «Desde aquí también se ve la Liebre. Esta noche, búscala tú».",
    "astronauta": "En la nave flotaba un frasco con un sonido nuevo: el ronroneo de un gato. ¡Ya van cinco!",
    "planetas": "Entre los planetas apareció Don Cuervo: «¡Cra! ¿Buscáis esto?». Agitó un frasco y se fue volando hacia la Luna.",
    "pesoluna": "En la Luna solo quedaba una pluma… y un sombrero idéntico al Sombrero, pero vacío. «Mi hermano», susurró el Sombrero. «El cuervo lo ha usado para viajar».",
    "semaforo": "De vuelta en la ciudad, las luces parpadeaban como si quisieran contar algo. La Abuela Tortuga escuchaba con atención.",
    "piano": "La melodía hizo sonreír a Pompón: su madre se la tarareaba cuando era pequeño.",
    "cafe": "«El cuervo tiene prisa por todo», dijo la Abuela Tortuga. «Por eso se equivoca tanto».",
    "manana": "La bola de cristal mostró a la sombra protegiendo a Tilín del cuervo. Pompón abrió mucho los ojos: «¡Mi sombra es buena!».",
    "agujero": "Al otro lado, alguien había dibujado un mapa con cuatro lugares muy antiguos. Al lado, una huella negra.",
    "32": "Bajo el mensaje cifrado, la sombra había escrito: «El cuervo ha viajado al pasado. Seguidle».",
    "faro": "La luz del faro se movía como si buscara algo en el mar del tiempo.",
    "pi": "Con el círculo perfecto, el Sombrero se puso a girar: «¡Agarraos! Nos vamos muy, muy atrás».",
    "jeroglificos": "En una pared de Egipto había un conejo dibujado… y a su lado, un cuervo con un saco.",
    "anubis": "La balanza dejó caer un frasco con un sonido antiguo: el arpa de un músico egipcio. ¡Ya van seis!",
    "escarabajo": "Al ponerse el Sol, la sombra de Pompón se dibujó un instante en la arena… y le saludó con la mano.",
    "piramide": "A la salida, Don Cuervo os esperaba: «¡Cra! Nunca me alcanzaréis». Y se metió en el sombrero hermano.",
    "pitagoras": "En Grecia, la cuerda vibró y Pompón oyó a Tilín: «Estoy bien. Vuestra sombra me cuida».",
    "eureka": "En la bañera de Arquímedes había un frasco con el sonido de las olas. ¡Ya van siete!",
    "ariadna": "En el centro del laberinto no estaba el Minotauro, sino una pluma de cuervo. Y el hilo seguía… hacia Roma.",
    "acueducto": "El agua llegó a la ciudad y trajo flotando un frasco: el sonido de una fuente. ¡Ya van ocho!",
    "mosaico": "El mosaico mostraba a un conejo y a su sombra bailando juntos. Pompón sintió cosquillas en la barriga.",
    "romano": "Un soldado romano juró haber visto «un pájaro negro con un sombrero» volar hacia un eclipse.",
    "laberinto": "Al salir del laberinto, la sombra estaba esperando. Esta vez no huyó. «Ven», dijo. «Te lo explicaré todo».",
    "eclipse": "En el eclipse, la sombra habló por fin: «No te robé la estrella, Pompón. La salvé del cuervo. Ahora necesito tu ayuda».",
    "melodia": "La sombra os llevó hasta la guarida de Don Cuervo: un nido enorme lleno de cosas brillantes y frascos que zumbaban.",
    "beethoven": "En una balanza del nido había una nota del cuervo: «Cuando tenga todos los sonidos bonitos, cantaré mejor que nadie».",
    "6": "Las bombillas iluminaron un rincón con un frasco muy especial: la risa de los niños. ¡Ya van nueve!",
    "42": "Junto a una foto de la Luna había un dibujo hecho por el cuervo: él mismo, cantando, rodeado de amigos.",
    "1969": "«El cuervo no es malo», dijo la Abuela Tortuga, que acababa de llegar. «Se ríen de su graznido. Solo quiere que lo escuchen».",
    "bach": "En un cuaderno, el cuervo había contado todas las veces que nadie le contestó al saludar. Eran muchísimas.",
    "13": "Detrás de un corazón pintado había una puerta. Desde dentro, un tintineo débil: «Tilín… tilín…».",
    "roma": "La puerta tenía un mensaje en braille: «Aquí guardo lo más bonito que he encontrado nunca».",
    "radio": "La radio del nido sonó sola: era el cuervo, practicando una canción. Lo hacía fatal… pero con mucho cariño.",
    "mozart": "Detrás de un cuadro había un frasco con el sonido del mar. ¡Ya van diez!",
    "14": "Todos los frascos vibraron a la vez. «Los sonidos quieren volver a casa», dijo la sombra.",
    "la": "La Abuela Tortuga sonrió: «Paso a paso. Ya casi lo tenéis».",
    "cuba": "Tras la cuenta atrás, se abrió un hueco secreto en el nido: unas escaleras que bajaban hacia una luz dorada.",
    "10": "En un móvil antiguo había un mensaje del cuervo sin enviar: «¿Queréis ser mis amigos?».",
    "taxi": "Justo a tiempo, la sombra apartó a Pompón de una trampa del cuervo: una red llena de purpurina.",
    "pulso": "El corazón de Pompón latía muy deprisa. Ya se veía entero otra vez… salvo la sombra.",
    "dado": "Bajo los dados había un plano del nido con una X junto a una caja de música.",
    "16": "La luz iluminó la caja de música. Dentro, apagándose poco a poco, estaba Tilín.",
    "prisma": "«Solo se abre con música», dijo la sombra. «El cuervo la cerró con una canción».",
    "verde": "En la tapa, el cuervo había escrito una serie que se describe a sí misma. Debajo: «Como yo: solo hablo de mí».",
    "312211": "La caja tocó una canción al revés. Pompón lo entendió: era una canción de cumpleaños… ¡del cuervo!",
    "cumpleanos": "«Hoy es su cumpleaños y nadie se ha acordado», dijo la Abuela Tortuga. Pompón miró la tarta y tuvo una idea.",
    "23": "La caja fuerte se abrió: dentro estaba la llave de la caja de música… y una vela de cumpleaños sin estrenar.",
    "647": "Al tocar la melodía, la caja de música se abrió. Tilín salió volando, débil, pero sonriendo.",
    "oido": "Con todo afinado, apareció Don Cuervo. No venía a pelear: traía la cabeza gacha.",
    "relojero": "«Solo quería cantar bonito para que alguien me escuchara», graznó el cuervo. Pompón le tendió la pata.",
    "75": "«Te escucharemos», dijo Pompón. «Pero los sonidos tienen que volver a su sitio». El cuervo asintió.",
    "violin": "El cuervo abrió los frascos uno a uno y los sonidos salieron volando hacia el mundo.",
    "octava": "Solo faltaba devolver a Tilín al cielo. «Para eso hace falta el sonido más fuerte de todos», dijo el Sombrero.",
    "theremin": "Todos se reunieron para un concierto: Pompón, la sombra, el Sombrero, la Abuela Tortuga… y Don Cuervo, nervioso.",
    "copas": "Con cada nota, Tilín brillaba un poco más. La sombra se acercó despacio a Pompón.",
    "cantar": "Cantaste, y Don Cuervo se animó a cantar contigo. Desafinaba… y a nadie le importó.",
    "director": "La música subió hasta las estrellas. Tilín se elevó, y la sombra la acompañó un trecho para despedirse.",
    "bravo": "Con el aplauso, Tilín volvió a su sitio en la oreja de la Liebre. La sombra regresó a los pies de Pompón… y desde entonces, dentro de ella brilla una estrellita."
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
        ${CURIOSIDADES[archivo] ? `<div class="curiosidad"><span class="cur-titulo">¿Sabías que…?</span><p class="cur-texto">${CURIOSIDADES[archivo]}</p></div>` : ""}
        ${(() => { const luz = Math.round((indice + 1) / NIVELES.length * 100); return `<div class="luz-tilin"><span class="lt-txt">Luz de Tilín</span><div class="lt-barra"><span style="width:${luz}%"></span></div><span class="lt-num">${luz} %</span></div>`; })()}
        ${codigo}
        <button class="sup-seguir">Continuar</button>
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
      const t = setTimeout(quitar, 2800);
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
    sombra: `<svg viewBox="0 0 120 130"><ellipse cx="48" cy="28" rx="9" ry="28" fill="#05080F" transform="rotate(-12 48 28)"/><ellipse cx="70" cy="26" rx="9" ry="28" fill="#05080F" transform="rotate(10 70 26)"/><ellipse cx="62" cy="100" rx="38" ry="28" fill="#05080F"/><circle cx="56" cy="66" r="24" fill="#05080F"/><circle cx="47" cy="62" r="5" fill="#F2E9C9"/><circle cx="64" cy="62" r="5" fill="#F2E9C9"/><path d="M46 76 Q55 83 64 76" stroke="#F2E9C9" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`,
    cuervo: `<svg viewBox="0 0 120 100"><path d="M20 60 Q40 30 75 38 Q100 40 108 55 L92 58 Q80 80 50 82 Q30 80 20 60Z" fill="#141414"/><path d="M40 55 Q55 20 85 30 Q60 45 40 55Z" fill="#222"/><path d="M106 50 L120 54 L106 58Z" fill="#E0A030"/><circle cx="96" cy="48" r="3.5" fill="#F2E9C9"/><path d="M45 82 L42 96 M58 82 L58 96" stroke="#E0A030" stroke-width="3"/></svg>`,
    sombrero: `<svg viewBox="0 0 120 110"><ellipse cx="60" cy="96" rx="55" ry="10" fill="#1E1E2A"/><rect x="25" y="20" width="70" height="78" rx="6" fill="#262636"/><rect x="25" y="70" width="70" height="12" fill="#8E2433"/><circle cx="48" cy="45" r="7" fill="#F2E9C9"/><circle cx="72" cy="45" r="7" fill="#F2E9C9"/><circle cx="49" cy="46" r="3" fill="#0B1020"/><circle cx="73" cy="46" r="3" fill="#0B1020"/><path d="M50 58 Q60 64 70 58" stroke="#F2E9C9" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`,
    tortuga: `<svg viewBox="0 0 130 90"><ellipse cx="62" cy="55" rx="45" ry="28" fill="#5D8A4E"/><path d="M30 50 Q62 15 94 50" fill="#7FAE68"/><path d="M45 40 L62 30 L79 40 L70 55 L54 55Z" fill="#5D8A4E" opacity=".6"/><circle cx="112" cy="55" r="13" fill="#A7C98F"/><circle cx="116" cy="51" r="2.5" fill="#0B1020"/><path d="M110 60 Q115 63 120 60" stroke="#0B1020" stroke-width="1.5" fill="none"/><ellipse cx="35" cy="80" rx="8" ry="6" fill="#A7C98F"/><ellipse cx="88" cy="80" rx="8" ry="6" fill="#A7C98F"/></svg>`,
    tilin: `<svg viewBox="0 0 100 100"><path d="M50 4 L62 36 L96 38 L69 58 L79 92 L50 72 L21 92 L31 58 L4 38 L38 36Z" fill="#FFD54F" stroke="#FFF3C4" stroke-width="2"/><circle cx="41" cy="50" r="4" fill="#0B1020"/><circle cx="59" cy="50" r="4" fill="#0B1020"/><path d="M42 60 Q50 67 58 60" stroke="#0B1020" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`
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
           NIVELES, CODIGOS, irACodigo, leer, guardar,
           pedirOrientacion, pedirMovimiento, pedirMicro };
})();
