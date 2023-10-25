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
    } else if (gameChoice == "paper"){
        playerImage.setAttribute("src", "assets/images/paper.png")
    } else if (gameChoice == "scissors"){
        playerImage.setAttribute("src", "assets/images/scissors.png")
    } else if (gameChoice == "lizard"){
        playerImage.setAttribute("src", "assets/images/lizard.png")
    } else if (gameChoice == "spock"){
        playerImage.setAttribute("src", "assets/images/spock.png")
    }
}

function compChoice() {
    let choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomChoice = Math.floor(Math.random()*choices.length);
    let finalChoice = choices[randomChoice];
    let compImage = document.getElementById('computer-img');
    compImage.setAttribute("src", `assets/images/${finalChoice}.png`)
}