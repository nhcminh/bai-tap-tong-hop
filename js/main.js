// var items = [];
// var printing = [];
// var web = [];
// var illus = [];
// var media = [];
// var craft = [];
$(document).ready(function() {
    // Owl Init
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        nav: true,
        loop: true,
        dots: true,
        items: 1,
        margin: 0,
        navText: ["", ""],
    });

    // Navbar
    $(document).on("scroll", function() {
        if (pageYOffset != 0) {
            $(".nav_brand").css({ width: "62px" });
            $("#navbar").css({ "background-color": "rgba(255, 255, 255, 1)" });
        } else {
            $(".nav_brand").css({ width: "105px" });
            $("#navbar").css({ "background-color": "rgba(255, 255, 255, 0)" });
        }
    });

    // Portfolio

    $(".grid").isotope({
        // options
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        filter: "*",
    });
    $(".gallery__filter").on("click", function() {
        _filter = $(this).attr("data-filter");
        if (_filter == "*") {
            $(".grid").isotope({
                filter: _filter,
            });
        } else {
            $(".grid").isotope({
                filter: "." + _filter,
            });
        }
    });
    // items = document.querySelectorAll("#gallery__grid .gallery__item");
    // printing.push(items[0], items[3], items[0]);
    // web.push(items[1], items[4], items[6], items[7]);
    // illus.push(items[0], items[2], items[5]);
    // media.push(items[1], items[3], items[4], items[5]);
    // craft.push(items[2], items[5], items[6], items[7]);
    // items.forEach(function(i) { console.log(i) })
    // $(".gallery__filter").on("click", function() {
    //     var category = $(this).attr("data-category");
    //     console.log(category);
    //     if (category == "all") {
    //         items.forEach(function(i) {
    //             i.classList.add("show");
    //         });
    //     }
    //     if (category == "printing") {
    //         items.forEach(function(i) {
    //             i.classList.remove("show");
    //         });
    //         printing.forEach(function(i) {
    //             i.classList.add("show");
    //         });
    //     }
    //     if (category == "web") {
    //         items.forEach(function(i) {
    //             i.classList.remove("show");
    //         });
    //         web.forEach(function(i) {
    //             i.classList.add("show");
    //         });
    //     }
    //     if (category == 'illustration') {
    //         items.forEach(function(i) {
    //             i.classList.remove("show");
    //         });
    //         illus.forEach(function(i) {
    //             i.classList.add("show");
    //         });
    //     }
    //     if (category == 'media') {
    //         items.forEach(function(i) {
    //             i.classList.remove("show");
    //         });
    //         media.forEach(function(i) {
    //             i.classList.add("show");
    //         });
    //     }
    //     if (category == 'craft') {
    //         items.forEach(function(i) {
    //             i.classList.remove("show");
    //         });
    //         craft.forEach(function(i) {
    //             i.classList.add("show");
    //         });
    //     }
    // });
});