var clickOnCard = function (thisEle) {
    var card = $(thisEle).attr('id');
    var parameters = { putCard: card };
    $.put( '/putCard',parameters, function(data) {
        $('#results').html(data);
    });
};