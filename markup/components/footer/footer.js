var footerHeight = null,
    footer = $('.page__footer'),
    page__wrapper = $('.page__wrapper'),
    page__buffer = $('.page__buffer');

var checkFooterHeight = function(){
    footerHeight = _heightBlock(footer);
    page__wrapper.css("margin-bottom", "-"+footerHeight+"px");
    page__buffer.css("height", ""+footerHeight+"px");
};
checkFooterHeight();

$('.footer__certificates').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    arrows: true,
    prevArrow: "<button class='slick-prev slick-arrow'></button>",
    nextArrow: "<button class='slick-next slick-arrow'></button>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 432,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
});