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
