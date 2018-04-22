class Record {
    constructor(temperature, humidity, pressure, windSpeed) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
        this.id = Record.getId();
    }

    static getId() {               // статична ф-я не зависи от това колко инстанции си направил от функцията
        if (!this._id) {
            this._id = 0;
        }

        return this._id++;
    }



    get status() { //когато е с get после го викаш без скоби, защото не е функция

        let isStormyConditions = false;

        if (this.pressure > 900 || this.pressure < 700) {
            isStormyConditions = true;
        }

        if (this.temperature < 20 && this.windSpeed > 25 && isStormyConditions) {
            return "Stormy";
        } else {
            return "Not stormy";
        }
    }

    toString() {
        let output = "";

        output += `Reading ID: ${this.id}\n`;
        output += `Temperature: ${this.temperature}*C\n`;
        output += `Relative Humidity: ${this.humidity}%\n`;
        output += `Relative Pressure: ${this.pressure}hpa\n`;
        output += `Wind Speed: ${this.windSpeed}m/s\n`;
        output += "Weather: " + this.status;

        return output;
    }
}


let record1 = new Record(11, 66, 987, 34);
console.log(record1.toString());

let record2 = new Record(29, 45, 765, 11);
console.log(record2.toString());