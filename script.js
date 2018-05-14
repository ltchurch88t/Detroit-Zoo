$(document).ready(function() {
    var recall = false;
    $('#icon-one').click(function() {
        $('#australian-carousel').toggleClass('switch').siblings().not('hide-div').addClass('hide-div');
    });

    $('#icon-two').click(function() {
        $('#american-carousel').toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div').removeClass('switch');
    });

    $('#icon-three').click(function() {
        $('#african-grassland-carousel').toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div').removeClass('switch');
    });

    $('#icon-four').click(function() {
        $('#arctic-carousel').toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div').removeClass('switch');
    });
    $('#icon-five').click(function() {
        $('#african-forest-carousel').toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div').removeClass('switch');
    });

    $('#icon-six').click(function() {
        $('#asian-forest-carousel').toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div').removeClass('switch');
    });

    $('#icon-seven').click(function() {
        $('#conservation-carousel').toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div').removeClass('switch');
    });

    $('.parallax-image').simpleParallax({
        scale: '1.5',
        orientation: 'up'
    });

    $(window).scroll(function() {
        $('.hideme').each(function(i) {
            var bottomObject = $(this).position().top + $(this).outerHeight() / 10;
            var bottomWindow = $(window).scrollTop() + $(window).height();
            if (bottomWindow > bottomObject) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }
        });
    });

    $(document).scroll(function() {
        var $nav = $('.fixed-top');
        var $socialNav = $('.social-nav-fixed');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $socialNav.toggleClass('scrolling', $(this).scrollTop() > $nav.height());
    });
});