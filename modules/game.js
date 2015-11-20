var cards = require('./cards');
var player = require('./player');
var gameModule = {};

gameModule.assignCards = function(players) {
    var shuffledCards = cards.shuffledCards();
    var noOfPlayers = players.length;
    var noOfCardsToAssign = shuffledCards.length/noOfPlayers;
    Object.keys(player.players).forEach(function (eachPlayer) {
        player.players[eachPlayer] = shuffledCards.splice(0,noOfCardsToAssign);
    })
};



module.exports = gameModule;