function printDeckOfCards(input) {
    let result = [];

    for (let obj of input) {
        let suite = obj[obj.length - 1];
        let card = obj.substring(0, obj.length - 1);

        const VALID_CARD = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const VALID_SUITES = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };


        if (VALID_CARD.indexOf(card) >= 0 && VALID_SUITES.hasOwnProperty(suite)) {
            result.push(card + VALID_SUITES[suite]);
        } else {
            console.log('Invalid card: ' + card + suite);
            return
        }

    }

    console.log(result.join(" "));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);