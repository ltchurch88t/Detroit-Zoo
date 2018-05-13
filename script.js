$(document).ready(function() {
    $( '#icon-one' ).click(function() {
        $( '#icon-one-carousel' ).toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div');

    });

    $( '#icon-two' ).click(function() {
        $( '#icon-two-carousel' ).toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div');
    });

    $( '#icon-three' ).click(function() {
        $( '#icon-three-carousel' ).toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div');
    });

    $( '#icon-four' ).click(function() {
        $( '#icon-four-carousel' ).toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div');
    });
    $( '#icon-five' ).click(function() {
        $( '#icon-five-carousel' ).toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div');
    });

    $( '#icon-six' ).click(function() {
        $( '#icon-six-carousel' ).toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div');
    });

    $( '#icon-seven' ).click(function() {
        $( '#icon-seven-carousel' ).toggleClass('hide-div').siblings().not('hide-div').addClass('hide-div');
    });

    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottomObject = $(this).position().top + $(this).outerHeight() / 4;
            var bottomWindow = $(window).scrollTop() + $(window).height();
            if( bottomWindow > bottomObject){
                $(this).animate({'opacity':'1'},500);   
            }
        }); 
    });
    $(document).scroll(function () {
        var $nav = $('.fixed-top');
        var $socialNav = $('.social-nav-fixed');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $socialNav.toggleClass('scrolling', $(this).scrollTop() > $nav.height());
    });
});