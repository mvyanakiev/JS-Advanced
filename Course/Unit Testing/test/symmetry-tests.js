let expect = require("chai").expect;
let isSymmetric = require("../LAB 05. Check for Symmetry.js").isSymmetric;

describe("Test that array is symmetrical", function () { // Заглавие на групата от тестове

    it("should return true for [-1,2,-1]", function () {
        expect(isSymmetric([-1,2,-1])).to.be.equal(true);
    });

    it("should return true for [1,2,1]", function () {
        expect(isSymmetric([1,2, 1])).to.be.equal(true);
    });

    it("should return true for [-1,2, 3]", function () {
        expect(isSymmetric([-1,2, 3])).to.be.equal(false);
    });

    it("should return true for 1, 2, 3", function () {
        expect(isSymmetric(1, 2, 3)).to.be.equal(false);
    });

    it("should return true for [5, 'hi', {a: 5}, new Date(), {a: 5}, 'hi', 5]", function () {
        expect(isSymmetric([5, 'hi', {a: 5}, new Date(), {a: 5}, 'hi', 5])).to.be.equal(true);
    });

});