const oneDots = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"];
const twoDots = ["ت", "ق"];
const threeDots = ["ث", "پ", "چ", "ژ", "ش"];
const exeption = "ی";
const dotsCounter = document.querySelector(".dots-counter");
const wordInput = document.querySelector("input");

wordInput.addEventListener("input", calcWordDots);

function calcWordDots(e) {
  const strToArr = e.target.value.split(" ");
  let dots = 0;
  for (let i = 0; i < strToArr.length; i++) {
    let wordWithoutExeption = strToArr[i].slice(0, strToArr[i].length - 1);
    let word = strToArr[i];

    for (let j = 0; j < word.length; j++) {
      oneDots.includes(word[j])
        ? dots++
        : twoDots.includes(word[j])
        ? (dots += 2)
        : threeDots.includes(word[j])
        ? (dots += 3)
        : exeption === wordWithoutExeption[j]
        ? (dots += 2)
        : dots;
    }
  }
  showDots(dots);
}

function showDots(dots) {
  dotsCounter.textContent = dots;
}
