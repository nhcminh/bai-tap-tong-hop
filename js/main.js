$(document).ready(function () {
    // Owl Init
    $('.owl-carousel').owlCarousel({
        nav: true,
        loop: true,
        dots: true,
        items: 1,
        margin: 0,
        navText: ['', ''],
    })

    // Navbar
    $(document).on('scroll', function(){
        if(pageYOffset != 0){
            $('.nav_brand').css({'width':'40%'});
            $('#navbar').css({'background-color': 'rgba(255, 255, 255, 1)'});
        }
        else {
            $('.nav_brand').css({'width':'65%'});
            $('#navbar').css({'background-color': 'rgba(255, 255, 255, 0)'});
        }
    })
})