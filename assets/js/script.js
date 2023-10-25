// once the content is loaded, adds listener to buttons to start game on click
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let gameChoice = this.getAttribute("data-type");
            startGame(gameChoice);
            compChoice();
        });
    }
});

// function initiates a game after reciving player choice input
function startGame(gameChoice) {
    let playerImage = document.getElementById("player-img");
    if (gameChoice == "rock") {
        playerImage.setAttribute("src", "assets/images/rock.png")
        playerImage.setAttribute("alt", "rock")
    } else if (gameChoice == "paper"){
        playerImage.setAttribute("src", "assets/images/paper.png")
        playerImage.setAttribute("alt", "paper")
    } else if (gameChoice == "scissors"){
        playerImage.setAttribute("src", "assets/images/scissors.png")
        playerImage.setAttribute("alt", "scissors")
    } else if (gameChoice == "lizard"){
        playerImage.setAttribute("src", "assets/images/lizard.png")
        playerImage.setAttribute("alt", "lizard")
    } else if (gameChoice == "spock"){
        playerImage.setAttribute("src", "assets/images/spock.png")
        playerImage.setAttribute("alt", "spock")
    }
}

// generates a random choice for the computer following game start
function compChoice() {
    let choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomChoice = Math.floor(Math.random()*choices.length);
    let finalChoice = choices[randomChoice];
    let compImage = document.getElementById('computer-img');
    compImage.setAttribute("src", `assets/images/${finalChoice}.png`)
    compImage.setAttribute("alt", `${finalChoice}`)
    evaluateWinner();
}

// evaluates computer and player input, and updates html based on the results
function evaluateWinner() {
    let results = [". You Win!", ". Bazinga! You Lose.", "It's a Tie..."];
    let result = "";
    let playerImage = document.getElementById('player-img');
    let compImage = document.getElementById('computer-img');
    let playerResult = playerImage.getAttribute('alt');
    let compResult = compImage.getAttribute('alt');
    let output = document.getElementById('results');
    if (playerResult === compResult) {
        output.innerHTML = `You both chose ${playerResult}, ${results[2]}`;
    } else if (playerResult !== compResult) {
        
        if (playerResult === 'rock') {
            compResult === 'lizard' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0], result = "win")
            : compResult === 'scissors' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0], result = "win")
            : compResult === 'paper' ? (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1], result = "loss")
            : (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1], result = "loss");

        } 
        
        else if (playerResult === 'paper') {
            compResult === 'rock' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0], result = "win")
            : compResult === 'spock' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0], result = "win")
            : compResult === 'scissors' ? (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1], result = "loss")
            : (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1], result = "loss");
        } 
        
        else if (playerResult === 'scissors') {
            compResult === 'paper' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0], result = "win")
            : compResult === 'lizard' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0], result = "win")
            : compResult === 'spock' ? (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1], result = "loss")
            : (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1], result = "loss");
        } 
        
        else if (playerResult === 'lizard') {
            compResult === 'paper' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0], result = "win")
            : compResult === 'spock' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0], result = "win")
            : compResult === 'scissors' ? (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1], result = "loss")
            : (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1], result = "loss");
        } 
        
        else if (playerResult === 'spock') {
            compResult === 'rock' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0], result = "win")
            : compResult === 'scissors' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0], result = "win")
            : compResult === 'lizard' ? (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1], result = "loss")
            : (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1], result = "loss");
        }

    };
    updateScores(result);
};

// function updates the scores in the html after each game 
let w = 0;
let l = 0;

function updateScores(result) {
    let playerScore = document.getElementById('win');
    let compScore = document.getElementById('loss');
    result === 'win' ? w++ : l++;
    playerScore.innerHTML = w;
    compScore.innerHTML = l;
};
