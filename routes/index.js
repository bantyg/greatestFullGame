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
    var opponants = players.filter(function (player) {
            return player != req.session.username;
    });
    if(players.length > 1 && player.players[req.session.username].length == 0){
        game.assignCards(players);
    }
    var playerData = {player:req.session.username,cards:player.players[req.session.username]};
    res.render("dashboard",{playerData:playerData,board:board,opponants:opponants,});
});

router.post("/registerPlayer",function(req,res){
    req.session.username = req.body.name;
    players.push(req.session.username);
    player.addPlayer(req.session.username);
    res.redirect("/dashboard");
});


module.exports = router;
