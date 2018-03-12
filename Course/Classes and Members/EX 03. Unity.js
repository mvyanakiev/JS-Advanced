class Rat {
    constructor(name) {
        this.name = name;
        this.uniteRats = [];
    }


    unite(ratToUnite) {
        if (ratToUnite instanceof Rat){
           this.uniteRats.push(ratToUnite)
        }
    }


    toString() {
        let string = this.name;
        for (let obj of this.uniteRats) {
            string += "\n##" + obj

        }
        return string;

    }

    getRats() {
        return this.uniteRats
    }
}




let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho


