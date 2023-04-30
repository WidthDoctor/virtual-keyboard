const ru = [
    "ё","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=","backspace",
    "Tab","й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з","х","ъ","\\","del",
    "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж","э","enter",
    "shift","я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".","up","shift",
    "ctrl","alt","space","alt","ctrl","left","down","right"
];
const ruShift = [
  "Ё","!", "\"", "№", ";", "%", ":", "?", "*", "(", ")","_", "+","backspace",
  "Tab","Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З","Х","Ъ","\/","del",
  "caps", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж","Э","enter",
  "shift","Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",","up","shift",
  "ctrl","alt","space","alt","ctrl","left","down","right"
];

const en = [
    "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=","backspace",
    "Tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[","]","\\","del",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";","'","enter",
    "shift","z", "x", "c", "v", "b", "n", "m", ",", ".", "/","up","shift",
    "ctrl","alt","space","alt","ctrl","left","down","right"
];
const enShift = [
  "~","!", "@", "#", "$", "%", "^", "&", "*", "(", ")","_", "+","backspace",
  "Tab","Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P","{","}","|","del",
  "caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":","\"","enter",
  "shift","Z", "X", "C", "V", "B", "N", "M", "<", ">", "?","up","shift",
  "ctrl","alt","space","alt","ctrl","left","down","right"
];
let currentLang = en;
let shiftPressed = false;

const input = document.createElement('textarea');
input.classList.add('input');
document.body.append(input);

const keyboardBox = document.createElement('div');
keyboardBox.classList.add('keyboard-container');
document.body.append(keyboardBox);

function createKeyboard(){
  currentLang.forEach((key, i) => {
    const button = document.createElement("button");
    button.classList.add("key");
    button.textContent = key;
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      //перенос по индексу
      keyboardBox.appendChild(document.createElement("br"));
    }
    if (
      key === "enter" ||
      key === "caps" ||
      key === "backspace" ||
      key === "shift"
    ) {
      wideKey(button);
    }
    if (key === "space") {
      button.classList.add("space");
    }
    keyboardBox.appendChild(button);
  });
}
createKeyboard();
function wideKey(button) {
    button.classList.add("wide-key");
}

document.body.appendChild(keyboardBox);



function writeMashine(event) {
  const target = event.target;
  input.focus();
  // проверяем наличие кнопок на странице
  const existingKeys = document.querySelectorAll('.key');
  if (existingKeys.length > 0) {
    // если кнопки есть, то заменяем на новый язык
    replaceKeys(currentLang);
  }

  //шукаю клик
  if (target.classList.contains("key")) {
    const start = input.selectionStart;
    const character = target.textContent;
    const end = input.selectionEnd;
    if (target.textContent === "Tab") {
      event.preventDefault();
      handleTabKeyPress(event);
    }else if (target.textContent === "shift"){
      event.preventDefault();
      handleShiftKeyPress();
    }else if (target.textContent === "backspace") {
      event.preventDefault();
      handleBackspaceKeyPress(event);
    } else {
      input.value =
        input.value.slice(0, start) + character + input.value.slice(end);
      input.setSelectionRange(start + 1, start + 1);
    }
  }
}

  const keyboardKeys = document.querySelectorAll(".key");

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    keyboardKeys.forEach((keyButton) => {
      if (event.ctrlKey && event.altKey) {
        if (currentLang==en) {//работа шифта
          currentLang=ru;
          replaceKeys(ru);
        }else if (currentLang==ru) {
          currentLang=en;
          replaceKeys(en);
        }else if(currentLang==enShift){
          currentLang=ruShift;
          replaceKeys(ruShift);
        }else if (currentLang==ruShift) {
          currentLang=enShift;
          replaceKeys(enShift);
        }
      }
      if (event.key === "Shift") {
        shiftPressed = true;
        handleShiftKeyPress();
      }
      if (keyButton.textContent.toLowerCase() === key) {
        keyButton.classList.add("active");
        input.focus();
      }
    });
    if (event.key === "Backspace") {
      event.preventDefault();
      handleBackspaceKeyPress(event);
    }
    if (event.key === "Tab") {
      event.preventDefault();
      handleTabKeyPress(event);
    }
  });

  document.addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    keyboardKeys.forEach((keyButton) => {
      if (event.key === "Shift") {
        shiftPressed = false;
        handleShiftKeyPress();
      }
      if (keyButton.textContent.toLowerCase() === key) {
        keyButton.classList.remove("active");
      }
    });
  });
  function handleShiftKeyPress() {
    if(currentLang==en){
      currentLang = enShift;
      replaceKeys(enShift);
    }else if(currentLang==enShift){
      currentLang = en;
      replaceKeys(en);
    }else if (currentLang==ru) {
      currentLang=ruShift;
      replaceKeys(ruShift);
    }else if (currentLang==ruShift) {
      currentLang=ru;
      replaceKeys(ru);
    }
  }
  function replaceKeys(lang) {
    const keys = document.querySelectorAll('.key');
    keys.forEach((key, i) => {
      key.textContent = lang[i];
    });
  }
  function handleTabKeyPress(event) {
    event.preventDefault();
    const cursorPosition = input.selectionStart;
    const textBeforeCursor = input.value.slice(0, cursorPosition);
    const textAfterCursor = input.value.slice(cursorPosition);
    const newText = textBeforeCursor + "    " + textAfterCursor;
    input.value = newText;
    input.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
  }


  function handleBackspaceKeyPress(event) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    // если выделен текст, то удаляем его полностью
    if (start !== end) {
      input.value = input.value.slice(0, start) + input.value.slice(end);
      input.setSelectionRange(start, start);
      return;
    }
    // если перед курсором есть 4 пробела табуляции, то удаляем их
    if (input.value.slice(start - 4, start) === "    ") {
      input.value = input.value.slice(0, start - 4) + input.value.slice(start);
      input.setSelectionRange(start - 4, start - 4);
      return;
    }
    // иначе удаляем один символ перед курсором
    input.value = input.value.slice(0, start - 1) + input.value.slice(start);
    input.setSelectionRange(start - 1, start - 1);
  }


    keyboardBox.addEventListener("click", writeMashine);
    keyboardBox.addEventListener("keydown", writeMashine);