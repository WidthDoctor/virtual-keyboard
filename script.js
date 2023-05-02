const ru = [
  'ё',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  '\\',
  'del',
  'CapsLock',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  'enter',
  'Shift',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '.',
  'up',
  'Shift',
  'ctrl',
  'alt',
  'space',
  'alt',
  'ctrl',
  'left',
  'down',
  'right',
];
const ruShift = [
  'Ё',
  '!',
  '\'',
  '№',
  ';',
  '%',
  ':',
  '?',
  '*',
  '(',
  ')',
  '_',
  '+',
  'Backspace',
  'Tab',
  'Й',
  'Ц',
  'У',
  'К',
  'Е',
  'Н',
  'Г',
  'Ш',
  'Щ',
  'З',
  'Х',
  'Ъ',
  '/',
  'del',
  'CapsLock',
  'Ф',
  'Ы',
  'В',
  'А',
  'П',
  'Р',
  'О',
  'Л',
  'Д',
  'Ж',
  'Э',
  'enter',
  'Shift',
  'Я',
  'Ч',
  'С',
  'М',
  'И',
  'Т',
  'Ь',
  'Б',
  'Ю',
  ',',
  'up',
  'Shift',
  'ctrl',
  'alt',
  'space',
  'alt',
  'ctrl',
  'left',
  'down',
  'right',
];

const en = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'del',
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  '\'',
  'enter',
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'up',
  'Shift',
  'ctrl',
  'alt',
  'space',
  'alt',
  'ctrl',
  'left',
  'down',
  'right',
];
const enShift = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  'Backspace',
  'Tab',
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  '{',
  '}',
  '|',
  'del',
  'CapsLock',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  ':',
  '\'',
  'enter',
  'Shift',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  '<',
  '>',
  '?',
  'up',
  'Shift',
  'ctrl',
  'alt',
  'space',
  'alt',
  'ctrl',
  'left',
  'down',
  'right',
];

const upperEN = en.map(function (str) {
  if (str.length === 1) {
    return str.toUpperCase();
  } else {
    return str;
  }
});
const upperRU = ru.map(function (str) {
  if (str.length === 1) {
    return str.toUpperCase();
  } else {
    return str;
  }
});
let currentLang = en;
let shiftPressed = false;
let capsPressed = false;

const input = document.createElement('textarea');
input.classList.add('input');
document.body.append(input);

const keyboardBox = document.createElement('div');
keyboardBox.classList.add('keyboard-container');
document.body.appendChild(keyboardBox);

const language = document.createElement('div');
const span = document.createElement('span');
document.body.append(language);
span.textContent = 'Смена языка ctrl + alt на живой клаве';
language.appendChild(span);

function createKeyboard() {
  currentLang.forEach((key, i) => {
    const button = document.createElement('button');
    button.classList.add('key');
    button.textContent = key;
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      //перенос по индексу
      keyboardBox.appendChild(document.createElement('br'));
    }
    if (
      key === 'enter' ||
      key === 'CapsLock' ||
      key === 'Backspace' ||
      key === 'Shift'
    ) {
      wideKey(button);
    }
    key === 'space' ? button.classList.add('space') : null;
    key === 'alt' ? button.classList.add('alt') : null;
    key === 'ctrl' ? button.classList.add('ctrl') : null;
    key === 'left' ? button.classList.add('left') : null;
    key === 'right' ? button.classList.add('right') : null;
    key === 'up' ? button.classList.add('up') : null;
    key === 'down' ? button.classList.add('down') : null;
    key === 'enter' ? button.classList.add('enter') : null;
    key === 'del' ? button.classList.add('del') : null;
    keyboardBox.appendChild(button);
  });
}
createKeyboard();
const space = document.querySelector('.space');
const ctrl = document.querySelector('.ctrl');
const alt = document.querySelector('.alt');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const enter = document.querySelector('.enter');
const del = document.querySelector('.del');
function wideKey(button) {
  button.classList.add('wide-key');
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
  if (target.classList.contains('key')) {
    const start = input.selectionStart;
    const character = target.textContent;
    const end = input.selectionEnd;
    if (target.textContent === 'Tab') {
      event.preventDefault();
      handleTabKeyPress(event);
    } else if (target.textContent === 'Shift') {
      event.preventDefault();
      handleShiftKeyPress();
    } else if (target.textContent === 'Backspace') {
      event.preventDefault();
      handleBackspaceKeyPress(event);
    } else if (target.textContent === 'space') {
      event.preventDefault();
      handleSpaceKeyPress();
    } else if (target.textContent === 'del') {
      event.preventDefault();
      handleDelKeyPress();
    } else if (target.textContent === 'CapsLock') {
      capsPressed = true;
      caps();
    } else if (target.textContent === 'ctrl' || target.textContent === 'alt') {
      input.value = input.value.slice(0, start) + '' + input.value.slice(end);
    } else if (
      target.textContent === 'up' ||
      target.textContent === 'left' ||
      target.textContent === 'right' ||
      target.textContent === 'down'
    ) {
      arrows(target);
    } else if (target.textContent === 'enter') {
      mouseEnter();
    } else {
      input.value =
        input.value.slice(0, start) + character + input.value.slice(end);
      input.setSelectionRange(start + 1, start + 1);
    }
  }
}

