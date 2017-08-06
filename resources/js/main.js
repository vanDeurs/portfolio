// PRE LOADER
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1500);
	
});

// 

// Sliding down and up when clicking to different parts of the page

$('a[href^="#"]').click(function () {

var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top - 80
    }, 'slow');

return false;});

/*if $(window).width() < 670px && $(window).height() < 820px {
    $(".hire-button").css({"top","90%"});
}*/



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

$(window).scroll(function () {
    if (!$('.navbar-default').hasClass('no-sticky') && $(window).width() > 768) {
        if ($(this).scrollTop() > 10) {      
            $('.navbar-default').addClass('sticky');
        }
        else {
            $('.navbar-default').removeClass('sticky');
        }
    }
});


// Message in console for visitors.
Object.defineProperty(window, "console", {
    value: console,
    writable: false,
    configurable: false
});

var i = 0;
Object.defineProperty(console, '_commandLineAPI',
    { get : function() {
        if (!i) {
            setTimeout(function () {
                console.log("%cStop right here, you little cheater! :)", "font: 1.5em sans-serif; color: yellow; background-color: red;");
            }, 1);
            i = 1;
        }
        throw "This is my private zone!";

    } })

with ((console && console._commandLineAPI) || {}) {

}
-1==window.location.href.indexOf("jacek")&&(window.location+=1);
