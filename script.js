'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //Faster  that querySelector()
const current0El = document.getElementById('current--0'); //Faster  that querySelector()
const current1El = document.getElementById('current--1'); //Faster  that querySelector()
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

function setScoreZero() {
  curScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = curScore;
}

function switchPlayer() {
  setScoreZero();
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

let finalScores = [0, 0];
let curScore = 0;
let activePlayer = 0;

function init() {
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  btnNew.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.remove('hidden');
  setScoreZero();
  score0El.textContent = 0;
  score1El.textContent = 0;
  //diceEl.classList.add('hidden');
  finalScores = [0, 0];
  curScore = 0;
  activePlayer = 0;
}

// Starting conditions
init();

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
    curScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = curScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // Add current score to active player's score
  finalScores[activePlayer] += curScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    finalScores[activePlayer];

  // Check if playe's score is >= 100 and finish the game
  if (finalScores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
    btnNew.classList.remove('hidden');
    diceEl.classList.add('hidden');
  } else {
    // Switch to the next player
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