const keyboardKeys = document.querySelectorAll('.key');

document.addEventListener('keydown', (event) => {
  const key = event.key;
  keyboardKeys.forEach((keyButton) => {
    if (event.ctrlKey && event.altKey) {
      if (currentLang == en) {
        //работа шифта
        currentLang = ru;
        replaceKeys(ru);
      } else if (currentLang == ru) {
        currentLang = en;
        replaceKeys(en);
      } else if (currentLang == enShift) {
        currentLang = ruShift;
        replaceKeys(ruShift);
      } else if (currentLang == ruShift) {
        currentLang = enShift;
        replaceKeys(enShift);
      }
    }
    if (event.key === 'Shift') {
      shiftPressed = true;
      handleShiftKeyPress();
    }
    if (keyButton.textContent === key) {
      keyButton.classList.add('active');
      input.focus();
    }
    event.key === ' ' ? space.classList.add('active') : null;
    event.key === 'Control' ? ctrl.classList.add('active') : null;
    event.key === 'Alt' ? alt.classList.add('active') : null;
    event.key === 'ArrowUp' ? up.classList.add('active') : null;
    event.key === 'ArrowLeft' ? left.classList.add('active') : null;
    event.key === 'ArrowRight' ? right.classList.add('active') : null;
    event.key === 'ArrowDown' ? down.classList.add('active') : null;
    event.key === 'Enter' ? enter.classList.add('active') : null;
    event.key === 'Delete' ? del.classList.add('active') : null;
  });

  if (event.key === 'CapsLock') {
    capsPressed = true;
    event.preventDefault();
    caps();
  }
  if (event.key === 'Backspace') {
    event.preventDefault();
    handleBackspaceKeyPress(event);
  }
  if (event.key === 'Tab') {
    event.preventDefault();
    handleTabKeyPress(event);
  }
  if (
    event.key === 'ArrowUp' ||
    event.key === 'ArrowRight' ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowDown'
  ) {
    arrows(event);
  }
});

