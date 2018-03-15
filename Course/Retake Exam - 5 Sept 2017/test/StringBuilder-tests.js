let StringBuilder = require("../02. String Builder"); //понеже е клас без .
let expect = require("chai").expect;


describe("String Builder unit test", function () {
    let builder;
    beforeEach(function () {                                        // изчиства данните
        builder = new StringBuilder();
    });

    describe("is that all methods", function () {
        it('append', function () {
            expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.be.equal(true);
        });



        it('дава грешка с празен', function () {
            expect(() => {
                builder.insertAt([], 2)
            }).to.throw(TypeError); // как се валидира грешка
        });



//todo довърши тестовете

    });


});