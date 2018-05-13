$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    var $socialNav = $(".social-nav-fixed");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	$socialNav.toggleClass('scrolling', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $('[data-toggle="popover"]').popover({ html : true });
  $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    });
})

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottomObject = $(this).position().top + $(this).outerHeight() / 4;
            var bottomWindow = $(window).scrollTop() + $(window).height();
            if( bottomWindow > bottomObject){
                $(this).animate({'opacity':'1'},500);   
            }
        }); 
    });
});