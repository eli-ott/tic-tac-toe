//we're initializing the localStorage if it's not
if (localStorage.getItem('xScore') == null
    || localStorage.getItem('oScore') == null) {
    localStorage.setItem('xScore', 0);
    localStorage.setItem('oScore', 0);
}

//we're displaying the score value in the leaderboard
const displayScore = () => {
    $("#xScore").empty(); 
    $("#oScore").empty();
    $("#xScore").append(localStorage.getItem('xScore'));
    $("#oScore").append(localStorage.getItem('oScore'));
}

//we're displaying the score when the user load the game
displayScore();

const checkScore = winenrSymbol => {
    //we're increasing the score of the winner
    localStorage.setItem(`${winenrSymbol}Score`, parseInt(localStorage.getItem(`${winenrSymbol}Score`)) + 1);

    displayScore();
}

$("#reset").on("click", () => {
    localStorage.setItem('xScore', 0);
    localStorage.setItem('oScore', 0);

    displayScore();
});