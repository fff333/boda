// Estrellas y constelaciones reales para los niveles del cielo
const Cielo = (() => {
  // [ascensión recta (horas), declinación (grados), magnitud, color]
  const E = {
    dubhe: [11.062, 61.75, 1.8, "#FFE3B8"], merak: [11.031, 56.38, 2.3], phecda: [11.897, 53.69, 2.4], megrez: [12.257, 57.03, 3.3],
    alioth: [12.900, 55.96, 1.8], mizar: [13.399, 54.93, 2.2], alkaid: [13.792, 49.31, 1.9],
    polar: [2.530, 89.26, 2.0, "#FFF4D6"],
    caph: [0.153, 59.15, 2.3], schedar: [0.675, 56.54, 2.2, "#FFD9A0"], gcas: [0.945, 60.72, 2.2], ruchbah: [1.430, 60.24, 2.7], segin: [1.907, 63.67, 3.4],
    betelgeuse: [5.919, 7.41, 0.5, "#FF8A5C"], bellatrix: [5.419, 6.35, 1.6, "#C4D6FF"], mintaka: [5.533, -0.30, 2.2, "#C8D8FF"],
    alnilam: [5.604, -1.20, 1.7, "#C8D8FF"], alnitak: [5.679, -1.94, 1.8, "#C8D8FF"], saiph: [5.796, -9.67, 2.1, "#C8D8FF"],
    rigel: [5.242, -8.20, 0.1, "#9EC2FF"], meissa: [5.585, 9.93, 3.4],
    arneb: [5.546, -17.82, 2.6], nihal: [5.471, -20.76, 2.8], mulep: [5.215, -16.21, 3.3], eplep: [5.091, -22.37, 3.2],
    delep: [5.940, -20.88, 3.8], gamlep: [5.741, -22.45, 3.6], etalep: [5.940, -14.17, 3.7],
    sirio: [6.752, -16.72, -1.46, "#E4EEFF"], mirzam: [6.378, -17.96, 2.0], adhara: [6.977, -28.97, 1.5], wezen: [7.140, -26.39, 1.8], aludra: [7.402, -29.30, 2.4],
    alcyone: [3.791, 24.11, 2.9, "#CFE0FF"], atlas: [3.819, 24.05, 3.6, "#CFE0FF"], electra: [3.747, 24.11, 3.7, "#CFE0FF"],
    maia: [3.763, 24.37, 3.9, "#CFE0FF"], merope: [3.772, 23.95, 4.2, "#CFE0FF"], taygeta: [3.754, 24.47, 4.3, "#CFE0FF"],
    acrux: [12.443, -63.10, 0.8], mimosa: [12.795, -59.69, 1.3], gacrux: [12.519, -57.11, 1.6, "#FFC8A0"], dcru: [12.252, -58.75, 2.8]
  };
  const linea = l => l.slice(1).map((n, i) => [l[i], n]);
  const C = {
    osamayor: { nombre: "Osa Mayor", estrellas: ["alkaid", "mizar", "alioth", "megrez", "dubhe", "merak", "phecda"],
      lineas: [...linea(["alkaid", "mizar", "alioth", "megrez", "dubhe", "merak", "phecda", "megrez"])] },
    casiopea: { nombre: "Casiopea", estrellas: ["caph", "schedar", "gcas", "ruchbah", "segin"], lineas: linea(["caph", "schedar", "gcas", "ruchbah", "segin"]) },
    orion: { nombre: "Orión", estrellas: ["betelgeuse", "bellatrix", "mintaka", "alnilam", "alnitak", "saiph", "rigel", "meissa"],
      lineas: [["betelgeuse", "meissa"], ["meissa", "bellatrix"], ["betelgeuse", "alnitak"], ["bellatrix", "mintaka"], ["mintaka", "alnilam"], ["alnilam", "alnitak"], ["alnitak", "saiph"], ["mintaka", "rigel"]] },
    liebre: { nombre: "Liebre", estrellas: ["mulep", "arneb", "nihal", "eplep", "gamlep", "delep", "etalep"],
      lineas: [["mulep", "arneb"], ["arneb", "nihal"], ["nihal", "eplep"], ["nihal", "gamlep"], ["gamlep", "delep"], ["delep", "etalep"], ["etalep", "arneb"]] },
    canmayor: { nombre: "Can Mayor", estrellas: ["sirio", "mirzam", "adhara", "wezen", "aludra"], lineas: [["sirio", "mirzam"], ["sirio", "wezen"], ["wezen", "adhara"], ["wezen", "aludra"]] },
    pleyades: { nombre: "Pléyades", estrellas: ["alcyone", "atlas", "electra", "maia", "merope", "taygeta"], lineas: [] },
    cruz: { nombre: "Cruz del Sur", estrellas: ["acrux", "mimosa", "gacrux", "dcru"], lineas: [["acrux", "gacrux"], ["mimosa", "dcru"]] }
  };
  const R = Math.PI / 180;

  // Proyección del cielo en un plano (en grados), centrada en ra0/dec0. El este queda a la izquierda.
  function proyectar(ra, dec, ra0, dec0) {
    const a = (ra - ra0) * 15 * R, d = dec * R, d0 = dec0 * R;
    const c = Math.sin(d0) * Math.sin(d) + Math.cos(d0) * Math.cos(d) * Math.cos(a);
    const x = Math.cos(d) * Math.sin(a) / c;
    const y = (Math.cos(d0) * Math.sin(d) - Math.sin(d0) * Math.cos(d) * Math.cos(a)) / c;
    return [-x / R, -y / R];
  }
  // Coloca varias estrellas en la pantalla: devuelve { nombre: [x, y] }
  function disponer(nombres, ra0, dec0, cx, cy, escala, giro = 0) {
    const s = Math.sin(giro * R), c = Math.cos(giro * R), out = {};
    nombres.forEach(n => {
      const [x, y] = proyectar(E[n][0], E[n][1], ra0, dec0);
      out[n] = [cx + (x * c - y * s) * escala, cy + (x * s + y * c) * escala];
    });
    return out;
  }
  function radio(mag) { return Math.max(1, (4.6 - mag) * 1.25); }
  function estrella(ctx, x, y, mag, color = "#FFFFFF", aumento = 1) {
    const r = radio(mag) * aumento;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r * 3.2);
    g.addColorStop(0, color); g.addColorStop(.25, color); g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r * 3.2, 0, 7); ctx.fill();
  }
  // Estrellas débiles de fondo, siempre en el mismo sitio
  function fondo(ctx, w, h, n = 220, semilla = 3) {
    let s = semilla;
    const azar = () => (s = (s * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < n; i++) {
      ctx.fillStyle = `rgba(242,233,201,${.15 + azar() * .45})`;
      ctx.beginPath(); ctx.arc(azar() * w, azar() * h, .4 + azar() * 1.1, 0, 7); ctx.fill();
    }
  }
  function dibujarLineas(ctx, pos, lineas, color = "rgba(233,166,184,.7)", grosor = 1.5) {
    ctx.strokeStyle = color; ctx.lineWidth = grosor;
    lineas.forEach(([a, b]) => { if (!pos[a] || !pos[b]) return; ctx.beginPath(); ctx.moveTo(...pos[a]); ctx.lineTo(...pos[b]); ctx.stroke(); });
  }
  // Altura y acimut reales de una estrella (en grados) para un lugar y un momento
  function altaz(ra, dec, lat, lon, fecha = new Date()) {
    const d = fecha.getTime() / 86400000 - 10957.5;
    const lst = ((18.697374558 + 24.06570982441908 * d) * 15 + lon) % 360;
    const H = (lst - ra * 15) * R, de = dec * R, la = lat * R;
    const alt = Math.asin(Math.sin(de) * Math.sin(la) + Math.cos(de) * Math.cos(la) * Math.cos(H));
    const az = Math.atan2(-Math.sin(H) * Math.cos(de), Math.cos(la) * Math.sin(de) - Math.sin(la) * Math.cos(de) * Math.cos(H));
    return [alt / R, ((az / R) + 360) % 360];
  }
  // Un lienzo a pantalla completa con la resolución correcta
  function lienzo(el) {
    const dpr = Math.min(devicePixelRatio || 1, 2), ctx = el.getContext("2d");
    function ajustar() { el.width = innerWidth * dpr; el.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    ajustar(); addEventListener("resize", ajustar);
    return ctx;
  }
  return { E, C, proyectar, disponer, estrella, fondo, dibujarLineas, altaz, lienzo, radio };
})();
