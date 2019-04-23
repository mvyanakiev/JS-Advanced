class PublicTransportTable {
    constructor(town) {
        this.town = town;
        this.genTable();
        this.id = 1;
    }


    genTable() {
        $('table').find("caption").text(`${this.town}'s Public Transport`);
    }


    checkFn() {
        console.log('sd');
    }


    addVehicle(vehicle) {
        let tr = "";
        tr += `<tr>`;
        tr += `<td>${vehicle.type}</td>`;
        tr += `<td>${vehicle.name}</td><td><button id="${this.id}" onclick="checkFn()">More Info</button></td>`;
        tr += `</tr>`;

        $('table').append(tr);
        $('#this.id').on("click", this.checkFn());
        this.id++;
    }
}