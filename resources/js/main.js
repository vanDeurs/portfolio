// Sliding down and up when clicking to different parts of the page

$('a[href^="#"]').click(function () {

var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');

return false;});

// Carousel function

$(document).ready(function(){
  $('.carousel').slick({
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      touchMove: false,
      swipetoSlide: false,
      swipe: false,
      fade: true,
      speed: 1500,
      
      
  });
});


