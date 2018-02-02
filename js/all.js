$(document).ready(function() {
    var wrapper = $('.j-wrapper');
    var animatedParent = null;
    var initialSlide = $('.j-initial-slide');

    wrapper.on('click', function () {
        var index = $(this).data('index');
        animatedParent = $(this).parent();

        if (index===0) {
            $($('.swiper-container')[1]).hide();
            animatedParent.next().animate({
                right: '25%'
            }, 1000);

            animatedParent.addClass('active').animate({
                left: '25%'
            }, 1000, function() {
                $(wrapper[1]).parent().hide();
                var slide = initialSlide[0];
                var top = slide.getBoundingClientRect().top;
                var left = slide.getBoundingClientRect().left;
                $(this).animate({
                    top: top,
                    left: left,
                    width: 300,
                    height: 300
                }, 1000, function() {
                    $(this).fadeOut(1000);
                    $('.j-overflow').fadeOut(1000);
                });
            });
        }

        if (index===1) {
            $($('.swiper-container')[0]).hide();
            animatedParent.prev().animate({
                left: '25%'
            }, 1000);

            animatedParent.addClass('active').animate({
                right: '25%'
            }, 1000, function() {
                $(wrapper[0]).parent().hide();
                var slide = initialSlide[1];
                var top = slide.getBoundingClientRect().top;
                var left = slide.getBoundingClientRect().left;
                $(this).animate({
                    top: top,
                    left: left,
                    width: 300,
                    height: 300
                }, 1000, function() {
                    $(this).fadeOut(1000);
                    $('.j-overflow').fadeOut(1000);
                });
            });
        }
    });


    // swiper init
    new Swiper('.swiper-container', {
        pagination: false,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 0,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        },
        breakpoints: {
            768: {
            }
        }
    });

    // magnific init
    $('.image-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });
});