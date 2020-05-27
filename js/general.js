$(document).ready(function(){
$(".mobile-menu a").click(function(){
  $(".mobile-menu .menu-link").toggle();
})

$(".mobile-menu a.open-menu").click(function(){
$('.close-menu').css('display', 'inline-block');
$('.open-menu').css('display', 'none');
})

$(".mobile-menu a.close-menu").click(function(){
$('.open-menu').css('display', 'inline-block');
$('.close-menu').css('display', 'none');
})


$(".mobile-menu a.open-menu").click(function(){
$('.mobile-menu .menu-link').addClass('open')
$('body').css('overflow', 'hidden');
})

$(".mobile-menu a.close-menu").click(function(){
$('.mobile-menu .menu-link').removeClass('open')
$('body').css('overflow', 'visible');
})

$(".mobile-menu .menu-link li").click(function(){
$('body').css('overflow', 'visible') 
$('.mobile-menu .menu-link').removeClass('open')
 })


$(".mobile-menu .menu-link li").click(function(){
$('.close-menu').css('display', 'none');
$('.open-menu').css('display', 'inline-block');
})

$(".open-menu, .close-menu").click(function(e) {
    e.preventDefault();
})

$('.logo a').click(function(){
  $(window).scrollTop(0);
})

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $(window).scrollTop(0);
});

});

