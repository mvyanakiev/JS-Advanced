function makeList() { let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) { data.push(item);
        },
        clear: function() {
            data = []; },
        toString: function() { return data.join(", ");
        } };
}
module.exports = {makeList};
//
//
// let neshto = makeList();
//
// neshto.addLeft("pesho")
// neshto.addLeft("gosho")
// neshto.addRight("tosho")
//
// console.log(neshto.toString());
// neshto.clear()
// console.log(neshto.toString());

