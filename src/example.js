define(['src/bootstrap'], function( Core ) {
    
    var Example = function() {
        var that = this;
        
        // listener
        Core.pubsub.on('hey', function() {
            that.incrementView();     
        })   
    };

    Example.prototype = {
        
        /* model */
        increment: function(i) {
            Core.pubsub.emit('hey');
            return i + 1;
        },

        /* view */
        incrementView: function() {
            document.querySelectorAll('body');
        }
    }

    return Example;

});
