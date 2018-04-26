class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(topicTitle, date) {
        let hasDate = true;
        for (let element of this.topics) {
            if (element[1].getTime() === date.getTime()) {
                hasDate = false
            }
        }

        if (hasDate) {
            this.topics.push([topicTitle, date]);
            this.sort();
        }
    }

    sort() {
        function Comparator(a, b) {
            if (a[1] < b[1]) return -1;
            if (a[1] > b[1]) return 1;
            return 0;
        }

        this.topics = this.topics.sort(Comparator);
        return this.topics
    }

    get firstTopic() {
        if (this.topics.length > 0) {

            return {
                title: this.topics[0][0],
                date: this.topics[0][1],
            };
        }
    }

    get lastTopic() {
        if (this.topics.length > 0) {

            let lastElement = this.topics.length - 1;
            return {
                title: this.topics[lastElement][0],
                date: this.topics[lastElement][1],
            };
        }
    }

    toString() {
        if (this.topics.length === 0) {
            return `Course "${this.title}" by ${this.trainer}\n`;
        } else {
            let outputString = `Course "${this.title}" by ${this.trainer}\n`;

            for (let obj of this.topics) {
                outputString += `* ${obj[0]} - ${obj[1]}\n`;
            }
            return outputString;
        }
    }

    get test() {
        console.log(this.topics);
    }
}


let test = new TrainingCourse("PHP", "Royal");
test.addTopic('Syntax', new Date(2017, 10, 12, 18, 0));
test.addTopic('Exam prep', new Date(2017, 10, 14, 18, 0));
test.addTopic('Intro', new Date(2017, 10, 10, 18, 0));

// console.log(test.toString());
test.test;



// let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
//
// js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
// js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
// js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
// js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
// js.addTopic("Hoi___", new Date(2016, 9, 3, 18, 0));

// console.log("" + js);
// console.log("First topic: " + JSON.stringify(js.firstTopic));
// console.log("Last topic: " + JSON.stringify(js.lastTopic));
//
// let php = new TrainingCourse("PHP Intro", "Ivan Yonkov");
// console.log("" + php);
// console.log("First topic: " + JSON.stringify(php.lastTopic));
// console.log("First topic: " + JSON.stringify(php.firstTopic));


