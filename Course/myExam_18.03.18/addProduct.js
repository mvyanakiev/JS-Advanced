function addProduct() {


    let productList = $(`#add-product`).find(`label`);

    let value = $("input[type='text']").val();
    let price = $("input[type='number']").val();


    if (value === '' || price === '') {
        value = $(productList[0]).find(`input`).val('');
        price = $(productList[1]).find(`input`).val('');
        return;
    }

    let td = $(`<td>`).text(value);
    let td0 = $(`<td>`).text(price);
    let tr = $(`<tr>`);
    tr.append(td);
    tr.append(td0);

    let container = $(`#product-list`);
    container.append(tr);
    let bill = $(`#bill`);
    let tfood = bill.children();
    let tfood1 = $(tfood[2]);
    let trfinal = tfood1.children()[0];
    let here = $(trfinal);
    let here1 = here.children()[1];
    let finalPrice = $(here1).text();
    let total = Number(finalPrice);

    total += +price;

    $(here1).text(total);


    $("input[type='text']").val("");
    $("input[type='number']").val("");

}