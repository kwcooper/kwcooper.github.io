$(document).ready(function() {
  "use strict";
  // Scroll to top
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Smooth scroll
  $('a.scroll-to').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 700);
    event.preventDefault();
  });
  
  // Highlight effect
  $('.site-testimonial-item').on('mouseenter', function(){
    $('.site-testimonial-item').addClass('inactive');
    $(this).removeClass('inactive').addClass('active');
  });
  $('.site-testimonial-item').on('mouseleave', function(){
    $('.site-testimonial-item').removeClass('inactive');
    $('.site-testimonial-item').removeClass('active');
  });
  
  $('.site-news-item').on('mouseenter', function(){
    $('.site-news-item').addClass('inactive');
    $(this).removeClass('inactive').addClass('active');
  });
  $('.site-news-item').on('mouseleave', function(){
    $('.site-news-item').removeClass('inactive');
    $('.site-news-item').removeClass('active');
  });
  
  $('.site-contact-icon').on('mouseenter', function(){
    $('.site-contact-icon').addClass('inactive');
    $(this).removeClass('inactive').addClass('active');
  });
  $('.site-contact-icon').on('mouseleave', function(){
    $('.site-contact-icon').removeClass('inactive');
    $('.site-contact-icon').removeClass('active');
  });
  
});

// dynamic navbar
$(window).on('scroll', function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 80) {
    $('.site-navigation').addClass('nav-bg');
    // Change navbar link color
    var x = document.getElementsByClassName("nav-link");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "Black";
    }
  } else {
    $('.site-navigation').removeClass('nav-bg');
    // change navbar link color
    var x = document.getElementsByClassName("nav-link");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "gray";
    }
  }
});

