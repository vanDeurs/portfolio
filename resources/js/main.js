// Sliding down and up when clicking to different parts of the page

$('a[href^="#"]').click(function () {

var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');

return false;});



// Portfolio sorter
$(".filter-button").click(function(){
    var value = $(this).attr('data-filter');

    if(value == "all")
    {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
    }
    else
    {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');

    }
});

if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
}
$(this).addClass("active");



