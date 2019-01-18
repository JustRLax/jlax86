$('.play').magnificPopup({
    type: 'iframe',
  	preloader: false,
    fixedContentPos: true,
    fixedBgPos: true,
    showCloseBtn: true,
    closeOnBgClick: true,
    enableEscapeKey: true,
    removalDelay: 700
});

$('.open-modal').magnificPopup({
	type: 'inline',
  fixedContentPos: true,
  fixedBgPos: true,
  showCloseBtn: true,
  closeOnBgClick: true,
  removalDelay: 500,
  enableEscapeKey: true
});
if ($('.scene').length) {
  $('.bikes-modal').magnificPopup({
      removalDelay: 700,
      items: [
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-1.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/bike-1.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-1.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-1.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-1.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-1.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/bike-1.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-1.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-1.jpg" alt="2006 Rossi Yamaha R6"></picture><p>This 2006 Yamaha YZF-R6 was the last bike that I owned.</p></div>'),
          type: 'inline'
        },
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-2.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/bike-2.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-2.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-2.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-2.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-2.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/bike-2.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-2.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-2.jpg" alt="2006 Rossi Yamaha R6"></picture><p>This bike was equipped with an integrated tail light, Dynojet Power Commander and quickshifter setup for GP shifting.</p></div>'),
          type: 'inline'
        },
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-3.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/bike-3.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-3.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-3.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-3.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-3.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/bike-3.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-3.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-3.jpg" alt="2006 Rossi Yamaha R6"></picture><p>I styled this bike to match the livery Valentino Rossi used at the 2005 Laguna Seca GP.</p></div>'),
          type: 'inline'
        },
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-4.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/bike-4.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-4.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-4.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-4.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-4.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/bike-4.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-4.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-4.jpg" alt="2006 Rossi Yamaha R6"></picture><p>This bike also featured CRG shorty levers, Vortex frame sliders, and a full system Akrapovic exhaust.</p></div>'),
          type: 'inline'
        },
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-5.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/bike-5.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-5.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-5.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-5.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-5.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/bike-5.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-5.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-5.jpg" alt="2006 Rossi Yamaha R6"></picture><p>Rear view mirror delete with bar-end mirrors to make it look like a track bike.</p></div>'),
          type: 'inline'
        },
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-6.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/bike-6.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-6.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-6.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-6.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-6.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/bike-6.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-6.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-6.jpg" alt="1973 Yamaha TX-650 Cafe Racer"></picture><p>This was my very first bike. A 1973 Yamaha TX 650 cafe racer</p></div>'),
          type: 'inline'
        },
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-7.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/bike-7.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-7.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-7.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-7.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-7.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/bike-7.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-7.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-7.jpg" alt="1973 Yamaha TX-650 Cafe Racer"></picture><p>This bike went through various stages of customization with the help of my pops.</p></div>'),
          type: 'inline'
        },
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-10.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/bike-10.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-10.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/bike-10.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-10.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-10.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/bike-10.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/bike-10.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/bike-10.jpg" alt="1973 Yamaha TX-650 Cafe Racer"></picture><p>This is how the bike ended up looking before I sold it.</p></div>'),
          type: 'inline'
        },
      ],
      gallery: {
        enabled: true
      },
      type: 'image' // this is a default type
  });
  $('.cars-modal').magnificPopup({
      removalDelay: 700,
      items: [
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/ae86-1.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/ae86-1.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/ae86-1.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/ae86-1.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/ae86-1.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/ae86-1.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/ae86-1.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/ae86-1.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/ae86-1.jpg" alt="jlax86 ae86 skyline rx7"></picture><p>My AE86 hanging with other cool Japanese cars. Photo by <a href="http://squaredphotoblog.tumblr.com/" target="_blank">Squared</a></p></div>'),
          type: 'inline'
        },
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/ae86-2.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/ae86-2.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/ae86-2.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/ae86-2.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/ae86-2.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/ae86-2.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/ae86-2.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/ae86-2.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/ae86-2.jpg" alt="jlax86 ae86 f20c drift"></picture><p>From the first drift day</p></div>'),
          type: 'inline'
        },
        {
          src: $('<div class="image-container"><picture><source media="(min-width: 1900px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/ae86-3.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/ae86-3.jpg 2x"><source media="(min-width: 1300px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/ae86-3.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1920/ae86-3.jpg 2x"><source media="(min-width: 700px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/ae86-3.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/ae86-3.jpg 2x"><source media="(min-width: 200px)" srcset="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_500/ae86-3.jpg, https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_700/ae86-3.jpg 2x"><img src="https://res.cloudinary.com/justinlaxamana/image/upload/c_scale,w_1500/ae86-3.jpg" alt="jlax86 ae86 f20c drift"></picture><p>F20c Powered AE86</p></div>'),
          type: 'inline'
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image' // this is a default type
  });
  $('.fight-modal').magnificPopup({
      removalDelay: 700,
      items: [
        {
          src: $('<div class="image-container sm"><img src="assets/resources/hands.gif" alt="jlax86 hands"/><p>Student of <a href="https://www.facebook.com/BeiShaolinMeiHuaInstitute/" target="_blank">Bei Shaolin Mei Hua Institute</a></p></div>'),
          type: 'inline'
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image' // this is a default type
  });
  $('.cat-modal').magnificPopup({
    removalDelay: 700,
    items: [
      {
        src: $('<div class="image-container sm"><img src="https://res.cloudinary.com/justinlaxamana/fiona.jpg" alt="jlax86 hands"/><p>Fiona</p></div>'),
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
}

//Mobile Hover For Preview
$('.touch .grid-section__item .image').on("click", function(e){
  $(this).toggleClass('active');
  e.preventDefault();
});
