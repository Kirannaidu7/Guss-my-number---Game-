'use strict';
/**

document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 7;
console.log(document.querySelector('.number').textContent);
document.querySelector('.score').textContent = 17;
console.log(document.querySelector('.score').textContent);
document.querySelector('.guess').value = 7;
console.log(document.querySelector('.guess').value);
 */
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when input is empty
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No Number!';
    displayMessage('⛔No Number!');
  }
  // when player wins
  else if (secretNumber === guess) {
    //document.querySelector('.message').textContent = '🎉Correct Number! ';
    displayMessage('🎉Correct Number! ');
    document.querySelector('body').style.backgroundColor = 'rgb(96, 179, 71)';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score <= 1) {
      // document.querySelector('.message').textContent = '💣You have lost the game! ';
      displayMessage('💣You have lost the game! ');
      document.querySelector('.score').textContent = 0;
    } else {
      // document.querySelector('.message').textContent =guess > secretNumber ? '📈 Too high!' : '📉 Too low! ';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low! ');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // when numberr is too low
  // else if (guess < secretNumber) {
  //   if (score <= 1) {
  //     document.querySelector('.message').textContent =
  //       '💣You have lost the game! ';
  //     document.querySelector('.score').textContent = 0;
  //   } else {
  //     document.querySelector('.message').textContent = '📉 Too low! ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
  //when number is too high
  // else if (guess > secretNumber) {
  //   if (score <= 1) {
  //     document.querySelector('.message').textContent =
  //       '💣You have lost the game! ';
  //     document.querySelector('.score').textContent = 0;
  //   } else {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
});

// Again functionality
document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
