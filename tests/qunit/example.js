define(['src/bootstrap', 'src/example'], function( Core, Example ) {

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

    test("responds to a _hey_ event", function() {
        var example = new Example();
        var spy = sinon.spy(example, "incrementView");
        Core.pubsub.emit('hey');
        ok(example.incrementView.calledOnce, "view called once");
    });

});
