  //scrolling fade effect for images

  $(document).scroll(function () {
var y = $(this).scrollTop();
if (y > 150) {
    $('#img2').fadeIn();
}
else {$('#img2').fadeOut('fast')};

if (y > 300) {
    $('#img3').fadeIn();
}
else {$('#img3').fadeOut('fast')};

if (y > 450) {
    $('#img4').fadeIn();
}
else {$('#img4').fadeOut('fast')};
});