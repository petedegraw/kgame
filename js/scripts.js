$(document).ready(function(){

    game = function() {
        var gameWrapper = $('#game-wrapper');
    
        // set background color
        gameWrapper.css('background','#c706ff');
    }
    
    var game = new game();
});

$(window).keydown(function(e){
    var ella = $('#ella');
    var amt = 2;
    // 38 = Up
    if (e.keyCode = 38) {
        console.log('pressing UP');
        ella.css('bottom', '-2%');
    }

    // 40 = Down
    if (e.keyCode = 40) {
        console.log('pressing DOWN');
        ella.css('bottom', '2%');
    }
});