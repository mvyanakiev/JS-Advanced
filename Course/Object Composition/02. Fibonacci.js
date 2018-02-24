function getFibonacii(size) {
    let first = 0;
    let second = 1;

    return function () {
        let next = first + second;
        first = second;
        second = next;
        return first;
    }

}

let fib = getFibonacii();

fib();


// tova e closure, pazi last state