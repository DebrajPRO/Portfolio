jQuery(document).ready(function(){

  $('header #toggle-btn').click(function(){
    $('header nav').slideToggle(1000);
  });

  $(".p-reload").click(function(){
    location.reload(true);
  });

  $.stellar();

  
});