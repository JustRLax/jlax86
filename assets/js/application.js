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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjBfYnJvd3Nlci1kZXRlY3Rpb24uanMiLCIwX2Jyb3dzZXJzLXRvdWNoLmpzIiwiMF9jbG91ZGluYXJ5LmpzIiwiMF9zdGFydC5qcyIsIjFfbGlzdC1kcm9wZG93bi5qcyIsIjFfbWVudS5qcyIsIjJfbGlnaHRib3guanMiLCI0X3BhcmFsbGF4LmpzIiwiNV9rZWVwLXJhdGlvLmpzIiwiNl9hbmltYXRpb25zLmpzIiwiN19zbW9vdGhzY3JvbGwuanMiLCJ6X2VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBIiwiZmlsZSI6ImFwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVhbCB3aXRoIFdQIGpRdWVyeSBub0NvbmZsaWN0XG4kID0galF1ZXJ5O1xuXG52YXIgQnJvd3NlckRldGVjdCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuc2VhcmNoU3RyaW5nKHRoaXMuZGF0YUJyb3dzZXIpIHx8IFwiT3RoZXJcIjtcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLnNlYXJjaFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgdGhpcy5zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci5hcHBWZXJzaW9uKSB8fCBcIlVua25vd25cIjtcbiAgfSxcbiAgc2VhcmNoU3RyaW5nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRhdGFTdHJpbmcgPSBkYXRhW2ldLnN0cmluZztcbiAgICAgIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyA9IGRhdGFbaV0uc3ViU3RyaW5nO1xuXG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKGRhdGFbaV0uc3ViU3RyaW5nKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZWFyY2hWZXJzaW9uOiBmdW5jdGlvbiAoZGF0YVN0cmluZykge1xuICAgIHZhciBpbmRleCA9IGRhdGFTdHJpbmcuaW5kZXhPZih0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcnYgPSBkYXRhU3RyaW5nLmluZGV4T2YoXCJydjpcIik7XG4gICAgaWYgKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyA9PT0gXCJUcmlkZW50XCIgJiYgcnYgIT09IC0xKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhU3RyaW5nLnN1YnN0cmluZyhydiArIDMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcoaW5kZXggKyB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcubGVuZ3RoICsgMSkpO1xuICAgIH1cbiAgfSxcblxuICBkYXRhQnJvd3NlcjogW1xuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJFZGdlXCIsIGlkZW50aXR5OiBcIk1TIEVkZ2VcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk1TSUVcIiwgaWRlbnRpdHk6IFwiRXhwbG9yZXJcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIlRyaWRlbnRcIiwgaWRlbnRpdHk6IFwiRXhwbG9yZXJcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIkZpcmVmb3hcIiwgaWRlbnRpdHk6IFwiRmlyZWZveFwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiT3BlcmFcIiwgaWRlbnRpdHk6IFwiT3BlcmFcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk9QUlwiLCBpZGVudGl0eTogXCJPcGVyYVwifSxcblxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJDaHJvbWVcIiwgaWRlbnRpdHk6IFwiQ2hyb21lXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJTYWZhcmlcIiwgaWRlbnRpdHk6IFwiU2FmYXJpXCJ9XG4gIF1cbn07XG5cbkJyb3dzZXJEZXRlY3QuaW5pdCgpO1xuJChcImh0bWxcIikuYWRkQ2xhc3MoKEJyb3dzZXJEZXRlY3QuYnJvd3NlcikudG9Mb3dlckNhc2UoKSkuYWRkQ2xhc3MoKEJyb3dzZXJEZXRlY3QuYnJvd3NlcikudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgQnJvd3NlckRldGVjdC52ZXJzaW9uKTtcbiIsIi8qKlxuICogalF1ZXJ5LmJyb3dzZXIubW9iaWxlIChodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3Nlci5jb20vKVxuICpcbiAqIGpRdWVyeS5icm93c2VyLm1vYmlsZSB3aWxsIGJlIHRydWUgaWYgdGhlIGJyb3dzZXIgaXMgYSBtb2JpbGUgZGV2aWNlXG4gKlxuICoqL1xuKGZ1bmN0aW9uKGEpeyhqUXVlcnkuYnJvd3Nlcj1qUXVlcnkuYnJvd3Nlcnx8e30pLm1vYmlsZT0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKX0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XG5cbmlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICl7XG5cdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCJ0b3VjaFwiKTtcblx0fVxuXHRlbHNle1xuXHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwibm8tdG91Y2hcIik7XG5cdH1cbiIsImNvbnN0IGNsID0gbmV3IGNsb3VkaW5hcnkuQ2xvdWRpbmFyeSh7Y2xvdWRfbmFtZTogXCJqdXN0aW5sYXhhbWFuYVwiLCBzZWN1cmU6IHRydWV9KTtcbmNvbnN0IGNsb3VkaW5hcnlfdXJsID0gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9cIjtcbmNvbnN0IGNsb3VkaW5hcnlfZmV0Y2hfdXJsID0gY2xvdWRpbmFyeV91cmwgKyBcIi9pbWFnZS9mZXRjaC9cIjtcbiIsIihmdW5jdGlvbigkKXtcbiIsImlmKCQoJy5saXN0LWRyb3Bkb3duJykubGVuZ3RoKSB7XG4gICQoJy5saXN0LWRyb3Bkb3duIC50aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubGlzdC1kcm9wZG93bicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gIH0pO1xuICAkKCcubGlzdC1kcm9wZG93biBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHRleHQgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICQoJy5saXN0LWRyb3Bkb3duIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmxpc3QtZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubGlzdC1kcm9wZG93bicpLmZpbmQoJy50aXRsZScpLnRleHQodGV4dCk7XG4gIH0pO1xufVxuIiwiLy9zY2VuZVxuJCgnLnNjZW5lX19pdGVtc19fY2F0Jykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnbWVvdycpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuXG4kKCcud2l0aC1kcm9wZG93bicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKHRoaXMpLm5leHQoJy5kcm9wZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJy5kcm9wZG93biBhJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAkKCcuZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG59KTtcblxuXG4vL1Rocm90dGxpbmcgRnVuY3Rpb25cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB3YWl0KSB7XG4gIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICgodGltZSArIHdhaXQgLSBEYXRlLm5vdygpKSA8IDApIHtcbiAgICAgIGZuKCk7XG4gICAgICB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gIH1cbn1cbi8vRml4ZWQgU2Nyb2xsXG5mdW5jdGlvbiBmaXhlZEVsZW1lbnRzKCkge1xuICBpZigkKCcuZm9yZWdyb3VuZCcpLmxlbmd0aCkge1xuICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIHZhciBzY3JlZW5Ub3AgPSAkKCcuZm9yZWdyb3VuZCcpLm9mZnNldCgpLnRvcCAtIDMwMDtcbiAgICB2YXIgZm9vdGVyVG9wID0gJCgnLmdsb2JhbC1mb290ZXInKS5vZmZzZXQoKS50b3AgLSAzMDA7XG5cbiAgICBpZihzY3JvbGxUb3AgPj0gc2NyZWVuVG9wKSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBpZihzY3JvbGxUb3AgPj0gZm9vdGVyVG9wKSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9XG4gIGlmKCQoJy53YXlwb2ludCcpLmxlbmd0aCkge1xuICAgIGlmKCQoJy53YXlwb2ludC5hb3MtYW5pbWF0ZScpLmxlbmd0aCkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgfVxuICB9XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGUoZml4ZWRFbGVtZW50cywgMjUpKTtcbnZhciByZXNpemVUaW1lcjtcbiQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbihlKSB7XG4gIGNsZWFyVGltZW91dChyZXNpemVUaW1lcik7XG4gIHJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBmaXhlZEVsZW1lbnRzKCk7XG4gIH0sIDI1MCk7XG59KTtcbiQod2luZG93KS50cmlnZ2VySGFuZGxlcihcInJlc2l6ZVwiKTtcbiIsIiQoJy5wbGF5JykubWFnbmlmaWNQb3B1cCh7XG4gICAgdHlwZTogJ2lmcmFtZScsXG4gIFx0cHJlbG9hZGVyOiBmYWxzZSxcbiAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gICAgZml4ZWRCZ1BvczogdHJ1ZSxcbiAgICBzaG93Q2xvc2VCdG46IHRydWUsXG4gICAgY2xvc2VPbkJnQ2xpY2s6IHRydWUsXG4gICAgZW5hYmxlRXNjYXBlS2V5OiB0cnVlLFxuICAgIHJlbW92YWxEZWxheTogNzAwXG59KTtcblxuJCgnLm9wZW4tbW9kYWwnKS5tYWduaWZpY1BvcHVwKHtcblx0dHlwZTogJ2lubGluZScsXG4gIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgZml4ZWRCZ1BvczogdHJ1ZSxcbiAgc2hvd0Nsb3NlQnRuOiB0cnVlLFxuICBjbG9zZU9uQmdDbGljazogdHJ1ZSxcbiAgcmVtb3ZhbERlbGF5OiA1MDAsXG4gIGVuYWJsZUVzY2FwZUtleTogdHJ1ZVxufSk7XG5cbiQoJy5iaWtlcy1tb2RhbCcpLm1hZ25pZmljUG9wdXAoe1xuICAgIHJlbW92YWxEZWxheTogNzAwLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtMS5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMS5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYmlrZS0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0xLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMS5qcGdcIiBhbHQ9XCIyMDA2IFJvc3NpIFlhbWFoYSBSNlwiPjwvcGljdHVyZT48cD5UaGlzIDIwMDYgWWFtYWhhIFlaRi1SNiB3YXMgdGhlIGxhc3QgYmlrZSB0aGF0IEkgb3duZWQuPC9wPjwvZGl2PicpLFxuICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtMi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTIuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0yLmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPlRoaXMgYmlrZSB3YXMgZXF1aXBwZWQgd2l0aCBhbiBpbnRlZ3JhdGVkIHRhaWwgbGlnaHQsIER5bm9qZXQgUG93ZXIgQ29tbWFuZGVyIGFuZCBxdWlja3NoaWZ0ZXIgc2V0dXAgZm9yIEdQIHNoaWZ0aW5nLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYmlrZS0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0zLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMy5qcGdcIiBhbHQ9XCIyMDA2IFJvc3NpIFlhbWFoYSBSNlwiPjwvcGljdHVyZT48cD5JIHN0eWxlZCB0aGlzIGJpa2UgdG8gbWF0Y2ggdGhlIGxpdmVyeSBWYWxlbnRpbm8gUm9zc2kgdXNlZCBhdCB0aGUgMjAwNSBMYWd1bmEgU2VjYSBHUC48L3A+PC9kaXY+JyksXG4gICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTQuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYmlrZS00LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTQuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTQuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtNC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNC5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTQuanBnXCIgYWx0PVwiMjAwNiBSb3NzaSBZYW1haGEgUjZcIj48L3BpY3R1cmU+PHA+VGhpcyBiaWtlIGFsc28gZmVhdHVyZWQgQ1JHIHNob3J0eSBsZXZlcnMsIFZvcnRleCBmcmFtZSBzbGlkZXJzLCBhbmQgYSBmdWxsIHN5c3RlbSBBa3JhcG92aWMgZXhoYXVzdC48L3A+PC9kaXY+JyksXG4gICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTUuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYmlrZS01LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTUuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTUuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtNS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNS5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTUuanBnXCIgYWx0PVwiMjAwNiBSb3NzaSBZYW1haGEgUjZcIj48L3BpY3R1cmU+PHA+UmVhciB2aWV3IG1pcnJvciBkZWxldGUgd2l0aCBiYXItZW5kIG1pcnJvcnMgdG8gbWFrZSBpdCBsb29rIGxpa2UgYSB0cmFjayBiaWtlLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtNi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTYuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS02LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtNi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS02LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYmlrZS02LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS02LmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNi5qcGdcIiBhbHQ9XCIxOTczIFlhbWFoYSBUWC02NTAgQ2FmZSBSYWNlclwiPjwvcGljdHVyZT48cD5UaGlzIHdhcyBteSB2ZXJ5IGZpcnN0IGJpa2UuIEEgMTk3MyBZYW1haGEgVFggNjUwIGNhZmUgcmFjZXI8L3A+PC9kaXY+JyksXG4gICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTcuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYmlrZS03LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTcuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTcuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtNy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNy5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTcuanBnXCIgYWx0PVwiMTk3MyBZYW1haGEgVFgtNjUwIENhZmUgUmFjZXJcIj48L3BpY3R1cmU+PHA+VGhpcyBiaWtlIHdlbnQgdGhyb3VnaCB2YXJpb3VzIHN0YWdlcyBvZiBjdXN0b21pemF0aW9uIHdpdGggdGhlIGhlbHAgb2YgbXkgcG9wcy48L3A+PC9kaXY+JyksXG4gICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEwLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtMTAuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0xMC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEwLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTEwLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMTAuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtMTAuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTEwLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMTAuanBnXCIgYWx0PVwiMTk3MyBZYW1haGEgVFgtNjUwIENhZmUgUmFjZXJcIj48L3BpY3R1cmU+PHA+VGhpcyBpcyBob3cgdGhlIGJpa2UgZW5kZWQgdXAgbG9va2luZyBiZWZvcmUgSSBzb2xkIGl0LjwvcD48L2Rpdj4nKSxcbiAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgIH0sXG4gICAgXSxcbiAgICBnYWxsZXJ5OiB7XG4gICAgICBlbmFibGVkOiB0cnVlXG4gICAgfSxcbiAgICB0eXBlOiAnaW1hZ2UnIC8vIHRoaXMgaXMgYSBkZWZhdWx0IHR5cGVcbn0pO1xuJCgnLmNhcnMtbW9kYWwnKS5tYWduaWZpY1BvcHVwKHtcbiAgICByZW1vdmFsRGVsYXk6IDcwMCxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYWU4Ni0xLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2FlODYtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMS5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTEuanBnXCIgYWx0PVwiamxheDg2IGFlODYgc2t5bGluZSByeDdcIj48L3BpY3R1cmU+PHA+TXkgQUU4NiBoYW5naW5nIHdpdGggb3RoZXIgY29vbCBKYXBhbmVzZSBjYXJzLiBQaG90byBieSA8YSBocmVmPVwiaHR0cDovL3NxdWFyZWRwaG90b2Jsb2cudHVtYmxyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TcXVhcmVkPC9hPjwvcD48L2Rpdj4nKSxcbiAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9hZTg2LTIuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYWU4Ni0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYWU4Ni0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0yLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMi5qcGdcIiBhbHQ9XCJqbGF4ODYgYWU4NiBmMjBjIGRyaWZ0XCI+PC9waWN0dXJlPjxwPkZyb20gdGhlIGZpcnN0IGRyaWZ0IGRheTwvcD48L2Rpdj4nKSxcbiAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9hZTg2LTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYWU4Ni0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYWU4Ni0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0zLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMy5qcGdcIiBhbHQ9XCJqbGF4ODYgYWU4NiBmMjBjIGRyaWZ0XCI+PC9waWN0dXJlPjxwPkYyMGMgUG93ZXJlZCBBRTg2PC9wPjwvZGl2PicpLFxuICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgfVxuICAgIF0sXG4gICAgZ2FsbGVyeToge1xuICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgIH0sXG4gICAgdHlwZTogJ2ltYWdlJyAvLyB0aGlzIGlzIGEgZGVmYXVsdCB0eXBlXG59KTtcblxuJCgnLmZpZ2h0LW1vZGFsJykubWFnbmlmaWNQb3B1cCh7XG4gICAgcmVtb3ZhbERlbGF5OiA3MDAsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyIHNtXCI+PGltZyBzcmM9XCJhc3NldHMvcmVzb3VyY2VzL2hhbmRzLmdpZlwiIGFsdD1cImpsYXg4NiBoYW5kc1wiLz48cD5TdHVkZW50IG9mIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQmVpU2hhb2xpbk1laUh1YUluc3RpdHV0ZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5CZWkgU2hhb2xpbiBNZWkgSHVhIEluc3RpdHV0ZTwvYT48L3A+PC9kaXY+JyksXG4gICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICB9XG4gICAgXSxcbiAgICBnYWxsZXJ5OiB7XG4gICAgICBlbmFibGVkOiB0cnVlXG4gICAgfSxcbiAgICB0eXBlOiAnaW1hZ2UnIC8vIHRoaXMgaXMgYSBkZWZhdWx0IHR5cGVcbn0pO1xuXG4kKCcudG91Y2ggLmdyaWQtc2VjdGlvbl9faXRlbSAuaW1hZ2UnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG4iLCJmdW5jdGlvbiBkZXRlY3RTY3JvbGwoKSB7XG5cdHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdGlmKHNjcm9sbFRvcCA+PSAxMDAwKSB7XG5cdFx0JCgnLmludHJvJykuYWRkQ2xhc3MoJ2hpZGUnKTtcblx0XHQkKCcuZm9vdGVyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblx0fSBlbHNlIHtcblx0XHQkKCcuaW50cm8nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuXHRcdCQoJy5mb290ZXInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHR9XG59XG5pZigkKCcubm8tdG91Y2ggLmludHJvJykubGVuZ3RoKSB7XG5cdCQoJy5mb290ZXInKS5hZGRDbGFzcygnaG9tZScpO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGUoZGV0ZWN0U2Nyb2xsLCAyNSkpO1xufVxuXG5cbmlmKCQoJ2JvZHkubm8tdG91Y2gnKS5sZW5ndGgpIHtcblxuXHRmdW5jdGlvbiBwYXJhbGxheCgpIHtcblx0XHRjb25zdCBza3lDaGFuZ2UgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19za3ktLWRhcmsnKSxcblx0XHRcdGZyb206ICcwJyxcblx0XHRcdHRvOiAnMTgwcHgnLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0Jy0tc2t5Jzoge1xuXHRcdFx0XHRcdGZyb206IC4wMSxcblx0XHRcdFx0XHR0bzogLjk5XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRza3lDaGFuZ2Uuc3RhcnQoKTtcblxuXHRcdGNvbnN0IGdyb3VuZE1vdmUgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19mb3JlZ3JvdW5kJyksXG5cdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHR0bzogJzUwMHB4Jyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLWZnJzoge1xuXHRcdFx0XHRcdGZyb206ICcwcHgnLFxuXHRcdFx0XHRcdHRvOiAnLTIwMHB4J1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Z3JvdW5kTW92ZS5zdGFydCgpO1xuXG5cdFx0Y29uc3QgZm9yZWdyb3VuZE1vdmUgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVncm91bmQnKSxcblx0XHRcdGZyb206ICcwJyxcblx0XHRcdHRvOiAnNTAwcHgnLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0Jy0tdHknOiB7XG5cdFx0XHRcdFx0ZnJvbTogJzBweCcsXG5cdFx0XHRcdFx0dG86ICctMjAwcHgnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRmb3JlZ3JvdW5kTW92ZS5zdGFydCgpO1xuXG5cdFx0Y29uc3QgYmxvY2tTaG93ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fcHJvamVjdC0tZml4ZWQnKSxcblx0XHRcdGZyb206ICd0b3AtYm90dG9tJyxcblx0XHRcdHRvOiAnbWlkZGxlLWJvdHRvbScsXG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHQnLS1ibyc6IHtcblx0XHRcdFx0XHRmcm9tOiAwLFxuXHRcdFx0XHRcdHRvOiAxXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCctLWJ0Jzoge1xuXHRcdFx0XHRcdGZyb206ICctMjAwcHgnLFxuXHRcdFx0XHRcdHRvOiAnMHB4J1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0YmxvY2tTaG93LnN0YXJ0KCk7XG5cblx0XHRjb25zdCBsZFNob3cgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19wcm9qZWN0LS1kYXJrJyksXG5cdFx0XHRmcm9tOiAndG9wLWJvdHRvbScsXG5cdFx0XHR0bzogJ21pZGRsZS1ib3R0b20nLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0Jy0tbG8nOiB7XG5cdFx0XHRcdFx0ZnJvbTogMCxcblx0XHRcdFx0XHR0bzogLjEyXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCctLWx0Jzoge1xuXHRcdFx0XHRcdGZyb206ICcyMDBweCcsXG5cdFx0XHRcdFx0dG86ICcwcHgnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRsZFNob3cuc3RhcnQoKTtcblxuXG5cdFx0aWYgKCQoJy5mb290ZXInKS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgZm9vdGVyUmlzZSA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhc3QtcHJvamVjdCcpLFxuXHRcdFx0XHRcdGZyb206ICdtaWRkbGUtdG9wJyxcblx0XHRcdFx0XHR0bzogJ2JvdHRvbS10b3AnLFxuXHRcdFx0XHRcdGRpcmVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19zdW4tLWZvb3RlcicpLFxuXHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHQnLS1yaXNlJzoge1xuXHRcdFx0XHRcdFx0XHRmcm9tOiAnNDAwcHgnLFxuXHRcdFx0XHRcdFx0XHR0bzogJzAnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Zm9vdGVyUmlzZS5zdGFydCgpO1xuXHRcdFx0XHQkKCcuZm9vdGVyJykuYWRkQ2xhc3MoJ2hvbWUnKTtcblx0XHRcdH1cblx0fVxuXG5cblx0aWYoJCgnLmZvcmVncm91bmQnKS5sZW5ndGgpIHtcblx0XHRwYXJhbGxheCgpO1xuXHR9XG5cblx0aWYoJCgnLmdyaWQnKS5sZW5ndGgpIHtcblx0XHRmdW5jdGlvbiBtb3ZlQmcoKSB7XG5cblx0XHRcdGNvbnN0IGJnMSA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyksXG5cdFx0XHRcdGRpcmVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfX2JnMScpLFxuXHRcdFx0XHRmcm9tOiAndG9wLXRvcCcsXG5cdFx0XHRcdHRvOiAnYm90dG9tLXRvcCcsXG5cdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0Jy0tYmcxJzoge1xuXHRcdFx0XHRcdFx0ZnJvbTogJzEwMHB4Jyxcblx0XHRcdFx0XHRcdHRvOiAnLTYwMDBweCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0YmcxLnN0YXJ0KCk7XG5cblx0XHRcdGNvbnN0IGJnMiA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyksXG5cdFx0XHRcdGRpcmVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfX2JnMicpLFxuXHRcdFx0XHRmcm9tOiAndG9wLXRvcCcsXG5cdFx0XHRcdHRvOiAnYm90dG9tLXRvcCcsXG5cdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0Jy0tYmcyJzoge1xuXHRcdFx0XHRcdFx0ZnJvbTogJzI4MHB4Jyxcblx0XHRcdFx0XHRcdHRvOiAnLTkwMHB4J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRiZzIuc3RhcnQoKTtcblx0XHR9XG5cdFx0bW92ZUJnKCk7XG5cdH1cbn1cbiIsIi8vS2VlcCBSYXRpbyBJbWFnZXNcbmlmKCQoJy52aWRlby1iZycpLmxlbmd0aCkge1xuICAkKCcudmlkZW8tYmcnKS5rZWVwUmF0aW8oeyByYXRpbzogMTYvOSwgY2FsY3VsYXRlOiAnaGVpZ2h0JyB9KTtcbn1cbiIsIkFPUy5pbml0KCk7XG4iLCIvL1Ntb290aCBTY3JvbGxpbmdcbiQoJ2EuYW5jaG9yW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxufSk7XG4iLCJ9KShqUXVlcnkpO1xuIl19
