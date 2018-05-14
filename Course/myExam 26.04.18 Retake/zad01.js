function busRoute() {

    let firstNumber = $('#enter-stops').find('input[name=first-stop]').val();
    let lastNumber = $('#enter-stops').find('input[name=last-stop]').val();
    let maxNumber = $("#bus-stops").children().length;
let output = "";


    let resultArray = $('#bus-stops').children().map(function(){
        return $.trim($(this).text());
    }).get();



    if (firstNumber >= 1 &&
        lastNumber < maxNumber+1 &&
    firstNumber< lastNumber) {

        $('#selected-bus-stops').empty();
        $('#selected-route').empty();

        for (let i = firstNumber-1; i < lastNumber; i++) {

            output += `<li>${resultArray[i]}</li>`
        }

        $('#selected-bus-stops').append(output);
        $('#selected-route')
            .append(`<h3 id="selected-route">Bus stops: <span>${firstNumber}-${lastNumber}</span></h3>`);

        $('#enter-stops').find('input[name=first-stop]').val("");
        $('#enter-stops').find('input[name=last-stop]').val("");

    }
}