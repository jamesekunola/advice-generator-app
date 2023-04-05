const adviceNo = document.querySelector(".advice-no");
const quote = document.querySelector(".quote");
const dice = document.querySelector(".dice");

const url = "https://type.fit/api/quotes";

dice.addEventListener("click", getQuote);
addEventListener("DOMContentLoaded", getQuote());

function getQuote() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      getRandomizeQuote(data);
    });
}

function getRandomizeQuote(advice) {
  const randomQuote = Math.floor(Math.random() * advice.length);
  adviceNo.innerHTML = `Advice #${randomQuote + 1}`;
  quote.innerHTML = `"${advice[randomQuote].text}"`;
}
