var clickOnCard = function (thisEle) {
    var card = $(thisEle).attr('id');
    var parameters = { putCard: card };
    $.ajax({
        type: 'PUT',
        url: "/putCards",
        data: JSON.stringify(parameters),
        success: function(removedCard) {
            $('#'+removedCard.card).remove();
            $('#board #'+removedCard.card[0]).append('<div id="'+removedCard.card[0]+'" >'+removedCard.card+'</div>');
        },
        error: function(e) {
            console.log("Error is ",e);
        },
        dataType: "json",
        contentType: "application/json"
    });
};

