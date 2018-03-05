let expect = require("chai").expect;
let rgbToHexColor = require("../LAB 06. RGB to Hex.js").rgbToHexColor;

describe("RGB to HEX tests with automation", function () {

    (function test() {
        let input = [0, 0, 0];
        let expectedResult = '#000000';

        it("should return " + expectedResult + " for " + input.join(", "), function () {
            let actualResult = rgbToHexColor(input[0], input[1], input[2]);
            expect(actualResult).to.be.equal(expectedResult);
        });
    })();


    (function test() {
        let input = [255, 255, 255];
        let expectedResult = '#FFFFFF';

        it("should return " + expectedResult + " for " + input.join(", "), function () {
            let actualResult = rgbToHexColor(input[0], input[1], input[2]);
            expect(actualResult).to.be.equal(expectedResult);
        });
    })();


    (function test() {
        let input = [0, -3, 11];
        let expectedResult = undefined;

        it("should return " + expectedResult + " for " + input.join(", "), function () {
            let actualResult = rgbToHexColor(input[0], input[1], input[2]);
            expect(actualResult).to.be.equal(expectedResult);
        });
    })();


    (function test() {
        let input = [0, 4, 256];
        let expectedResult = undefined;

        it("should return " + expectedResult + " for " + input.join(", "), function () {
            let actualResult = rgbToHexColor(input[0], input[1], input[2]);
            expect(actualResult).to.be.equal(expectedResult);
        });
    })();

});