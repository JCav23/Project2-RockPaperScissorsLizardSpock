// used for testing purposes
console.log("Bazinga!");

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

function compChoice() {
    let choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomChoice = Math.floor(Math.random()*choices.length);
    let finalChoice = choices[randomChoice];
    let compImage = document.getElementById('computer-img');
    compImage.setAttribute("src", `assets/images/${finalChoice}.png`)
    compImage.setAttribute("alt", `${finalChoice}`)
    evaluateWinner();
}

function evaluateWinner() {
    let results = [". You Win!", ". Bazinga! You Lose.", "It's a Tie..."];
    let playerImage = document.getElementById('player-img');
    let compImage = document.getElementById('computer-img');
    let playerResult = playerImage.getAttribute('alt');
    let compResult = compImage.getAttribute('alt');
    let output = document.getElementById('results');
    let playerScore = document.getElementById('win').value;
    let compScore = document.getElementById('loss').value;
    if (playerResult === compResult) {
        output.innerHTML = `You both chose ${playerResult}, ${results[2]}`;
    } else if (playerResult !== compResult) {
        
        if (playerResult === 'rock') {
            compResult === 'lizard' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0])
            : compResult === 'scissors' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0])
            : compResult === 'paper' ? (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1])
            : (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1]);

        } 
        
        else if (playerResult === 'paper') {
            compResult === 'rock' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0])
            : compResult === 'spock' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0])
            : compResult === 'scissors' ? (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1])
            : (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1]);
        } 
        
        else if (playerResult === 'scissors') {
            compResult === 'paper' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0])
            : compResult === 'lizard' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0])
            : compResult === 'spock' ? (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1])
            : (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1]);
        } 
        
        else if (playerResult === 'lizard') {
            compResult === 'paper' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0])
            : compResult === 'spock' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0])
            : compResult === 'scissors' ? (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1])
            : (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1]);
        } 
        
        else if (playerResult === 'spock') {
            compResult === 'rock' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0])
            : compResult === 'scissors' ? (output.innerHTML = document.getElementById(`${playerResult}-${compResult}`).innerHTML + results[0])
            : compResult === 'lizard' ? (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1])
            : (output.innerHTML = document.getElementById(`${compResult}-${playerResult}`).innerHTML + results[1]);
        }

    } 
};
