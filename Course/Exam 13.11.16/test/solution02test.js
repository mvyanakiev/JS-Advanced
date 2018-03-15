let expect = require("chai").expect;
let createList = require("../Solution02").createList;

describe("Function createList tests", function () {

    let list;
    beforeEach(function () {
        list = createList(); // нулиране преди всеки тест
    });


    it("Function add", function () {
        list.add("pesho");
        list.add("gosho");
        list.add(5);
        const str =  list.toString()
        expect(str).to.be.equal('pesho, gosho, 5');
    });


    it("Function shift left", function () {
        list.add("pesho");
        list.add("gosho");
        list.add(5);
        list.shiftLeft();
        const str =  list.toString();
        expect(str).to.be.equal('gosho, 5, pesho');
    });



    it("Function shift right", function () {
        list.add("pesho");
        list.add("gosho");
        list.add(5);
        list.shiftRight();
        const str =  list.toString();
        expect(str).to.be.equal('5, pesho, gosho');
    });


    it("Function swap", function () {
        list.add("pesho");
        list.add("gosho");
        list.add(5);
        list.swap(0, 1);
        const str =  list.toString();
        expect(str).to.be.equal('gosho, pesho, 5');
    });


    it("Function swap false1", function () {
        list.add("pesho");
        list.add("gosho");
        list.add(5);
       let output =  list.swap(-1, 1);
        expect(output).to.be.false;
        expect(list.toString()).to.be.equal('pesho, gosho, 5');
    });


    it("Function swap false2", function () {
        list.add("pesho");
        list.add("gosho");
        list.add(5);
        let output =  list.swap(23, 1);
        expect(output).to.be.false;
        expect(list.toString()).to.be.equal('pesho, gosho, 5');
    });

    it("Function swap false3", function () {
        list.add("pesho");
        list.add("gosho");
        list.add(5);
        let output =  list.swap(1, 1);
        expect(output).to.be.false;
        expect(list.toString()).to.be.equal('pesho, gosho, 5');
    });


    it("Function swap false4", function () {
        list.add("pesho");
        list.add("gosho");
        list.add(5);
        let output =  list.swap('ui', 1);
        expect(output).to.be.false;
        expect(list.toString()).to.be.equal('pesho, gosho, 5');
    });


});
