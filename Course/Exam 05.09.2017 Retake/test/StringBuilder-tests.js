let StringBuilder = require("../02. String Builder"); //понеже е клас без .
let expect = require("chai").expect;


describe("String Builder unit test", function () {
    let builder;
    beforeEach(function () {                                        // изчиства данните
        builder = new StringBuilder();
    });

    describe("is that all methods", function () {
        it('has methods', function () {
            expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.be.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.be.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.be.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.be.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.be.equal(true);
        });


        it('new string', function () {
            let str = new StringBuilder('hello');
            expect(str.toString()).to.be.equal('hello')
        });

        it('append', function () {
            let str = new StringBuilder('hello');
            str.append(', str2');
            expect(str.toString()).to.be.equal('hello, str2')
        });

        it('prepend', function () {
            let str = new StringBuilder('hello');
            str.prepend('str2 ');
            expect(str.toString()).to.be.equal('str2 hello')
        });

        it('insert at', function () {
            let str = new StringBuilder('hello');
            str.append(', str2');
            str.insertAt(' ins', 5);
            expect(str.toString()).to.be.equal('hello ins, str2')
        });

        it('remove', function () {
            let str = new StringBuilder('hello');
            str.remove(2,1);
            expect(str.toString()).to.be.equal('helo')
        });

        it('дава грешка ако не е стринг', function () {
            expect(() => {
                builder.insertAt(5, 2)
            }).to.throw(TypeError); // как се валидира грешка
        });


        it('дава грешка с празен', function () {
            expect(() => {
                builder.insertAt([], 2)
            }).to.throw(TypeError); // как се валидира грешка
        });


    });

});



