$(document).ready(function() {
  // header animation
  var stickyOffset = $('.sticky').offset().top;

  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= stickyOffset) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  // hamburger menu
  var el = document.querySelectorAll('.hamburger');
  for(i=0; i<=el.length; i++) {
    el[i].addEventListener('click', function() {
      this.classList.toggle('active');
    }, false);
  }
});
