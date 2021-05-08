
$(document).ready(function () {
    // Navbar
    if (window.innerWidth > 768) {
        $(window).on("scroll", function () {

            if (pageYOffset != 0) {
                $(".nav_brand").css({ width: "62px" });
                $("#navbar").css({ "background-color": "rgba(255, 255, 255, 1)" });
            } else {
                $(".nav_brand").css({ width: "105px" });
                $("#navbar").css({ "background-color": "rgba(255, 255, 255, 0)" });
            }

        });
    } else {
        $(".nav_brand").css({ width: "62px" });
        $("#navbar").css({ "background-color": "rgba(255, 255, 255, 1)" });
    }
    //Count up
    $('.counter').countUp({
        'time': 1200,
    });
    // Portfolio

    $(".grid").isotope({
        // options
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        filter: "*",
    });
    $(".gallery__filter").on("click", function () {
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

    // Magnify Popup Lightbox
    $('.image-link').magnificPopup({
        items: [
            {
                src: './img/portfolio/01.jpg'
            },
            {
                src: './img/portfolio/02.jpg',
            },
            {
                src: './img/portfolio/03.jpg',
            },
            {
                src: './img/portfolio/04.jpg',
            },
            {
                src: './img/portfolio/05.jpg',
            },
            {
                src: './img/portfolio/06.jpg',
            },
            {
                src: './img/portfolio/07.jpg',
            },
            {
                src: './img/portfolio/08.jpg',
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image',
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });

    //Animate width 
    $(window).on('scroll', function () {
        var item1 = $('.progress:eq(0)');
        var item2 = $('.progress:eq(1)');
        var item3 = $('.progress:eq(2)');
        var _pageYOffset = window.pageYOffset;
        if (_pageYOffset >= 900) {
            item1.css({ 'width': '100%' });
        }
        if (_pageYOffset >= 965) {
            item2.css({ 'width': '100%' });
        }
        if (_pageYOffset >= 1040) {
            item3.css({ 'width': '100%' });
        }
    })
});