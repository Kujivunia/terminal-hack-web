//Проверка слова под курсором//######################################################

function CheckWord(){

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