$(document).ready(function() {
  let $body = $('body'),
      $nav = $('.navbar'),
      $window = $(window),
      navOffsetTop = $nav.offset().top,
      $document = $(document);
  
  $window.on('scroll', function(){
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')){
      $body.addClass('has-docked-nav');
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')){
      $body.removeClass('has-docked-nav');
    }
  });
});