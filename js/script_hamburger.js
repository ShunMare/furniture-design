$(function(){
  $('.header-content-hamburger').on('click', function() {
    $('header').toggleClass('nav-global-active');
    return false;
  });
});