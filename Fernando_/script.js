const canciones = [
  { nombre: "1-0Hola", archivo: "canciones/1-0Hola.mp3" },
  { nombre: "1-1Elpentagrama", archivo: "canciones/1-1Elpentagrama.mp3" },
  { nombre: "1-2Laclavedesol", archivo: "canciones/1-2Laclavedesol.mp3" },
  { nombre: "1-3Laclavedefa 2", archivo: "canciones/1-3Laclavedefa 2.mp3" },
  { nombre: "1-3Laclavedefa", archivo: "canciones/1-3Laclavedefa.mp3" },
  { nombre: "1-4Laclavededo21", archivo: "canciones/1-4Laclavededo21.mp3" },
  { nombre: "2PabloySara", archivo: "canciones/2PabloySara.mp3" },
  { nombre: "3AlexyEsther", archivo: "canciones/3AlexyEsther.mp3" },
  { nombre: "4ElMagoDiapason", archivo: "canciones/4ElMagoDiapason.mp3" },
  { nombre: "5ElPentagrama", archivo: "canciones/5ElPentagrama.mp3" },
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
  { nombre: "24ElConejito", archivo: "canciones/24ElConejito.mp3" },
  { nombre: "25BurritoBlanco", archivo: "canciones/25BurritoBlanco.mp3" },
  { nombre: "26ElCoche", archivo: "canciones/26ElCoche.mp3" },
  { nombre: "27Micarita", archivo: "canciones/27Micarita.mp3" },
  { nombre: "28Despedida", archivo: "canciones/28Despedida.mp3" },
  { nombre: "29Villancico", archivo: "canciones/29Villancico.mp3" }
  
];

const playlist = document.getElementById("playlist");
const audio = document.getElementById("audio");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnRepeat = document.getElementById("btn-repeat");
const btnRandom = document.getElementById("btn-random");

let repeatOn = false;
let randomOn = false;

// Cargar canciones al select
canciones.forEach(cancion => {
  const option = document.createElement("option");
  option.value = cancion.archivo;
  option.textContent = cancion.nombre;
  playlist.appendChild(option);
});

// Función para cargar y reproducir canción por índice
function playIndex(index) {
  if (index < 0) index = playlist.options.length -1;
  if (index >= playlist.options.length) index = 0;
  playlist.selectedIndex = index;
  audio.src = playlist.value;
  audio.play();
}

// Eventos botones
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

// Al terminar canción
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
