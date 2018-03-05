function makeCard(card, suite) {

    const VALID_CARD = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const VALID_SUITES = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    if (VALID_CARD.indexOf(card) >= 0 && VALID_SUITES.hasOwnProperty(suite)) {
        return {
            card: card,
            suite: suite,
            toString: x => card + VALID_SUITES[suite]
        };
    } else {
        throw new Error('Error');
    }

}

// console.log('' + makeCard('A', 'S'));
// console.log('' + makeCard('10', 'H'));
// console.log('' + makeCard('1', 'C'));
// console.log('' + makeCard(2, 'A'));
console.log('' + makeCard(1, 'S'));

