function addProduct() {


    let valueProduct = $(`#add-product`).find(`label`);
    let value = $(valueProduct[0]).find(`input`).val();
    let valueProduct1 = $(`#add-product`).find(`label`);
    let valuePrice = $(valueProduct[1]).find(`input`).val();


    if (value === '' || valuePrice === '') {
        value = $(valueProduct[0]).find(`input`).val('');
        valuePrice = $(valueProduct[1]).find(`input`).val('');
        return;
    }

    let td = $(`<td>`).text(value);
    let td0 = $(`<td>`).text(valuePrice);
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
    let sum = Number(finalPrice);
    sum += +valuePrice;
    $(here1).text(sum);
    $(valueProduct[1]).find(`input`).val('');
    $(valueProduct[0]).find(`input`).val('');


    // let product = $("input[type='text']").val();
    // let price = $("input[type='number']").val();
    // let rowToAppend = $('#product-list');
    //
    //
    // console.log(product);
    //
    // if (product.length > 0 && price !== undefined) {
    //
    //     let row = `<tr><th>${product}</th><th>${price}</th></tr>`;
    //     rowToAppend.append(row);
    //
    //
    // }
    //
    // $("input[type='text']").val("");
    // $("input[type='number']").val("");


}