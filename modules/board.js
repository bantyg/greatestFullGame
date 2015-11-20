var board = {
    'spades':[],
    'hearts':[],
    'diamonds':[],
    'clubs':[]
};



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
            case 'hearts':splittedSuitName[0]= '♥'
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


setup();
module.exports = getBoardSetup(board);