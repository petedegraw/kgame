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
    var position = ella.position();
    var amt = 10;
    var pos = 0;
    
    // 38 = Up
    if ( e.which == 38 ) {
        e.preventDefault();
        console.log('pressing UP');

        pos = amt - position.top;
        ella.css('top', '-' + pos + 'px');
        $('#info').html('position: ' + position.top + '<br>new pos: ' + pos);
    }

    // 40 = Down
    if (e.which == 40) {
        e.preventDefault();
        console.log('pressing DOWN');

        pos = amt + position.top;
        ella.css('top', pos + 'px');
        $('#info').html('position: ' + position.top + '<br>new pos: ' + pos);
    }

});