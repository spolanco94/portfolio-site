$(document).ready(function() {
  let $body = $('body'),
      $nav = $('.navbar'),
      $window = $(window),
      $navOffsetTop = $('.navbar-spacer').offset().top,
      $form = $('#contact-me')
      $document = $(document);
  
  $window.on('scroll', function(){
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

const form = document.getElementById('contact-me');

document.addEventListener('DOMContentLoaded', function() {
  console.log('Document Ready');
});

