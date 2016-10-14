var lodash = require('lodash');

var board = {
    'spades':[],
    'hearts':[],
    'diamonds':[],
    'clubs':[]
};

var suites = {
    '♣':'clubs',
    '♦':'diamonds',
    '♠': 'spades',
    '♥':'hearts'
}


var getBoardSetup = function (board) {
    var presentedCards = Object.keys(board);
    presentedCards.forEach(function(suit){
        var splittedSuitName = board[suit][0].split('-');
        switch(splittedSuitName[0]){
            case 'clubs':splittedSuitName[0] = '♣';
                break;
            case 'diamonds': splittedSuitName[0] = '♦';
                break;
            case 'spades': splittedSuitName[0]='♠';
                break;
            case 'hearts':splittedSuitName[0]= '♥';
                break;
        }
        board[suit][0] = splittedSuitName.join('');

    })
    return board;
};


var setup = function () {
    Object.keys(board).forEach(function (suit) {
        board[suit].push(suit+'-'+7);
    });
};

var putCardOnBoard = function (card) {
    var numberPattern = /\d+/;
    var suit = suites[card[0]];
    var cardNumber = card.slice(1);
    var firstCardNumberInSuit = lodash.first(board[suit]).match(numberPattern)[0];
    var lastCardNumberInSuit = lodash.last(board[suit]).match(numberPattern)[0];

    if(cardNumber == parseInt(firstCardNumberInSuit)-1){
        board[suit].splice(0,0,card);
        return board[suit].indexOf(card)
    } else if(cardNumber == parseInt(lastCardNumberInSuit)+1){
        board[suit].push(card);
        return board[suit].indexOf(card)
    }else
        return -1;

};

setup();
module.exports = {
    board:getBoardSetup(board),
    putCardOnBoard: putCardOnBoard
};
