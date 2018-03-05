function tst(input) {

    let sum = 0;

    let action = {
        ad: function (digit) {
            sum += digit;
            return sum;
        },


        ex: function (digit) {
            sum -= digit;
            return sum;

        },

        multy: function (digit) {
            sum = sum * digit;
            return sum;

        },

        del: function (digit) {
            sum = sum / digit;
            return sum;

        },
        prn: function () {
            console.log(sum);

        }
    };


    for (let element of input) {
        action[element[0]](element[1]);
    }

    console.log('total sum e: ' + sum);

}

tst([['ad', 10], ['ex', 7], ['multy', 6], ['del', 4]]);
// tst([['prn', 5], ['ad', 6]]);