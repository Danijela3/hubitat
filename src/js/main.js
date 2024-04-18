import '../sass/style.scss';

// Code to be executed when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  
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
} );


/* slick slider */


$(document).ready(function(){
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
});


$(document).ready(function(){
  $('.gallery-slider').slick({
    centerMode: true,
    // centerPadding: '60px',
    infinite: true,
    slidesToShow: 1,
    arrows: false,
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
});










}); 