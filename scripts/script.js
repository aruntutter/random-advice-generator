"use strict";

// get elements
const quoteIdEl = document.getElementById("quote-id");
const quoteTextEl = document.getElementById("quote-text");
const btnRandom = document.getElementById("btn-random");

// global variables
const url = `https://api.adviceslip.com/advice`;

// functions
function init() {
  getRandomAdvice();
}

async function getRandomAdvice() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    quoteIdEl.innerText = `#${data.slip.id}`;
    quoteTextEl.innerText = `"${data.slip.advice}"`;

    // console.log(data.slip.id);
    // console.log(data.slip.advice);
  } catch (err) {
    console.log(err.message);
  }
}

//event listeners
btnRandom.addEventListener("click", getRandomAdvice);

// initial settings
init();
