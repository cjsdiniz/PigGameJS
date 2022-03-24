'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //Faster  that querySelector()
const current0El = document.getElementById('current--0'); //Faster  that querySelector()
const current1El = document.getElementById('current--1'); //Faster  that querySelector()
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score = 0;
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
//for (let i = 0; i < )
btnRoll.addEventListener('click', function () {
  // Generating a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check rolled value
  if (dice !== 1) {
    score += dice;
    current0El.textContent = score;
  } else {
    current0El.textContent = 0;
    // Switch to next player
  }
});
