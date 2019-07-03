$(function () {
    var
        w = $(window).width();

    $('.popup__container').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });


    $('.preteinsion__openPopup').click(function (e) {
        e.preventDefault();

        setTimeout(function () {
            $('.popup__container').hide();
            $('.popup__preteinsion').show();
        }, 50);

    });

    $('.popups__overlay, .popup__close').click(function (e) {
        e.preventDefault();

        $('.popup__container').hide();

    });


    /////////////////////////////////////////////
    $('.hamburger__button').click(function (e) {
        e.preventDefault();

        var windowTop = $(window).scrollTop();

        setTimeout(function () {
            $('body').attr('data-top', windowTop);
            $('.header__nav__container').addClass('openedNav');
            $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});

            var windowTopData = $('body').attr('data-top');

            $('body').scrollTop(windowTopData);
        }, 50);
    });

    $('.vav__close, .nav__overlay').click(function (e) {
        e.preventDefault();

        var windowTop = $('body').attr('data-top');

        $('.header__nav__container').removeClass('openedNav');
        $('html, body').css({'overflow' : 'visible', 'position' : 'relative'});

        $(window).scrollTop(windowTop);

    });


    ////////////////////////////////
    $('.preteinsion__photo__link').click(function (e) {
        e.preventDefault();

        $('.preteinsion__photo__input').click();
    });

    $('.preteinsion__photo__input').change(function(e){
        var fileName = e.target.files[0].name;

        $('.preteinsion__photo__name').text(fileName);
        $('.preteinsion__photo__right').show();
    });

    $('.preteinsion__photo__remove').click(function (e) {
        e.preventDefault();

        $('.preteinsion__photo__input').val('');
        $('.preteinsion__photo__right').hide();
        $('.preteinsion__photo__name').html('');
    });


    ///////////////////////////////////////////
    $('input, textarea').focus(function () {
        $(this).closest('.fieldValid').removeClass('invalid');
    });
    $('input').change(function () {
        $(this).closest('.fieldValid').removeClass('invalid');
    });



    ///////////////////////////////////
    $('.preteinsion__confirm__copy').click(function (e) {
        e.preventDefault();
    });

});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}



