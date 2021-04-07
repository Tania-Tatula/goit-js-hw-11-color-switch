import { colors } from "./colors.js";

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");
// console.log(colors.length);
let timerId = null;

startBtn.addEventListener("click", changesColorBody);
stopBtn.addEventListener("click", stopChangesColorBody);

function changesColorBody() {
  timerId = setInterval(() => {
    const nubberColor = randomIntegerFromInterval(0, colors.length - 1);

    body.style.backgroundColor = colors[nubberColor];
  }, 1000);

  startBtn.removeEventListener("click", changesColorBody);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function stopChangesColorBody() {
  clearInterval(timerId);
  startBtn.addEventListener("click", changesColorBody);
}
