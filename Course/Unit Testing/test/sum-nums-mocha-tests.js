let expect = require("chai").expect;
let sum = require('../LAB 04. Sum of Numbers').sum;

describe("sum (arr - sum array of numbers)", function () { // Заглавие на групата от тестове

    it("should return 3 for [1,2]", function () {
        let expectedSum = 3;
        let actualSum = sum([1, 2]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 1 for [-1,2]", function () {
        let expectedSum = 1;
        let actualSum = sum([-1, 2]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 0 for []", function () {
        let expectedSum = 0;
        let actualSum = sum([]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return NaN for [1,string]", function () {
        let actualSum = sum([1, 'd']);
        expect(actualSum).to.be.NaN;
    })
});
