let expect = require("chai").expect;
let tst = require("../fnctTst").tst;

describe("Function createList tests", function () {




    it("Function add", function () {
        const str =  tst("pesho");
        expect(str).to.be.equal('peshoasd');
    });

});