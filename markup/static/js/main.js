$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});
// var linkTop = $('.footer__scrollTop');
// linkTop.click(function () {
//     $('html, body').animate({ scrollTop: 0 }, 500);
// });
$(window).on({
    load: function () {
        checkFooterHeight();
        // checkHeaderFix();
    },
    scroll: function () {
        // var scrollTop = $(window).scrollTop();
        // if(scrollTop > 200){
        //     linkTop.addClass('active');
        // }else{
        //     linkTop.removeClass('active');
        // }
        // checkHeaderFix();
    },
    resize: function () {
        // checkHeaderFix();
        checkFooterHeight();
    }
});
// $('#callback').modal('show')
if ($.fn.slick) {

//     $bottom__slider.slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         adaptiveHeight: true,
//         appendDots: '.header-bottom__slider-dots',
//         prevArrow: '.header-bottom__slider-arrows.previous',
//         nextArrow: ".header-bottom__slider-arrows.next",
//     }).on('afterChange', checkBg);
//     checkBg();
//
    $('.slider-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'></button>",
        nextArrow: "<button class='slick-next slick-arrow'></button>",
    });
    $('.reviews-block__documents').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'></button>",
        nextArrow: "<button class='slick-next slick-arrow'></button>",
    });
    $('.trust-list').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><i class='s-arrow-prev'></i></button>",
        nextArrow: "<button class='slick-next slick-arrow'><i class='s-arrow-next'></i></button>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 614,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 388,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.itemList_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><i class='s-arrow-prev'></i></button>",
        nextArrow: "<button class='slick-next slick-arrow'><i class='s-arrow-next'></i></button>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
//
    var itemDetaliSlider = $('.detali__slider-view');
    var itemDetaliSliderPreview = $('.detali__slider-preview');
    itemDetaliSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        adaptiveHeight: true,
        asNavFor: itemDetaliSliderPreview,
        // autoplay: true,
        // autoplaySpeed: 3000,
        prevArrow: "<button class='slick-prev slick-arrow'><i class='s-arrow-prev'></i></button>",
        nextArrow: "<button class='slick-next slick-arrow'><i class='s-arrow-next'></i></button>",
    });

    itemDetaliSliderPreview.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        arrows: false,
        asNavFor: itemDetaliSlider,
        focusOnSelect: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-top' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowTop'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-bottom' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowBottom'></use></svg></button>",
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });
}

if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}
if ($.fn.magnificPopup) {
    var magnificPopupObj = {
        delegate: 'a',
        type: 'image',
        tLoading: "",
        mainClass: "",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        iframe: {
            // markup: '<div class="mfp-iframe-scaler">' +
            // '<div class="mfp-close"></div>' +
            // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    $('.magnificPopup').each(function () {
        $(this).magnificPopup(magnificPopupObj);
    })
}

// $('.catalog-category-list a').click(function(e){
//     var _this = $(this),
//         list = _this.next('ul'),
//         parent = _this.parent(),
//         className = 'active',
//         time = 300;
//
//     if(list[0]){
//         e.preventDefault();
//         parent.toggleClass(className);
//         list.slideToggle(time);
//
//         parent.siblings().removeClass(className)
//             .find('li').removeClass(className)
//             .end()
//             .find('ul').slideUp(time);
//     }
// });


// $('.collapse').find('.collapse-toggle').click(function(e){
//     e.preventDefault();
//     var _this = $(this),
//         content = _this.next(),
//         parentContent = _this.closest('.collapse-toggle-content')[0]?_this.closest('.collapse-toggle-content'):_this.closest('.collapse'),
//         time = 300,
//         className = 'active';
//
//     if(content.hasClass('collapse-toggle-content')){
//         content.slideToggle(time);
//         _this.parent().toggleClass(className);
//
//         parentContent.find('.collapse-toggle-content').not(content).stop().slideUp(time);
//         parentContent.find('.collapse-toggle').not(_this).parent().removeClass(className);
//     }
// });


// var videoBlock = $('.videoBlock'),
//     videoBlockLabel = $('.videoBlock__label'),
//     videoBlockIframe = $('.videoBlock__main-iframe');
//
// videoBlockLabel.click(function(){
//     var _this = $(this);
//
//     _this.addClass('active').siblings().removeClass('active');
//     var iframe = _this.find('iframe');
//     if(iframe[0]){
//         videoBlockIframe.attr('src', iframe.attr('src'));
//     }
// });

function initYmaps() {
    var coords = [52.32594308927015, 104.2421168088913];
    var MapPlaces = new ymaps.Map('yamap', {
        center: coords,
        zoom: 12,
        controls: ['zoomControl']
    });
    MapPlaces.behaviors.disable('scrollZoom');

    collection = new ymaps.GeoObjectCollection(null,{
        iconLayout: 'default#image',
        iconImageHref: 'placemark.png',
        iconImageSize: [23, 35],
        // iconImageOffset: [-31, -83]
    });

    MapPlaces.geoObjects.add(collection);

    placemark = new ymaps.Placemark(coords);
    collection.add(placemark);
}

try{
    ymaps.ready(initYmaps);
}catch (e){}

$('.tabs__nav').find('a').click(function(e){
    e.preventDefault();
    var _this = $(this),
        parent = _this.parent(),
        className = 'active',
        block = $(_this.attr('data-block')),
        time = 300;

    if(!parent.hasClass(className)){
        parent.addClass(className);
    }
    parent.siblings().removeClass(className)
        .each(function () {
            var __this = $(this),
                link = __this.find('a'),
                block = $(link.attr('data-block'));
            if(block[0]){
                block.fadeOut(time)
            }
        });

    block.delay(time).fadeIn(time)
});

$('.category-list__item-btnToggle').click(function (e) {
    e.preventDefault();
    var _this = $(this),
        list = $(_this.data('block'));

    if(list[0]){
        _this.slideUp(300);
        list.slideDown(300);
    }
});