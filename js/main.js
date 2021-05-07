$(document).ready(function () {
    // Owl Init
    $('.owl-carousel').owlCarousel({
        autoplay:true,
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
            $('.nav_brand').css({'width':'62px'});
            $('#navbar').css({'background-color': 'rgba(255, 255, 255, 1)'});
        }
        else {
            $('.nav_brand').css({'width':'105px'});
            $('#navbar').css({'background-color': 'rgba(255, 255, 255, 0)'});
        }
    })
})