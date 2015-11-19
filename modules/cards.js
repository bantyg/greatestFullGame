var lodash = require('lodash');
var cardsModule = {};
var cards = {
    'spades':[],
    'hearts':[],
    'diamonds':[],
    'clubs':[]
};

var createCards = function () {
    var allCards = []
    Object.keys(cards).forEach(function (card) {
        for(var number=1;number<=13;number++){
            if(number <= 13 && number != 7){
                cards[card].push(card+'-'+number)
            }
        }
        allCards = allCards.concat(cards[card])
    })
    return allCards;
};
var allCards = createCards();
cardsModule.shuffledCards = function() {
    return lodash.shuffle(allCards);
};

module.exports = cardsModule;