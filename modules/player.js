var lodash = require('lodash');
var playerModule = {};
var board = require("./board");
playerModule.players = {};

playerModule.addPlayer = function (player) {
    this.players[player] = {
        myTurn: false,
        cards: []
    };
};

playerModule.putCard = function (player,card) {
    var cardIndex = this.players[player]['cards'].indexOf(card);
    this.players[player]['cards'] = this.players[player]['cards'].filter(function (playerCard,index) {
        return index !=cardIndex;
    });

    var cardIndexOnBoard = board.putCardOnBoard(card);
    if(cardIndexOnBoard > -1){
        return {errorStatus:false, error: "", removedCard:card}
    }
    return {errorStatus:true, error: "You put wrong card", removedCard:card};
};


module.exports = playerModule;