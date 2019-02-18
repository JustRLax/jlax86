//Mobile Hover For Preview
$('.touch .grid-section__item .image').on("click", function(e){
  $(this).toggleClass('active');
  e.preventDefault();
});
AOS.init();
