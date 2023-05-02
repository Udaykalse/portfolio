// Smooth scrolling
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  
  // Form submission
  $('form').on('submit', function(event) {
    event.preventDefault();
    // Submit the form using AJAX here
  });
  