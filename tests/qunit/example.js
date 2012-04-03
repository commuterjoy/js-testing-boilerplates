define(['src/example'], function( Example ) {

    module('Example');

    test("can be created", function(){
        ok(new Example(), "example instantiated ok");
    });

    test("can increment a given number", function() {
        var example = new Example();
        var spy = sinon.spy(example, "increment");

        equal(example.increment(1), 2, "adds one");
        ok(example.increment.calledOnce, "called once");
    });

});
