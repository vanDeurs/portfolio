// PRE LOADER

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
});


// Sliding down and up when clicking to different parts of the page

$('a[href^="#"]').click(function () {

var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');

return false;});


//HEADER TEXT TRANSFORMATION 
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

/* MENU SCROLL */

 $('#navbar,#scroll-down').on( "click", function(e) {
     if ( $(e.target).is('a.page-scroll') ) {
       if (location.pathname.replace(/^\//,'') == e.target.pathname.replace(/^\//,'') && location.hostname == e.target.hostname) {
          var target = $(e.target.hash);
            target = target.length ? target : $('[name=' + e.target.hash.slice(1) +']');
          if (target.length) {
        var gap = 75;
        if ($('.navbar-default').hasClass('no-sticky')) { 
            gap = 0;
         }      
        $('html,body').animate({
          scrollTop: target.offset().top - gap
        }, 900);
         }
         if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
          }
        }
        return false;
       }
      });
     $(window).scroll(function () {
   if (!$('.navbar-default').hasClass('no-sticky')) {
        if ($(this).scrollTop() > 10) {      
            $('.navbar-default').addClass('sticky');
           }
         else {
            $('.navbar-default').removeClass('sticky');
        }
      }
   });
   $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })
