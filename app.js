let computerScore = 0;
let userScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")
function toWord(l) {
    if (l == "r") return "Rock";
    if (l == "s") return "Scissor";
    return "Paper"
}
function getComp() {
    const choices = ['r', 's', 'p'];
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const su = " user".fontsize(3.6).sub();
    const sc = " comp".fontsize(3.6).sub();
    result_div.innerHTML = toWord(user) + su + " Beats " + toWord(comp) + sc + " YOU WIN!";
    document.getElementById(user).classList.add('green');
    setTimeout(function () { document.getElementById(user).classList.remove('green') }, 1000);
}

function loss(user, comp) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const su = " user".fontsize(3.6).sub();
    const sc = " comp".fontsize(3.6).sub();
    result_div.innerHTML = toWord(comp) + sc + " Beats " + toWord(user) + su + " YOU LOOSE.....";
    document.getElementById(user).classList.add('red');
    setTimeout(function () { document.getElementById(user).classList.remove('red') }, 1000);


}

function draw(user, comp) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const su = " user".fontsize(3.6).sub();
    const sc = " comp".fontsize(3.6).sub();
    result_div.innerHTML = toWord(user) + su + " Equals " + toWord(comp) + sc + " YOU DRAW!";
    document.getElementById(user).classList.add('gray');
    setTimeout(function () { document.getElementById(user).classList.remove('gray') }, 1000);

}



function game(userChoice) {
    const compChoice = getComp();
    switch (userChoice + compChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, compChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            loss(userChoice, compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, compChoice);
            break;


    }
}

function main() {

    rock_div.addEventListener('click', function () {

        game("r");
    })

    paper_div.addEventListener('click', function () {

        game("p");
    })

    scissor_div.addEventListener('click', function () {

        game("s");
    })
}

main();
