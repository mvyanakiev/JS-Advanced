class LineManager {
    constructor(allStops) {
        this.allStops = allStops;
        this.validStops = [];
        this.stops(this.allStops);
        this.duration = 0;
        this.currentStopNumber = 0;
        this.currentStop = "";
        this.lastStop = this.validStops[this.validStops.length - 1].name;
        this.NextStop = "";
        this.delay = 0;
        this.realTime = 0;
    }

    stops(allStops) {
        for (let obj of allStops) {

            if (obj.name.length > 0 && obj.timeToNext >= 0) {
                let stop = {
                    name: obj.name,
                    timeToNext: obj.timeToNext,
                };
                this.validStops.push(stop)

            } else if (obj.name.length === 0) {
                throw new Error("Must be valid name");
            } else if (obj.timeToNext < 0) {
                throw new Error("Minutes cannot be negative");
            } else if (typeof obj.timeToNext !== "number") {
                throw new Error("Minutes must be number");
            } else if (typeof obj.name.length !== "string") {
                throw new Error("Name must be string");
            }
        }
    }

    get nextStopName() {
        if (this.validStops.length - 1 === this.currentStopNumber) {
            this.NextStop = "At depot.";
        }
        else {
            this.NextStop = this.validStops[this.currentStopNumber + 1].name;
        }
        return this.NextStop
    }

    get currentDelay() {
        this.delay = this.duration - this.realTime

        return this.delay
    }

    arriveAtStop(minutes) {
        if (minutes < 0) {
            throw new Error("minutes cannot be negative");
        } else if (this.currentStopNumber === this.validStops.length-1) {
            throw new Error("last stop reached");
        } else {
            this.duration += minutes;
            this.currentStop = this.validStops[this.currentStopNumber].name;
            this.realTime += this.validStops[this.currentStopNumber].timeToNext;
            this.currentStopNumber++;
            this.currentDelay
        }
    }

    get atDepot() {
        if (this.validStops.length-1 <= this.currentStopNumber) {
            return true
        } else {
            return false
        }
    }

    toString() {
        let output = "Line summary\n";

        if (this.currentStopNumber < this.validStops.length-1) {

            output += "- Next stop: " + this.nextStopName + "\n";
            output += "- Stops covered: " + this.currentStopNumber + "\n";
            output += "- Time on course: " + this.duration + " minutes\n";
            output += "- Delay: " + this.currentDelay + " minutes";

        } else {

            output += "- Course completed\n";
            output += "- Stops covered: " + this.currentStopNumber + "\n";
            output += "- Time on course: " + this.duration + " minutes\n";
            output += "- Delay: " + this.currentDelay + " minutes";
        }
        return output
    }

}


// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Pioneer', timeToNext: 0},
]);


// man.arriveAtStop(5);

// Travel through all the stops until the bus is at depot
while (man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}


console.log(man.toString());


// // Should throw an Error (minutes cannot be negative)
// man.arriveAtStop(-4); -> OK
// // Should throw an Error (last stop reached)
man.arriveAtStop(4);


// // Should throw an Error at initialization
// const wrong = new LineManager([
//     {name: 'Stop', timeToNext: {wrong: 'Should be a number'}}
// ]);

// const wrong = new LineManager([
//     {name: 'hoi', timeToNext: 11}
// ]);

// console.log(man.atDepot);