var lodash = require('lodash');
var playerModule = {};
var board = require("./board");
playerModule.players = {};

playerModule.addPlayer = function (player) {
    this.players[player] = [];
};

playerModule.putCard = function (player,card) {
    var cardIndex = this.players[player].indexOf(card);
    this.players[player] = this.players[player].filter(function (playerCard,index) {
        return index !=cardIndex;
    });
    var cardIndexOnBoard = board.putCardOnBoard(card);
    if(cardIndexOnBoard > -1){
        return {error: "", removedCard:card}
    }
    return {error: "You put wrong card", removedCard:card};
};


module.exports = playerModule;