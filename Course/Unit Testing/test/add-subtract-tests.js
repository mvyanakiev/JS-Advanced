let expect = require("chai").expect;
let createCalculator = require("../LAB 07. Add_Subtract.js").createCalculator;

describe("Test calculator", function () {

    let calc;
    beforeEach(function () {
        calc = createCalculator(); // нулиране преди всеки тест
    });

    it("should return 8 for 5 + 4 - 1", function () {
        calc.add(5);
        calc.add(4);
        calc.add(-1);

        expect(8).to.be.equal(calc.get());
    });

    it("should return -1 for 5 - 7 + 1", function () {
        calc.add(5);
        calc.subtract(7);
        calc.add(1);

        expect(-1).to.be.equal(calc.get());
    });

    it("should return Nan for 5 + string", function () {
        calc.add(5);
        calc.add('string');

        expect(calc.get()).to.be.NaN;
    });


    it("should return -15 for (-5) + (-5) - 5 ", function () {
        calc.add(-5);
        calc.add(-5);
        calc.subtract(5);

        expect(-15).to.be.equal(calc.get());
    });


    it("should return 0 for 0.5 + 0.5 - (1 as a string) ", function () {
        calc.add(0.5);
        calc.add(0.5);
        calc.subtract('1');

        expect(0).to.be.equal(calc.get());
    });

    it("should return 10 for add '5', add '5' ", function () {
        calc.add('5');
        calc.add('5');

        expect(10).to.be.equal(calc.get());
    });

});
