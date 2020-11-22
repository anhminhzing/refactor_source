$(document).ready(function(){
    $('.slick_image').slick({
        asNavFor: '.slick_content',
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        prevArrow: '<img class="left-arrow" src="../../images/carousel/type1/left-arrow.svg">',
        nextArrow: '<img class="right-arrow" src="../../images/carousel/type1/right-arrow.svg">',
        // dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.slick_content').slick({
        dots: true,
        asNavFor: '.slick_image',
    });         
})