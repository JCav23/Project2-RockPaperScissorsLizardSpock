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
    let results = ["You Win!", "Bazinga! You Lose.", "It's a Tie..."];
    let playerImage = document.getElementById('player-img');
    let compImage = document.getElementById('computer-img');
    let playerResult = playerImage.getAttribute('alt');
    let compResult = compImage.getAttribute('alt');
    let output = document.getElementById('results');
    if (playerResult === compResult) {
        output.innerHTML = `You both chose ${playerResult}, ${results[2]}`;
        console.log(playerResult, results[2]);
    }
};