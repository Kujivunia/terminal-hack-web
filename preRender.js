//очистка области
function flushRect(x,y,w,h){
    for (let fx = x; fx < x+w; fx++) {
      for (let fy = y; fy < y+h; fy++) {
        chars[fx][fy] = { 
      term_x: fx, term_y: fy, 
      canvas_x: fx * char_width,
      canvas_y: fy * char_height,
      char:" ",
      bkColor: BkColor,
      color: Color,
      status: 0 };
      }
    }
  }

  //Подсветка выделеного слова
function placeHighlightingWord(i){
    let j=0;
    for (let k = 0; k < i; k++) {
      for (let t = 0; t < WordsTable[k].length; t++) {
        j++;
      }
    }
    for (let index = j; index < j+WordsTable[i].length; index++) {
      let xy = dumpCursorToGlobalXY(index);
      let char = getChar(xy.x, xy.y);
      let bkColor = char.bkColor;
      let color = char.color;
      placeText(xy.x, xy.y, char.char, color, bkColor);
    }
  }
  //Подсветка выделеной ячейки
  function placeHighlightingCell(i){
      let xy = dumpCursorToGlobalXY(i);
      let char = getChar(xy.x, xy.y);
      let bkColor = char.bkColor;
      let color = char.color;
      placeText(xy.x, xy.y, char.char, color, bkColor);
  
  }
  //Размещение кучи слов и символов
  function placeWordsTable(){
    let i = 0;
  
    for (let j = 0; j < WordsTable.length; j++) {
      for (let k = 0; k < WordsTable[j].length; k++) {
        
        if (Math.floor(i/DumpWidth)<DumpHeight/2) {
          placeText(7+i % DumpWidth,5+Math.floor(i/DumpWidth),WordsTable[j][k]);
        }
        else{
          placeText(6+i % DumpWidth + DumpWidth + 6+2+1,5 + Math.floor(i/DumpWidth-(DumpHeight/2)),WordsTable[j][k]);
        }
        i++;
      }
      
    }
    
  }

  function placeGameField(){
    let CurrentWordIndex = 0;
    let i = 0;
    let SecretCombinationsActive = false;
    let SecretCombination = {Key:0,Value:0};
    let localColor = Color;
    let localBkColor = BkColor;
    WordsTable.forEach(Word => {
      if (OpenBrackets.includes(Word) && !(SecretCombinationsActive))
      {
          SecretCombination = SearchSecretCombinations(CurrentWordIndex);
          SecretCombinationsActive = true;
      }
      if (CursorWordIndex == CurrentWordIndex || (CursorWordIndex == SecretCombination.Key && SecretCombination.Key != SecretCombination.Value && (CurrentWordIndex >= SecretCombination.Key && CurrentWordIndex <= SecretCombination.Value)))
      {
          localColor = BkColor;
          localBkColor = Color;
      }
      else
      {
          SecretCombinationsActive = false;
          localColor = Color;
          localBkColor = BkColor;
      }
      for (let j = 0; j < Word.length; j++) {
        if (Math.floor(i / DumpWidth) < DumpHeight / 2)
            placeText(Math.floor(i % DumpWidth) + 7, Math.floor(i / DumpWidth) + (TerminalHeight - DumpHeight / 2), Word[j], localBkColor, localColor);
          else
            placeText(Math.floor(i % DumpWidth) + 20 + 7, Math.floor(i / DumpWidth) + (TerminalHeight - DumpHeight / 2) - DumpHeight / 2, Word[j], localBkColor, localColor);
            i++;
      }
      CurrentWordIndex++;

      flushRect(41,21,13,1);

      if (OpenBrackets.includes(WordsTable[CursorWordIndex]))
      {
          for (let c = SearchSecretCombinations(CursorWordIndex).Key; c <= SearchSecretCombinations(CursorWordIndex).Value; c++)
          {
            placeText(DumpWidth * 2 + 12 + 4 + 1 + c - SearchSecretCombinations(CursorWordIndex).Key, (TerminalHeight - 1), WordsTable[c], localBkColor, localColor);
          }
      }
      else
      {
          placeText(DumpWidth * 2 + 12 + 4 + 1, (TerminalHeight - 1), WordsTable[CursorWordIndex])
      }


      
      
    });

  }
//Размещение лога в матрицу консоли
  function placeIOLog(){
    if (IOLog.length > 0){
    flushRect(40, 0, 14, TerminalHeight - 2);
    
    for (let i = IOLog.length-1; i >= 0 && (IOLog.length-i<16) ; i--) {
      placeText(40,20-(IOLog.length-i),">"+IOLog[i]);
    }
    }
  }
  
  //Размещение текста в матрицу консоли
  function placeText(x,y,str, 
    bkColor= BkColor, 
    color= Color){
    for (let i = 0; i < str.length; i++){ 
      if (y<TerminalHeight && y >=0){
        if (x+i<TerminalWidth && x+i >=0){
          chars[x+i][y].char = str[i];
          chars[x+i][y].bkColor = bkColor;
          chars[x+i][y].color = color;
        }
      }
    }
  }
  function getChar(x,y){
    return chars[x][y];
  }

  //Размещение заголовка и попыткок
function PlaceHackHeader(){
    placeText(0,0,"robco industries (tm) termlink protocol".toUpperCase());
    if (CurrentAttempts>1) {
      placeText(0,1,"enter password now".toUpperCase());
    }
    else{
      placeText(0,1,"!!! warning: lockout imminent !!!".toUpperCase());
    }
    let squares="";
    for (let i = 0; i < CurrentAttempts; i++) {
      squares+="■ ";
    }
    placeText(0,3,CurrentAttempts + " attempt(s) left: ".toUpperCase()+squares);
    
    placeText(40,21,">");
  }
  //Размещение хексов
  function PlaceHexAddresses(){
    let i = 0;
    HexAddresses.forEach(element => {
      if (i<DumpHeight/2) {
        placeText(0,5+i,HexAddresses[i]);
      } else
      {
        placeText(6+2+DumpWidth,5+i-DumpHeight/2,HexAddresses[i]);
      }
      
      i++;
    });
    
  }
  //Размещение выбранного слова в поле ввода
  function placeChoosenWord(){
    flushRect(41,21,13,1);
    placeText(41,21,WordsTable[CursorWordIndex])
  }