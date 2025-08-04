$('.course-carousel').owlCarousel({
   loop: true,
   margin: 10,
   dots: false,
   nav: true,
   mouseDrag: false,
   autoplay: true,
   autoWidth: false,
   autoplayTimeout: 6500,
   smartSpeed: 450,
   navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
   ],

   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 3
      }
   }
});

$('.testimonials').owlCarousel({
   loop: true,
   margin: 25,
   dots: false,
   nav: true,
   mouseDrag: false,
   autoplay: true,
   autoWidth: false,
   autoplayTimeout: 6500,
   smartSpeed: 450,

   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 3
      }
   }
});
