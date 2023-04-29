const ru = [
    "ё","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=","backspace",
    "Tab","й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з","х","ъ","\\","del",
    "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж","э","enter",
    "shift","я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".","up","shift",
    "ctrl","alt","space","alt","ctrl","left","down","right"
];

const en = [
    "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=","backspace",
    "Tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[","]","\\","del",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";","'","enter",
    "shift","z", "x", "c", "v", "b", "n", "m", ",", ".", "/","up","shift",
    "ctrl","alt","space","alt","ctrl","left","down","right"
];
let currentLang = en;
console.log(currentLang.indexOf('ctrl'));
const input = document.createElement('textarea');
input.classList.add('input');
document.body.append(input);

const keyboardBox = document.createElement('div');
keyboardBox.classList.add('keyboard-container');
document.body.append(keyboardBox);


currentLang.forEach((key, i) => {
  const button = document.createElement("button");
  button.classList.add("key");
  button.textContent = key;
  if (i === 14 || i === 29 || i === 42 || i === 55) { //перенос по индексу
    keyboardBox.appendChild(document.createElement("br"));
  }
  if (

    key === "enter" ||
    key === "Tab" ||
    key === "caps" ||
    key === "backspace" ||
    key === "shift"
  ) {
    wideKey(button);
  }
  if(key==="space"){
    button.classList.add('space')
  }
  keyboardBox.appendChild(button);
});

function wideKey(button) {
    button.classList.add("wide-key");
}

document.body.appendChild(keyboardBox);

function writeMashine(event) { //шукаю клик
    const target = event.target;
    if (target.classList.contains("key")) {
      input.textContent += target.textContent;
      console.log(target.textContent);
    }
  }

  keyboardBox.addEventListener("click", writeMashine);