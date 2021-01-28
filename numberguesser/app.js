


// Game values

let min = 10;
let max = 15;
let winningNum = getRandomNum(min,max);
let guessesLeft = 3;

//Ui Elements

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum  = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');
 
//Assign Ui min and max

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }

    if(guess === winningNum){
        gameOver(true, `${winningNum} is Correct! YOU WIN`,);
    } else{

        guessesLeft -= 1;
        
        if(guessesLeft === 0){
            //Game over
            gameOver(false,`Game Over, you last. The correct number was ${winningNum}`);
    } else{
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
        }

    }

});
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

function gameOver(won,msg){
    let color;
    won === true? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again'

    setMessage(msg)
}

function getRandomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);

}

//Set mesage
function setMessage(msg , color){
    message.style.color = color;
    message.textContent = msg;
}