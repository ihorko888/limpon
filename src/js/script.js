$(document).ready(function() {
    $(".btn-ricardo").click(function() {
        $(".btn-ricardo").hide();
        $(".social-ricardo").fadeIn();
    });
});
$(document).ready(function() {
    $(".btn-alberto").click(function() {
        $(".btn-alberto").hide();
        $(".social-alberto").fadeIn();
    });
});
$(document).ready(function() {
    $(".btn-thomas").click(function() {
        $(".btn-thomas").hide();
        $(".social-thomas").fadeIn();
    });
});


// scrollTopBtn
$(document).ready(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() > 40){
            $('.topBtn').fadeIn();
        } else {
            $('.topBtn').fadeOut();
        }
    })

    $('.topBtn').click(function() {
        $('html, body').animate({scrollTop: 0},500);
    });
});


// Fixed menu scroll
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('.header-wrap').addClass('white');
    } else {
        $('.header-wrap').removeClass('white');
    };
});


// Scroll to section
$('.scrollToSec').click(function () {
    let getElement = $(this).attr('href');
    if ($(getElement).length) {
      let getOffset = $(getElement).offset().top;
      $('html,body').animate({
        scrollTop:getOffset
      },400);
      $('.nav').removeClass('active');
      $('body').removeClass('lock');
    }
    return false;
});


// Counter
$(document).ready(function(){

	var show = true;
	var countbox = ".stat";
	$(window).on("scroll load resize", function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $(countbox).offset().top;

		var w_height = $(window).height();
		var d_height = $(document).height();

		var e_height = $(countbox).outerHeight();

		if(w_top + 550 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".counts-block-num").spincrement({
				thousandSeparator: "",
				duration: 1200
			});

			show = false;
		}
	});
});


// Burger
$('.burger').click(function(event) {
    $('.burger, .nav').toggleClass('active');
    $('body').toggleClass('lock');
});

new WOW().init();