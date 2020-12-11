(function ($) {
   'use strict';
 
 
 
   // modal video
   $('.videoplay').modalVideo();
 
   // hero slider
   $(window).on('load', function () {
     var menu = [];
    
 
     var interleaveOffset = 0.5;
    
 
     var swiper = new Swiper('.swiper-container-horizontal', swiperOptions);
 

     // Testimonial Slider
     var myswiper = new Swiper('#testimonial-slider', {
       slidesPerView: 1,
       
       pagination:false,
       autoplay: false,
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
      
       breakpoints: {
       
       
         1024: {
          
           pagination:false,
         },
         768: {
           navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
           },
           pagination:false,
         },
         640: {
           pagination: {
             el: '.swiper-pagination',
             type: 'bullets',
             clickable: true,
           },
           navigation: false,
         },
         320: {
           pagination: {
             el: '.swiper-pagination',
             type: 'bullets',
             clickable: true,
           },
           navigation: false,
         }
       }
       
     });
 
   });
 

 

 
 
 
 
   // animate on scroll
   AOS.init({
     once: true
   });
 
 })(jQuery);
 
 

 
 
 
   