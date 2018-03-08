let Person = require('./LAB 02. Inheriting toString');


function extendPrototype(Class) {
    Class.prototype.species = "Human";
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extendPrototype(Person);

let p = new Person('Pesho', 'email@hit.bg');
console.log(p.species);
console.log(p.toSpeciesString());