//event listener to start the game depending on the number of players
$("#1player").on("click", () => {
    playerNumber = 1;
    //we're enptying the main content and appending the right one
    $("#content").remove();

    $("#game").css("display", 'flex');
    $("body").append('<script type="text/javascript" src="./js/1player.js"></script>');
});

$("#2player").on("click", () => {
    playerNumber = 2;
    //we're enptying the main content and appending the right one
    $("#content").remove();

    $("#game").css("display", 'flex');
    $("body").append('<script type="text/javascript" src="./js/2player.js"></script>');
});

//function to stop the game when someone win
const stopGame = () => {
    //we're removing the game plate and displaying the end game screen
    $("#game").css('display', 'none');
    $("#endContent").css('display', 'flex');

    //we're telling who win
    if (winner != 'tie'
        && $('script').eq($("script").length - 1).attr('src') != './js/1player.js') {

        $("#winnerSymbol").empty().append(symbol == 'o' ? symbol = 'x' : symbol = 'o');
    } else if (winner != 'tie'
        && $("script").eq($("script").length - 1).attr('src') == './js/1player.js') {

        $("#winnerSymbol").empty().append(winner);
    } else if (winner == 'tie') {
        $("#endContent h1").empty().append("it's a tie !");
    }
}

const checkWin = () => {
    for (let i = 0; i < winingCases.length; i++) {
        //we check if no one win to tell the player that there is a tie
        if ($(".cases[changed='true']").length == 9) {
            winner = 'tie';
            return true;
        }

        //we're looking if the player with the x symbol won
        if (gamePlate[winingCases[i][0]] == 'x'
            && gamePlate[winingCases[i][1]] == 'x'
            && gamePlate[winingCases[i][2]] == 'x') {
            winner = 'x';
            return true;
        }

        //we're looking if the player with the o symbol won
        if (gamePlate[winingCases[i][0]] == 'o'
            && gamePlate[winingCases[i][1]] == 'o'
            && gamePlate[winingCases[i][2]] == 'o') {
            winner = 'o';
            return true;
        }
    }

    return false;
}