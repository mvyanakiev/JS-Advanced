let expect = require("chai").expect;
let lookupChar = require("../EX 03. Char Lookup.js").lookupChar;


describe("Char lookup automated tests", function () {


    (function test() {
        let input = ['qwerty', 1,];
        let expectedResult = 'w';

        it("should return '" + expectedResult + "' for (" + input.join(", ") + ")", function () {
            let actualResult = lookupChar(input[0], input[1]);
            expect(actualResult).to.be.equal(expectedResult);
        });
    })();


    (function test() {
        let input = ['sfd', -9];
        let expectedResult = 'Incorrect index';

        it("should return '" + expectedResult + "' for (" + input.join(", ") + ")", function () {
            let actualResult = lookupChar(input[0], input[1]);
            expect(actualResult).to.be.equal('Incorrect index');
        });
    })();


    (function test() {
        let input = ['sfd', 34];
        let expectedResult = 'Incorrect index';

        it("should return '" + expectedResult + "' for (" + input.join(", ") + ")", function () {
            let actualResult = lookupChar(input[0], input[1]);
            expect(actualResult).to.be.equal('Incorrect index');
        });
    })();


    (function test() {
        let input = [1, 1];
        let expectedResult = 'undefined';

        it("should return '" + expectedResult + "' for (" + input.join(", ") + ")", function () {
            let actualResult = lookupChar(input[0], input[1]);
            expect(actualResult).to.be.undefined;
        });
    })();


    (function test() {
        let input = ['pesho', 'gosho'];
        let expectedResult = 'undefined';

        it("should return '" + expectedResult + "' for (" + input.join(", ") + ")", function () {
            let actualResult = lookupChar(input[0], input[1]);
            expect(actualResult).to.be.undefined;
        });
    })();


    (function test() {
        let input = [12, 0];
        let expectedResult = 'undefined';

        it("should return '" + expectedResult + "' for (" + input.join(", ") + ")", function () {
            let actualResult = lookupChar(input[0], input[1]);
            expect(actualResult).to.be.undefined;
        });
    })();


    (function test() {
        let input = ['scds', 0.11];
        let expectedResult = 'undefined';

        it("should return '" + expectedResult + "' for (" + input.join(", ") + ")", function () {
            let actualResult = lookupChar(input[0], input[1]);
            expect(actualResult).to.be.undefined;
        });
    })();


});

