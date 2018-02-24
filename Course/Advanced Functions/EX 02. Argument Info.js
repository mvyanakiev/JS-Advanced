function result(input) {

    let sortable = [];
    let summary = {};


    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);


        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }

    }

        for (let element in summary) {
            sortable.push([element, summary[element]]);
        }

    sortable.sort(function (a, b) {
        return  b[1]- a[1];
    });


    for (let obj of sortable) {
        for (let i = 0; i < 1; i++) {
            console.log(obj[0] + " = " + obj[1]);
        }
    }

}

// result('cat', 42, function () {
//     console.log('Hello world!');
// });

// result({ name: 'bob'}, 3.333, 9.999);

// result(42, 15, 'cat');

result(42, 'cat', 15, 'kitten', 'tomcat');

