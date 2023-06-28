const button = document.querySelector('#PowerButton');
button.addEventListener('click', () => {
  reload();
});


const ScienceRange = document.querySelector('#ScienceRange');
ScienceRange.addEventListener('input', () => {

if (ScienceLevel < TerminalLevel) {
  //ScienceLevel = TerminalLevel;
  //ScienceRange.value = ScienceLevel;
  TerminalLevel = Math.floor(ScienceLevel/25)*25;
  TerminalRange.value = TerminalLevel;
  document.getElementById("TerminalRangeLabel").innerHTML = 
  "Terminal level: <b>"+ 
  terminalLevelText(Number(TerminalRange.value))
  +"</b>"
  TerminalLevel = Number(TerminalRange.value);
  //alert("Для взлома этого терминала нужен навык: Наука, уровень "+TerminalLevel+" .");
}
document.getElementById("ScienceRangeLabel").innerHTML = 
"Science level: <b>"+ ScienceRange.value.toString()+"</b>";
ScienceLevel = Number(ScienceRange.value);

});


ScienceRange.addEventListener('change', () => {
if (ScienceLevel < TerminalLevel) {
  //ScienceLevel = TerminalLevel;
  //ScienceRange.value = ScienceLevel;
  TerminalLevel = Math.floor(ScienceLevel/25)*25;
  TerminalRange.value = TerminalLevel;
  document.getElementById("TerminalRangeLabel").innerHTML = 
  "Terminal level: <b>"+ 
  terminalLevelText(Number(TerminalRange.value))
  +"</b>"
  TerminalLevel = Number(TerminalRange.value);
  //alert("Для взлома этого терминала нужен навык: Наука, уровень "+TerminalLevel+" .");
}
document.getElementById("ScienceRangeLabel").innerHTML = 
"Science level: <b>"+ ScienceRange.value.toString()+"</b>";
ScienceLevel = Number(ScienceRange.value);
});
////////////////////////////////////////////////////////////////////
const TerminalRange = document.querySelector('#TerminalRange');
TerminalRange.addEventListener('input', () => {

  if (ScienceLevel < TerminalLevel) {
    ScienceLevel = TerminalLevel;
    ScienceRange.value = ScienceLevel;
    document.getElementById("ScienceRangeLabel").innerHTML = 
    "Science level: <b>"+ ScienceRange.value.toString()+"</b>";
    //alert("Для взлома этого терминала нужен навык: Наука, уровень "+TerminalLevel+" .");
  }
  document.getElementById("TerminalRangeLabel").innerHTML = 
  "Terminal level: <b>"+ 
  terminalLevelText(Number(TerminalRange.value))
  +"</b>"
  TerminalLevel = Number(TerminalRange.value);
});

TerminalRange.addEventListener('change', () => {

  if (ScienceLevel < TerminalLevel) {
    ScienceLevel = TerminalLevel;
    ScienceRange.value = ScienceLevel;
    document.getElementById("ScienceRangeLabel").innerHTML = 
    "Science level: <b>"+ ScienceRange.value.toString()+"</b>";
    //alert("Для взлома этого терминала нужен навык: Наука, уровень "+TerminalLevel+" .");
  }

  document.getElementById("TerminalRangeLabel").innerHTML = 
  "Terminal level: <b>"+ 
  // TerminalRange.value.toString()
  terminalLevelText(Number(TerminalRange.value))
  +"</b>"
  TerminalLevel = Number(TerminalRange.value);


});

function handleLangChange() {
  const selectElement = document.getElementById('lang');
  Language = selectElement.value;
}