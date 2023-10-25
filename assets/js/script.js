// once the content is loaded, adds listener to buttons to start game on click
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let input = this.getAttribute("data-type");
            startGame(input);
            compChoice();
            if (input === 'reset') {
                reset();
            }
        });
    }
});

// function initiates a game after reciving player choice input
function startGame(gameChoice) {
    let playerImage = document.getElementById("player-img");
    if (gameChoice === "rock") {
        playerImage.setAttribute("src", "assets/images/rock.png")
        playerImage.setAttribute("alt", "rock")
    } else if (gameChoice === "paper"){
        playerImage.setAttribute("src", "assets/images/paper.png")
        playerImage.setAttribute("alt", "paper")
    } else if (gameChoice === "scissors"){
        playerImage.setAttribute("src", "assets/images/scissors.png")
        playerImage.setAttribute("alt", "scissors")
    } else if (gameChoice === "lizard"){
        playerImage.setAttribute("src", "assets/images/lizard.png")
        playerImage.setAttribute("alt", "lizard")
    } else if (gameChoice === "spock"){
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
        result = 'tie'
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
    result === 'win' ? w++ 
    : result === 'loss' ? l++ 
    : ( w = w, l = l) ;
    playerScore.innerHTML = w;
    compScore.innerHTML = l;
};

// function allows user to set the page to default by clicking reset button 
function reset(){
    let output = document.getElementById('results');
    let playerScore = document.getElementById('win');
    let compScore = document.getElementById('loss');
    let compImage = document.getElementById('computer-img');
    let playerImage = document.getElementById('player-img');
    output.innerHTML = "Make your choice";
    playerImage.setAttribute("src", "assets/images/atom.png");
    compImage.setAttribute("src", "assets/images/atom.png");
    playerScore.innerHTML = 0;
    compScore.innerHTML = 0;
    w = 0
    l = 0
};