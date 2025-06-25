const canciones = [
  { nombre: "1-0Hola", archivo: "canciones/1-0Hola.mp3" },
  { nombre: "1-1Elpentagrama", archivo: "canciones/1-1Elpentagrama.mp3" },
  { nombre: "1-2Laclavedesol", archivo: "canciones/1-2Laclavedesol.mp3" },
  { nombre: "1-3Laclavedefa", archivo: "canciones/1-3Laclavedefa.mp3" },
  { nombre: "1-3Laclavedefa 2", archivo: "canciones/1-3Laclavedefa 2.mp3" },
  { nombre: "1-4Laclavededo21", archivo: "canciones/1-4Laclavededo21.mp3" },
  { nombre: "10ElAbueloChencho", archivo: "canciones/10ElAbueloChencho.mp3" },
  { nombre: "11ElHadaArmonia", archivo: "canciones/11ElHadaArmonia.mp3" },
  { nombre: "12LaTonalidad", archivo: "canciones/12LaTonalidad.mp3" },
  { nombre: "13dosporcuatro", archivo: "canciones/13dosporcuatro.mp3" },
  { nombre: "14tresporcuatro", archivo: "canciones/14tresporcuatro.mp3" },
  { nombre: "15cuatroporcuatro", archivo: "canciones/15cuatroporcuatro.mp3" },
  { nombre: "16ElMagoComposicion", archivo: "canciones/16ElMagoComposicion.mp3" },
  { nombre: "17LaNotaNegra", archivo: "canciones/17LaNotaNegra.mp3" },
  { nombre: "18LasCorcheas", archivo: "canciones/18LasCorcheas.mp3" },
  { nombre: "19dmitri", archivo: "canciones/19dmitri.mp3" },
  { nombre: "19LaNotaBlanca", archivo: "canciones/19LaNotaBlanca.mp3" },
  { nombre: "20LaRedonda", archivo: "canciones/20LaRedonda.mp3" },
  { nombre: "21LasRanitas", archivo: "canciones/21LasRanitas.mp3" },
  { nombre: "22Patito", archivo: "canciones/22Patito.mp3" },
  { nombre: "23LaMariquita", archivo: "canciones/23LaMariquita.mp3" },
  { nombre: "24ElConejito", archivo: "canciones/24ElConejito.mp3" },
  { nombre: "25BurritoBlanco", archivo: "canciones/25BurritoBlanco.mp3" },
  { nombre: "26ElCoche", archivo: "canciones/26ElCoche.mp3" },
  { nombre: "27Micarita", archivo: "canciones/27Micarita.mp3" },
  { nombre: "28Despedida", archivo: "canciones/28Despedida.mp3" },
  { nombre: "29Villancico", archivo: "canciones/29Villancico.mp3" },
  { nombre: "2PabloySara", archivo: "canciones/2PabloySara.mp3" },
  { nombre: "30Beethoven_TripleConcerto", archivo: "canciones/30Beethoven_TripleConcerto.mp3" },
  { nombre: "3AlexyEsther", archivo: "canciones/3AlexyEsther.mp3" },
  { nombre: "4ElMagoDiapason", archivo: "canciones/4ElMagoDiapason.mp3" },
  { nombre: "5ElPentagrama", archivo: "canciones/5ElPentagrama.mp3" },
  { nombre: "6Laclavedesol", archivo: "canciones/6Laclavedesol.mp3" },
  { nombre: "6Laclavedesol 2", archivo: "canciones/6Laclavedesol 2.mp3" },
  { nombre: "6lasnotas", archivo: "canciones/6lasnotas.mp3" },
  { nombre: "7elbosque", archivo: "canciones/7elbosque.mp3" },
  { nombre: "7LaClavedeFa", archivo: "canciones/7LaClavedeFa.mp3" },
  { nombre: "8Lacasitasinfonia", archivo: "canciones/8Lacasitasinfonia.mp3" },
  { nombre: "9Laclavededo", archivo: "canciones/9Laclavededo.mp3" },
  { nombre: "alteraciones", archivo: "canciones/alteraciones.mp3" },
  { nombre: "amador", archivo: "canciones/amador.mp3" },
  { nombre: "babyla", archivo: "canciones/babyla.mp3" },
  { nombre: "babymi", archivo: "canciones/babymi.mp3" },
  { nombre: "babymi 2", archivo: "canciones/babymi 2.mp3" },
  { nombre: "babysol", archivo: "canciones/babysol.mp3" },
  { nombre: "babysol 2", archivo: "canciones/babysol 2.mp3" },
  { nombre: "bicipatinete", archivo: "canciones/bicipatinete.mp3" },
  { nombre: "car1", archivo: "canciones/car1.mp3" },
  { nombre: "car2", archivo: "canciones/car2.mp3" },
  { nombre: "car3", archivo: "canciones/car3.mp3" },
  { nombre: "car4", archivo: "canciones/car4.mp3" },
  { nombre: "car5", archivo: "canciones/car5.mp3" },
  { nombre: "car6", archivo: "canciones/car6.mp3" },
  { nombre: "car7", archivo: "canciones/car7.mp3" },
  { nombre: "car8", archivo: "canciones/car8.mp3" },
  { nombre: "carnaval", archivo: "canciones/carnaval.mp3" },
  { nombre: "cumple", archivo: "canciones/cumple.mp3" },
  { nombre: "dinosaurios", archivo: "canciones/dinosaurios.mp3" },
  { nombre: "dragones", archivo: "canciones/dragones.mp3" },
  { nombre: "Elcastillomelodia", archivo: "canciones/Elcastillomelodia.mp3" },
  { nombre: "elefantes", archivo: "canciones/elefantes.mp3" },
  { nombre: "hadas", archivo: "canciones/hadas.mp3" },
  { nombre: "halloween", archivo: "canciones/halloween.mp3" },
  { nombre: "invierno", archivo: "canciones/invierno.mp3" },
  { nombre: "Lasdeditos", archivo: "canciones/Lasdeditos.mp3" },
  { nombre: "Lasmanitas", archivo: "canciones/Lasmanitas.mp3" },
  { nombre: "leones", archivo: "canciones/leones.mp3" },
  { nombre: "mamaypapa", archivo: "canciones/mamaypapa.mp3" },
  { nombre: "Mis primeros cuentos clásicos 2", archivo: "canciones/Mis primeros cuentos clásicos 2.mp3" },
  { nombre: "Mis primeros cuentos clásicos 3", archivo: "canciones/Mis primeros cuentos clásicos 3.mp3" },
  { nombre: "Mis primeros cuentos clásicos", archivo: "canciones/Mis primeros cuentos clásicos.mp3" },
  { nombre: "musiktrom", archivo: "canciones/musiktrom.mp3" },
  { nombre: "navidad", archivo: "canciones/navidad.mp3" },
  { nombre: "otono", archivo: "canciones/otono.mp3" },
  { nombre: "palmitas", archivo: "canciones/palmitas.mp3" },
  { nombre: "pandero", archivo: "canciones/pandero.mp3" },
  { nombre: "primavera", archivo: "canciones/primavera.mp3" },
  { nombre: "robot", archivo: "canciones/robot.mp3" },
  { nombre: "ruido", archivo: "canciones/ruido.mp3" },
  { nombre: "semicorchea", archivo: "canciones/semicorchea.mp3" },
  { nombre: "trencompases", archivo: "canciones/trencompases.mp3" },
  { nombre: "verano", archivo: "canciones/verano.mp3" }
];

