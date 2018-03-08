function ticket(input, sortingOrdder) { //todo sorting

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let output = [];


    for (let tokens of input) {
        let token = tokens.split("|").filter(w => w !== "");
        let destination = token[0];
        let price = Number(token[1]);
        let status = token[2];
        output.push(new Ticket(destination, price, status))
    }

    function dynamicSort(property) {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    output.sort(dynamicSort(sortingOrdder));

    return output;
}

// console.log(ticket(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'));


console.log(ticket(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));