const ru = [
    "ё","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=","backspace",
    "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з","х","ъ",
    "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж","э","\\","enter",
    "SHIFT","up","я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
    "left","down","right","space"
];

const en = [
    "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=","backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[","]",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";","'","\\","enter",
    "SHIFT","up","z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
    "left","down","right","space"
];
let currentLang = en;
const input = document.createElement('textarea');
input.classList.add('input');
document.body.append(input);

const keyboardBox = document.createElement('div');
keyboardBox.classList.add('keyboard-container');
document.body.append(keyboardBox);


currentLang.forEach((key) => {
  const button = document.createElement("button");
  button.classList.add("key");
  button.textContent = key;
  if (key === "backspace" || key === "enter" || key === "caps" || key === "left") {
    const lineBreak = document.createElement("div");
    lineBreak.classList.add("line-break");
     keyboardBox.appendChild(lineBreak);
  }
  if (
    key === "backspace" ||
    key === "enter" ||
    key === "caps" ||
    key === "space" ||
    key === "shift"
  ) {
    wideKey(button);
  }
  keyboardBox.appendChild(button);
});

function wideKey(button) {
    button.classList.add('wide-key');
  }
document.body.appendChild(keyboardBox);

