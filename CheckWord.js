//Проверка слова под курсором//######################################################

function CheckWord(){

      mouseDown = false;

      CurrentAttempts--;

      if (OpenBrackets.includes(WordsTable[CursorWordIndex]) && SearchSecretCombinations(CursorWordIndex).Key != SearchSecretCombinations(CursorWordIndex).Value)
      {
          let BracketCombination = "";

          for (let i = SearchSecretCombinations(CursorWordIndex).Key; i <= SearchSecretCombinations(CursorWordIndex).Value; i++)
          {
              BracketCombination += WordsTable[i];
              // if (BracketCombination[BracketCombination.length - 1].toString() == "[" || BracketCombination[BracketCombination.length - 1].toString() == "]")
              // {
              //     BracketCombination += BracketCombination[BracketCombination.length - 1];
              // }
          }
          IOLog.push(BracketCombination);

          if (Duds.length < 1)
          {
              CurrentAttempts++;
              IOLog.push( Strings[Language]["EntryDenied"]);
              return -1;
          }
          else
          {
              UsedBracketsIndex.push(UsedBracketsIndexFind(CursorWordIndex));//Если заглушек не осталось, такая комбинация не исчезает
              //console.log(UsedBracketsIndex);
              //console.log(UsedBracketsIndexFind(CursorWordIndex));
          }

          if (getRandomInt(100) < 50)
          {
              CurrentAttempts = MaxCurrentAttempts;

              IOLog.push(Strings[Language]["Allowance"]);
              IOLog.push(Strings[Language]["Replenished"]);
              return -2;
          }
          else
          {
              let DudToRemoveIndex = getRandomInt(Duds.length);
              let RemovedDudIndex = WordsTable.indexOf(Duds[DudToRemoveIndex]);
              Duds.splice(DudToRemoveIndex, 1);
              WordsTable[RemovedDudIndex] = ".";
              for (let i = 0; i < PasswordLength - 1; i++)
              {
                  WordsTable.splice(RemovedDudIndex, 0, ".");
              }
              WordsTableRangesFill();
              CursorWordIndexMath();
              CurrentAttempts++;
              IOLog.push(Strings[Language]["DudRemoved"]);
              return -3;
          }

      }
      else if (WordsTable[CursorWordIndex] == (Password))
      {
          IOLog.push( WordsTable[CursorWordIndex].toUpperCase());
          IOLog.push( Strings[Language]["ExactMatch"]);
          IOLog.push( Strings[Language]["PleaseWait"]);
          IOLog.push( Strings[Language]["WhileSystem"]);
          IOLog.push( Strings[Language]["IsAccessed"]);
          GameState = 1;
          CurrentAttempts += 1;
          return PasswordLength;
      }
      else if (WordsTable[CursorWordIndex].length == PasswordLength)
      {

          let Bulls = 0;
          for (let i = 0; i < Password.length; i++)
          {
              Bulls += Password[i] == WordsTable[CursorWordIndex][i] ? 1 : 0;//готово
          }
          IOLog.push( WordsTable[CursorWordIndex].toUpperCase());
          IOLog.push( Strings[Language]["EntryDenied"]);
          IOLog.push( Bulls + "/" + PasswordLength + " " + Strings[Language]["Correct"]);
          if (CurrentAttempts < 1)
          GameState = 2;
          return Bulls;
      }
      else
      {
          if (WordsTable[CursorWordIndex] == "]")
          {
              IOLog.push( WordsTable[CursorWordIndex] + WordsTable[CursorWordIndex]);
          }
          else
          if (WordsTable[CursorWordIndex] == "[")
          {
              IOLog.push( WordsTable[CursorWordIndex] + WordsTable[CursorWordIndex]);
          }
          else
          {
              IOLog.push( WordsTable[CursorWordIndex]);
          }

          IOLog.push( Strings[Language]["EntryDenied"]);
          IOLog.push( WordBulls(Password, WordsTable[CursorWordIndex]) + "/" + PasswordLength + " " + Strings[Language]["Correct"]);
      }

      if (CurrentAttempts < 1)
      {
          IOLog.push(Strings[Language]["InitLockout"]);
      }
      if (CurrentAttempts < 1)
          GameState = 2;

      return 0;

}