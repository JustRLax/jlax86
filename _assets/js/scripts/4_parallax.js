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
	}

	if($('.foreground').length) {
		parallax();

		//Fixed Scroll
		function fixedElements() {
		  var scrollTop = $(window).scrollTop();
		  var screenTop = $('.foreground').offset().top - 300;
		  var footerTop = $('.global-footer').offset().top - 300;
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
