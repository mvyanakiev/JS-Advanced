let expect = require("chai").expect;
let list = require("../02. AddDelete in List").list;


describe("Function createList tests", function () {

    let a;
    beforeEach(function () {
        a = list; // нулиране преди всеки тест
    });


    it("Function add", function () {
        a.add("pesho");
        a.add("gosho");
        a.add(5);
        const str = list.toString();
        expect(str).to.be.equal('pesho, gosho, 5');
    });

    it("Function remove", function () {
        a.add("pesho");
        a.add("gosho");
        a.add(5);
        a.delete(1);
        const str = list.toString();
        expect(str).to.be.equal('pesho, 5');
    });

    it("Function remove with large index", function () {
        a.add("pesho");
        a.add("gosho");
        a.add(5);
        expect(a.delete(9)).to.be.equal(undefined);
    });

    it("Function remove with negative index", function () {
        a.add("pesho");
        a.add("gosho");
        a.add(5);
        expect(a.delete(-1)).to.be.equal(undefined);
    });
});
