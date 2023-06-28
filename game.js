
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const char_width = 16;
const char_height = 32;
const TerminalWidth = 54;
const TerminalHeight = 22;
const DumpWidth = 12;
const DumpHeight = 34;
const iHackingMinWords = 5;
const iHackingMaxWords = 20;
const TrashChars = "!\"#$%&\'()*+/:;<=>?@\\[\\]^_{|}";
const OpenBrackets = "<[{(";
const CloseBrackets = ">]})";

canvas.width = char_width*TerminalWidth;
canvas.height = char_height*TerminalHeight;

///########################################################################################
//////////#################################################################################


//Компоновка и отрисовка всего окна///////////////////////////////////////////////////
function gameLoop(){
  flushRect(0,0,TerminalWidth,TerminalHeight);
  switch (GameState) {
    case 0://Идёт игра
      CursorWordIndexMath();
      PlaceHackHeader();
      PlaceHexAddresses();
      //placeWordsTable();
      //placeHighlightingWord(CursorWordIndex);
      placeGameField();
      placeIOLog();
      //placeChoosenWord();
      break;

    case 1://Победа
      //console.log("HACKED");
      endScreen(hackedScreen);
      //placeIOLog();
      //reload();
      //window.location.reload();
      //alert("HACKED");
      break;

    case 2://Поражение
      //console.log("BLOCKED");
      endScreen(lockedScreen);
      //placeIOLog();
      //reload();
      //window.location.reload();
      //alert("BLOCKED");
      break;
    default:
      break;
  }
  
  DrawChars();
}


//Ловим мышку//////////////////////////////////////////////////////////////////
canvas.addEventListener('mousemove', function (e) {
  let rect = canvas.getBoundingClientRect();
  let xy = {x:e.clientX - rect.left, y:e.clientY - rect.top};
  if (!blockMouse) {
    GlobalXY = xy;
    globalXYToFlatCursor();  
  }
  
});

canvas.addEventListener('mousedown', function (e) {
  let rect = canvas.getBoundingClientRect();
  let xy = {x:e.clientX - rect.left, y:e.clientY - rect.top};
  if (!blockMouse) {
    GlobalXY = xy;
    if (mouseDown === false) {
      mouseDown = true;
    }
    //console.log(e);
    globalXYToFlatCursor();
    if (e.button == 0 && e.buttons == 1 && lastButton == 0)
      if (cursorOnWords())
        CheckWord();
    lastButton = e.button;
  }
});
//////////////////////////////////////////////////////////////
//ИНИЦИАЛИЗАЦИИ ВСЯЧЕСКИЕ:////////////////////////////////////////////////////
reload();
//КОНЕЦ ИНИЦИАЛИЗАЦИЙ.

const drawing = setInterval(gameLoop, 16); //обвновляем всю консоль в 60 к/с.

