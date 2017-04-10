// var _fnMenuHeaderTop = function(toggle, list, slide) {
//     var className, el, time;
//     time = 300;
//     el = toggle.closest('.mobile-list-anim');
//     className = 'active';
//
//     if (toggle.prop("checked")) {
//         if(slide) list.stop().slideDown(time);
//         el.add(list).addClass(className);
//     } else {
//         if(slide) list.stop().slideUp(time);
//         el.add(list).removeClass(className);
//     }
// };
//
// var menuHeaderTopToggle = $('#header-bottom-toggleMenuMbl');
// var menuHeaderTopList = $('.header-bottom-nav');
//
// menuHeaderTopToggle.change(function() {_fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);});
// _fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);
// $(document).click(function(e) {
//     var target;
//     target = $(e.target);
//     if ((!target.is(menuHeaderTopList) && !target.closest(menuHeaderTopList)[0]) && (!target.is(menuHeaderTopToggle) && !target.is('.menuTopMobel'))) {
//         menuHeaderTopToggle[0].checked = false;
//         _fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);
//     }
// });
//
// $('.header-bottom-nav a').click(function(e){
//     if($(document).width() > 991) return true;
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
//             .find('ul').slideUp(time);
//     }
// });
//
// //
// var header = $('.header'),
//     headerBottomFix = $('.header-bottom-fix'),
//     checkPad = true;
//
// window.headerHeight = _heightBlock(header);
// var checkHeaderFix = function(){
//     // return false;
//
//     if($(window).width() < 991){
//
//         if($(window).scrollTop() > headerBottomFix.offset().top){
//             header.addClass('fix');
//         }else{
//             header.removeClass('fix');
//         }
//
//         //     if(checkPad){
//         //         header.addClass('fix');
//         //         header.css({marginTop: "-"+headerHeight+"px"}).animate({marginTop: "0"}, 500);
//         //         page__wrapper.css('padding-top', headerHeight+"px");
//         //         checkPad = false;
//         //     }
//         // }else if(checkPad===false){
//         //     checkPad = true;
//         //     header.removeClass('fix');
//         //     page__wrapper.css('padding-top', 0+"px");
//         //     $('.header-slider-el').slick('slickNext');
//         //     window.headerHeight = _heightBlock(header);
//         // }
//     }
// };
if ($.fn.slick) {
    $('.header__category-list').slick({
        slidesToShow: 9,
        slidesToScroll: 9,
        dots: false,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // adaptiveHeight: true,
        // appendDots: '.header-bottom__slider-dots',
        prevArrow: "<button class='slick-prev slick-arrow'><i class='s-arrow-prev-min'></i></button>",
        nextArrow: "<button class='slick-next slick-arrow'><i class='s-arrow-next-min'></i></button>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            }
        ]
    })
}

$('.header__category-list a').hover(function () {
   var _this = $(this),
       block = $(_this.data('block'));

    if(block[0]){
        if(block.is(':hidden')){
            block.show();
            _this.addClass('active');
        }else{
            _this.removeClass('active');
            block.off('hover');
            block.hover(function () {
                $(this).show();
                _this.addClass('active');
            }, function () {
                $('.header__category-list a').removeClass('active');
                $('.header__category-nav').hide();
            });
            block.hide();
        }
    }
});
