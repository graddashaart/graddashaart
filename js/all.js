$(document).ready(function() {
	var slideItem = $('.js-slide');
	var slideImg = slideItem.find('.js-slide-image');
	slideItem.on('click', function() {
		$(this).toggleClass('active');
	});

    slideImg.on('animationend animationend webkitAnimationEnd oanimationend MSAnimationEnd', function () {
        $(this).parent().addClass('animation-end');
    });

    $('.js-slide-backface').on('animationend animationend webkitAnimationEnd oanimationend MSAnimationEnd', function () {
        var imgPosition = $(this)[0].getBoundingClientRect();
        insertContent(this, imgPosition);
    });

    function insertContent(el, boundingRect) {
        var x = el.cloneNode(true);
        wrap(el, boundingRect);
    }

    function wrap(el, wrapper) {
        var newDiv = document.createElement('div');
            newDiv.innerHTML = el.outerHTML;
            $(newDiv).appendTo('body');

        var left  = wrapper.left;
        var top  = wrapper.top;
        var width  = wrapper.width;
        var height  = wrapper.height;

        newDiv.setAttribute('style',
            'position: fixed;' +
            'left:' + left + 'px;' +
            'top:' + top + 'px;' +
            'width:' + width + 'px;' +
            'height:' + height + 'px;' +
            'background: #fff;'
        );

        setTimeout(function() {
            newDiv.classList.value = 'popup-wrapper';
        }, 0)
    }
});