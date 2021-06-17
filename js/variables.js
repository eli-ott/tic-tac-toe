//we're defining all the wining possibibilites (index = 0)
let winingCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

//visualizing the game plate with an array for better reading the values
let gamePlate = [
    '', '', '',
    '', '', '',
    '', '', ''
];

//defining the current player symbol
//it'll change if playing with two players
let symbol = 'x';

//we're defining an empty variable of the winner to after use it to tell the player(s) who won
let winner;

//defining the number og players playing
let playerNumber = 1;