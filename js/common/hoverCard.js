$(document).ready(function(){
    // hover card type 1
    $('.cardHover_type1').on('mouseseenter', function(e){
        let x = e.pageX - $(this).offset().left;
        let y = e.pageY - $(this).offset().top;

        $(this).find('span').css({
            top: y,
            left: x
        })
    })

    $('.cardHover_type1').on('mouseover', function(e){
        let x = e.pageX - $(this).offset().left;
        let y = e.pageY - $(this).offset().top;

        $(this).find('span').css({
            top: y,
            left: x,
        })
    })
   
})