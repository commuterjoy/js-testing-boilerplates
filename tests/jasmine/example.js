define(['src/bootstrap', 'src/example'], function( Core, Example ) {

    describe("Example", function() {
    
        beforeEach(function() {
            example = new Example();
            spy = sinon.spy(example, "increment");
            spy = sinon.spy(example, "incrementView");
        });

        it("can be created", function(){
            expect(example).toBeTruthy();
        });

        it("can increment a given number", function() {
            expect(example.increment(1)).toEqual(2);
            expect(example.increment).toHaveBeenCalledOnce();
        });

        // simulate an event to check the 'view' responds
        it("view response to 'hey' event", function() {
            Core.pubsub.emit('hey');
            expect(example.incrementView).toHaveBeenCalledOnce();
        });

    });

});
