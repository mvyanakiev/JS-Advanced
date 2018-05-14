class PublicTransportTable {
    constructor(town) {
        this.town = town;
        this.genTable();
        this.id = 1;
    }


    genTable() {
        $('table').find("caption").text(`${this.town}'s Public Transport`);


    }


    ass() {
        console.log('sd');
    }


    addVehicle(hoi) {





        let tr = "";
        tr += `<tr>`;
        tr += `<td>${hoi.type}</td>`;
        tr += `<td>${hoi.name}</td><td><button id="${this.id}" onclick="ass()">More Info</button></td>`;
        tr += `</tr>`;



        $('table').append(tr);
        $('#this.id').on("click", this.ass());
        this.id++;



    }


}