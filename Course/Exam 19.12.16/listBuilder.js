function listBuilder(selector) {

    return {
        createNewList: function () {

            let listTowns = $(selector);

            listTowns.empty();
            listTowns.html('<ul id="newId">');
        },

        addItem: function (item) {

            $('#newId').append(
                $('<li>').text(item)
                .append($('<button>').text("Up").click(function() {$(this).parent().insertBefore($(this).parent().prev())}))
                .append($('<button>').text("Down").click(function() {$(this).parent().insertAfter($(this).parent().next())}))
            )
        },
    }
}