'use strict';
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('🚫No number');
    }
    else if (guess === secretNumber) {
        displayMessage('✅Correct guess');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = `🏅Highscore: ${highscore}`;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
            score--;
            document.querySelector('.score').textContent = `🪙Score: ${score}`;
        } else {
            displayMessage('💩You Lost');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor =
                '#db5046';

        }
    }

}); document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    displayMessage('Start Guessing..');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = `🪙Score: ${score}`;



})