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
      $('#section2').css('visibility', 'visible').fadeIn();
    } else {
      $('#section2').fadeOut().css('visibility', 'hidden');
    }
  });

  // section3
  $(window).scroll(function(){
    if ($(this).scrollTop() > 750) {
      console.log($(this).scrollTop())
      $('.box_services').fadeIn();
    } else {
      $('.box_services').fadeOut();
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
  $('body, html').animate({scrollTop: 0 }, 2000);
});


// animation down 
$('.home__button, #sec_2, #sec_3, #sec_4').click(function (e) {
  e.preventDefault()
  console.log(this.id)
  if (this.id == 'sec_2' || this.id == 'h_button') {
    $('body, html').animate({ scrollTop: 500 }, 2000);    
  } else if (this.id == 'sec_3'){
    console.log('entro')
    $('body, html').animate({ scrollTop: 1000 }, 3500);  
  } else if (this.id == 'sec_4'){
    $('body, html').animate({ scrollTop: 3000 }, 5000);  
  }
});