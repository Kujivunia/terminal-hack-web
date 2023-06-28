
//Случайные цифры по всей матрице консоли
function testConsoleCells() {
    for (let fx = 0; fx < TerminalWidth; fx++) {
        for (let fy = 0; fy < TerminalHeight; fy++) {
            chars[fx][fy].char = TrashChars[getRandomInt(TrashChars.length)];
        }
    }
}

//Случайное целое от 0 до max НЕ включительно
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

//Глобальные координаты из плоских
function dumpCursorToGlobalXY(i){
    let x;
    let y;
    if (Math.floor(i/DumpWidth)<DumpHeight/2) {
      x=7+i % DumpWidth;
      y=5+Math.floor(i/DumpWidth);
    }
    else{
      x=6+i % DumpWidth + DumpWidth + 6+2+1;
      y=5 + Math.floor(i/DumpWidth-(DumpHeight/2));
    }
  return{x,y}
  }
  //Плоский курсор из глобального
  function globalXYToFlatCursor(){
    let xy = {x:Math.floor(GlobalXY.x/char_width),y:Math.floor(GlobalXY.y/char_height)};
    let toFlat = {x:0,y:0};
    if (xy.y>4) {
      if (xy.x>6 && xy.x<19 || xy.x>26 && xy.x<39) {
        //console.log(xy);
        toFlat.y=xy.y-5;
        if (xy.x>6 && xy.x<19) {
          toFlat.x = xy.x - 7;
        } else if (xy.x>26 && xy.x<39){
          toFlat.x = xy.x - 27;
          toFlat.y+=Math.floor(DumpHeight/2);
        }
        CursorFlat = toFlat.y*DumpWidth+toFlat.x;
        //console.log(toFlat);
      }
    }
  }

  
//Индекс слова под плоским курсором
function CursorWordIndexMath(){
    let len = 0;
    for (let i = 0; i < WordsTable.length; i++) {
      for (let c = 0; c < WordsTable[i].length && len <= CursorFlat; c++) {
        CursorWordIndex = i;
        len++;
      }
       
    }
  }