function arrows(target) {
  console.log(target.key);
  const start = input.selectionStart;
  const end = input.selectionEnd;
  const arrowUp = String.fromCharCode(8593);
  const arrowDown = String.fromCharCode(8595);
  const arrowLeft = String.fromCharCode(8592);
  const arrowRight = String.fromCharCode(8594);
  target.textContent === 'up'
    ? ((input.value =
        input.value.slice(0, start) + arrowUp + input.value.slice(end)),
      input.setSelectionRange(start + 1, start + 1))
    : null;
  target.textContent === 'left'
    ? ((input.value =
        input.value.slice(0, start) + arrowLeft + input.value.slice(end)),
      input.setSelectionRange(start + 1, start + 1))
    : null;
  target.textContent === 'right'
    ? ((input.value =
        input.value.slice(0, start) + arrowRight + input.value.slice(end)),
      input.setSelectionRange(start + 1, start + 1))
    : null;
  target.textContent === 'down'
    ? ((input.value =
        input.value.slice(0, start) + arrowDown + input.value.slice(end)),
      input.setSelectionRange(start + 1, start + 1))
    : null;
  target.key === 'ArrowUp'
    ? (target.preventDefault(),
      (input.value =
        input.value.slice(0, start) + arrowUp + input.value.slice(end)),
      input.setSelectionRange(start + 1, start + 1))
    : null;
  target.key === 'ArrowLeft'
    ? (target.preventDefault(),
      (input.value =
        input.value.slice(0, start) + arrowLeft + input.value.slice(end)),
      input.setSelectionRange(start + 1, start + 1))
    : null;
  target.key === 'ArrowRight'
    ? (target.preventDefault(),
      (input.value =
        input.value.slice(0, start) + arrowRight + input.value.slice(end)),
      input.setSelectionRange(start + 1, start + 1))
    : null;
  target.key === 'ArrowDown'
    ? (target.preventDefault(),
      (input.value =
        input.value.slice(0, start) + arrowDown + input.value.slice(end)),
      input.setSelectionRange(start + 1, start + 1))
    : null;
}
document.addEventListener('keyup', (event) => {
  const key = event.key;
  keyboardKeys.forEach((keyButton) => {
    if (event.key === 'Shift') {
      shiftPressed = false;
      handleShiftKeyPress();
    }
    if (keyButton.textContent === key) {
      keyButton.classList.remove('active');
    }
    event.key === ' ' ? space.classList.remove('active') : null;
    event.key === 'Control' ? ctrl.classList.remove('active') : null;
    event.key === 'Alt' ? alt.classList.remove('active') : null;
    event.key === 'ArrowUp' ? up.classList.remove('active') : null;
    event.key === 'ArrowLeft' ? left.classList.remove('active') : null;
    event.key === 'ArrowRight' ? right.classList.remove('active') : null;
    event.key === 'ArrowDown' ? down.classList.remove('active') : null;
    event.key === 'Enter' ? enter.classList.remove('active') : null;
    event.key === 'Delete' ? del.classList.remove('active') : null;
  });
});
function mouseEnter() {
  input.value += '\n';
}
function handleSpaceKeyPress() {
  const cursorPosition = input.selectionStart;
  const textBeforeCursor = input.value.slice(0, cursorPosition);
  const textAfterCursor = input.value.slice(cursorPosition);
  const newText = textBeforeCursor + ' ' + textAfterCursor;
  input.value = newText;
  input.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
}
function handleDelKeyPress() {
  const cursorPosition = input.selectionEnd;
  input.value =
    input.value.slice(0, cursorPosition) +
    input.value.slice(cursorPosition + 1);
  input.setSelectionRange(cursorPosition, cursorPosition);
}
function caps() {
  if (capsPressed === true && currentLang == en) {
    capsPressed = true;
    currentLang = upperEN;
    replaceKeys(upperEN);
  } else if (currentLang === upperEN) {
    capsPressed = false;
    currentLang = en;
    replaceKeys(en);
  }
  if (currentLang == ru) {
    capsPressed = true;
    currentLang = upperRU;
    replaceKeys(upperRU);
  } else if (currentLang === upperRU) {
    capsPressed = false;
    currentLang = ru;
    replaceKeys(ru);
  }
}

function replaceKeys(lang) {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key, i) => {
    key.textContent = lang[i];
  });
}
function handleShiftKeyPress() {
  currentLang === en
    ? ((currentLang = enShift), replaceKeys(enShift))
    : currentLang === enShift
    ? ((currentLang = en), replaceKeys(en))
    : currentLang === ru
    ? ((currentLang = ruShift), replaceKeys(ruShift))
    : ((currentLang = ru), replaceKeys(ru));
}
function handleTabKeyPress(event) {
  event.preventDefault();
  const cursorPosition = input.selectionStart;
  const textBeforeCursor = input.value.slice(0, cursorPosition);
  const textAfterCursor = input.value.slice(cursorPosition);
  const newText = textBeforeCursor + '    ' + textAfterCursor;
  input.value = newText;
  input.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
}

function handleBackspaceKeyPress(event) {
  event.preventDefault();
  const start = input.selectionStart;
  const end = input.selectionEnd;
  // если выделен текст, то удаляем его полностью
  if (start !== end) {
    input.value = input.value.slice(0, start) + input.value.slice(end);
    input.setSelectionRange(start, start);
    return;
  }
  // если перед курсором есть 4 пробела табуляции, то удаляем их
  if (input.value.slice(start - 4, start) === '    ') {
    input.value = input.value.slice(0, start - 4) + input.value.slice(start);
    input.setSelectionRange(start - 4, start - 4);
    return;
  }
  // иначе удаляем один символ перед курсором
  input.value = input.value.slice(0, start - 1) + input.value.slice(start);
  input.setSelectionRange(start - 1, start - 1);
}

keyboardBox.addEventListener('click', writeMashine);
keyboardBox.addEventListener('keydown', writeMashine);
