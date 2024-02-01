$(document).ready(function () {
    let stickyElement = $('#page > nav');

    let stickyHeight = stickyElement.height();


    $(window).scroll(function () {
        let scrollPosition = $(window).scrollTop();
        if (scrollPosition > stickyHeight) {
            stickyElement.addClass('sticky__elem')
        } else {
            stickyElement.removeClass('sticky__elem')
        }


    });

    $('#menu__btn').click(openCloseMenuHandler);
    $('#close__btn').click(openCloseMenuHandler)

    function openCloseMenuHandler() {
        $('body').toggleClass('active__menu')
    }

   
    $(".nav__header").click(function(){
        let submenu = $(this).next(".footer__submenu");
        submenu.slideToggle();
        $(".footer__submenu").not(submenu).slideUp();
    });
    

});
