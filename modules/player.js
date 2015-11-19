var playerModule = {};
playerModule.players = {};
playerModule.addPlayer = function (player) {
    this.players[player] = [];
};

module.exports = playerModule;