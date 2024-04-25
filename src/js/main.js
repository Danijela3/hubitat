import '../sass/style.scss';
/*
 *  javascript
 */
// Code to be executed when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {

  // console.log(window.screen.width); 

  /*
  *
  *  Mobile nav
  *
  */
  const hamburgerBtn = document.getElementById("hamburger");

  let html = document.getElementsByTagName('html')[0];

  hamburgerBtn.addEventListener("click", () => {

    // hamburgerBtn.classList.toggle('change');
    document.getElementById("navigation").classList.toggle("change");
    // document.getElementById("mobile-navigation").classList.add("change");
    html.classList.toggle("no-scroll");
  });



  AOS.init(
    {
      once: true
    }
  );

  window.addEventListener("load", AOS.refresh);



});

/*
 *  javascript 
 *   drugi nacin za document ready
 */
// (function () {

// })();





/*
 *  jquery
 */
$(document).ready(function () {



  /* slick slider */
  $('.testimonial-slider').slick({
    centerMode: true,
    // centerPadding: '60px',
    infinite: false,
    slidesToShow: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });




  $('.gallery-slider').slick({
    centerMode: true,
    // centerPadding: '60px',
    infinite: true,
    slidesToShow: 1,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><img src='dist/img/img-home/arrow-right-light.svg'></button>",
    nextArrow: "<button type='button' class='slick-next'><img src='dist/img/img-home/arrow-right-light.svg'></button>",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          variableWidth: false,
        }
      }

    ]
  });



  $('.hamburger').click(function () {
    $(this).toggleClass('active');
  });


});




