$(document).ready(function() {
  let $body = $('body'),
      $nav = $('.navbar'),
      $window = $(window),
      $navOffsetTop = $('.navbar-spacer').offset().top,
      $document = $(document);
  
  $window.on('scroll', function(){
    console.log("nav: " + $navOffsetTop);
    console.log("window: " + $window.scrollTop());
    if($navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')){
      $body.addClass('has-docked-nav');
      $nav.css("display", "block");
    }
    if($navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')){
      $body.removeClass('has-docked-nav');
      $nav.css("display", "none");
    }
  });
});