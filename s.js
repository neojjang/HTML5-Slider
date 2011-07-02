// Animation listeners
document.getElementById('slides_wrapper').addEventListener( 'webkitAnimationEnd', function( event ) {
  $('#slides_wrapper').removeClass('first-slide-nogo');
}, false );
document.getElementById('slides_wrapper').addEventListener( 'animationend', function( event ) {
  $('#slides_wrapper').removeClass('first-slide-nogo');
}, false );

// Go to next slide
function nextSlide() {
  var current = $('.current').attr('id');
  
  if ($('#' + current).hasClass('lastslide')) { // We're at the last slide: be kind, rewind!
    $('#slides_wrapper').attr('class', 'slide-1');
    $('.current').removeClass('current');
    $('.firstslide').addClass('current');
    return;
  }
  var next = $('#' + current).next();
  $('#' + current).removeClass('current');
  next.addClass('current');
  $('#slides_wrapper').attr('class', next.attr('id'));
}

// Go back to previous slide
function prevSlide() {
  var current = $('.current').attr('id');
  
  if (current == "slide-1") {
    $('#slides_wrapper').addClass('first-slide-nogo');
    return; // This is the first slide, there is no going back.
  }
    
  var prev = $('#' + current).prev();
  $('#' + current).removeClass('current');
  prev.addClass('current');
  $('#slides_wrapper').attr('class', prev.attr('id'));
}

$(document).ready(function() {
  // We're setting the state of the slider as a class
  $('#slides_wrapper').addClass('slide-1');
  
  // First slide .current marker
  $('.slide').first().addClass('current');
  
  // Bind events to displayed slide
  $('.slide').bind("click", function() {
    nextSlide();
  }).tap(function(e) {
    e.preventDefault();
    nextSlide();
  }).swipeRight(function(e) {
    e.preventDefault();
    prevSlide();
  }).swipeLeft(function(e) {
    e.preventDefault();
    nextSlide();
  }).bind('touchstart', function(e) {
    e.preventDefault();
  });
});

// Support for keyboard arrows
document.onkeydown = function(e) {
  if (e.keyCode == 37) { 
    prevSlide();
  }
  if (e.keyCode == 39) { 
    nextSlide();
  }
}