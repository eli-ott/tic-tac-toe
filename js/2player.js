$(".cases").on("click", function () {
    //we're changing the game plate variable
    gamePlate[parseInt($(this).attr('index'))] = symbol;

    //we're appending the symbol on the cases depending on the game plate variable
    for (let i = 0; i < gamePlate.length; i++) {
        if ($(".cases").eq(i).attr('changed') != 'true'
            && gamePlate[i] == 'x' || gamePlate[i] == 'o'
            && $(".cases").eq(i).attr('changed') != 'true') {

            //we're appending the right symbol to the right case
            $(".cases").eq(i).empty();
            $(".cases").eq(i).append(gamePlate[i]);

            //we create a new attribute to tell that this case was cahnged to not change it's value and we define a value attribute
            $(".cases").eq(i).attr('changed', 'true');
            $(".cases").eq(i).attr('value', symbol);

            //we're changing the symbol of the second player
            if (symbol == 'x') symbol = 'o';
            else if (symbol == 'o') symbol = 'x';

            //we're say it's whose turn
            $("#currentPlayer").empty();
            $("#currentPlayer").append(`${symbol.toUpperCase()} turn`);

            //w're checking if one of the player won
            if (checkWin()) {
                setTimeout(() => { stopGame(); checkScore(winner) }, 150);
            }
        }
    }
});