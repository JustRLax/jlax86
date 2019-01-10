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
		$("body").addClass("no-touch");
	}
	else{
		$("body").addClass("touch");
	}

const cl = new cloudinary.Cloudinary({cloud_name: "justinlaxamana", secure: true});
const cloudinary_url = "https://res.cloudinary.com/justinlaxamana/";
const cloudinary_fetch_url = cloudinary_url + "/image/fetch/";

(function($){

if($('.list-dropdown').length) {
  $('.list-dropdown .title').on('click', function() {
      $(this).closest('.list-dropdown').toggleClass('open');
  });
  $('.list-dropdown a').on('click', function(e) {
      var text = $(this).text();
      $('.list-dropdown li').removeClass('active');
      $(this).closest('li').addClass('active');
      $(this).closest('.list-dropdown').removeClass('open');
      $(this).closest('.list-dropdown').find('.title').text(text);
  });
}

//scene
$('.scene__items__cat').on("click", function(e){
  $(this).toggleClass('meow');
  e.preventDefault();
});


$('.with-dropdown').on("click", function(e){
  $(this).toggleClass('active');
  $(this).next('.dropdown').toggleClass('active');
  e.preventDefault();
});

$('.dropdown a').on("click", function(){
  $('.dropdown').removeClass('active');
});


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
//Fixed Scroll
function fixedElements() {
  if($('.foreground').length) {
    $('.main-header').addClass('hidden');
    var scrollTop = $(window).scrollTop();
    var screenTop = $('.foreground').offset().top - 300;
    var footerTop = $('.global-footer').offset().top - 300;

    if(scrollTop >= screenTop) {
      $('.main-header').addClass('active');
    }
    else {
      $('.main-header').removeClass('active');
    }
    if(scrollTop >= footerTop) {
      $('.main-header').removeClass('active');
    }
  }
  if($('.waypoint').length) {
    if($('.waypoint.aos-animate').length) {
      $('.main-header').addClass('hidden');
    } else {
      $('.main-header').removeClass('hidden');
    }
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

$('.touch .grid-section__item .image').on("click", function(e){
  $(this).toggleClass('active');
  e.preventDefault();
});

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
if($('.no-touch .intro').length) {
	$('.footer').addClass('home');
	window.addEventListener('scroll', throttle(detectScroll, 25));
}


if($('body.no-touch').length) {

	function parallax() {
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

		const blockShow = basicScroll.create({
			elem: document.querySelector('.projects__project--fixed'),
			from: 'top-bottom',
			to: 'middle-bottom',
			props: {
				'--bo': {
					from: 0,
					to: 1
				},
				'--bt': {
					from: '-200px',
					to: '0px'
				}
			}
		});
		blockShow.start();

		const ldShow = basicScroll.create({
			elem: document.querySelector('.projects__project--dark'),
			from: 'top-bottom',
			to: 'middle-bottom',
			props: {
				'--lo': {
					from: 0,
					to: .12
				},
				'--lt': {
					from: '200px',
					to: '0px'
				}
			}
		});
		ldShow.start();


		if ($('.footer').length) {
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
				$('.footer').addClass('home');
			}
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

//Keep Ratio Images
if($('.video-bg').length) {
  $('.video-bg').keepRatio({ ratio: 16/9, calculate: 'height' });
}

//Footer
// $('.scene__sun--footer').on("click", function(e){
//   $('.footer .form').addClass('active');
//   $(this).addClass('active');
//   $('#name').focus();
//   e.preventDefault();
// });
// $('.form').on("click", '.close', function(e){
//   $('.footer .form').removeClass('active');
//   $('.scene__sun--footer').removeClass('active');
//   e.preventDefault();
// });

AOS.init();

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjBfYnJvd3Nlci1kZXRlY3Rpb24uanMiLCIwX2Jyb3dzZXJzLXRvdWNoLmpzIiwiMF9jbG91ZGluYXJ5LmpzIiwiMF9zdGFydC5qcyIsIjFfbGlzdC1kcm9wZG93bi5qcyIsIjFfbWVudS5qcyIsIjJfbGlnaHRib3guanMiLCI0X3BhcmFsbGF4LmpzIiwiNV9rZWVwLXJhdGlvLmpzIiwiNl9mb290ZXIuanMiLCI3X2FuaW1hdGlvbnMuanMiLCI4X3Ntb290aHNjcm9sbC5qcyIsInpfZW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQSIsImZpbGUiOiJhcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlYWwgd2l0aCBXUCBqUXVlcnkgbm9Db25mbGljdFxuJCA9IGpRdWVyeTtcblxudmFyIEJyb3dzZXJEZXRlY3QgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLnNlYXJjaFN0cmluZyh0aGlzLmRhdGFCcm93c2VyKSB8fCBcIk90aGVyXCI7XG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IHRoaXMuc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IuYXBwVmVyc2lvbikgfHwgXCJVbmtub3duXCI7XG4gIH0sXG4gIHNlYXJjaFN0cmluZzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkYXRhU3RyaW5nID0gZGF0YVtpXS5zdHJpbmc7XG4gICAgICB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPSBkYXRhW2ldLnN1YlN0cmluZztcblxuICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZihkYXRhW2ldLnN1YlN0cmluZykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2ldLmlkZW50aXR5O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2VhcmNoVmVyc2lvbjogZnVuY3Rpb24gKGRhdGFTdHJpbmcpIHtcbiAgICB2YXIgaW5kZXggPSBkYXRhU3RyaW5nLmluZGV4T2YodGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJ2ID0gZGF0YVN0cmluZy5pbmRleE9mKFwicnY6XCIpO1xuICAgIGlmICh0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPT09IFwiVHJpZGVudFwiICYmIHJ2ICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcocnYgKyAzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGFTdHJpbmcuc3Vic3RyaW5nKGluZGV4ICsgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nLmxlbmd0aCArIDEpKTtcbiAgICB9XG4gIH0sXG5cbiAgZGF0YUJyb3dzZXI6IFtcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiRWRnZVwiLCBpZGVudGl0eTogXCJNUyBFZGdlXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJNU0lFXCIsIGlkZW50aXR5OiBcIkV4cGxvcmVyXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJUcmlkZW50XCIsIGlkZW50aXR5OiBcIkV4cGxvcmVyXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJGaXJlZm94XCIsIGlkZW50aXR5OiBcIkZpcmVmb3hcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk9wZXJhXCIsIGlkZW50aXR5OiBcIk9wZXJhXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJPUFJcIiwgaWRlbnRpdHk6IFwiT3BlcmFcIn0sXG5cbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiQ2hyb21lXCIsIGlkZW50aXR5OiBcIkNocm9tZVwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiU2FmYXJpXCIsIGlkZW50aXR5OiBcIlNhZmFyaVwifVxuICBdXG59O1xuXG5Ccm93c2VyRGV0ZWN0LmluaXQoKTtcbiQoXCJodG1sXCIpLmFkZENsYXNzKChCcm93c2VyRGV0ZWN0LmJyb3dzZXIpLnRvTG93ZXJDYXNlKCkpLmFkZENsYXNzKChCcm93c2VyRGV0ZWN0LmJyb3dzZXIpLnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIEJyb3dzZXJEZXRlY3QudmVyc2lvbik7XG4iLCIvKipcbiAqIGpRdWVyeS5icm93c2VyLm1vYmlsZSAoaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXIuY29tLylcbiAqXG4gKiBqUXVlcnkuYnJvd3Nlci5tb2JpbGUgd2lsbCBiZSB0cnVlIGlmIHRoZSBicm93c2VyIGlzIGEgbW9iaWxlIGRldmljZVxuICpcbiAqKi9cbihmdW5jdGlvbihhKXsoalF1ZXJ5LmJyb3dzZXI9alF1ZXJ5LmJyb3dzZXJ8fHt9KS5tb2JpbGU9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSl9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xuXG5pZiggL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApe1xuXHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwibm8tdG91Y2hcIik7XG5cdH1cblx0ZWxzZXtcblx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcInRvdWNoXCIpO1xuXHR9XG4iLCJjb25zdCBjbCA9IG5ldyBjbG91ZGluYXJ5LkNsb3VkaW5hcnkoe2Nsb3VkX25hbWU6IFwianVzdGlubGF4YW1hbmFcIiwgc2VjdXJlOiB0cnVlfSk7XG5jb25zdCBjbG91ZGluYXJ5X3VybCA9IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvXCI7XG5jb25zdCBjbG91ZGluYXJ5X2ZldGNoX3VybCA9IGNsb3VkaW5hcnlfdXJsICsgXCIvaW1hZ2UvZmV0Y2gvXCI7XG4iLCIoZnVuY3Rpb24oJCl7XG4iLCJpZigkKCcubGlzdC1kcm9wZG93bicpLmxlbmd0aCkge1xuICAkKCcubGlzdC1kcm9wZG93biAudGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmxpc3QtZHJvcGRvd24nKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICB9KTtcbiAgJCgnLmxpc3QtZHJvcGRvd24gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAkKCcubGlzdC1kcm9wZG93biBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5saXN0LWRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmxpc3QtZHJvcGRvd24nKS5maW5kKCcudGl0bGUnKS50ZXh0KHRleHQpO1xuICB9KTtcbn1cbiIsIi8vc2NlbmVcbiQoJy5zY2VuZV9faXRlbXNfX2NhdCcpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ21lb3cnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cblxuJCgnLndpdGgtZHJvcGRvd24nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgJCh0aGlzKS5uZXh0KCcuZHJvcGRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcuZHJvcGRvd24gYScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgJCgnLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xufSk7XG5cblxuLy9UaHJvdHRsaW5nIEZ1bmN0aW9uXG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgd2FpdCkge1xuICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoKHRpbWUgKyB3YWl0IC0gRGF0ZS5ub3coKSkgPCAwKSB7XG4gICAgICBmbigpO1xuICAgICAgdGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuICB9XG59XG4vL0ZpeGVkIFNjcm9sbFxuZnVuY3Rpb24gZml4ZWRFbGVtZW50cygpIHtcbiAgaWYoJCgnLmZvcmVncm91bmQnKS5sZW5ndGgpIHtcbiAgICAkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB2YXIgc2NyZWVuVG9wID0gJCgnLmZvcmVncm91bmQnKS5vZmZzZXQoKS50b3AgLSAzMDA7XG4gICAgdmFyIGZvb3RlclRvcCA9ICQoJy5nbG9iYWwtZm9vdGVyJykub2Zmc2V0KCkudG9wIC0gMzAwO1xuXG4gICAgaWYoc2Nyb2xsVG9wID49IHNjcmVlblRvcCkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgaWYoc2Nyb2xsVG9wID49IGZvb3RlclRvcCkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuICBpZigkKCcud2F5cG9pbnQnKS5sZW5ndGgpIHtcbiAgICBpZigkKCcud2F5cG9pbnQuYW9zLWFuaW1hdGUnKS5sZW5ndGgpIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlKGZpeGVkRWxlbWVudHMsIDI1KSk7XG52YXIgcmVzaXplVGltZXI7XG4kKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24oZSkge1xuICBjbGVhclRpbWVvdXQocmVzaXplVGltZXIpO1xuICByZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgZml4ZWRFbGVtZW50cygpO1xuICB9LCAyNTApO1xufSk7XG4kKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoXCJyZXNpemVcIik7XG4iLCIkKCcucGxheScpLm1hZ25pZmljUG9wdXAoe1xuICAgIHR5cGU6ICdpZnJhbWUnLFxuICBcdHByZWxvYWRlcjogZmFsc2UsXG4gICAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICAgIGZpeGVkQmdQb3M6IHRydWUsXG4gICAgc2hvd0Nsb3NlQnRuOiB0cnVlLFxuICAgIGNsb3NlT25CZ0NsaWNrOiB0cnVlLFxuICAgIGVuYWJsZUVzY2FwZUtleTogdHJ1ZSxcbiAgICByZW1vdmFsRGVsYXk6IDcwMFxufSk7XG5cbiQoJy5vcGVuLW1vZGFsJykubWFnbmlmaWNQb3B1cCh7XG5cdHR5cGU6ICdpbmxpbmUnLFxuICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gIGZpeGVkQmdQb3M6IHRydWUsXG4gIHNob3dDbG9zZUJ0bjogdHJ1ZSxcbiAgY2xvc2VPbkJnQ2xpY2s6IHRydWUsXG4gIHJlbW92YWxEZWxheTogNTAwLFxuICBlbmFibGVFc2NhcGVLZXk6IHRydWVcbn0pO1xuXG4kKCcuYmlrZXMtbW9kYWwnKS5tYWduaWZpY1BvcHVwKHtcbiAgICByZW1vdmFsRGVsYXk6IDcwMCxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYmlrZS0xLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtMS5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEuanBnXCIgYWx0PVwiMjAwNiBSb3NzaSBZYW1haGEgUjZcIj48L3BpY3R1cmU+PHA+VGhpcyAyMDA2IFlhbWFoYSBZWkYtUjYgd2FzIHRoZSBsYXN0IGJpa2UgdGhhdCBJIG93bmVkLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTIuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtMi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYmlrZS0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0yLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMi5qcGdcIiBhbHQ9XCIyMDA2IFJvc3NpIFlhbWFoYSBSNlwiPjwvcGljdHVyZT48cD5UaGlzIGJpa2Ugd2FzIGVxdWlwcGVkIHdpdGggYW4gaW50ZWdyYXRlZCB0YWlsIGxpZ2h0LCBEeW5vamV0IFBvd2VyIENvbW1hbmRlciBhbmQgcXVpY2tzaGlmdGVyIHNldHVwIGZvciBHUCBzaGlmdGluZy48L3A+PC9kaXY+JyksXG4gICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTMuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYmlrZS0zLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtMy5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTMuanBnXCIgYWx0PVwiMjAwNiBSb3NzaSBZYW1haGEgUjZcIj48L3BpY3R1cmU+PHA+SSBzdHlsZWQgdGhpcyBiaWtlIHRvIG1hdGNoIHRoZSBsaXZlcnkgVmFsZW50aW5vIFJvc3NpIHVzZWQgYXQgdGhlIDIwMDUgTGFndW5hIFNlY2EgR1AuPC9wPjwvZGl2PicpLFxuICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS00LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtNC5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTQuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS00LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTQuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS00LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTQuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTQuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS00LmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPlRoaXMgYmlrZSBhbHNvIGZlYXR1cmVkIENSRyBzaG9ydHkgbGV2ZXJzLCBWb3J0ZXggZnJhbWUgc2xpZGVycywgYW5kIGEgZnVsbCBzeXN0ZW0gQWtyYXBvdmljIGV4aGF1c3QuPC9wPjwvZGl2PicpLFxuICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS01LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtNS5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTUuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS01LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTUuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS01LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTUuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTUuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS01LmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPlJlYXIgdmlldyBtaXJyb3IgZGVsZXRlIHdpdGggYmFyLWVuZCBtaXJyb3JzIHRvIG1ha2UgaXQgbG9vayBsaWtlIGEgdHJhY2sgYmlrZS48L3A+PC9kaXY+JyksXG4gICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTYuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYmlrZS02LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTYuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTYuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtNi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNi5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTYuanBnXCIgYWx0PVwiMTk3MyBZYW1haGEgVFgtNjUwIENhZmUgUmFjZXJcIj48L3BpY3R1cmU+PHA+VGhpcyB3YXMgbXkgdmVyeSBmaXJzdCBiaWtlLiBBIDE5NzMgWWFtYWhhIFRYIDY1MCBjYWZlIHJhY2VyPC9wPjwvZGl2PicpLFxuICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS03LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtNy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTcuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS03LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTcuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS03LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTcuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTcuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS03LmpwZ1wiIGFsdD1cIjE5NzMgWWFtYWhhIFRYLTY1MCBDYWZlIFJhY2VyXCI+PC9waWN0dXJlPjxwPlRoaXMgYmlrZSB3ZW50IHRocm91Z2ggdmFyaW91cyBzdGFnZXMgb2YgY3VzdG9taXphdGlvbiB3aXRoIHRoZSBoZWxwIG9mIG15IHBvcHMuPC9wPjwvZGl2PicpLFxuICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0xMC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTEwLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMTAuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0xMC5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0xMC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEwLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTEwLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0xMC5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEwLmpwZ1wiIGFsdD1cIjE5NzMgWWFtYWhhIFRYLTY1MCBDYWZlIFJhY2VyXCI+PC9waWN0dXJlPjxwPlRoaXMgaXMgaG93IHRoZSBiaWtlIGVuZGVkIHVwIGxvb2tpbmcgYmVmb3JlIEkgc29sZCBpdC48L3A+PC9kaXY+JyksXG4gICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICB9LFxuICAgIF0sXG4gICAgZ2FsbGVyeToge1xuICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgIH0sXG4gICAgdHlwZTogJ2ltYWdlJyAvLyB0aGlzIGlzIGEgZGVmYXVsdCB0eXBlXG59KTtcbiQoJy5jYXJzLW1vZGFsJykubWFnbmlmaWNQb3B1cCh7XG4gICAgcmVtb3ZhbERlbGF5OiA3MDAsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYWU4Ni0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2FlODYtMS5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYWU4Ni0xLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9hZTg2LTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYWU4Ni0xLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9hZTg2LTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9hZTg2LTEuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYWU4Ni0xLmpwZ1wiIGFsdD1cImpsYXg4NiBhZTg2IHNreWxpbmUgcng3XCI+PC9waWN0dXJlPjxwPk15IEFFODYgaGFuZ2luZyB3aXRoIG90aGVyIGNvb2wgSmFwYW5lc2UgY2Fycy4gUGhvdG8gYnkgPGEgaHJlZj1cImh0dHA6Ly9zcXVhcmVkcGhvdG9ibG9nLnR1bWJsci5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3F1YXJlZDwvYT48L3A+PC9kaXY+JyksXG4gICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYWU4Ni0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTIuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTIuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2FlODYtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMi5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTIuanBnXCIgYWx0PVwiamxheDg2IGFlODYgZjIwYyBkcmlmdFwiPjwvcGljdHVyZT48cD5Gcm9tIHRoZSBmaXJzdCBkcmlmdCBkYXk8L3A+PC9kaXY+JyksXG4gICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTMuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYWU4Ni0zLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2FlODYtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMy5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTMuanBnXCIgYWx0PVwiamxheDg2IGFlODYgZjIwYyBkcmlmdFwiPjwvcGljdHVyZT48cD5GMjBjIFBvd2VyZWQgQUU4NjwvcD48L2Rpdj4nKSxcbiAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgIH1cbiAgICBdLFxuICAgIGdhbGxlcnk6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICB9LFxuICAgIHR5cGU6ICdpbWFnZScgLy8gdGhpcyBpcyBhIGRlZmF1bHQgdHlwZVxufSk7XG5cbiQoJy5maWdodC1tb2RhbCcpLm1hZ25pZmljUG9wdXAoe1xuICAgIHJlbW92YWxEZWxheTogNzAwLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lciBzbVwiPjxpbWcgc3JjPVwiYXNzZXRzL3Jlc291cmNlcy9oYW5kcy5naWZcIiBhbHQ9XCJqbGF4ODYgaGFuZHNcIi8+PHA+U3R1ZGVudCBvZiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0JlaVNoYW9saW5NZWlIdWFJbnN0aXR1dGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QmVpIFNoYW9saW4gTWVpIEh1YSBJbnN0aXR1dGU8L2E+PC9wPjwvZGl2PicpLFxuICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgfVxuICAgIF0sXG4gICAgZ2FsbGVyeToge1xuICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgIH0sXG4gICAgdHlwZTogJ2ltYWdlJyAvLyB0aGlzIGlzIGEgZGVmYXVsdCB0eXBlXG59KTtcblxuJCgnLnRvdWNoIC5ncmlkLXNlY3Rpb25fX2l0ZW0gLmltYWdlJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuIiwiZnVuY3Rpb24gZGV0ZWN0U2Nyb2xsKCkge1xuXHR2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRpZihzY3JvbGxUb3AgPj0gMTAwMCkge1xuXHRcdCQoJy5pbnRybycpLmFkZENsYXNzKCdoaWRlJyk7XG5cdFx0JCgnLmZvb3RlcicpLmFkZENsYXNzKCdzaG93Jyk7XG5cdH0gZWxzZSB7XG5cdFx0JCgnLmludHJvJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcblx0XHQkKCcuZm9vdGVyJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblx0fVxufVxuaWYoJCgnLm5vLXRvdWNoIC5pbnRybycpLmxlbmd0aCkge1xuXHQkKCcuZm9vdGVyJykuYWRkQ2xhc3MoJ2hvbWUnKTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlKGRldGVjdFNjcm9sbCwgMjUpKTtcbn1cblxuXG5pZigkKCdib2R5Lm5vLXRvdWNoJykubGVuZ3RoKSB7XG5cblx0ZnVuY3Rpb24gcGFyYWxsYXgoKSB7XG5cdFx0Y29uc3Qgc2t5Q2hhbmdlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fc2t5LS1kYXJrJyksXG5cdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHR0bzogJzE4MHB4Jyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLXNreSc6IHtcblx0XHRcdFx0XHRmcm9tOiAuMDEsXG5cdFx0XHRcdFx0dG86IC45OVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0c2t5Q2hhbmdlLnN0YXJ0KCk7XG5cblx0XHRjb25zdCBncm91bmRNb3ZlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fZm9yZWdyb3VuZCcpLFxuXHRcdFx0ZnJvbTogJzAnLFxuXHRcdFx0dG86ICc1MDBweCcsXG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHQnLS1mZyc6IHtcblx0XHRcdFx0XHRmcm9tOiAnMHB4Jyxcblx0XHRcdFx0XHR0bzogJy0yMDBweCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGdyb3VuZE1vdmUuc3RhcnQoKTtcblxuXHRcdGNvbnN0IGZvcmVncm91bmRNb3ZlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlZ3JvdW5kJyksXG5cdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHR0bzogJzUwMHB4Jyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLXR5Jzoge1xuXHRcdFx0XHRcdGZyb206ICcwcHgnLFxuXHRcdFx0XHRcdHRvOiAnLTIwMHB4J1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Zm9yZWdyb3VuZE1vdmUuc3RhcnQoKTtcblxuXHRcdGNvbnN0IGJsb2NrU2hvdyA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX3Byb2plY3QtLWZpeGVkJyksXG5cdFx0XHRmcm9tOiAndG9wLWJvdHRvbScsXG5cdFx0XHR0bzogJ21pZGRsZS1ib3R0b20nLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0Jy0tYm8nOiB7XG5cdFx0XHRcdFx0ZnJvbTogMCxcblx0XHRcdFx0XHR0bzogMVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnLS1idCc6IHtcblx0XHRcdFx0XHRmcm9tOiAnLTIwMHB4Jyxcblx0XHRcdFx0XHR0bzogJzBweCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGJsb2NrU2hvdy5zdGFydCgpO1xuXG5cdFx0Y29uc3QgbGRTaG93ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fcHJvamVjdC0tZGFyaycpLFxuXHRcdFx0ZnJvbTogJ3RvcC1ib3R0b20nLFxuXHRcdFx0dG86ICdtaWRkbGUtYm90dG9tJyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLWxvJzoge1xuXHRcdFx0XHRcdGZyb206IDAsXG5cdFx0XHRcdFx0dG86IC4xMlxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnLS1sdCc6IHtcblx0XHRcdFx0XHRmcm9tOiAnMjAwcHgnLFxuXHRcdFx0XHRcdHRvOiAnMHB4J1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bGRTaG93LnN0YXJ0KCk7XG5cblxuXHRcdGlmICgkKCcuZm9vdGVyJykubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IGZvb3RlclJpc2UgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LXByb2plY3QnKSxcblx0XHRcdFx0XHRmcm9tOiAnbWlkZGxlLXRvcCcsXG5cdFx0XHRcdFx0dG86ICdib3R0b20tdG9wJyxcblx0XHRcdFx0XHRkaXJlY3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fc3VuLS1mb290ZXInKSxcblx0XHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdFx0Jy0tcmlzZSc6IHtcblx0XHRcdFx0XHRcdFx0ZnJvbTogJzQwMHB4Jyxcblx0XHRcdFx0XHRcdFx0dG86ICcwJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGZvb3RlclJpc2Uuc3RhcnQoKTtcblx0XHRcdFx0JCgnLmZvb3RlcicpLmFkZENsYXNzKCdob21lJyk7XG5cdFx0XHR9XG5cdH1cblxuXG5cdGlmKCQoJy5mb3JlZ3JvdW5kJykubGVuZ3RoKSB7XG5cdFx0cGFyYWxsYXgoKTtcblx0fVxuXG5cdGlmKCQoJy5ncmlkJykubGVuZ3RoKSB7XG5cdFx0ZnVuY3Rpb24gbW92ZUJnKCkge1xuXG5cdFx0XHRjb25zdCBiZzEgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpLFxuXHRcdFx0XHRkaXJlY3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkX19iZzEnKSxcblx0XHRcdFx0ZnJvbTogJ3RvcC10b3AnLFxuXHRcdFx0XHR0bzogJ2JvdHRvbS10b3AnLFxuXHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdCctLWJnMSc6IHtcblx0XHRcdFx0XHRcdGZyb206ICcxMDBweCcsXG5cdFx0XHRcdFx0XHR0bzogJy02MDAwcHgnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGJnMS5zdGFydCgpO1xuXG5cdFx0XHRjb25zdCBiZzIgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpLFxuXHRcdFx0XHRkaXJlY3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkX19iZzInKSxcblx0XHRcdFx0ZnJvbTogJ3RvcC10b3AnLFxuXHRcdFx0XHR0bzogJ2JvdHRvbS10b3AnLFxuXHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdCctLWJnMic6IHtcblx0XHRcdFx0XHRcdGZyb206ICcyODBweCcsXG5cdFx0XHRcdFx0XHR0bzogJy05MDBweCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0YmcyLnN0YXJ0KCk7XG5cdFx0fVxuXHRcdG1vdmVCZygpO1xuXHR9XG59XG4iLCIvL0tlZXAgUmF0aW8gSW1hZ2VzXG5pZigkKCcudmlkZW8tYmcnKS5sZW5ndGgpIHtcbiAgJCgnLnZpZGVvLWJnJykua2VlcFJhdGlvKHsgcmF0aW86IDE2LzksIGNhbGN1bGF0ZTogJ2hlaWdodCcgfSk7XG59XG4iLCIvL0Zvb3RlclxuLy8gJCgnLnNjZW5lX19zdW4tLWZvb3RlcicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4vLyAgICQoJy5mb290ZXIgLmZvcm0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4vLyAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuLy8gICAkKCcjbmFtZScpLmZvY3VzKCk7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIH0pO1xuLy8gJCgnLmZvcm0nKS5vbihcImNsaWNrXCIsICcuY2xvc2UnLCBmdW5jdGlvbihlKXtcbi8vICAgJCgnLmZvb3RlciAuZm9ybScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbi8vICAgJCgnLnNjZW5lX19zdW4tLWZvb3RlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gfSk7XG4iLCJBT1MuaW5pdCgpO1xuIiwiLy9TbW9vdGggU2Nyb2xsaW5nXG4kKCdhLmFuY2hvcltocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcbmlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArJ10nKTtcbiAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbn0pO1xuIiwifSkoalF1ZXJ5KTtcbiJdfQ==
