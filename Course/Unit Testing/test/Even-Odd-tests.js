let expect = require("chai").expect;
let isOddOrEven = require("../EX 02. Even Or Odd.js").isOddOrEven;

describe("Test even or odd", function () {

    it("should return odd for asd", function () {
        expect(isOddOrEven('asd')).to.be.equal('odd');
    });

    it("should return odd for asda", function () {
        expect(isOddOrEven('asda')).to.be.equal('even');
    });

    it("should return odd for undefined", function () {
        expect(isOddOrEven(7)).to.be.undefined;
    });

});