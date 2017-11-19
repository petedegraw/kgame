$(document).ready(function(){

    game = function() {
        var gameWrapper = $('#game-wrapper');
    
        // set background color
        gameWrapper.css('background','#c706ff');

    }
    
    var game = new game();
});

$(document).keydown(function(e){
    var ella = $('#ella');
    var speed = 250;

    switch (e.which) {
        case 38:
            ella.stop().animate({
                top: '-=25'
            }, speed); //up arrow key
            break;
        case 40:
            ella.stop().animate({
                top: '+=25'
            }, speed); //bottom arrow key
            break;
        }
    
    // $(document).unbind('keypress');
});