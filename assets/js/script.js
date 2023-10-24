// used for testing purposes
console.log("Bazinga!");

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let gameChoice = this.getAttribute("data-type");
            console.log(gameChoice);
        });
    }
});