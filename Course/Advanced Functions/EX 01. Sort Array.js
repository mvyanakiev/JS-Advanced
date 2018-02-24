function solve(arr, command) {
    if (command === 'asc') {
        arr.sort((a,b) => a-b);

    } else if (command === 'desc') {
        arr.sort((b,a) => b-a);
        arr.reverse()
    }

   return arr
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));