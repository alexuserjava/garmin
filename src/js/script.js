$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
        
    });
});

