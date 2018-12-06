$(document).ready(function() {
  // header animation
  var stickyOffset = $('.sticky').offset().top;

  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= stickyOffset) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $(".menu-link").click(function(event) {
    event.preventDefault();
    $(".menu-overlay").toggleClass("open");
    $(".menu").toggleClass("open");
  });

});
