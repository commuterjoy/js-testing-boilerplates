define([], function() {
    
    var Example = function() {};

    Example.prototype = {
        
        increment: function(i) {
            return i + 1;
        }
    }

    return Example;

});
