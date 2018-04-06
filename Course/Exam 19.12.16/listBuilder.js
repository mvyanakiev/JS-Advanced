function listBuilder(selector) {

    return {

        createNewList: function () {

            let hui = $(selector);

            hui.empty();
            hui.append('<ul id="bigHui"></ul>');
        },

        addItem: function (item) {


            let htmlToAppend = "";
            htmlToAppend += "<li>";
            htmlToAppend += `${item}`;
            htmlToAppend += '<button id = "btnUp" style = "button">Up</button>';
            htmlToAppend += `<button id = "btnDown" style = "button" onclick="console.log($('#bigHui'))">Down</button>`;
            htmlToAppend += "</li>";

            $('#bigHui').append(htmlToAppend);

            // $('#btnUp').on("click",
            //
            //     function move() {
            //         let townToMove = $('#bigHui');
            //         townToMove.insertBefore(townToMove.prev());
            //     }
            // );

            $('#btnUp').on("click",

                function move() {
                    let townToMove = $('#bigHui');

                    console.log(townToMove);
                }
            );

        },
    }
}