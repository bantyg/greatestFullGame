clickOnCard = function (thisEle) {
    var card = $(thisEle).attr('id');
    var parameters = {putCard: card};
    $.ajax({
        type: 'PUT',
        url: "/putCards",
        data: JSON.stringify(parameters),
        success: function (response) {
            if(response.errorStatus){
                alert(response.error)
            }else {
                $('#' + response.removedCard).remove();
                $('#board #' + response.removedCard[0]).append('<div id="' + response.removedCard[0] + '" >' + response.removedCard + '</div>');
            }
        },
        error: function (e) {
            console.log("Error is ", e);
        },
        dataType: "json",
        contentType: "application/json"
    });
};

