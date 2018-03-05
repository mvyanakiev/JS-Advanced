let expect = require("chai").expect;
let mathEnforcer = require("../EX 04. Math Enforcer.js").mathEnforcer;

describe("Tests of Math Enforcer addFive", function () {

    it("should return 10 for addFive(5)", function () {
        expect(10).to.be.equal(mathEnforcer.addFive(5));
    });

    it("should return -10 for addFive(-15)", function () {
        expect(-10).to.be.equal(mathEnforcer.addFive(-15));
    });

    it("should return 5.5 for addFive(0.5)", function () {
        expect(5.5).to.be.equal(mathEnforcer.addFive(0.5));
    });

    it("should return undefined for addFive('y')", function () {
        expect(undefined).to.be.equal(mathEnforcer.addFive('y'));
    });
});


describe("Tests of Math Enforcer subtractTen", function () {

    it("should return 10 for subtractTen(20)", function () {
        expect(10).to.be.equal(mathEnforcer.subtractTen(20));
    });

    it("should return -20 for subtractTen(-10)", function () {
        expect(-20).to.be.equal(mathEnforcer.subtractTen(-10));
    });

    it("should return 20.5 for subtractTen(30.5)", function () {
        expect(20.5).to.be.equal(mathEnforcer.subtractTen(30.5));
    });

    it("should return undefined for subtractTen('m')", function () {
        expect(undefined).to.be.equal(mathEnforcer.subtractTen('m'));
    });
});


describe("Tests of Math Enforcer sum", function () {

    it("should return 10 for sum(10, 10)", function () {
        expect(20).to.be.equal(mathEnforcer.sum(10, 10));
    });

    it("should return -10 for sum(-20, 10)", function () {
        expect(-10).to.be.equal(mathEnforcer.sum(-20, 10));
    });

    it("should return 0.8 for sum(0.3, 0.5)", function () {
        expect(0.8).to.be.equal(mathEnforcer.sum(0.3, 0.5));
    });

    it("should return undefined for sum(0.3, 'y')", function () {
        expect(undefined).to.be.equal(mathEnforcer.sum(0.3, 'y'));
    });

    it("should return undefined for sum('y', 8)", function () {
        expect(undefined).to.be.equal(mathEnforcer.sum('y', 8));
    });

});

