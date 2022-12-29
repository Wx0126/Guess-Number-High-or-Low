'use strict';
console.log(document.querySelector('.message').textContent);

//DOM: document object model, allows JS to access HTML elements and styles to manipulate:

//API: application programming interface:

//APIs: DOM,Fetch,Timers.

//selecting and manipulating elements:
// document.querySelector('.message').textContent = 'Correct Number!😛';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//generate a secret number:
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//this function is created to display message: //dont repeat yourself: DRY principle!
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//score:
let score = 20;
//again event
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
//highscore:
let highScore = 0;
//handling click events:
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when input is no number
  if (!guess) {
    displayMessage('No Input Number yet!🥲');
    //when win
  } else if (guess === secretNumber) {
    displayMessage('Yeah! Correct!🥹 ');
    document.querySelector('.number').textContent = secretNumber;
    //change the CSS style: first select the html element, then .style, then . width/backgroundColor, then  = '';
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';
    if (score >= highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when not win, too high or too low
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High🤒!' : 'Too Low🥶！');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('U lose the game! 😖');
      document.querySelector('.score').textContent = 0;
    }
  }
});
