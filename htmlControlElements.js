const button = document.querySelector('#PowerButton');
button.addEventListener('click', () => {
  reload();
});


const ScienceRange = document.querySelector('#ScienceRange');
ScienceRange.addEventListener('input', () => {
  document.getElementById("ScienceRangeLabel").innerHTML = 
  "Science level: <b>"+ ScienceRange.value.toString()+"</b>";
  ScienceLevel = ScienceRange.value;
if (ScienceLevel < TerminalLevel) {
  alert("Для взлома этого терминала нужен навык: Наука, уровень "+TerminalLevel+" .");
}
});
ScienceRange.addEventListener('change', () => {
  document.getElementById("ScienceRangeLabel").innerHTML = 
  "Science level: <b>"+ ScienceRange.value.toString()+"</b>";
  ScienceLevel = ScienceRange.value;
if (ScienceLevel < TerminalLevel) {
  alert("Для взлома этого терминала нужен навык: Наука, уровень "+TerminalLevel+" .");
}
});

const TerminalRange = document.querySelector('#TerminalRange');
TerminalRange.addEventListener('input', () => {
  document.getElementById("TerminalRangeLabel").innerHTML = 
  "Terminal level: <b>"+ TerminalRange.value.toString()+"</b>";
  TerminalLevel = TerminalRange.value;
  if (ScienceLevel < TerminalLevel) {
    alert("Для взлома этого терминала нужен навык: Наука, уровень "+TerminalLevel+" .");
  }

});
TerminalRange.addEventListener('change', () => {
  document.getElementById("TerminalRangeLabel").innerHTML = 
  "Terminal level: <b>"+ TerminalRange.value.toString()+"</b>";
  TerminalLevel = TerminalRange.value;
  if (ScienceLevel < TerminalLevel) {
    alert("Для взлома этого терминала нужен навык: Наука, уровень "+TerminalLevel+" .");
  }

});
