//Проверка слова под курсором//######################################################
function CheckWord(){
  let xy = {x:Math.floor(GlobalXY.x/char_width),y:Math.floor(GlobalXY.y/char_height)};

  if (((xy.x>6 && xy.x<19) || (xy.x>26 && xy.x<39)) && xy.y>4){
    if (mouseDown === true) {
      mouseDown = false;
      console.log(SearchSecretCombinations(CursorWordIndex));
      CurrentAttempts--;
      if (WordsTable[CursorWordIndex] == Password) {
        GameState = 1;
        CurrentAttempts++;
        IOLog.push(WordsTable[CursorWordIndex]);
        IOLog.push("Exact match!");
        IOLog.push("Please wait");
        IOLog.push("while system");
        IOLog.push("is accessed.");
      } else if (WordsTable[CursorWordIndex].length == Password.length) {
          let Bulls=0;
          for (let i = 0; i < Password.length; i++) {
            Bulls += Password[i] == WordsTable[CursorWordIndex][i] ? 1 : 0;
          }
          IOLog.push(WordsTable[CursorWordIndex]);
          IOLog.push( "Entry denied.");
          IOLog.push( Bulls + "/" + PasswordLength + " " + "correct.");
        } else if(true){

        }

      if (CurrentAttempts < 1) {
        IOLog.push("Init lockout.");
        GameState = 2;
      }

    }
  }
}