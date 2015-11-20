var lodash = require('lodash');
var playerModule = {};
playerModule.players = {};

playerModule.addPlayer = function (player) {
    this.players[player] = [];
};

playerModule.putCard = function (player,card) {
    var cardIndex = this.players[player].indexOf(card);
    this.players[player] = this.players[player].filter(function (playerCard,index) {
        return index !=cardIndex;
    })
    return card;
}

module.exports = playerModule;