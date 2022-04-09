let allChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "X",
  "Y",
  "Z",
  ",",
  ".",
  "-",
  "$",
  "!",
  "&",
  "*",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
let passwords = document.querySelector(".password-container1");
let passwords2 = document.querySelector(".password-container2");
let passwords3 = document.querySelector(".password-container3");
let passwords4 = document.querySelector(".password-container4");

function passwordGenerator1() {
  for (let i = 0; i < allChars.length; i++) {
    let a = Math.floor(Math.random() * allChars.length);
    let b = Math.floor(Math.random() * allChars.length);
    let c = Math.floor(Math.random() * allChars.length);
    let d = Math.floor(Math.random() * allChars.length);
    let e = Math.floor(Math.random() * allChars.length);
    let f = Math.floor(Math.random() * allChars.length);
    let g = Math.floor(Math.random() * allChars.length);
    let h = Math.floor(Math.random() * allChars.length);
    let i = Math.floor(Math.random() * allChars.length);
    let j = Math.floor(Math.random() * allChars.length);
    let password =
      allChars[a] +
      allChars[b] +
      allChars[c] +
      allChars[d] +
      allChars[e] +
      allChars[f] +
      allChars[g] +
      allChars[h] +
      allChars[i] +
      allChars[j];
    passwords.textContent = password;
  }
}

function passwordGenerator2() {
  for (let i = 0; i < allChars.length; i++) {
    let a = Math.floor(Math.random() * allChars.length);
    let b = Math.floor(Math.random() * allChars.length);
    let c = Math.floor(Math.random() * allChars.length);
    let d = Math.floor(Math.random() * allChars.length);
    let e = Math.floor(Math.random() * allChars.length);
    let f = Math.floor(Math.random() * allChars.length);
    let g = Math.floor(Math.random() * allChars.length);
    let h = Math.floor(Math.random() * allChars.length);
    let i = Math.floor(Math.random() * allChars.length);
    let j = Math.floor(Math.random() * allChars.length);
    let password2 =
      allChars[a] +
      allChars[b] +
      allChars[c] +
      allChars[d] +
      allChars[e] +
      allChars[f] +
      allChars[g] +
      allChars[h] +
      allChars[i] +
      allChars[j];
    passwords2.textContent = password2;
  }
}
function passwordGenerator3() {
  for (let i = 0; i < allChars.length; i++) {
    let a = Math.floor(Math.random() * allChars.length);
    let b = Math.floor(Math.random() * allChars.length);
    let c = Math.floor(Math.random() * allChars.length);
    let d = Math.floor(Math.random() * allChars.length);
    let e = Math.floor(Math.random() * allChars.length);
    let f = Math.floor(Math.random() * allChars.length);
    let g = Math.floor(Math.random() * allChars.length);
    let h = Math.floor(Math.random() * allChars.length);
    let i = Math.floor(Math.random() * allChars.length);
    let j = Math.floor(Math.random() * allChars.length);
    let password3 =
      allChars[a] +
      allChars[b] +
      allChars[c] +
      allChars[d] +
      allChars[e] +
      allChars[f] +
      allChars[g] +
      allChars[h] +
      allChars[i] +
      allChars[j];
    passwords3.textContent = password3;
  }
}
function passwordGenerator4() {
  for (let i = 0; i < allChars.length; i++) {
    let a = Math.floor(Math.random() * allChars.length);
    let b = Math.floor(Math.random() * allChars.length);
    let c = Math.floor(Math.random() * allChars.length);
    let d = Math.floor(Math.random() * allChars.length);
    let e = Math.floor(Math.random() * allChars.length);
    let f = Math.floor(Math.random() * allChars.length);
    let g = Math.floor(Math.random() * allChars.length);
    let h = Math.floor(Math.random() * allChars.length);
    let i = Math.floor(Math.random() * allChars.length);
    let j = Math.floor(Math.random() * allChars.length);
    let password4 =
      allChars[a] +
      allChars[b] +
      allChars[c] +
      allChars[d] +
      allChars[e] +
      allChars[f] +
      allChars[g] +
      allChars[h] +
      allChars[i] +
      allChars[j];
    passwords4.textContent = password4;
  }
}

function passwordGenerator() {
  passwordGenerator1();
  passwordGenerator2();
  passwordGenerator3();
  passwordGenerator4();
}
