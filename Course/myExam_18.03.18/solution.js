class PaymentManager {
    constructor(title) {
        this.title = title;

    }

    render(target) {

        let renderedHtml = `<table>
    <caption>${this.title} Payment Manager</caption>
    <thead>
        <tr>
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>
        </tr>
   </thead>
    <tbody class="payments">
        <tr>
            <td><!-- Payment's name --></td>
            <td><!-- Payment's category --></td>
            <td><!-- Payment's price --></td>
            <td><button>Delete</button></td>
        </tr>
    </tbody>
    
    
    <tfoot class="input-data">
        <tr>
            <td><input name="name" type="text"></td>
            <td><input name="category" type="text"></td>
            <td><input name="price" type="number"></td>
            <td><button>Add</button></td></tr>
    </tfoot>
    
</table>`;


       $('button:contains("Add")').on("click", () => alert('hui'));

        $(`#${target}`).append(renderedHtml);

    }

}