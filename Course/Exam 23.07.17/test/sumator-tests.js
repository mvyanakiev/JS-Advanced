let Sumator = require("../02. Sumator Class"); //понеже е клас без .Sumator
let expect = require("chai").expect;


describe("Sumator unit test", function () {
    let sumator;
    beforeEach(function () { // изчиства данните
        sumator = new Sumator();
    });

    describe("Базова проверка на класа", function () {
        it('Празен ли е масива в началото', function () {
            expect(sumator.data !== undefined).to.be.equal(true);
        });

        it("Is data empty?", function () {
            expect(sumator.data.length).to.be.equal(0)
        });

        // проверяваме има ли ги функциите изобщо в този клас

        it("Има ли я функцията add", function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        });

        it("Има ли я функцията sumNums", function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });

        it("Има ли я функцията removeByFilter", function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        });

        it("Има ли я функцията toString", function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });

    describe("Функционални тестове на Add", function () {
        it("only numbers", function () {
            sumator.add(5);
            sumator.add(3);
            sumator.add(2);
            expect(sumator.data.join(", ")).to.be.equal('5, 3, 2')
        });

        it("only str", function () {
            sumator.add('kiro');
            sumator.add('ivan');
            expect(sumator.data.join(", ")).to.be.equal('kiro, ivan');
        });

        it("String, numbers, object", function () {
            sumator.add(6);
            sumator.add('ivan');
            sumator.add({name: "Gosho", age: 23});
            expect(sumator.data.join(", ")).to.be.equal('6, ivan, [object Object]');
        });

        it("String, numbers, object, array", function () {
            sumator.add(6);
            sumator.add('ivan');
            sumator.add({name: "Gosho", age: 23});
            sumator.add([9, 'Pesho', 5]);
            expect(sumator.data.join(", ")).to.be.equal('6, ivan, [object Object], 9,Pesho,5');
        });

    });

    describe("Функционални тестове на sumNums", function () {
        it("only int. numbers", function () {
            sumator.add(5);
            sumator.add(3);
            sumator.add(2);
            expect(sumator.sumNums()).to.be.equal(10)
        });

        it("only int. and double numbers", function () {
            sumator.add(5);
            sumator.add(3.5);
            sumator.add(2);
            expect(sumator.sumNums()).to.be.equal(10.5)
        });

        it("String and int. numbers", function () {
            sumator.add(5);
            sumator.add("Pesho");
            sumator.add(2);
            expect(sumator.sumNums()).to.be.equal(7)
        });

        it("String, int. (+/-) numbers", function () {
            sumator.add(5);
            sumator.add("Pesho");
            sumator.add(-2);
            expect(sumator.sumNums()).to.be.equal(3)
        });
    });

    describe("Функционални тестове на removeByFilter", function () {
        it("Remove odd numbers", function () {
            sumator.add(5);
            sumator.add(3);
            sumator.add(2);
            sumator.add(8);
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.data.join(", ")).to.be.equal('5, 3')
        });
    });

    describe("Функционални тестове на toString", function () {
        it("must be string", function () {
            sumator.add(5);
            sumator.add(3);
            sumator.add(2);
            sumator.add(8);
            expect(sumator.toString()).to.be.equal('5, 3, 2, 8')
        });

        it("must be empty", function () {
            expect(sumator.toString()).to.be.equal('(empty)')
        });

        it("String, numbers, object, array", function () {
            sumator.add(6);
            sumator.add('ivan');
            sumator.add({name: "Gosho", age: 23});
            sumator.add([9, 'Pesho', 5]);
            expect(sumator.toString()).to.be.equal('6, ivan, [object Object], 9,Pesho,5');
        });
    });

});