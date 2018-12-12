$(document).ready(function() {
  // header animation
  var stickyOffset = $(".sticky").offset().top;

  $(window).scroll(function(){
    var sticky = $(".sticky"),
        scroll = $(window).scrollTop();

    if (scroll >= stickyOffset) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });

  /* Open */
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

});
