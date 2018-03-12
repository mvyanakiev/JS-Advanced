// let startTime = new Date();


let uniqueRandomKeys = new Set();

function makeRandomKey() {

    function makeRandomElement(symbols, elementLength) {
        let outputString = "";

        for (let i = 0; i < elementLength; i++)
            outputString += symbols.charAt(Math.floor(Math.random() * symbols.length));

        return outputString;
    }

    let possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let possibleDigits = "0123456789";

    return makeRandomElement(possibleDigits, 3) + "-"
        + makeRandomElement(possibleLetters, 3) + "-"
        + makeRandomElement(possibleDigits, 3)
}

while (uniqueRandomKeys.size < 1000000) {
    uniqueRandomKeys.add(makeRandomKey());
}



// let arrayOfUniqueKeys = [...uniqueRandomKeys.values()];
// let endTime = new Date();
// console.log("Time to complete: " + (endTime - startTime) + " ms");




