let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
let $ = require('/Users/milko/Documents/GitHub/JS-Advanced/Course/jquery-3.3.1.min.js');


document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;


let sharedObject = require('../EX 05. Shared Object').sharedObject;

describe("sharedObject", function () {
    before(() => global.$ = $);
    describe("initially name and income should be null", function () {

        it("should return null for initial state of name", function () {
            expect(sharedObject.name).to.be.null;
        });

        it("should return null for initial state of income", function () {
            expect(sharedObject.income).to.be.null;
        });

    });

});


describe("change name function", function () {
    before(() => global.$ = $);
    it("should return number for number parameter", function () {
        sharedObject.changeName(15);
        expect(sharedObject.name).to.equal(15);
        expect($('#name').val()).to.equal('15');
    });
    it("should return previous name for empty string parameter", function () {
        sharedObject.changeName("Pesho");
        sharedObject.changeName("");
        expect(sharedObject.name).to.equal("Pesho");
        expect($('#name').val()).to.equal("Pesho");
    });
    it("should return new name after calling the function more than one time", function () {
        sharedObject.changeName("Pesho");
        sharedObject.changeName("Gosho");
        expect(sharedObject.name).to.equal("Gosho");
        expect($('#name').val()).to.equal("Gosho");
    });
});

describe("change income function", function () {
    before(() => global.$ = $);
    it("should return null if number is negative", function () {
        sharedObject.changeIncome(-15);
        expect(sharedObject.income).to.equal(null);
        expect($('#income').text()).to.equal("");
    });
    it("should return null if input value is string", function () {
        sharedObject.changeIncome('asd');
        expect(sharedObject.income).to.equal(null);
        expect($('#income').text()).to.equal("");
    });
    it("should return null if number is 0", function () {
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.equal(null);
        expect($('#income').text()).to.equal("");
    });
    it("should return number if parameters is passed", function () {
        sharedObject.changeIncome(6);
        expect(sharedObject.income).to.equal(6);
        expect($('#income').val()).to.equal("6");
    });

});


describe("change updateName function", function () {
    before(() => global.$ = $);



    it("should return number for number parameter", function () {
        sharedObject.updateName(12);
        expect(sharedObject.name).to.equal('asd');
        expect($('#name').val()).to.equal('asd');
    });

});