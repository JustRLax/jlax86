// Deal with WP jQuery noConflict
$ = jQuery;

var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "Other";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
  },
  searchString: function (data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      this.versionSearchString = data[i].subString;

      if (dataString.indexOf(data[i].subString) !== -1) {
        return data[i].identity;
      }
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index === -1) {
      return;
    }

    var rv = dataString.indexOf("rv:");
    if (this.versionSearchString === "Trident" && rv !== -1) {
      return parseFloat(dataString.substring(rv + 3));
    } else {
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
  },

  dataBrowser: [
    {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
    {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
    {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
    {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
    {string: navigator.userAgent, subString: "Opera", identity: "Opera"},
    {string: navigator.userAgent, subString: "OPR", identity: "Opera"},

    {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
    {string: navigator.userAgent, subString: "Safari", identity: "Safari"}
  ]
};

BrowserDetect.init();
$("html").addClass((BrowserDetect.browser).toLowerCase()).addClass((BrowserDetect.browser).toLowerCase() + "-" + BrowserDetect.version);

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ){
		$("body").addClass("touch");
	}
	else{
		$("body").addClass("no-touch");
	}

const cl = new cloudinary.Cloudinary({cloud_name: "justinlaxamana", secure: true});
const cloudinary_url = "https://res.cloudinary.com/justinlaxamana/";
const cloudinary_fetch_url = cloudinary_url + "/image/fetch/";

(function($){

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

$('.alert').magnificPopup({
  removalDelay: 700,
  fixedContentPos: true,
  fixedBgPos: true,
  showCloseBtn: true,
  closeOnBgClick: true,
  enableEscapeKey: true,
  items: [
    {
      src: $('<div class="alert-container"><h2>Hold Up!</h2><p>You need a username and password to visit this page. Would you like to proceed?</p><a href="https://jlax86.pro" class="button">Yes</a> <a href="#" class="mfp-close button">No</a></div>'),
      type: 'inline'
    }
  ]
});

AOS.init();

function detectScroll() {
	var scrollTop = $(window).scrollTop();
	if(scrollTop >= 1000) {
		$('.intro').addClass('hide');
		$('.footer').addClass('show');
	} else {
		$('.intro').removeClass('hide');
		$('.footer').removeClass('show');
	}
}
if($('body.no-touch').length) {

	function parallax() {
		$('.footer').addClass('home');
		window.addEventListener('scroll', throttle(detectScroll, 25));

		const skyChange = basicScroll.create({
			elem: document.querySelector('.scene__sky--dark'),
			from: '0',
			to: '180px',
			props: {
				'--sky': {
					from: .01,
					to: .99
				}
			}
		});
		skyChange.start();

		const groundMove = basicScroll.create({
			elem: document.querySelector('.scene__foreground'),
			from: '0',
			to: '500px',
			props: {
				'--fg': {
					from: '0px',
					to: '-200px'
				}
			}
		});
		groundMove.start();

		const foregroundMove = basicScroll.create({
			elem: document.querySelector('.foreground'),
			from: '0',
			to: '500px',
			props: {
				'--ty': {
					from: '0px',
					to: '-200px'
				}
			}
		});
		foregroundMove.start();

		const footerRise = basicScroll.create({
			elem: document.querySelector('.last-project'),
			from: 'middle-top',
			to: 'bottom-top',
			direct: document.querySelector('.scene__sun--footer'),
			props: {
				'--rise': {
					from: '400px',
					to: '0'
				}
			}
		});
		footerRise.start();

		//Fix Footer for Parallax
		function fixedElements() {
		  if($('.foreground').length) {
		    var scrollTop = $(window).scrollTop();
		    var screenTop = $('.foreground').offset().top - 300;
		    var footerTop = $('.global-footer').offset().top - 300;
		  }
		}
		window.addEventListener('scroll', throttle(fixedElements, 25));

		var resizeTimer;
		$(window).on("resize", function(e) {
		  clearTimeout(resizeTimer);
		  resizeTimer = setTimeout(function() {
		    fixedElements();
		  }, 250);
		});

		$(window).triggerHandler("resize");
	}

	if($('.foreground').length) {
		parallax();
	}

	if($('.grid').length) {
		function moveBg() {

			const bg1 = basicScroll.create({
				elem: document.querySelector('.grid'),
				direct: document.querySelector('.grid__bg1'),
				from: 'top-top',
				to: 'bottom-top',
				props: {
					'--bg1': {
						from: '100px',
						to: '-6000px'
					}
				}
			});
			bg1.start();

			const bg2 = basicScroll.create({
				elem: document.querySelector('.grid'),
				direct: document.querySelector('.grid__bg2'),
				from: 'top-top',
				to: 'bottom-top',
				props: {
					'--bg2': {
						from: '280px',
						to: '-900px'
					}
				}
			});
			bg2.start();
		}
		moveBg();
	}
}

//Throttling Function
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

//Smooth Scrolling
$('a.anchor[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
  }
}
});

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjBfYnJvd3Nlci1kZXRlY3Rpb24uanMiLCIwX2Jyb3dzZXJzLXRvdWNoLmpzIiwiMF9jbG91ZGluYXJ5LmpzIiwiMF9zdGFydC5qcyIsIjFfY2xpY2suanMiLCIyX2xpZ2h0Ym94LmpzIiwiM19hbmltYXRpb25zLmpzIiwiNF9wYXJhbGxheC5qcyIsIjVfc21vb3Roc2Nyb2xsLmpzIiwiel9lbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdIQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQSIsImZpbGUiOiJhcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlYWwgd2l0aCBXUCBqUXVlcnkgbm9Db25mbGljdFxuJCA9IGpRdWVyeTtcblxudmFyIEJyb3dzZXJEZXRlY3QgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLnNlYXJjaFN0cmluZyh0aGlzLmRhdGFCcm93c2VyKSB8fCBcIk90aGVyXCI7XG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IHRoaXMuc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IuYXBwVmVyc2lvbikgfHwgXCJVbmtub3duXCI7XG4gIH0sXG4gIHNlYXJjaFN0cmluZzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkYXRhU3RyaW5nID0gZGF0YVtpXS5zdHJpbmc7XG4gICAgICB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPSBkYXRhW2ldLnN1YlN0cmluZztcblxuICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZihkYXRhW2ldLnN1YlN0cmluZykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2ldLmlkZW50aXR5O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2VhcmNoVmVyc2lvbjogZnVuY3Rpb24gKGRhdGFTdHJpbmcpIHtcbiAgICB2YXIgaW5kZXggPSBkYXRhU3RyaW5nLmluZGV4T2YodGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJ2ID0gZGF0YVN0cmluZy5pbmRleE9mKFwicnY6XCIpO1xuICAgIGlmICh0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPT09IFwiVHJpZGVudFwiICYmIHJ2ICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcocnYgKyAzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGFTdHJpbmcuc3Vic3RyaW5nKGluZGV4ICsgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nLmxlbmd0aCArIDEpKTtcbiAgICB9XG4gIH0sXG5cbiAgZGF0YUJyb3dzZXI6IFtcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiRWRnZVwiLCBpZGVudGl0eTogXCJNUyBFZGdlXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJNU0lFXCIsIGlkZW50aXR5OiBcIkV4cGxvcmVyXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJUcmlkZW50XCIsIGlkZW50aXR5OiBcIkV4cGxvcmVyXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJGaXJlZm94XCIsIGlkZW50aXR5OiBcIkZpcmVmb3hcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk9wZXJhXCIsIGlkZW50aXR5OiBcIk9wZXJhXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJPUFJcIiwgaWRlbnRpdHk6IFwiT3BlcmFcIn0sXG5cbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiQ2hyb21lXCIsIGlkZW50aXR5OiBcIkNocm9tZVwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiU2FmYXJpXCIsIGlkZW50aXR5OiBcIlNhZmFyaVwifVxuICBdXG59O1xuXG5Ccm93c2VyRGV0ZWN0LmluaXQoKTtcbiQoXCJodG1sXCIpLmFkZENsYXNzKChCcm93c2VyRGV0ZWN0LmJyb3dzZXIpLnRvTG93ZXJDYXNlKCkpLmFkZENsYXNzKChCcm93c2VyRGV0ZWN0LmJyb3dzZXIpLnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIEJyb3dzZXJEZXRlY3QudmVyc2lvbik7XG4iLCIvKipcbiAqIGpRdWVyeS5icm93c2VyLm1vYmlsZSAoaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXIuY29tLylcbiAqXG4gKiBqUXVlcnkuYnJvd3Nlci5tb2JpbGUgd2lsbCBiZSB0cnVlIGlmIHRoZSBicm93c2VyIGlzIGEgbW9iaWxlIGRldmljZVxuICpcbiAqKi9cbihmdW5jdGlvbihhKXsoalF1ZXJ5LmJyb3dzZXI9alF1ZXJ5LmJyb3dzZXJ8fHt9KS5tb2JpbGU9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSl9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xuXG5pZiggL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApe1xuXHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwidG91Y2hcIik7XG5cdH1cblx0ZWxzZXtcblx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcIm5vLXRvdWNoXCIpO1xuXHR9XG4iLCJjb25zdCBjbCA9IG5ldyBjbG91ZGluYXJ5LkNsb3VkaW5hcnkoe2Nsb3VkX25hbWU6IFwianVzdGlubGF4YW1hbmFcIiwgc2VjdXJlOiB0cnVlfSk7XG5jb25zdCBjbG91ZGluYXJ5X3VybCA9IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvXCI7XG5jb25zdCBjbG91ZGluYXJ5X2ZldGNoX3VybCA9IGNsb3VkaW5hcnlfdXJsICsgXCIvaW1hZ2UvZmV0Y2gvXCI7XG4iLCIoZnVuY3Rpb24oJCl7XG4iLCIvL01lbnVcbiQoJy5tYWluLWhlYWRlcl9fbWVudScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICQoJy5tYWluLWhlYWRlcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgaWYoJCgnLm1haW4taGVhZGVyJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgJCgnLm1haW4taGVhZGVyJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNsb3NlXCI+PC9zcGFuPicpO1xuICB9IGVsc2Uge1xuICAgICQoJy5jbG9zZScpLnJlbW92ZSgpO1xuICB9XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcubWFpbi1oZWFkZXInKS5vbihcImNsaWNrXCIsJy5jbG9zZScsIGZ1bmN0aW9uKCl7XG4gICQoJy5tYWluLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgJCh0aGlzKS5yZW1vdmUoKTtcbn0pO1xuXG4vL3NjZW5lXG4kKCcuc2NlbmVfX2l0ZW1zX19jYXQnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW93Jyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuIiwiJCgnLnBsYXknKS5tYWduaWZpY1BvcHVwKHtcbiAgICB0eXBlOiAnaWZyYW1lJyxcbiAgXHRwcmVsb2FkZXI6IGZhbHNlLFxuICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICBmaXhlZEJnUG9zOiB0cnVlLFxuICAgIHNob3dDbG9zZUJ0bjogdHJ1ZSxcbiAgICBjbG9zZU9uQmdDbGljazogdHJ1ZSxcbiAgICBlbmFibGVFc2NhcGVLZXk6IHRydWUsXG4gICAgcmVtb3ZhbERlbGF5OiA3MDBcbn0pO1xuXG4kKCcub3Blbi1tb2RhbCcpLm1hZ25pZmljUG9wdXAoe1xuXHR0eXBlOiAnaW5saW5lJyxcbiAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICBmaXhlZEJnUG9zOiB0cnVlLFxuICBzaG93Q2xvc2VCdG46IHRydWUsXG4gIGNsb3NlT25CZ0NsaWNrOiB0cnVlLFxuICByZW1vdmFsRGVsYXk6IDUwMCxcbiAgZW5hYmxlRXNjYXBlS2V5OiB0cnVlXG59KTtcbmlmICgkKCcuc2NlbmUnKS5sZW5ndGgpIHtcbiAgJCgnLmJpa2VzLW1vZGFsJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICByZW1vdmFsRGVsYXk6IDcwMCxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYmlrZS0xLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtMS5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEuanBnXCIgYWx0PVwiMjAwNiBSb3NzaSBZYW1haGEgUjZcIj48L3BpY3R1cmU+PHA+VGhpcyAyMDA2IFlhbWFoYSBZWkYtUjYgd2FzIHRoZSBsYXN0IGJpa2UgdGhhdCBJIG93bmVkLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtMi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTIuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0yLmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPlRoaXMgYmlrZSB3YXMgZXF1aXBwZWQgd2l0aCBhbiBpbnRlZ3JhdGVkIHRhaWwgbGlnaHQsIER5bm9qZXQgUG93ZXIgQ29tbWFuZGVyIGFuZCBxdWlja3NoaWZ0ZXIgc2V0dXAgZm9yIEdQIHNoaWZ0aW5nLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTMuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0zLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTMuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0zLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTMuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTMuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0zLmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPkkgc3R5bGVkIHRoaXMgYmlrZSB0byBtYXRjaCB0aGUgbGl2ZXJ5IFZhbGVudGlubyBSb3NzaSB1c2VkIGF0IHRoZSAyMDA1IExhZ3VuYSBTZWNhIEdQLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS00LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtNC5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTQuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS00LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTQuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS00LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTQuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTQuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS00LmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPlRoaXMgYmlrZSBhbHNvIGZlYXR1cmVkIENSRyBzaG9ydHkgbGV2ZXJzLCBWb3J0ZXggZnJhbWUgc2xpZGVycywgYW5kIGEgZnVsbCBzeXN0ZW0gQWtyYXBvdmljIGV4aGF1c3QuPC9wPjwvZGl2PicpLFxuICAgICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTUuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYmlrZS01LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTUuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTUuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtNS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNS5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTUuanBnXCIgYWx0PVwiMjAwNiBSb3NzaSBZYW1haGEgUjZcIj48L3BpY3R1cmU+PHA+UmVhciB2aWV3IG1pcnJvciBkZWxldGUgd2l0aCBiYXItZW5kIG1pcnJvcnMgdG8gbWFrZSBpdCBsb29rIGxpa2UgYSB0cmFjayBiaWtlLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS02LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtNi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTYuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS02LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTYuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS02LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTYuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTYuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS02LmpwZ1wiIGFsdD1cIjE5NzMgWWFtYWhhIFRYLTY1MCBDYWZlIFJhY2VyXCI+PC9waWN0dXJlPjxwPlRoaXMgd2FzIG15IHZlcnkgZmlyc3QgYmlrZS4gQSAxOTczIFlhbWFoYSBUWCA2NTAgY2FmZSByYWNlcjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS03LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtNy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTcuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS03LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTcuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS03LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTcuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTcuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS03LmpwZ1wiIGFsdD1cIjE5NzMgWWFtYWhhIFRYLTY1MCBDYWZlIFJhY2VyXCI+PC9waWN0dXJlPjxwPlRoaXMgYmlrZSB3ZW50IHRocm91Z2ggdmFyaW91cyBzdGFnZXMgb2YgY3VzdG9taXphdGlvbiB3aXRoIHRoZSBoZWxwIG9mIG15IHBvcHMuPC9wPjwvZGl2PicpLFxuICAgICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEwLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtMTAuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0xMC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEwLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTEwLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMTAuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtMTAuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTEwLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMTAuanBnXCIgYWx0PVwiMTk3MyBZYW1haGEgVFgtNjUwIENhZmUgUmFjZXJcIj48L3BpY3R1cmU+PHA+VGhpcyBpcyBob3cgdGhlIGJpa2UgZW5kZWQgdXAgbG9va2luZyBiZWZvcmUgSSBzb2xkIGl0LjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdpbWFnZScgLy8gdGhpcyBpcyBhIGRlZmF1bHQgdHlwZVxuICB9KTtcbiAgJCgnLmNhcnMtbW9kYWwnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHJlbW92YWxEZWxheTogNzAwLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9hZTg2LTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYWU4Ni0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMS5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMS5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYWU4Ni0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0xLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMS5qcGdcIiBhbHQ9XCJqbGF4ODYgYWU4NiBza3lsaW5lIHJ4N1wiPjwvcGljdHVyZT48cD5NeSBBRTg2IGhhbmdpbmcgd2l0aCBvdGhlciBjb29sIEphcGFuZXNlIGNhcnMuIFBob3RvIGJ5IDxhIGhyZWY9XCJodHRwOi8vc3F1YXJlZHBob3RvYmxvZy50dW1ibHIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlNxdWFyZWQ8L2E+PC9wPjwvZGl2PicpLFxuICAgICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYWU4Ni0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTIuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTIuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2FlODYtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMi5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTIuanBnXCIgYWx0PVwiamxheDg2IGFlODYgZjIwYyBkcmlmdFwiPjwvcGljdHVyZT48cD5Gcm9tIHRoZSBmaXJzdCBkcmlmdCBkYXk8L3A+PC9kaXY+JyksXG4gICAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9hZTg2LTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYWU4Ni0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYWU4Ni0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0zLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMy5qcGdcIiBhbHQ9XCJqbGF4ODYgYWU4NiBmMjBjIGRyaWZ0XCI+PC9waWN0dXJlPjxwPkYyMGMgUG93ZXJlZCBBRTg2PC9wPjwvZGl2PicpLFxuICAgICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBnYWxsZXJ5OiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnaW1hZ2UnIC8vIHRoaXMgaXMgYSBkZWZhdWx0IHR5cGVcbiAgfSk7XG4gICQoJy5maWdodC1tb2RhbCcpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgcmVtb3ZhbERlbGF5OiA3MDAsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyIHNtXCI+PGltZyBzcmM9XCJhc3NldHMvcmVzb3VyY2VzL2hhbmRzLmdpZlwiIGFsdD1cImpsYXg4NiBoYW5kc1wiLz48cD5TdHVkZW50IG9mIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQmVpU2hhb2xpbk1laUh1YUluc3RpdHV0ZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5CZWkgU2hhb2xpbiBNZWkgSHVhIEluc3RpdHV0ZTwvYT48L3A+PC9kaXY+JyksXG4gICAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdpbWFnZScgLy8gdGhpcyBpcyBhIGRlZmF1bHQgdHlwZVxuICB9KTtcbiAgJCgnLmNhdC1tb2RhbCcpLm1hZ25pZmljUG9wdXAoe1xuICAgIHJlbW92YWxEZWxheTogNzAwLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lciBzbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvZmlvbmEuanBnXCIgYWx0PVwiamxheDg2IGhhbmRzXCIvPjxwPkZpb25hPC9wPjwvZGl2PicpLFxuICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgfVxuICAgIF0sXG4gICAgZ2FsbGVyeToge1xuICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgIH0sXG4gICAgdHlwZTogJ2ltYWdlJyAvLyB0aGlzIGlzIGEgZGVmYXVsdCB0eXBlXG59KTtcbn1cblxuJCgnLmFsZXJ0JykubWFnbmlmaWNQb3B1cCh7XG4gIHJlbW92YWxEZWxheTogNzAwLFxuICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gIGZpeGVkQmdQb3M6IHRydWUsXG4gIHNob3dDbG9zZUJ0bjogdHJ1ZSxcbiAgY2xvc2VPbkJnQ2xpY2s6IHRydWUsXG4gIGVuYWJsZUVzY2FwZUtleTogdHJ1ZSxcbiAgaXRlbXM6IFtcbiAgICB7XG4gICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJhbGVydC1jb250YWluZXJcIj48aDI+SG9sZCBVcCE8L2gyPjxwPllvdSBuZWVkIGEgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIHRvIHZpc2l0IHRoaXMgcGFnZS4gV291bGQgeW91IGxpa2UgdG8gcHJvY2VlZD88L3A+PGEgaHJlZj1cImh0dHBzOi8vamxheDg2LnByb1wiIGNsYXNzPVwiYnV0dG9uXCI+WWVzPC9hPiA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWZwLWNsb3NlIGJ1dHRvblwiPk5vPC9hPjwvZGl2PicpLFxuICAgICAgdHlwZTogJ2lubGluZSdcbiAgICB9XG4gIF1cbn0pO1xuIiwiQU9TLmluaXQoKTtcbiIsImZ1bmN0aW9uIGRldGVjdFNjcm9sbCgpIHtcblx0dmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0aWYoc2Nyb2xsVG9wID49IDEwMDApIHtcblx0XHQkKCcuaW50cm8nKS5hZGRDbGFzcygnaGlkZScpO1xuXHRcdCQoJy5mb290ZXInKS5hZGRDbGFzcygnc2hvdycpO1xuXHR9IGVsc2Uge1xuXHRcdCQoJy5pbnRybycpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG5cdFx0JCgnLmZvb3RlcicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdH1cbn1cbmlmKCQoJ2JvZHkubm8tdG91Y2gnKS5sZW5ndGgpIHtcblxuXHRmdW5jdGlvbiBwYXJhbGxheCgpIHtcblx0XHQkKCcuZm9vdGVyJykuYWRkQ2xhc3MoJ2hvbWUnKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGUoZGV0ZWN0U2Nyb2xsLCAyNSkpO1xuXG5cdFx0Y29uc3Qgc2t5Q2hhbmdlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fc2t5LS1kYXJrJyksXG5cdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHR0bzogJzE4MHB4Jyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLXNreSc6IHtcblx0XHRcdFx0XHRmcm9tOiAuMDEsXG5cdFx0XHRcdFx0dG86IC45OVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0c2t5Q2hhbmdlLnN0YXJ0KCk7XG5cblx0XHRjb25zdCBncm91bmRNb3ZlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fZm9yZWdyb3VuZCcpLFxuXHRcdFx0ZnJvbTogJzAnLFxuXHRcdFx0dG86ICc1MDBweCcsXG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHQnLS1mZyc6IHtcblx0XHRcdFx0XHRmcm9tOiAnMHB4Jyxcblx0XHRcdFx0XHR0bzogJy0yMDBweCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGdyb3VuZE1vdmUuc3RhcnQoKTtcblxuXHRcdGNvbnN0IGZvcmVncm91bmRNb3ZlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlZ3JvdW5kJyksXG5cdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHR0bzogJzUwMHB4Jyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLXR5Jzoge1xuXHRcdFx0XHRcdGZyb206ICcwcHgnLFxuXHRcdFx0XHRcdHRvOiAnLTIwMHB4J1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Zm9yZWdyb3VuZE1vdmUuc3RhcnQoKTtcblxuXHRcdGNvbnN0IGZvb3RlclJpc2UgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhc3QtcHJvamVjdCcpLFxuXHRcdFx0ZnJvbTogJ21pZGRsZS10b3AnLFxuXHRcdFx0dG86ICdib3R0b20tdG9wJyxcblx0XHRcdGRpcmVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19zdW4tLWZvb3RlcicpLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0Jy0tcmlzZSc6IHtcblx0XHRcdFx0XHRmcm9tOiAnNDAwcHgnLFxuXHRcdFx0XHRcdHRvOiAnMCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGZvb3RlclJpc2Uuc3RhcnQoKTtcblxuXHRcdC8vRml4IEZvb3RlciBmb3IgUGFyYWxsYXhcblx0XHRmdW5jdGlvbiBmaXhlZEVsZW1lbnRzKCkge1xuXHRcdCAgaWYoJCgnLmZvcmVncm91bmQnKS5sZW5ndGgpIHtcblx0XHQgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHQgICAgdmFyIHNjcmVlblRvcCA9ICQoJy5mb3JlZ3JvdW5kJykub2Zmc2V0KCkudG9wIC0gMzAwO1xuXHRcdCAgICB2YXIgZm9vdGVyVG9wID0gJCgnLmdsb2JhbC1mb290ZXInKS5vZmZzZXQoKS50b3AgLSAzMDA7XG5cdFx0ICB9XG5cdFx0fVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aHJvdHRsZShmaXhlZEVsZW1lbnRzLCAyNSkpO1xuXG5cdFx0dmFyIHJlc2l6ZVRpbWVyO1xuXHRcdCQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbihlKSB7XG5cdFx0ICBjbGVhclRpbWVvdXQocmVzaXplVGltZXIpO1xuXHRcdCAgcmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdCAgICBmaXhlZEVsZW1lbnRzKCk7XG5cdFx0ICB9LCAyNTApO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKFwicmVzaXplXCIpO1xuXHR9XG5cblx0aWYoJCgnLmZvcmVncm91bmQnKS5sZW5ndGgpIHtcblx0XHRwYXJhbGxheCgpO1xuXHR9XG5cblx0aWYoJCgnLmdyaWQnKS5sZW5ndGgpIHtcblx0XHRmdW5jdGlvbiBtb3ZlQmcoKSB7XG5cblx0XHRcdGNvbnN0IGJnMSA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyksXG5cdFx0XHRcdGRpcmVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfX2JnMScpLFxuXHRcdFx0XHRmcm9tOiAndG9wLXRvcCcsXG5cdFx0XHRcdHRvOiAnYm90dG9tLXRvcCcsXG5cdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0Jy0tYmcxJzoge1xuXHRcdFx0XHRcdFx0ZnJvbTogJzEwMHB4Jyxcblx0XHRcdFx0XHRcdHRvOiAnLTYwMDBweCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0YmcxLnN0YXJ0KCk7XG5cblx0XHRcdGNvbnN0IGJnMiA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyksXG5cdFx0XHRcdGRpcmVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfX2JnMicpLFxuXHRcdFx0XHRmcm9tOiAndG9wLXRvcCcsXG5cdFx0XHRcdHRvOiAnYm90dG9tLXRvcCcsXG5cdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0Jy0tYmcyJzoge1xuXHRcdFx0XHRcdFx0ZnJvbTogJzI4MHB4Jyxcblx0XHRcdFx0XHRcdHRvOiAnLTkwMHB4J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRiZzIuc3RhcnQoKTtcblx0XHR9XG5cdFx0bW92ZUJnKCk7XG5cdH1cbn1cblxuLy9UaHJvdHRsaW5nIEZ1bmN0aW9uXG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgd2FpdCkge1xuICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoKHRpbWUgKyB3YWl0IC0gRGF0ZS5ub3coKSkgPCAwKSB7XG4gICAgICBmbigpO1xuICAgICAgdGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuICB9XG59XG4iLCIvL1Ntb290aCBTY3JvbGxpbmdcbiQoJ2EuYW5jaG9yW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxufSk7XG4iLCJ9KShqUXVlcnkpO1xuIl19
