//Menu
$('.main-header__menu').on("click", function(e){
  $('.main-header').toggleClass('active');
  if($('.main-header').hasClass('active')) {
    $('.main-header').append('<span class="close"></span>');
  } else {
    $('.close').remove();
  }
  e.preventDefault();
});

$('.main-header').on("click",'.close', function(){
  $('.main-header').removeClass('active');
  $(this).remove();
});

//scene
$('.scene__items__cat').on("click", function(e){
  $(this).toggleClass('meow');
  e.preventDefault();
});
