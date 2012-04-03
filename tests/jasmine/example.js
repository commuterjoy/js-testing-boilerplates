define(['src/example'], function( Example ) {

    describe("Example", function() {
    
        beforeEach(function() {
            example = new Example();
        });

        it("can be created", function(){
            expect(example).toBeTruthy();
        });

        it("can increment a given number", function() {
            expect(example.increment(1)).toEqual(2);
        });
    });

});
