let SubscriptionCard = require("../02. Subscription Card");
let expect = require("chai").expect;


describe("Unit test", function () {
    let card;
    beforeEach(function () {
        card = new SubscriptionCard();
    });

    describe("is that all methods", function () {
        it('has methods', function () {
            expect(Object.getPrototypeOf(card).hasOwnProperty('addSubscription')).to.be.equal(true);
            expect(Object.getPrototypeOf(card).hasOwnProperty('isValid')).to.be.equal(true);
            expect(Object.getPrototypeOf(card).hasOwnProperty('block')).to.be.equal(true);
            expect(Object.getPrototypeOf(card).hasOwnProperty('unblock')).to.be.equal(true);
        });


        it('Add user, first name', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.firstName).to.be.equal('Pesho')
        });

        it('Add user, last name', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.lastName).to.be.equal('Petrov')
        });

        it('Add user, SSN', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.SSN).to.be.equal('00000000')
        });

        it('Add user, change first name', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.firstName = 'Gosho';
            expect(card.firstName).to.be.equal('Pesho')
        });

        it('Add user, change last name', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.lastName = 'Gosho';
            expect(card.lastName).to.be.equal('Petrov')
        });

        it('Add user, change SSN', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.SSN = 'Gosho';
            expect(card.SSN).to.be.equal('00000000')
        });

        it('block / unblock', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            expect(card.isBlocked).to.be.equal(true)
        });

        it('block / unblock 1', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            card.unblock();
            expect(card.isBlocked).to.be.equal(false)
        });

        it('valid for line', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(true)
        });

        it('invalid for line', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('121', new Date('2018-04-22'))).to.be.equal(false)
        });

        it('invalid for date inside', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-01-22'))).to.be.equal(false)
        });

        it('valid for exact start date', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(true)
        });

        it('valid for exact end date', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-05-21'))).to.be.equal(true)
        });

        it('invalid for blocked', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block();
            expect(card.isValid('120', new Date('2018-05-21'))).to.be.equal(false)
        });








    });

});



