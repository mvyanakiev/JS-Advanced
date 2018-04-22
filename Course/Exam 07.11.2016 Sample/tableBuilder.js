function tableBuilder(selector) {


    function createTable(columns) {

        let newTable = $('<table>').attr("id", "myTable");
        let trow = $('<tr>');

        let thData;
        for (let element of columns) {
            thData += `<th>${element}</th>`;
        }
        thData += `<th>Action</th>`;

        trow.append(thData);
        newTable.append(trow);
        $(selector).append(newTable);
    }


    function fillData(table) {

        for (let rows of table) {
            let newRow = $('<tr>');


            for (let cells of rows) {
                newRow.append($('<td>').text(cells))
            }
            newRow.append($('<td> <button>Delete</button>').on("click", deleteCurrentRow));


            function deleteCurrentRow(sel) {
                $('#myTable').find(sel.target).parent().parent().remove();
            }


            $('#myTable').append(newRow)
        }
    }


    return {
        createTable,
        fillData,
    }


}