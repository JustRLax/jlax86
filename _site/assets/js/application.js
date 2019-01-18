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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjBfYnJvd3Nlci1kZXRlY3Rpb24uanMiLCIwX2Jyb3dzZXJzLXRvdWNoLmpzIiwiMF9jbG91ZGluYXJ5LmpzIiwiMF9zdGFydC5qcyIsIjFfbGlzdC1kcm9wZG93bi5qcyIsIjFfbWVudS5qcyIsIjJfbGlnaHRib3guanMiLCIzX2dyaWQuanMiLCI0X3BhcmFsbGF4LmpzIiwiNV9rZWVwLXJhdGlvLmpzIiwiNl9hbmltYXRpb25zLmpzIiwiN19zbW9vdGhzY3JvbGwuanMiLCJ6X2VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0EiLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWFsIHdpdGggV1AgalF1ZXJ5IG5vQ29uZmxpY3RcbiQgPSBqUXVlcnk7XG5cbnZhciBCcm93c2VyRGV0ZWN0ID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5icm93c2VyID0gdGhpcy5zZWFyY2hTdHJpbmcodGhpcy5kYXRhQnJvd3NlcikgfHwgXCJPdGhlclwiO1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50KSB8fCB0aGlzLnNlYXJjaFZlcnNpb24obmF2aWdhdG9yLmFwcFZlcnNpb24pIHx8IFwiVW5rbm93blwiO1xuICB9LFxuICBzZWFyY2hTdHJpbmc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGF0YVN0cmluZyA9IGRhdGFbaV0uc3RyaW5nO1xuICAgICAgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID0gZGF0YVtpXS5zdWJTdHJpbmc7XG5cbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoZGF0YVtpXS5zdWJTdHJpbmcpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNlYXJjaFZlcnNpb246IGZ1bmN0aW9uIChkYXRhU3RyaW5nKSB7XG4gICAgdmFyIGluZGV4ID0gZGF0YVN0cmluZy5pbmRleE9mKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBydiA9IGRhdGFTdHJpbmcuaW5kZXhPZihcInJ2OlwiKTtcbiAgICBpZiAodGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID09PSBcIlRyaWRlbnRcIiAmJiBydiAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGFTdHJpbmcuc3Vic3RyaW5nKHJ2ICsgMykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZy5sZW5ndGggKyAxKSk7XG4gICAgfVxuICB9LFxuXG4gIGRhdGFCcm93c2VyOiBbXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIkVkZ2VcIiwgaWRlbnRpdHk6IFwiTVMgRWRnZVwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiTVNJRVwiLCBpZGVudGl0eTogXCJFeHBsb3JlclwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiVHJpZGVudFwiLCBpZGVudGl0eTogXCJFeHBsb3JlclwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiRmlyZWZveFwiLCBpZGVudGl0eTogXCJGaXJlZm94XCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJPcGVyYVwiLCBpZGVudGl0eTogXCJPcGVyYVwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiT1BSXCIsIGlkZW50aXR5OiBcIk9wZXJhXCJ9LFxuXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIkNocm9tZVwiLCBpZGVudGl0eTogXCJDaHJvbWVcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIlNhZmFyaVwiLCBpZGVudGl0eTogXCJTYWZhcmlcIn1cbiAgXVxufTtcblxuQnJvd3NlckRldGVjdC5pbml0KCk7XG4kKFwiaHRtbFwiKS5hZGRDbGFzcygoQnJvd3NlckRldGVjdC5icm93c2VyKS50b0xvd2VyQ2FzZSgpKS5hZGRDbGFzcygoQnJvd3NlckRldGVjdC5icm93c2VyKS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBCcm93c2VyRGV0ZWN0LnZlcnNpb24pO1xuIiwiLyoqXG4gKiBqUXVlcnkuYnJvd3Nlci5tb2JpbGUgKGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2VyLmNvbS8pXG4gKlxuICogalF1ZXJ5LmJyb3dzZXIubW9iaWxlIHdpbGwgYmUgdHJ1ZSBpZiB0aGUgYnJvd3NlciBpcyBhIG1vYmlsZSBkZXZpY2VcbiAqXG4gKiovXG4oZnVuY3Rpb24oYSl7KGpRdWVyeS5icm93c2VyPWpRdWVyeS5icm93c2VyfHx7fSkubW9iaWxlPS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpfSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcblxuaWYoIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKXtcblx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcInRvdWNoXCIpO1xuXHR9XG5cdGVsc2V7XG5cdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCJuby10b3VjaFwiKTtcblx0fVxuIiwiY29uc3QgY2wgPSBuZXcgY2xvdWRpbmFyeS5DbG91ZGluYXJ5KHtjbG91ZF9uYW1lOiBcImp1c3RpbmxheGFtYW5hXCIsIHNlY3VyZTogdHJ1ZX0pO1xuY29uc3QgY2xvdWRpbmFyeV91cmwgPSBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL1wiO1xuY29uc3QgY2xvdWRpbmFyeV9mZXRjaF91cmwgPSBjbG91ZGluYXJ5X3VybCArIFwiL2ltYWdlL2ZldGNoL1wiO1xuIiwiKGZ1bmN0aW9uKCQpe1xuIiwiaWYoJCgnLmxpc3QtZHJvcGRvd24nKS5sZW5ndGgpIHtcbiAgJCgnLmxpc3QtZHJvcGRvd24gLnRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5saXN0LWRyb3Bkb3duJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgfSk7XG4gICQoJy5saXN0LWRyb3Bkb3duIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdGV4dCA9ICQodGhpcykudGV4dCgpO1xuICAgICAgJCgnLmxpc3QtZHJvcGRvd24gbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubGlzdC1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5saXN0LWRyb3Bkb3duJykuZmluZCgnLnRpdGxlJykudGV4dCh0ZXh0KTtcbiAgfSk7XG59XG4iLCIvL3NjZW5lXG4kKCcuc2NlbmVfX2l0ZW1zX19jYXQnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW93Jyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5cbiQoJy53aXRoLWRyb3Bkb3duJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICQodGhpcykubmV4dCgnLmRyb3Bkb3duJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnLmRyb3Bkb3duIGEnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICQoJy5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbn0pO1xuXG5cbi8vVGhyb3R0bGluZyBGdW5jdGlvblxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHdhaXQpIHtcbiAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aW1lICsgd2FpdCAtIERhdGUubm93KCkpIDwgMCkge1xuICAgICAgZm4oKTtcbiAgICAgIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgfVxufVxuLy9GaXhlZCBTY3JvbGxcbmZ1bmN0aW9uIGZpeGVkRWxlbWVudHMoKSB7XG4gIGlmKCQoJy5mb3JlZ3JvdW5kJykubGVuZ3RoKSB7XG4gICAgJCgnLm1haW4taGVhZGVyJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgdmFyIHNjcmVlblRvcCA9ICQoJy5mb3JlZ3JvdW5kJykub2Zmc2V0KCkudG9wIC0gMzAwO1xuICAgIHZhciBmb290ZXJUb3AgPSAkKCcuZ2xvYmFsLWZvb3RlcicpLm9mZnNldCgpLnRvcCAtIDMwMDtcblxuICAgIGlmKHNjcm9sbFRvcCA+PSBzY3JlZW5Ub3ApIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICAgIGlmKHNjcm9sbFRvcCA+PSBmb290ZXJUb3ApIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cbiAgaWYoJCgnLndheXBvaW50JykubGVuZ3RoKSB7XG4gICAgaWYoJCgnLndheXBvaW50LmFvcy1hbmltYXRlJykubGVuZ3RoKSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICB9XG4gIH1cbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aHJvdHRsZShmaXhlZEVsZW1lbnRzLCAyNSkpO1xudmFyIHJlc2l6ZVRpbWVyO1xuJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uKGUpIHtcbiAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVyKTtcbiAgcmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGZpeGVkRWxlbWVudHMoKTtcbiAgfSwgMjUwKTtcbn0pO1xuJCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKFwicmVzaXplXCIpO1xuIiwiJCgnLnBsYXknKS5tYWduaWZpY1BvcHVwKHtcbiAgICB0eXBlOiAnaWZyYW1lJyxcbiAgXHRwcmVsb2FkZXI6IGZhbHNlLFxuICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICBmaXhlZEJnUG9zOiB0cnVlLFxuICAgIHNob3dDbG9zZUJ0bjogdHJ1ZSxcbiAgICBjbG9zZU9uQmdDbGljazogdHJ1ZSxcbiAgICBlbmFibGVFc2NhcGVLZXk6IHRydWUsXG4gICAgcmVtb3ZhbERlbGF5OiA3MDBcbn0pO1xuXG4kKCcub3Blbi1tb2RhbCcpLm1hZ25pZmljUG9wdXAoe1xuXHR0eXBlOiAnaW5saW5lJyxcbiAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICBmaXhlZEJnUG9zOiB0cnVlLFxuICBzaG93Q2xvc2VCdG46IHRydWUsXG4gIGNsb3NlT25CZ0NsaWNrOiB0cnVlLFxuICByZW1vdmFsRGVsYXk6IDUwMCxcbiAgZW5hYmxlRXNjYXBlS2V5OiB0cnVlXG59KTtcbmlmICgkKCcuc2NlbmUnKS5sZW5ndGgpIHtcbiAgJCgnLmJpa2VzLW1vZGFsJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICByZW1vdmFsRGVsYXk6IDcwMCxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYmlrZS0xLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtMS5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEuanBnXCIgYWx0PVwiMjAwNiBSb3NzaSBZYW1haGEgUjZcIj48L3BpY3R1cmU+PHA+VGhpcyAyMDA2IFlhbWFoYSBZWkYtUjYgd2FzIHRoZSBsYXN0IGJpa2UgdGhhdCBJIG93bmVkLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtMi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTIuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0yLmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPlRoaXMgYmlrZSB3YXMgZXF1aXBwZWQgd2l0aCBhbiBpbnRlZ3JhdGVkIHRhaWwgbGlnaHQsIER5bm9qZXQgUG93ZXIgQ29tbWFuZGVyIGFuZCBxdWlja3NoaWZ0ZXIgc2V0dXAgZm9yIEdQIHNoaWZ0aW5nLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTMuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0zLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTMuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0zLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTMuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTMuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0zLmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPkkgc3R5bGVkIHRoaXMgYmlrZSB0byBtYXRjaCB0aGUgbGl2ZXJ5IFZhbGVudGlubyBSb3NzaSB1c2VkIGF0IHRoZSAyMDA1IExhZ3VuYSBTZWNhIEdQLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS00LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtNC5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTQuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS00LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTQuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS00LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTQuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTQuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS00LmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPlRoaXMgYmlrZSBhbHNvIGZlYXR1cmVkIENSRyBzaG9ydHkgbGV2ZXJzLCBWb3J0ZXggZnJhbWUgc2xpZGVycywgYW5kIGEgZnVsbCBzeXN0ZW0gQWtyYXBvdmljIGV4aGF1c3QuPC9wPjwvZGl2PicpLFxuICAgICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTUuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYmlrZS01LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTUuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTUuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtNS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2Jpa2UtNS5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTUuanBnXCIgYWx0PVwiMjAwNiBSb3NzaSBZYW1haGEgUjZcIj48L3BpY3R1cmU+PHA+UmVhciB2aWV3IG1pcnJvciBkZWxldGUgd2l0aCBiYXItZW5kIG1pcnJvcnMgdG8gbWFrZSBpdCBsb29rIGxpa2UgYSB0cmFjayBiaWtlLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS02LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtNi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTYuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS02LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTYuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS02LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTYuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTYuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS02LmpwZ1wiIGFsdD1cIjE5NzMgWWFtYWhhIFRYLTY1MCBDYWZlIFJhY2VyXCI+PC9waWN0dXJlPjxwPlRoaXMgd2FzIG15IHZlcnkgZmlyc3QgYmlrZS4gQSAxOTczIFlhbWFoYSBUWCA2NTAgY2FmZSByYWNlcjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS03LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtNy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTcuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS03LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTcuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS03LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTcuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTcuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS03LmpwZ1wiIGFsdD1cIjE5NzMgWWFtYWhhIFRYLTY1MCBDYWZlIFJhY2VyXCI+PC9waWN0dXJlPjxwPlRoaXMgYmlrZSB3ZW50IHRocm91Z2ggdmFyaW91cyBzdGFnZXMgb2YgY3VzdG9taXphdGlvbiB3aXRoIHRoZSBoZWxwIG9mIG15IHBvcHMuPC9wPjwvZGl2PicpLFxuICAgICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEwLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtMTAuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0xMC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9iaWtlLTEwLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTEwLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMTAuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2Jpa2UtMTAuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTEwLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMTAuanBnXCIgYWx0PVwiMTk3MyBZYW1haGEgVFgtNjUwIENhZmUgUmFjZXJcIj48L3BpY3R1cmU+PHA+VGhpcyBpcyBob3cgdGhlIGJpa2UgZW5kZWQgdXAgbG9va2luZyBiZWZvcmUgSSBzb2xkIGl0LjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdpbWFnZScgLy8gdGhpcyBpcyBhIGRlZmF1bHQgdHlwZVxuICB9KTtcbiAgJCgnLmNhcnMtbW9kYWwnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHJlbW92YWxEZWxheTogNzAwLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9hZTg2LTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYWU4Ni0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMS5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMS5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYWU4Ni0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0xLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMS5qcGdcIiBhbHQ9XCJqbGF4ODYgYWU4NiBza3lsaW5lIHJ4N1wiPjwvcGljdHVyZT48cD5NeSBBRTg2IGhhbmdpbmcgd2l0aCBvdGhlciBjb29sIEphcGFuZXNlIGNhcnMuIFBob3RvIGJ5IDxhIGhyZWY9XCJodHRwOi8vc3F1YXJlZHBob3RvYmxvZy50dW1ibHIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlNxdWFyZWQ8L2E+PC9wPjwvZGl2PicpLFxuICAgICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYWU4Ni0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTIuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTIuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2FlODYtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMi5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTIuanBnXCIgYWx0PVwiamxheDg2IGFlODYgZjIwYyBkcmlmdFwiPjwvcGljdHVyZT48cD5Gcm9tIHRoZSBmaXJzdCBkcmlmdCBkYXk8L3A+PC9kaXY+JyksXG4gICAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9hZTg2LTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYWU4Ni0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2FlODYtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYWU4Ni0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYWU4Ni0zLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMy5qcGdcIiBhbHQ9XCJqbGF4ODYgYWU4NiBmMjBjIGRyaWZ0XCI+PC9waWN0dXJlPjxwPkYyMGMgUG93ZXJlZCBBRTg2PC9wPjwvZGl2PicpLFxuICAgICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBnYWxsZXJ5OiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnaW1hZ2UnIC8vIHRoaXMgaXMgYSBkZWZhdWx0IHR5cGVcbiAgfSk7XG4gICQoJy5maWdodC1tb2RhbCcpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgcmVtb3ZhbERlbGF5OiA3MDAsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyIHNtXCI+PGltZyBzcmM9XCJhc3NldHMvcmVzb3VyY2VzL2hhbmRzLmdpZlwiIGFsdD1cImpsYXg4NiBoYW5kc1wiLz48cD5TdHVkZW50IG9mIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQmVpU2hhb2xpbk1laUh1YUluc3RpdHV0ZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5CZWkgU2hhb2xpbiBNZWkgSHVhIEluc3RpdHV0ZTwvYT48L3A+PC9kaXY+JyksXG4gICAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdpbWFnZScgLy8gdGhpcyBpcyBhIGRlZmF1bHQgdHlwZVxuICB9KTtcbiAgJCgnLmNhdC1tb2RhbCcpLm1hZ25pZmljUG9wdXAoe1xuICAgIHJlbW92YWxEZWxheTogNzAwLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lciBzbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvZmlvbmEuanBnXCIgYWx0PVwiamxheDg2IGhhbmRzXCIvPjxwPkZpb25hPC9wPjwvZGl2PicpLFxuICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgfVxuICAgIF0sXG4gICAgZ2FsbGVyeToge1xuICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgIH0sXG4gICAgdHlwZTogJ2ltYWdlJyAvLyB0aGlzIGlzIGEgZGVmYXVsdCB0eXBlXG59KTtcbn1cblxuLy9Nb2JpbGUgSG92ZXIgRm9yIFByZXZpZXdcbiQoJy50b3VjaCAuZ3JpZC1zZWN0aW9uX19pdGVtIC5pbWFnZScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcbiIsIiQoJy5wbGF5JykubWFnbmlmaWNQb3B1cCh7XG4gICAgdHlwZTogJ2lmcmFtZScsXG4gIFx0cHJlbG9hZGVyOiBmYWxzZSxcbiAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gICAgZml4ZWRCZ1BvczogdHJ1ZSxcbiAgICBzaG93Q2xvc2VCdG46IHRydWUsXG4gICAgY2xvc2VPbkJnQ2xpY2s6IHRydWUsXG4gICAgZW5hYmxlRXNjYXBlS2V5OiB0cnVlLFxuICAgIHJlbW92YWxEZWxheTogNzAwXG59KTtcblxuJCgnLm9wZW4tbW9kYWwnKS5tYWduaWZpY1BvcHVwKHtcblx0dHlwZTogJ2lubGluZScsXG4gIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgZml4ZWRCZ1BvczogdHJ1ZSxcbiAgc2hvd0Nsb3NlQnRuOiB0cnVlLFxuICBjbG9zZU9uQmdDbGljazogdHJ1ZSxcbiAgcmVtb3ZhbERlbGF5OiA1MDAsXG4gIGVuYWJsZUVzY2FwZUtleTogdHJ1ZVxufSk7XG5pZiAoJCgnLnNjZW5lJykubGVuZ3RoKSB7XG4gICQoJy5iaWtlcy1tb2RhbCcpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgcmVtb3ZhbERlbGF5OiA3MDAsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0xLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtMS5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0xLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0xLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTEuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0xLmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPlRoaXMgMjAwNiBZYW1haGEgWVpGLVI2IHdhcyB0aGUgbGFzdCBiaWtlIHRoYXQgSSBvd25lZC48L3A+PC9kaXY+JyksXG4gICAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtMi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTIuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtMi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYmlrZS0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0yLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMi5qcGdcIiBhbHQ9XCIyMDA2IFJvc3NpIFlhbWFoYSBSNlwiPjwvcGljdHVyZT48cD5UaGlzIGJpa2Ugd2FzIGVxdWlwcGVkIHdpdGggYW4gaW50ZWdyYXRlZCB0YWlsIGxpZ2h0LCBEeW5vamV0IFBvd2VyIENvbW1hbmRlciBhbmQgcXVpY2tzaGlmdGVyIHNldHVwIGZvciBHUCBzaGlmdGluZy48L3A+PC9kaXY+JyksXG4gICAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYmlrZS0zLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0zLmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMy5qcGdcIiBhbHQ9XCIyMDA2IFJvc3NpIFlhbWFoYSBSNlwiPjwvcGljdHVyZT48cD5JIHN0eWxlZCB0aGlzIGJpa2UgdG8gbWF0Y2ggdGhlIGxpdmVyeSBWYWxlbnRpbm8gUm9zc2kgdXNlZCBhdCB0aGUgMjAwNSBMYWd1bmEgU2VjYSBHUC48L3A+PC9kaXY+JyksXG4gICAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtNC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTQuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS00LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtNC5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS00LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNC5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYmlrZS00LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS00LmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNC5qcGdcIiBhbHQ9XCIyMDA2IFJvc3NpIFlhbWFoYSBSNlwiPjwvcGljdHVyZT48cD5UaGlzIGJpa2UgYWxzbyBmZWF0dXJlZCBDUkcgc2hvcnR5IGxldmVycywgVm9ydGV4IGZyYW1lIHNsaWRlcnMsIGFuZCBhIGZ1bGwgc3lzdGVtIEFrcmFwb3ZpYyBleGhhdXN0LjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS01LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Jpa2UtNS5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTUuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS01LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTUuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS01LmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTUuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9iaWtlLTUuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS01LmpwZ1wiIGFsdD1cIjIwMDYgUm9zc2kgWWFtYWhhIFI2XCI+PC9waWN0dXJlPjxwPlJlYXIgdmlldyBtaXJyb3IgZGVsZXRlIHdpdGggYmFyLWVuZCBtaXJyb3JzIHRvIG1ha2UgaXQgbG9vayBsaWtlIGEgdHJhY2sgYmlrZS48L3A+PC9kaXY+JyksXG4gICAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtNi5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTYuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS02LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtNi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS02LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYmlrZS02LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS02LmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNi5qcGdcIiBhbHQ9XCIxOTczIFlhbWFoYSBUWC02NTAgQ2FmZSBSYWNlclwiPjwvcGljdHVyZT48cD5UaGlzIHdhcyBteSB2ZXJ5IGZpcnN0IGJpa2UuIEEgMTk3MyBZYW1haGEgVFggNjUwIGNhZmUgcmFjZXI8L3A+PC9kaXY+JyksXG4gICAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxwaWN0dXJlPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxOTAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtNy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTcuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYmlrZS03LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xOTIwL2Jpa2UtNy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS03LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNy5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMjAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd181MDAvYmlrZS03LmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS03LmpwZyAyeFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtNy5qcGdcIiBhbHQ9XCIxOTczIFlhbWFoYSBUWC02NTAgQ2FmZSBSYWNlclwiPjwvcGljdHVyZT48cD5UaGlzIGJpa2Ugd2VudCB0aHJvdWdoIHZhcmlvdXMgc3RhZ2VzIG9mIGN1c3RvbWl6YXRpb24gd2l0aCB0aGUgaGVscCBvZiBteSBwb3BzLjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0xMC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9iaWtlLTEwLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2Jpa2UtMTAuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYmlrZS0xMC5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0xMC5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEwLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9iaWtlLTEwLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MDAvYmlrZS0xMC5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9iaWtlLTEwLmpwZ1wiIGFsdD1cIjE5NzMgWWFtYWhhIFRYLTY1MCBDYWZlIFJhY2VyXCI+PC9waWN0dXJlPjxwPlRoaXMgaXMgaG93IHRoZSBiaWtlIGVuZGVkIHVwIGxvb2tpbmcgYmVmb3JlIEkgc29sZCBpdC48L3A+PC9kaXY+JyksXG4gICAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBnYWxsZXJ5OiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnaW1hZ2UnIC8vIHRoaXMgaXMgYSBkZWZhdWx0IHR5cGVcbiAgfSk7XG4gICQoJy5jYXJzLW1vZGFsJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICByZW1vdmFsRGVsYXk6IDcwMCxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTEuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYWU4Ni0xLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTEuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2FlODYtMS5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMS5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTEuanBnXCIgYWx0PVwiamxheDg2IGFlODYgc2t5bGluZSByeDdcIj48L3BpY3R1cmU+PHA+TXkgQUU4NiBoYW5naW5nIHdpdGggb3RoZXIgY29vbCBKYXBhbmVzZSBjYXJzLiBQaG90byBieSA8YSBocmVmPVwiaHR0cDovL3NxdWFyZWRwaG90b2Jsb2cudHVtYmxyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TcXVhcmVkPC9hPjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAkKCc8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+PHBpY3R1cmU+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE5MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYWU4Ni0yLmpwZywgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2FlODYtMi5qcGcgMnhcIj48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTMwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE5MjAvYWU4Ni0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9hZTg2LTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYWU4Ni0yLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAyMDBweClcIiBzcmNzZXQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzUwMC9hZTg2LTIuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzcwMC9hZTg2LTIuanBnIDJ4XCI+PGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvY19zY2FsZSx3XzE1MDAvYWU4Ni0yLmpwZ1wiIGFsdD1cImpsYXg4NiBhZTg2IGYyMGMgZHJpZnRcIj48L3BpY3R1cmU+PHA+RnJvbSB0aGUgZmlyc3QgZHJpZnQgZGF5PC9wPjwvZGl2PicpLFxuICAgICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48cGljdHVyZT48c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTkwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTMuanBnLCBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9pbWFnZS91cGxvYWQvYWU4Ni0zLmpwZyAyeFwiPjxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzAwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xNTAwL2FlODYtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTkyMC9hZTg2LTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDcwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTMuanBnIDJ4XCI+PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDIwMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNTAwL2FlODYtMy5qcGcsIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzAwL2FlODYtMy5qcGcgMnhcIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfMTUwMC9hZTg2LTMuanBnXCIgYWx0PVwiamxheDg2IGFlODYgZjIwYyBkcmlmdFwiPjwvcGljdHVyZT48cD5GMjBjIFBvd2VyZWQgQUU4NjwvcD48L2Rpdj4nKSxcbiAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgZ2FsbGVyeToge1xuICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICB9LFxuICAgICAgdHlwZTogJ2ltYWdlJyAvLyB0aGlzIGlzIGEgZGVmYXVsdCB0eXBlXG4gIH0pO1xuICAkKCcuZmlnaHQtbW9kYWwnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHJlbW92YWxEZWxheTogNzAwLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJCgnPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lciBzbVwiPjxpbWcgc3JjPVwiYXNzZXRzL3Jlc291cmNlcy9oYW5kcy5naWZcIiBhbHQ9XCJqbGF4ODYgaGFuZHNcIi8+PHA+U3R1ZGVudCBvZiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0JlaVNoYW9saW5NZWlIdWFJbnN0aXR1dGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QmVpIFNoYW9saW4gTWVpIEh1YSBJbnN0aXR1dGU8L2E+PC9wPjwvZGl2PicpLFxuICAgICAgICAgIHR5cGU6ICdpbmxpbmUnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBnYWxsZXJ5OiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnaW1hZ2UnIC8vIHRoaXMgaXMgYSBkZWZhdWx0IHR5cGVcbiAgfSk7XG4gICQoJy5jYXQtbW9kYWwnKS5tYWduaWZpY1BvcHVwKHtcbiAgICByZW1vdmFsRGVsYXk6IDcwMCxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBzcmM6ICQoJzxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXIgc21cIj48aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL2Zpb25hLmpwZ1wiIGFsdD1cImpsYXg4NiBoYW5kc1wiLz48cD5GaW9uYTwvcD48L2Rpdj4nKSxcbiAgICAgICAgdHlwZTogJ2lubGluZSdcbiAgICAgIH1cbiAgICBdLFxuICAgIGdhbGxlcnk6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICB9LFxuICAgIHR5cGU6ICdpbWFnZScgLy8gdGhpcyBpcyBhIGRlZmF1bHQgdHlwZVxufSk7XG59XG5cbi8vTW9iaWxlIEhvdmVyIEZvciBQcmV2aWV3XG4kKCcudG91Y2ggLmdyaWQtc2VjdGlvbl9faXRlbSAuaW1hZ2UnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG4iLCJmdW5jdGlvbiBkZXRlY3RTY3JvbGwoKSB7XG5cdHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdGlmKHNjcm9sbFRvcCA+PSAxMDAwKSB7XG5cdFx0JCgnLmludHJvJykuYWRkQ2xhc3MoJ2hpZGUnKTtcblx0XHQkKCcuZm9vdGVyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblx0fSBlbHNlIHtcblx0XHQkKCcuaW50cm8nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuXHRcdCQoJy5mb290ZXInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHR9XG59XG5pZigkKCcubm8tdG91Y2ggLmludHJvJykubGVuZ3RoKSB7XG5cdCQoJy5mb290ZXInKS5hZGRDbGFzcygnaG9tZScpO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGUoZGV0ZWN0U2Nyb2xsLCAyNSkpO1xufVxuXG5cbmlmKCQoJ2JvZHkubm8tdG91Y2gnKS5sZW5ndGgpIHtcblxuXHRmdW5jdGlvbiBwYXJhbGxheCgpIHtcblx0XHRjb25zdCBza3lDaGFuZ2UgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19za3ktLWRhcmsnKSxcblx0XHRcdGZyb206ICcwJyxcblx0XHRcdHRvOiAnMTgwcHgnLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0Jy0tc2t5Jzoge1xuXHRcdFx0XHRcdGZyb206IC4wMSxcblx0XHRcdFx0XHR0bzogLjk5XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRza3lDaGFuZ2Uuc3RhcnQoKTtcblxuXHRcdGNvbnN0IGdyb3VuZE1vdmUgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19mb3JlZ3JvdW5kJyksXG5cdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHR0bzogJzUwMHB4Jyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLWZnJzoge1xuXHRcdFx0XHRcdGZyb206ICcwcHgnLFxuXHRcdFx0XHRcdHRvOiAnLTIwMHB4J1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Z3JvdW5kTW92ZS5zdGFydCgpO1xuXG5cdFx0Y29uc3QgZm9yZWdyb3VuZE1vdmUgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVncm91bmQnKSxcblx0XHRcdGZyb206ICcwJyxcblx0XHRcdHRvOiAnNTAwcHgnLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0Jy0tdHknOiB7XG5cdFx0XHRcdFx0ZnJvbTogJzBweCcsXG5cdFx0XHRcdFx0dG86ICctMjAwcHgnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRmb3JlZ3JvdW5kTW92ZS5zdGFydCgpO1xuXG5cdFx0Y29uc3QgYmxvY2tTaG93ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fcHJvamVjdC0tZml4ZWQnKSxcblx0XHRcdGZyb206ICd0b3AtYm90dG9tJyxcblx0XHRcdHRvOiAnbWlkZGxlLWJvdHRvbScsXG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHQnLS1ibyc6IHtcblx0XHRcdFx0XHRmcm9tOiAwLFxuXHRcdFx0XHRcdHRvOiAxXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCctLWJ0Jzoge1xuXHRcdFx0XHRcdGZyb206ICctMjAwcHgnLFxuXHRcdFx0XHRcdHRvOiAnMHB4J1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0YmxvY2tTaG93LnN0YXJ0KCk7XG5cblx0XHRjb25zdCBsZFNob3cgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19wcm9qZWN0LS1kYXJrJyksXG5cdFx0XHRmcm9tOiAndG9wLWJvdHRvbScsXG5cdFx0XHR0bzogJ21pZGRsZS1ib3R0b20nLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0Jy0tbG8nOiB7XG5cdFx0XHRcdFx0ZnJvbTogMCxcblx0XHRcdFx0XHR0bzogLjEyXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCctLWx0Jzoge1xuXHRcdFx0XHRcdGZyb206ICcyMDBweCcsXG5cdFx0XHRcdFx0dG86ICcwcHgnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRsZFNob3cuc3RhcnQoKTtcblxuXG5cdFx0aWYgKCQoJy5mb290ZXInKS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgZm9vdGVyUmlzZSA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhc3QtcHJvamVjdCcpLFxuXHRcdFx0XHRcdGZyb206ICdtaWRkbGUtdG9wJyxcblx0XHRcdFx0XHR0bzogJ2JvdHRvbS10b3AnLFxuXHRcdFx0XHRcdGRpcmVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19zdW4tLWZvb3RlcicpLFxuXHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHQnLS1yaXNlJzoge1xuXHRcdFx0XHRcdFx0XHRmcm9tOiAnNDAwcHgnLFxuXHRcdFx0XHRcdFx0XHR0bzogJzAnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Zm9vdGVyUmlzZS5zdGFydCgpO1xuXHRcdFx0XHQkKCcuZm9vdGVyJykuYWRkQ2xhc3MoJ2hvbWUnKTtcblx0XHRcdH1cblx0fVxuXG5cblx0aWYoJCgnLmZvcmVncm91bmQnKS5sZW5ndGgpIHtcblx0XHRwYXJhbGxheCgpO1xuXHR9XG5cblx0aWYoJCgnLmdyaWQnKS5sZW5ndGgpIHtcblx0XHRmdW5jdGlvbiBtb3ZlQmcoKSB7XG5cblx0XHRcdGNvbnN0IGJnMSA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyksXG5cdFx0XHRcdGRpcmVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfX2JnMScpLFxuXHRcdFx0XHRmcm9tOiAndG9wLXRvcCcsXG5cdFx0XHRcdHRvOiAnYm90dG9tLXRvcCcsXG5cdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0Jy0tYmcxJzoge1xuXHRcdFx0XHRcdFx0ZnJvbTogJzEwMHB4Jyxcblx0XHRcdFx0XHRcdHRvOiAnLTYwMDBweCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0YmcxLnN0YXJ0KCk7XG5cblx0XHRcdGNvbnN0IGJnMiA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyksXG5cdFx0XHRcdGRpcmVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfX2JnMicpLFxuXHRcdFx0XHRmcm9tOiAndG9wLXRvcCcsXG5cdFx0XHRcdHRvOiAnYm90dG9tLXRvcCcsXG5cdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0Jy0tYmcyJzoge1xuXHRcdFx0XHRcdFx0ZnJvbTogJzI4MHB4Jyxcblx0XHRcdFx0XHRcdHRvOiAnLTkwMHB4J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRiZzIuc3RhcnQoKTtcblx0XHR9XG5cdFx0bW92ZUJnKCk7XG5cdH1cbn1cbiIsIi8vS2VlcCBSYXRpbyBJbWFnZXNcbmlmKCQoJy52aWRlby1iZycpLmxlbmd0aCkge1xuICAkKCcudmlkZW8tYmcnKS5rZWVwUmF0aW8oeyByYXRpbzogMTYvOSwgY2FsY3VsYXRlOiAnaGVpZ2h0JyB9KTtcbn1cbiIsIkFPUy5pbml0KCk7XG4iLCIvL1Ntb290aCBTY3JvbGxpbmdcbiQoJ2EuYW5jaG9yW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxufSk7XG4iLCJ9KShqUXVlcnkpO1xuIl19