// Código script.js con botones anterior, siguiente, repetir y aleatorio:

const playlist = document.getElementById("playlist");
const audio = document.getElementById("audio");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnRepeat = document.getElementById("btn-repeat");
const btnRandom = document.getElementById("btn-random");

let repeatOn = false;
let randomOn = false;

// Cargar canciones en el select
canciones.forEach(cancion => {
  const option = document.createElement("option");
  option.value = cancion.archivo;
  option.textContent = cancion.nombre;
  playlist.appendChild(option);
});

// Función para reproducir canción por índice
function playIndex(index) {
  if (index < 0) index = playlist.options.length -1;
  if (index >= playlist.options.length) index = 0;
  playlist.selectedIndex = index;
  audio.src = playlist.value;
  audio.play();
}

// Botones
btnPrev.onclick = () => {
  playIndex(playlist.selectedIndex - 1);
};

btnNext.onclick = () => {
  playIndex(playlist.selectedIndex + 1);
};

btnRepeat.onclick = () => {
  repeatOn = !repeatOn;
  btnRepeat.textContent = repeatOn ? "🔁 Repetir: ON" : "🔁 Repetir: OFF";
};

btnRandom.onclick = () => {
  randomOn = !randomOn;
  btnRandom.textContent = randomOn ? "🔀 Aleatorio: ON" : "🔀 Aleatorio: OFF";
};

// Cambiar canción con select
playlist.addEventListener("change", () => {
  audio.src = playlist.value;
  audio.play();
});

// Al terminar la canción
audio.addEventListener("ended", () => {
  if (repeatOn) {
    audio.currentTime = 0;
    audio.play();
  } else if (randomOn) {
    const randomIndex = Math.floor(Math.random() * playlist.options.length);
    playIndex(randomIndex);
  } else {
    playIndex(playlist.selectedIndex + 1);
  }
});

// Iniciar con primera canción
playIndex(0);
