class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    get scoreCount() {
        return this.scores.length
    }

    get highestScore() {
        let sorted = this.scores.sort((a, b) => b - a);
        return sorted[0];
    }

    get topFiveScore() {
        let sorted = this.scores.sort((a, b) => b - a);
        return sorted.slice(0, 5);
    }

    addScore(value) {
        // if (typeof value === "number")
        if (!isNaN(value) && value !== null)
            this.scores.push(value);
    }

    toString() {
        if (this.scores.length > 0) {
            return this.nickName + ": [" + this.scores.sort((a, b) => b - a) + "]";
        } else {
            return this.nickName + ": []"
        }

    }
}


let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);
peter.addScore('dsdc');
peter.addScore();


console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
console.log();
let maria = new Player("Maria")
maria.addScore(350)
maria.addScore(779)
maria.addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);


// let peter = new Player("Peter");
//
// peter.addScore(450);
// peter.addScore(200);
// peter.addScore(300);
// peter.addScore(800);
// peter.addScore(800);
// peter.addScore("schbs");
//
// console.log('Highest score: ' + peter.highestScore);
// console.log(`Top 5 score: [${peter.topFiveScore}]`);
// console.log('' + peter);
// console.log('Score count: ' + peter.scoreCount);