/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");

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
      once: true,
      duration: 600,
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





}();
/******/ })()
;
//# sourceMappingURL=main.js.map