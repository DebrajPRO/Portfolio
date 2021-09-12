$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        780:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

  

  $('.toggle-btn').click(function(){
    $('header nav').fadeIn(800);
  });
  $('.nav-close').click(function(){
    $('header nav').fadeOut(1000);
  });

  // $.stellar();

  $.stellar()
});