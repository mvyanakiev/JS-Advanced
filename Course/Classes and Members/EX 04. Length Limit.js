class Stringer{
    constructor(str, numb) {
        this.str = str;
        this.numb = Number(numb);
    }

    toString() {
        return this.str
    }

    decrease(numb) {
        let x = this.str.slice(numb); //todo оправи слайсването
        console.log(x);
    }



}


let test = new Stringer("Test", 5);


test.decrease(3);
console.log(test.toString());
