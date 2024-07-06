const diael = document.getElementById("dia");
const horael = document.getElementById("hora");
const minutoel = document.getElementById("minuto");
const segundoel = document.getElementById("segundo");

const lancamento = "01 december 2025";

function countDown() {
  const dataLanc = new Date(lancamento);
  const hoje = new Date();

  const segTotal = (dataLanc - hoje) / 1000;

  const dia = Math.floor(segTotal / 3600 / 24);
  const hora = Math.floor(segTotal / 3600) % 24;
  const minuto = Math.floor(segTotal / 60) % 60;
  const segundo = Math.floor(segTotal) % 60;

  diael.innerHTML = dia;
  horael.innerHTML = formatoTempo(hora);
  minutoel.innerHTML = formatoTempo(minuto);
  segundoel.innerHTML = formatoTempo(segundo);
}

function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}
countDown();
setInterval(countDown, 1000);
