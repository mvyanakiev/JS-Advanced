function solve() {


    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }


    class PartyBalloon extends Balloon{
        constructor(color, gasWeight,ribbonColor,ribbonLength ){
            super(color,gasWeight);
            this._ribbon = {color:ribbonColor, length:ribbonLength}
        }

        get ribbon(){
            return this._ribbon
        }
    }


    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }


    return {
        Baloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }

}


// let a = new BirthdayBalloon('red', 2, 'blue', 1.6, '4rd');
// console.log(a.ribbon.length);
// console.log(a.text);

