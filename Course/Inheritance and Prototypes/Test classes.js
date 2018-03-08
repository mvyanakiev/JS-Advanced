function cityPricves(input) {

    class Item {
        constructor(type, price, city) {
            this.type = type;
            this.price = price;
            this.city = city;
        }

        toString() {
            return `${this.type} -> ${this.price} (${this.city})`
        }
    }

    let products = new Map();

    for (let tokens of input) {

        let token = tokens.split(" | ").filter(w => w !== "");
        let town = token[0];
        let item = token[1];
        let price = Number(token[2]);
        let data = new Item(item, price, town);

        if (!products.has(item)) {
            products.set(item, data)
        } else if (products.get(item).price > price) {
            products.set(item, data)
        }
    }

    products.forEach((k) => console.log(k.toString()))
}


cityPricves([

    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000',
    'Pernik | Mercedes | 10'

]);


