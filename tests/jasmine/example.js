define(['src/example'], function( Example ) {

    describe("Example", function() {
    
        beforeEach(function() {
            example = new Example();
        });

        it("can be created", function(){
            expect(example).toBeTruthy();
        });

        it("can increment a given number", function() {
            var spy = sinon.spy(example, "increment");
            expect(example.increment(1)).toEqual(2);
            expect(example.increment).toHaveBeenCalledOnce();
        });
    });

});
