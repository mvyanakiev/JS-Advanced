function cars(input) {

    let newCar = {};
    newCar.model = input.model;

    let smalleEngine = {power: 90, volume: 1800};
    let normalEngine = {power: 120, volume: 2400};
    let monsterEngine = {power: 200, volume: 3500};

    let coupe = {type: 'coupe', color: input.color};
    let hatchback = {type: 'hatchback', color: input.color};


    if (input.power <= 90) {
        newCar.engine = smalleEngine;
    } else if (input.power > 90 && input.power < 120) {
        newCar.engine = normalEngine;
    } else if (input.power >= 120) {
        newCar.engine = monsterEngine;
    }


    if (input.carriage === 'hatchback')
        newCar.carriage = hatchback;

    if (input.carriage === 'coupe')
        newCar.carriage = coupe;

    if (input.wheelsize % 2 === 0) {
        newCar.wheels = pushWheels(input.wheelsize - 1)
    } else {
        newCar.wheels = pushWheels(input.wheelsize)
    }


    function pushWheels(x) {
        let size = [];

        for (let i = 0; i < 4; i++) {
            size.push(x)
        }
        return size
    }


    return newCar
}


let a = cars({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

console.log(a);