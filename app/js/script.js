$(document).ready(main);



function main() {
    //slider settings
    $('.slider').slick({
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false
    });

    //code
    let menu = $('.nav .nav__inner .menu'),
        btnMenu = $('.nav__bars');

    btnMenu.on('click', function() {
        menu.toggleClass('menu').toggleClass('style-menu');
    });

    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 800);
      });
    
    console.log(menu);
}