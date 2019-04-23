let expect = require("chai").expect;
let PaymentPackage = require("../02. Payment Package");


describe("tests", function () {

    let bill;
    beforeEach(function () { // изчиства данните
        bill = new PaymentPackage("Pesho", 20);
    });

    it("to str", function () {

        let str = "Package: Pesho\n" +
            "- Value (excl. VAT): 20\n" +
            "- Value (VAT 20%): 24";
        expect(bill.toString()).to.be.equal(str);
    });

    it("get name", function () {
        let str = "Pesho";
        expect(bill.name).to.be.equal(str);
    });

    it("get value", function () {
        let val = 20;
        expect(bill.value).to.be.equal(val);
    });

    it("get VAT", function () {
        let val = 20;
        expect(bill.VAT).to.be.equal(val);
    });

    it("isActive", function () {
        let val = true;
        expect(bill.active).to.be.equal(val);
    });

    it("is non Active", function () {
        let val = false;
        bill.active = false;
        expect(bill.active).to.be.equal(val);
    });

    it("set VAT", function () {
        let val = 35;
        bill.VAT = 35;
        expect(bill.VAT).to.be.equal(val);
    });

    it("set wrong VAT", function () {
        expect(() => bill.VAT = -1).to.throw(Error, 'VAT must be a non-negative number');
    });

    it("set wrong VAT, string", function () {
        expect(() => bill.VAT = "String").to.throw(Error, 'VAT must be a non-negative number');
    });


    it("set wrong name", function () {
        expect(() => bill.name = 11).to.throw(Error, 'Name must be a non-empty string');
    });

    it("set empty name", function () {
        expect(() => bill.name = "").to.throw(Error, 'Name must be a non-empty string');
    });

    it("set wrong value", function () {
        expect(() => bill.value = "asd").to.throw(Error, 'Value must be a non-negative number');
    });

    it("set negative value", function () {
        expect(() => bill.value = -12).to.throw(Error, 'Value must be a non-negative number');
    });

    it("set value to 0", function () {
        expect(() => bill.value = 0).to.not.throw(Error, 'Value must be a non-negative number');
    });

    it("is non wrong Active", function () {
        expect(() => bill.active = 12).to.throw(Error, 'Active status must be a boolean');
    });

    it("to str, inactive", function () {

        bill.active = false;
        let str = "Package: Pesho (inactive)\n" +
            "- Value (excl. VAT): 20\n" +
            "- Value (VAT 20%): 24";
        expect(bill.toString()).to.be.equal(str);
    });

});

