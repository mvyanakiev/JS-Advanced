let Sumator = require("../02. Sumator Class"); //понеже е клас без .Sumator
let expect = require("chai").expect;


describe("Sumator unit test", function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });


    describe("check if func exist", function () {
        it('data', function () {
            expect(sumator.data !== undefined).to.be.equal(true);
        });

        it("има ли я функцията", function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);

        });


    });


    it("Is data empty?", function () {
        expect(sumator.data.length).to.be.equal(0)
    });

    describe("add func test", function () {
        it("only numbers", function () {
            sumator.add(5);
            sumator.add(3);
            sumator.add(2);
            expect(sumator.data.join(", ")).to.be.equal('5, 3, 2')
        })
    });



        it("only str", function () {
            sumator.add('kiro');
            sumator.add('ivan');
            expect(sumator.data.join(", ")).to.be.equal('kiro, ivan');

            console.log(sumator.data);
        })




});