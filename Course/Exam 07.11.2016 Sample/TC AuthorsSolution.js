class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topicsList = [];
    }

    addTopic(title, date) {
        this.topicsList.push({title, date});
        this.topicsList.sort((t1, t2) => t1.date - t2.date);
        return this;
    }

    get firstTopic() {
        return this.topicsList[0];
    }

    get lastTopic() {
        return this.topicsList[this.topicsList.length - 1];
    }

    toString() {
        let topicsStr = this.topicsList.map(m =>
            ' * ' + m.title + ' - ' + m.date)
            .join("\n");
        return 'Course "' + this.title + '" by ' +
            this.trainer + '\n' + topicsStr;
    }

    get test() {
        console.log(this.topicsList);
    }
}


let js = new TrainingCourse("JS Intro", "Svetlin Nakov");

js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
// console.log("First topic: " + JSON.stringify(js.firstTopic));
// console.log("Last topic: " + JSON.stringify(js.lastTopic));
// console.log("" + js);

js.test;


