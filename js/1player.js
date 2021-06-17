let canPlay = true;

$(".cases").on("click", function () {
    if (canPlay) { 
        //we're changing the gamePlate variable to update the page
        gamePlate[parseInt($(this).attr('index'))] = symbol;
    }

    for (let i = 0; i < gamePlate.length; i++) {
        if ($(".cases").eq(i).attr('changed') != 'true'
            && gamePlate[i] == 'x'
            && canPlay) {

            //we're avoiding the player to play before the bot
            canPlay = false;

            //we're emptying the case and appending the right symbol to it
            $(this).empty();
            $(this).append(gamePlate[i]);
            $(this).attr('changed', 'true');

            //we're say it's whose turn
            $("#currentPlayer").empty();
            $("#currentPlayer").append(`Bot turn`);

            //we're checking if the player won to stop the game
            //we"re also checking the score to increse the leaderboard scores
            if (checkWin()) {
                setTimeout(() => { stopGame(); checkScore(winner); }, 150);
            } else {
                //we're calling the function to let the bot play
                setTimeout(() => { findEmptyCase(); }, 500);
            }
        }
    }
});

const findEmptyCase = () => {
    //we're randomly choosing a case number
    let caseNumber = Math.floor(Math.random() * 9);


    //we check if the cae is empty to append the bot symbol
    if ($(".cases").eq(caseNumber).attr('changed') != 'true') {
        //we're changing the gamePlate variable to update the page
        gamePlate[caseNumber] = 'o';

        //we're appending the o symbol and telling that the case changed
        $(".cases").eq(caseNumber).empty();
        $(".cases").eq(caseNumber).append('o');
        $(".cases").eq(caseNumber).attr('changed', 'true');

        //we're say it's whose turn
        $("#currentPlayer").empty();
        $("#currentPlayer").append(`Your turn`);

        //we're letting the player play after the bot finished
        setTimeout(() => { canPlay = true; }, 250);

        //we're checking if the player won to stop the game
        if (checkWin()) {
            setTimeout(() => { stopGame(); checkScore(winner); }, 150);
        }

    } else {
        findEmptyCase();
    }
}