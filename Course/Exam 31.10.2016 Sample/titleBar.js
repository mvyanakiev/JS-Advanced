class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];
    }


    appendTo(selector) {

        // console.log(this.links);
        // $('.header').empty();

        let header = $('<header>').addClass('header');
        let headerRow = $('<div>').addClass('header-row');
        let button = $('<a>')
            .addClass('button')
            .html('&#9776;')
            .on("click", () => $('div.drawer').toggle());
        let span = $('<span>')
            .addClass('title')
            .text(this.title);
        let drawer = $('<div>').addClass('drawer');
        let navMenu = $('<nav>').addClass('menu');


        this.links.forEach(link => navMenu.append(link));
        headerRow.append(button);
        headerRow.append(span);
        drawer.append(navMenu);
        header.append(headerRow);
        header.append(drawer);

        $(selector).append(header);


        // $(selector).html(this.title);
        // let result = "";
        // $(".menu").empty();
        // for (let ell of this.links) {
        //     result += `<a class="menu-link" href="${ell.linkValue}">${ell.name}</a>`
        // }
        // $(".menu").append(result);

    }


    addLink(href, name) {
        let generatedLinks = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);
        this.links.push(generatedLinks);
    }


    // addLink(href, name) {
    //     this.links.push({
    //         linkValue: href,
    //         name: name
    //     });
    // }

}