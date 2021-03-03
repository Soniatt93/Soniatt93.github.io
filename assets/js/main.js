!(function ($) {
  "use strict";

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Home typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 2000
    });
  }

  // Navigation active state on scroll
  $(document).ready(function () {
    $('html, body').scrollspy({ target: ".navbar", offset: 52 });
    //$('html, body').animate({ scrollTop: section.scrollTop() }, 2000);
  });
  //hide the url hash
  window.onhashchange = function () { window.history.pushState('', document.title, window.location.pathname) }
  //hide collapse navbar on click
  $('.navbar-nav>li>a').on('click', function () {$('.navbar-collapse').collapse('hide');});
  //scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.navbar-collapse a, .navbar-nav>li>a, scrollto', function (e) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      var scrollto = target.offset().top - scrolltoOffset;
      if ($(this).attr("href") == '#header') {
        scrollto = 0;
      }
      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');
    }
  });

  //navbar porfolio
  $(function () {
    var bar = '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
      '<a class="navbar-brand" href="#"><img src="../assets/img/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="logo"> Sonia Torres</a>' +
      '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>' +
      '<div class="collapse navbar-collapse" id="navMenu">' +
      '<ul class="navbar-nav ml-auto">' +
      '<li class="nav-item"><a class="nav-link" href="../"><i class="bx bxs-home"></i> Home</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="../#about"><i class="bx bxs-user"></i> About</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="../#skills"><i class="bx bxs-collection"></i> Skills</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="../#resume"><i class="bx bxs-file"></i> Resume</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="../#portfolio"><i class="bx bxs-dashboard"></i> Portfolio</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="../#services"><i class="bx bxs-briefcase"></i> Services</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="../#contact"><i class="bx bxs-envelope"></i> Contact</a></li>' +
      '</ul></div></nav>';

    $("#navbarPortfolio").html(bar);
    var id = getValueByName("id");
    $("#" + id).addClass("active");
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { $('.back-to-top').fadeIn('slow'); } else { $('.back-to-top').fadeOut('slow'); }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 1000 });

  // Resume section - Languages
  $('.languages-content').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '80%' });

  // Init AOS
  function aos_init() { AOS.init({ duration: 1000, once: true }); }

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({ itemSelector: '.portfolio-item' });
    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
      aos_init();
    });
    // Initiate venobox (lightbox feature used in portofilo)
    $('.venobox').venobox({ 'share': false });
    // Initiate aos_init() function
    aos_init();
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({ autoplay: true, dots: true, loop: true, items: 1 });
  // Owl Carousel Services
  $('.services-carousel').owlCarousel({
    autoplay: true, loop: true, margin: 20, dots: true, nav: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      900: { items: 4 }
    }
  });

})(jQuery);