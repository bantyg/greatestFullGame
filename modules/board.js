var board = {
    'speads':[],
    'hearts':[],
    'diamonds':[],
    'clubs':[]
};


var setup = function () {
    Object.keys(board).forEach(function (suit) {
        board[suit].push(suit+'-'+7);
    })
};
setup();
console.log(board)
module.exports = board;