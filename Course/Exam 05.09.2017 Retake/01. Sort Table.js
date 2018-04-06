function sort(colIndex, descending) {
    // console.log(colIndex + " " + descending); // check dali e varzan html s js

    let tableRows = $('tbody > tr'); // vzima cialata tablica i chete redovete
    // let tableRows = $('tbody').find('tr'); // vzima cialata tablica i chete redovete

    if (colIndex === 0) {
        if (descending) {
            tableRows.sort((a,b) => $($(b).children()[0]).text()
                .localeCompare($($(a).children()[0]).text()));
        } else {
            tableRows.sort((a,b) => $($(a).children()[0]).text()
                .localeCompare($($(b).children()[0]).text()));

        }


    } else {

        if (descending) {
            // kam Number

            tableRows.sort((a,b) => $($(b).children()[1]).text()
                .localeCompare($($(a).children()[1]).text()));
        } else {

            tableRows.sort((a,b) => $($(a).children()[1]).text()
            .localeCompare($($(b).children()[1]).text()));

}

    $('tbody').append(tableRows);




    }







    $('tbody').append(tableRows);



}





