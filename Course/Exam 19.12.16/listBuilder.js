function listBuilder(selector) {

    return {

        createNewList: function () {

            let hui = $(selector);

            hui.empty();
            hui.html('<ul id="bigHui">');
        },


        addItem: function (item) {

            $('#bigHui').append(
                $('<li>').text(item)
                .append($('<button>').text("Up").click(function() {$(this).parent().insertBefore($(this).parent().prev())}))
                .append($('<button>').text("Down").click(function() {$(this).parent().insertAfter($(this).parent().next())}))
            )
        },
    }
}