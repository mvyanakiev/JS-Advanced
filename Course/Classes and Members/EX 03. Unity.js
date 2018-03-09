class Rat {
    constructor(input) {
        this.input = input;
    }

    toString() {
        return `${this.input}`;
    }




    getRats() {
        return []
    }

    unite(ratToUnite) {
        if (ratToUnite instanceof Rat){
            console.log(this);
        }
    }

}

let test = new Rat('Pesho');
console.log(test.toString());

console.log(test.getRats());

console.log(test instanceof Rat);

let sa = new Rat('tst');

test.unite(sa);

