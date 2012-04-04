define(['src/bootstrap'], function( Core ) {
    
    var Example = function() {
        var that = this;

        // listener
        Core.pubsub.on('hey', function() {
            that.incrementView();     
        })   
    };

    Example.prototype = {
        
        increment: function(i) {
            Core.pubsub.emit('hey');
            return i + 1;
        },

        // interact with the dom
        incrementView: function() {
            document.querySelectorAll('body');
        }
    }

    return Example;

});
