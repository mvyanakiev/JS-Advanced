let expect = require("chai").expect;
let SortedList = require("../02. sorted-list");

describe("tests", function () {

    let myList;
    beforeEach(function () { // изчиства данните
        myList = new SortedList();
    });


    it('has methods', function () {
        expect(Object.getPrototypeOf(myList).hasOwnProperty('add')).to.be.equal(true);
        expect(Object.getPrototypeOf(myList).hasOwnProperty('sort')).to.be.equal(true);
        expect(Object.getPrototypeOf(myList).hasOwnProperty('size')).to.be.equal(true);
        expect(Object.getPrototypeOf(myList).hasOwnProperty('vrfyRange')).to.be.equal(true);
        expect(Object.getPrototypeOf(myList).hasOwnProperty('get')).to.be.equal(true);
        expect(Object.getPrototypeOf(myList).hasOwnProperty('remove')).to.be.equal(true);

    });


    it("Function Add", function () {

        myList.add(8);
        expect(myList.list[0]).to.be.equal(8);

    });


    it("Function Remove, removing", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        myList.remove(1);
        let myResult = myList.list.join(',');
        expect(myResult).to.be.equal("3,5");
    });


    it("Function Remove, negative index", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);

        expect(() => {myList.remove(-1)}).to.throw(Error, "Index was outside the bounds of the collection.");
    });


    it("Function Remove, index over range", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);

        expect(() => {myList.remove(87)}).to.throw(Error, "Index was outside the bounds of the collection.");
    });


    it("Function Remove, collection is empty", function () {
        expect(() => {myList.remove(87)}).to.throw(Error, "Collection is empty.");
    });

    it("Get index", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        let myResult = myList.get(1);
        expect(myResult).to.be.equal(4);
    });

    it("Function Get, negative index", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);

        expect(() => {myList.get(-1)}).to.throw(Error, "Index was outside the bounds of the collection.");
    });


    it("Function Get, index over range", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);

        expect(() => {myList.remove(87)}).to.throw(Error, "Index was outside the bounds of the collection.");
    });


    it("Function Get, collection is empty", function () {
        expect(() => {myList.get(87)}).to.throw(Error, "Collection is empty.");
    });



    it("Sort index", function () {
        myList.add(9);
        myList.add(76);
        myList.add(12);
        myList.sort();
        let myResult = myList.list.join(',');
        expect(myResult).to.be.equal("9,12,76");
    });

    it("Size", function () {
        myList.add(9);
        myList.add(76);
        myList.add(12);
        let myResult = myList.size;
        expect(myResult).to.be.equal(3);
    });

});
