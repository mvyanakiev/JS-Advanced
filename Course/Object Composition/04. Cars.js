function solve(input) {

    let commandExec = (function () {
        let store = {};

        function create(arr) {
            if (arr.length > 2) {
                store[arr[0]] = Object.create(store[arr[2]]);
            } else {
                store[arr[0]] = {};
            }
        }

        function set(arr) {
            let name = arr[0];
            let key = arr[1];
            let value = arr[2];
            store[name][key] = value;
        }


        function print(name) {
            let result = [];
            for (let key in store[name]) {
                result.push(key + ":" + store[name][key])
            }
            console.log(result.join(', '));
        }

        return {create, set, print}
    })();

    for (let str of input) {
        let args = str.split(' ')
        let command = args.shift()
        commandExec[command](args)
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);