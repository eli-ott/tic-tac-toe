const playAgain = () => {
    //reinitalizing the gamePlate and the winner
    gamePlate = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    winner = undefined;

    $(".cases").empty().removeAttr('changed');

    //re displaying the game plate 
    $("#endContent").css("display", 'none');
    $("#game").css('display', 'flex');

    //letting the user playing
    canPlay = true;
}