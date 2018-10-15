$(document).ready(function(){
  // boton scrollTop
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('#js_up').fadeIn();
    } else {
      $('#js_up').fadeOut();
    }
  });
});

// animacion boton top
$('#js_up').click(function(){
  $('body, html').animate({scrollTop: 0 }, 1000);
});
