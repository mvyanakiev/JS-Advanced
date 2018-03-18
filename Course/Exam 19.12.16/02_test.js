let expect = require("chai").expect;
let makeList = require("./02. FunctionTest.js").makeList;


describe("Function makeList tests", function () {

    let myList;
    beforeEach(function () {
        myList = makeList();
    });

    it("Function addRight", function () {
        myList.addRight("pesho");
        myList.addRight("gosho");
        myList.addRight(5);
        const str = myList.toString();
        expect(str).to.be.equal('pesho, gosho, 5');
    });


    it("Function addLeft", function () {
        myList.addLeft("pesho");
        myList.addLeft("gosho");
        myList.addLeft(5);
        const str = myList.toString();
        expect(str).to.be.equal('5, gosho, pesho');
    });

    it("Function toString", function () {
        myList.addLeft("pesho");
        myList.addLeft("gosho");
        myList.addLeft(5);
        // const str = myList.toString();
        expect(myList.toString()).to.be.equal('5, gosho, pesho');
    });

    it("Function clear", function () {
        myList.addLeft("pesho");
        myList.addLeft("gosho");
        myList.addLeft(5);
        myList.clear();
        const str = myList.toString();
        expect(str).to.be.equal('');
    });

});