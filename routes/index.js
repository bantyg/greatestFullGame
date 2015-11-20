var express = require('express');
var router = express.Router();
var board = require('../modules/board');
var player = require('../modules/player');
var game = require('../modules/game');
var players = [];

var requireRegistration = function(req,res,next){
    req.session.username? next(): res.redirect('/');
};

router.get("/",function(req,res){
    req.session.username ? res.redirect('/dashboard') : res.render("registration");
});

router.get("/dashboard",requireRegistration,function(req,res){
    var opponents = players.filter(function (player) {
            return player != req.session.username;
    });
    if(players.length > 1 && player.players[req.session.username].length == 0){
        game.assignCards(players);
    }
    var playerData = {player:req.session.username,cards:getSuitSymbols(player.players[req.session.username])};
    res.render("dashboard",{playerData:playerData,board:changeBoard(board),opponents:opponents,});
});

var getSuitSymbols = function (cards) {
    return cards.map(function (card) {
        var splitedCardName = card.split('-');
        switch(splitedCardName[0]){
            case 'clubs':splitedCardName[0] = '♣';
                            break;
            case 'diamonds': splitedCardName[0] = '♦';
                            break;
            case 'spades': splitedCardName[0]='♠';
                            break;
            case 'hearts':splitedCardName[0]= '♥';
                break;
        }
        return splitedCardName.join('');
    })
};

var changeBoard = function(board){
    var newBoard = {};
    Object.keys(board).forEach(function (suit) {
        switch(suit){
            case 'clubs':newBoard['♣'] = board[suit];
                break;
            case 'diamonds': newBoard['♦'] = board[suit];
                break;
            case 'spades': newBoard['♠'] = board[suit];
                break;
            case 'hearts':newBoard['♥'] = board[suit];
                break;
        }
    })
    return newBoard;
}

router.post("/registerPlayer",function(req,res){
    req.session.username = req.body.name;
    players.push(req.session.username);
    player.addPlayer(req.session.username);
    res.redirect("/dashboard");
});

router.put('/putCards', function (req, res) {

    var removedCard = player.putCard(req.session.username,req.body.putCard);
    res.send({'card':removedCard});
});


module.exports = router;
