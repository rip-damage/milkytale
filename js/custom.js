$(document).ready(function () {

    'use strict';
    
    $('ul.tabs').delegate('li:not(.current)', 'click', function () {
        $('ul.tabs').find('.tri').remove();
        $(this)
            .addClass('current')
            .append('<div class="tri"></div>')
            .siblings()
            .removeClass('current')
            .remove('li div')
            .parents('div.section')
            .find('div.box')
            .hide()
            .eq($(this).index())
            .fadeIn(150);
    });
    
    $('.slider-block').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true
    });
    
    $('.slider-block-no').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    });
    
    $('.slider-block-height').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        slidesPerRow: 1,
        rows:2,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow:'<button type="button" class="slick-next">Next</button>'
    });
    
    $('.slider-block-no-4').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000
    });
    
    $('.slider-block1, .slider-block2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    });
    
    $("a.fancyimage").fancybox({
        helpers: {
              title : {
                  type : 'float'
              }
          }
    });     
    
    $('.mosaicflow__item1').mosaicflow({
        minItemWidth: 400
    });
    
    $('.mosaicflow__item2').mosaicflow({
        minItemWidth: 50
    });
    
    $('.show').hover(
        function(){
            var id = $(this).data('target');
            $('#'+id).show()
        }, function(){
            $('.hidden-desc').hide()
        }
    )
});
