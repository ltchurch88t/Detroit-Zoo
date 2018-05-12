$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    var $socialNav = $(".social-nav-fixed");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	$socialNav.toggleClass('scrolling', $(this).scrollTop() > $nav.height());
  });
});


$(function () {
  $('[data-toggle="popover"]').popover({ html : true })
})