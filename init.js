let GameState = 0;
let GlobalXY = {x:0,y:0};
let CursorWordIndex = 0;
let CursorFlat = 0;
let GlobalCursor = {x:0, y:0};
let mouseDown = false;
let IOLog = [];
let TerminalLevel = 50;
let ScienceLevel = 50;
let PasswordLength = 0;
let WordCount = 0;
let CurrentAttempts = 4;
let MaxCurrentAttempts = 4;
let Password = "";
let Duds = [];
let HexAddresses = [];
let WordsTable = [];
let chars = [];
let lastButton = 0;
let UsedBracketsIndex = [];
let WordsTableRanges = [];
let Language = "en";
let BkColor ="green";//"#"+(40).toString(16).padStart(2,'0')+(40).toString(16).padStart(2,'0')+(40).toString(16).padStart(2,'0');
let Color = "lightgreen";//"#"+(255).toString(16).padStart(2,'0')+(176).toString(16).padStart(2,'0')+(0).toString(16).padStart(2,'0');
let blockMouse = false;
let myFont = new FontFace('myFont', 'url(FSEX300.ttf)');
function reload(){////////////////////////////////////////////////
    GameState = 0;
    GlobalXY = {x:0,y:0};
    CursorWordIndex = 0;
    CursorFlat = 0;
    GlobalCursor = {x:0, y:0};
    mouseDown = false;
    IOLog = [];
    //Этих не инициализируем, потому что уровень должен сохраняться
    //TerminalLevel = 50;
    //ScienceLevel = 50;
    PasswordLength = 0;
    WordCount = 0;
    CurrentAttempts = 4;
    MaxCurrentAttempts = 4;
    Password = "";
    Duds = [];
    HexAddresses = [];
    WordsTable = [];
    chars = [];
    lastButton = 0;
    UsedBracketsIndex = [];
    WordsTableRanges = [];
    let bkColor = BkColor;
    let color = Color;
    blockMouse = false;
    chars_init();
    setHexAddresses();
    DudsAndPasswordCount();
    setPasswordLength();
    GenerateWordsTable();
}

myFont.load().then(function(font){
  // with canvas, if this is ommited won't work
  document.fonts.add(font);
  console.log('Font loaded');
});
//Заполнение таблицы индексов границ слов
function WordsTableRangesFill(){
  let i = 0;
  WordsTableRanges = [];
  WordsTable.forEach(Word => {
    WordsTableRanges.push({Key:i, Value:i + Word.length - 1});
    i += Word.length;
  });
}
//Инициализация матрицы консоли////////////////////////////////////////////////
function chars_init(){
    for (let fx = 0; fx < TerminalWidth; fx++) {
      chars[fx] = [];
      for (let fy = 0; fy < TerminalHeight; fy++) {
        chars[fx][fy] = { 
      term_x: fx, term_y: fy, 
      canvas_x: fx * char_width,
      canvas_y: fy * char_height,
      char:" ",
      bkColor: BkColor,
      color:Color,
      status: 0 };
      }
    }
  }

  //Число потенциальных паролей////////////////////////////////////////////////
function DudsAndPasswordCount(){
    let TerminalLvl = TerminalLevel;
    let ScienceLvl = ScienceLevel;
    if (TerminalLvl == 100 && ScienceLvl == 100)
    WordCount = 13;
  else
    {
      let scienceOffset = ScienceLvl - TerminalLvl;
      let lockOffset = 100 - TerminalLvl;
      let WordsMult = lockOffset != 0 ? (scienceOffset / lockOffset) : 0.5;
      WordCount = Math.floor((1 - WordsMult) * (iHackingMaxWords - iHackingMinWords)) + iHackingMinWords;
    }
  }

  //Длина паролей///////////////////////////////////////////////////
  function setPasswordLength(){
    PasswordLength = 4 + 2 * (TerminalLevel / 25) + getRandomInt(2);
    PasswordLength = PasswordLength > 12 ? 12 : PasswordLength;
  }

  //Установка хексов////////////////////////////////////////////////
  function setHexAddresses(){
    let OffsetInc = DumpWidth;
    let OffsetMin = Math.floor(61440 / 12) * 12;
    let OffsetMax = Math.floor(65139 / 12) * 12;
    let OffsetStart = OffsetMin + Math.floor(getRandomInt(OffsetMax - OffsetMin)/12)*12;
    for (let i = 0; i < DumpHeight; i++) {
      HexAddresses[i] = "0x"+(OffsetStart + (i*OffsetInc)).toString(16).toUpperCase();
      
    }
  }
  //Инициализация таблицы слов////////////////////////////////////////////////
function GenerateWordsTable(){
    let _duds = [];
    _duds = WordsList.filter(word => word.length == PasswordLength);
    for (let i = 0; i < _duds.length; i++) {
        _duds[i]=_duds[i].toUpperCase();
        
    }
    /////заглушки
    for (let i = 0; i < WordCount; i++) {
      let rndInd = getRandomInt(_duds.length);
      while (Duds.includes(_duds[rndInd])) {
        rndInd = getRandomInt(_duds.length);
      }
      Duds.push(_duds[rndInd]);
    }
    ///пароль
    rndInd = getRandomInt(Duds.length);
    Password = Duds[rndInd];
    Duds.splice(rndInd, 1);
    
    console.log("Password: " + Password);
    Duds.forEach(element => {
      WordsTable.push(element);
    });
    WordsTable.splice(getRandomInt(WordsTable.length + 1), 0, Password);
    /////Ну, что б пароли не слипались///////////////////////////////////////////
    for (let i = WordCount; i > 0; i--) {
        WordsTable.splice(i, 0, TrashChars[getRandomInt(TrashChars.length)]);
    }
    ////мусорные символы
    for (let i = 0; i < DumpHeight * DumpWidth - (WordCount * PasswordLength + WordCount); i++) {
      WordsTable.splice(getRandomInt(WordsTable.length + 1), 0, TrashChars[getRandomInt(TrashChars.length)]);
      //WordsTable[i] = TrashChars[getRandomInt(TrashChars.length)]
    }
    WordsTableRangesFill();
  }