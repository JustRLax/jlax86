var slickArrowL = '<a href="#" class="pager prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11.2"><path class="smArrow-a" d="M2.8,1.7a1,1,0,0,0-1.4,0,1,1,0,0,0,0,1.4L5.3,7,1.4,10.9a1,1,0,0,0,0,1.4,1,1,0,0,0,1.4,0L8.1,7Z" transform="translate(-1.1 -1.4)"/></svg></a>';
var slickArrowR = '<a href="#" class="pager next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11.2"><path class="smArrow-a" d="M2.8,1.7a1,1,0,0,0-1.4,0,1,1,0,0,0,0,1.4L5.3,7,1.4,10.9a1,1,0,0,0,0,1.4,1,1,0,0,0,1.4,0L8.1,7Z" transform="translate(-1.1 -1.4)"/></svg></a>';

//Featured Slider
if($('.ftd-slider').length) {
  $('.ftd-slider').slick({
    dots: false,
    slidesToShow: 1,
    infinite: true,
    prevArrow: slickArrowL,
    nextArrow: slickArrowR,
    arrows: true,
    autoplay: false,
    fade: true,
    adaptiveHeight: true,
    initialSlide: 0,
    edgeFriction: .08
  });
}
