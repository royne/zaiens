$(document).ready(function(){
  // boton scrollTop
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('#js_up').fadeIn();
    } else {
      $('#js_up').fadeOut();
    }
  });

  // section2
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $('#section2').css('visibility', 'visible');
    } else {
      $('#section2').css('visibility', 'hidden');
    }
  });

  // section3
  $(window).scroll(function(){
    if ($(this).scrollTop() > 650) {
      $('#section3').fadeIn();
    } else {
      $('#section3').fadeOut();
      $('.hidden_section3').fadeOut();
    }
  });

  // hidden_section3
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.hidden_section3').css('display', 'block');
    }
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 700) {
      $('.hidden_section3').fadeOut();
    }
  });
});

// animacion boton top
$('#js_up').click(function(){
  $('body, html').animate({scrollTop: 0 }, 1000);
});
