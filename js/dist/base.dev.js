"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* -------------------------------------------------------------------------- */

/*                               PAGE TRANSITION                              */

/* -------------------------------------------------------------------------- */
//recover the page transition 1
var divTransition = document.getElementsByClassName("page-transition"); //recover the page transition 2

var firstDivTransition = document.getElementById("page-transition-intro"); //recover the logo

var logoTransition = document.getElementsByClassName("logo-transition"); //select all the line

var logoTSvg = document.querySelector(".line"); //recover the path

var logoTransitionPath = document.querySelectorAll(".line path"); //recover the link

var linkTranstion = document.getElementsByClassName("link-transition"); //recover the global wrapper

var globalWrapper = document.getElementsByClassName("wrapper"); //intro transition

var divTransitionIntro = document.getElementsByClassName("page-transition-intro"); //call the function

linkTransitionListener(); //when state is redy hide the preloader

document.onreadystatechange = function () {
  //when document is complete
  if (document.readyState == "complete") {
    //add animation in order to translate the preloader
    firstDivTransition.style.cssText = "animation: pageTransitionReverse 1s cubic-bezier(0.61, 0.12, 0.07, 0.92) forwards;";
  }
};
/* -------------------------------- function -------------------------------- */
//function that add event to all link


function linkTransitionListener() {
  for (var i = 0; i < linkTranstion.length; i++) {
    linkTranstion[i].addEventListener("click", checkIndex);
  }
} //the function check wich index is target after click


function checkIndex(event) {
  //check the index
  var indexLink = Array.from(linkTranstion).indexOf(event.target); //loop inside the array

  var _loop = function _loop(i) {
    //display the div after the click
    divTransition[i].style.display = "flex"; //when animation of preloader end

    divTransition[i].addEventListener("animationend", function () {
      //display the logo
      logoTransition[i].style.display = "flex"; //when animation of logo end

      logoTransitionPath[i].addEventListener("animationend", function () {
        //go to the page depending on index of the link and his data-link in html
        var hrefPage = linkTranstion[indexLink].dataset.link; //go to the href

        window.location.href = hrefPage;
      });
    });
  };

  for (var i = 0; i < divTransition.length; i++) {
    _loop(i);
  }
}
/* -------------------------------------------------------------------------- */

/*                                 BURGER MENU                                */

/* -------------------------------------------------------------------------- */
// recover the button


var burgerButton = document.getElementsByClassName("span-burger"); // recover the span

var span = document.getElementsByClassName("burger"); //recover burger to slide

var slideMenu = document.getElementsByClassName("burger-slide"); //recover logo

var logo = document.getElementById("Logo-img"); //recover the svg path

var logoPath = logo.querySelectorAll(".line path"); //recover the path

var pathToFill = document.getElementById("path-tofill"); // recover logo text

var spanName = document.getElementById("name"); //recover the line

var spanLine = document.getElementById("line-nav"); // add action to span element

burgerButton[0].addEventListener("click", burgerSlide, false);
/* -------------------------------------------------------------------------- */

/*                                NAV ON SCROLL                               */

/* -------------------------------------------------------------------------- */
//recover main nav

var mainNav = document.getElementsByClassName("mainnav"); //listern on scrool add background to nav

window.addEventListener("scroll", function () {
  //the target nav has main color bk
  mainNav[0].style.cssText = "background-color:#101111;";
});
/* -------------------------------- function -------------------------------- */
//function tha slide in the burger menu

function burgerSlide() {
  //target the menu and give him the css animation
  slideMenu[0].style.cssText = "animation: burger 1s cubic-bezier(1,-0.19,.15,1.19) forwards;"; //remove the listener to span

  burgerButton[0].removeEventListener("click", burgerSlide, false); //add listener to close the menu

  burgerButton[0].addEventListener("click", burgerSlideReturn, false); //change color of logo

  setTimeout(function () {
    changeColorLogo();
  }, 500);
} //function tha slide in the burger menu


function burgerSlideReturn() {
  //add css animation
  slideMenu[0].style.cssText = "animation: burgerReverse 1s cubic-bezier(1,-0.19,.15,1.19) forwards;"; // add action to span element

  burgerButton[0].removeEventListener("click", burgerSlideReturn, false); //add again default click to open the burger menu

  burgerButton[0].addEventListener("click", burgerSlide, false); //change color and transform span to burger menu

  setTimeout(function () {
    //give the white color to the svg logo path
    for (var i = 0; i < logoPath.length; i++) {
      logoPath[i].setAttribute("style", "fill:none;stroke:white;stroke-miterlimit:10;stroke-width:3.123080248673974px");
    } //transform span


    span[0].style.cssText = "transform: rotate(0deg);background-color:white"; //transform span

    span[2].style.cssText = "transform: rotate(0deg);background-color:white"; //show again the span in the middle

    span[1].style.cssText = "opacity:1;"; //color white

    spanName.style.cssText = "color:white;"; //color white

    spanLine.style.cssText = "color:white;";
  }, 600);
} //function that change the color of logo and transform the span into x


function changeColorLogo() {
  //change all path color
  for (var i = 0; i < logoPath.length; i++) {
    logoPath[i].setAttribute("style", "fill:none;stroke:black;stroke-miterlimit:10;stroke-width:3.123080248673974px");
  } //rotate the span


  span[0].style.cssText = "transform: rotate(45deg) translate(-5px, -4px);background-color:#101111"; //rotate the span

  span[2].style.cssText = "transform: rotate(-45deg) translate(0px, -1px);background-color:#101111"; //hide the span

  span[1].style.cssText = "opacity:0;"; //color black to span

  spanName.style.cssText = "color:black;";
  spanLine.style.cssText = "color:black;";
} //when menu slide back change color


function changeColorLogoReverse() {
  for (var _i = 0; _i < logoPath.length; _i++) {
    //change color of all the path svg
    logoPath[_i].setAttribute("style", "fill:none;stroke:white;stroke-miterlimit:10;stroke-width:3.123080248673974px");
  } //add white color to span


  for (var i = 0; i < span.length; i++) {
    span[i].style.cssText = "background-color: white;";
  }
}
/* -------------------------------------------------------------------------- */

/*                               PAGE HOME                                    */

/* -------------------------------------------------------------------------- */
// recover the div for start the function for the homepage


var home = document.getElementById("wrapper_home"); //if the page is the home page

if (home) {
  /* -------------------------------- function -------------------------------- */
  //function--->translate size of screen
  var slideShow = function slideShow() {
    // If media query matches so screen is desktop
    if (x.matches) {
      /* --------------------------- function to resize --------------------------- */
      //reset the carousel
      var myScriptX = function myScriptX() {
        // recover again to prevent bug on
        var windowSize = document.documentElement.clientWidth;
        carouselSlide.style.transform = "translateX(" + -windowSize + "px)";
        counter = 1;
      }; // if screen is mobile


      // know how much we have to slide
      var windowSize = document.documentElement.clientWidth; // move one picture

      carouselSlide.style.transform = "translateX(" + -windowSize * counter + "px)"; //call the function to start the carousel

      carouselTranslate(document.documentElement.clientWidth, "translateX("); // move one picture because the picture are 100% width and counter is one

      carouselSlide.style.transform = "translateX(" + -windowSize * counter + "px)";
      anime.timeline({
        loop: false
      }).add({
        targets: ".ml12 .letter",
        translateX: [800, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function delay(el, i) {
          return 500 + 30 * i;
        }
      });
      anime.timeline({
        loop: false
      }).add({
        targets: ".ml16 .letter",
        translateX: [800, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function delay(el, i) {
          return 500 + 30 * i;
        }
      }); // to prevent bad window size so the images will be at the wrong place if screem chaneg size

      window.addEventListener("resize", myScriptX);
      window.addEventListener("wheel", function (event) {
        var delta = event.deltaY / 100000;
        testzoom += delta;
        console.info(testzoom);

        if (testzoom >= 0) {
          for (var i = 0; i < zoomWheel.length; i++) {
            zoomWheel[i].style.cssText = "transform:scale(" + (1 + testzoom) + ")";
          }
        } else {
          return;
        }
      });
    } else {
      /* --------------------------- function to resize --------------------------- */
      //reset the carousel
      var myScriptY = function myScriptY() {
        var windowSizeH = document.documentElement.clientHeight;
        carouselSlide.style.transform = "translateY(" + -windowSizeH + "px)";
        counter = 1;
      };

      //we want to translate the height
      var windowSizeH = document.documentElement.clientHeight; // move one picture

      carouselSlide.style.transform = "translateY(" + -windowSizeH * counter + "px)";
      anime.timeline({
        loop: false
      }).add({
        targets: ".ml12 .letter",
        translateX: [400, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function delay(el, i) {
          return 300 + 30 * i;
        }
      }); //call the function to start the carousel

      carouselTranslate(document.documentElement.clientHeight, "translateY("); //on resize

      window.addEventListener("resize", myScriptY);
    }
    /* -------------------------------- anime js -------------------------------- */
    //animate logo


    logoAnime(".sphere-animation2", ".Layer_1 path"); //animate logo clone

    logoAnime(".sphere-animation", ".Layer_1 path");
  }; //@parameter size--> client width or height -->document.documentElement.clientWidth
  //@parameter translate--->"translateX(" or "translateY("
  //function--->translate size of screen


  var carouselTranslate = function carouselTranslate(size, translate) {
    //recover again for ios oterwhise don'twork
    var counter = 1; //recover again to prevent bug on ios device

    var carouselSlide = document.querySelector(".carousel-slide"); //recover again to prevent bug on ios device

    var carouselImages = document.getElementsByClassName("slide"); // recover button prev

    var prevBtn = document.getElementsByClassName("prev"); //recover button netx

    var nextBtn = document.getElementsByClassName("next"); // button listener

    nextBtn[0].addEventListener("click", function () {
      if (counter >= carouselImages.length - 1) {
        return;
      } // recover again the window size to prevent bug on ios


      var windowSize = size; // add a transition style

      carouselSlide.style.transition = "transform 1s cubic-bezier(1,-0.19,.15,1.19)"; // counter plus onedu fron

      counter++; // translate x or y

      carouselSlide.style.transform = translate + -windowSize * counter + "px)"; // if screen is desktop

      if (x.matches) {
        //animate the text of first slide and his clone
        animateTextX(".ml1" + (counter + 1) + " .letter");
        animateTextX(".ml1" + (counter + 1) + " .letter"); //condition for first clone and last clone slide

        if (counter + 1 === 5) {
          animateTextX(".ml1" + (counter + 1) + " .letter");
          animateTextX(".ml11  .letter");
        } else if (counter + 1 === 1) {
          animateTextX(".ml1" + (counter + 1) + " .letter");
          animateTextX(".ml15  .letter");
        } else if (counter + 1 === 2) {
          animateTextX(".ml1" + (counter + 1) + " .letter");
          animateTextX(".ml16  .letter");
        } else if (counter + 1 === 6) {
          animateTextX(".ml12" + (counter + 1) + " .letter");
          textWrapper.style.cssText = "visibility:hidden;";
        } //if screen is mobile or ipad animate text on y axe

      } else {
        animateTextY(".ml1" + (counter + 1) + " .letter");
      } //reset img size


      resetScale();
    }); //add event to this button

    prevBtn[0].addEventListener("click", function () {
      //if we have negative coununter
      if (counter <= 0) {
        //stop the function
        return;
      } // recover again the window size to prevent bug on ios


      var windowSize = size; //add transition style

      carouselSlide.style.transition = "transform 1s cubic-bezier(1,-0.19,.15,1.19)"; //counter minus one

      counter--; //and translate the x

      carouselSlide.style.transform = translate + -windowSize * counter + "px)"; //animate text
      // if screen is desktop x axe

      if (x.matches) {
        animateTextX(".ml1" + (counter + 1) + " .letter");

        if (counter + 1 === 5) {
          animateTextX(".ml1" + (counter + 1) + " .letter");
          animateTextX(".ml11  .letter");
        } else if (counter + 1 === 2) {
          animateTextX(".ml1" + (counter + 1) + " .letter");
          animateTextX(".ml16  .letter");
        } else if (counter + 1 === 1) {
          animateTextX(".ml1" + (counter + 1) + " .letter");
          textWrapper4.style.cssText = "visibility:hidden;";
        }
      } else {
        animateTextY(".ml1" + (counter + 1) + " .letter");
      } //reset img size


      resetScale();
    }); // event end with listener when transition end reset the transition

    carouselSlide.addEventListener("transitionend", function () {
      // if the images at index counter so the laste one or the first one
      if (carouselImages[counter].id === "lastclone") {
        // recover again the window size to prevent bug on ios
        var _windowSize = size; //if we are at the of the image we want to remove the transition and jump back to the first image

        carouselSlide.style.transition = "none"; // update the counter

        counter = carouselImages.length - 2; // and the we transform

        carouselSlide.style.transform = translate + -_windowSize * counter + "px)";

        if (x.matches) {} else {
          animateTextY(".ml1" + counter + " .letter");
        }
      } // if we are at the beginning


      if (carouselImages[counter].id === "firstclone") {
        // recover again the window size to prevent bug on ios
        var _windowSize2 = size; //if we are at the of the image we want to remove the transition and jump back to the first image

        carouselSlide.style.transition = "none"; // update the counter

        counter = carouselImages.length - counter; // and the we transform to go back to first one

        carouselSlide.style.transform = translate + -_windowSize2 * counter + "px)";

        if (x.matches) {} else {
          animateTextY(".ml1" + counter + " .letter");
        }
      }
    });
  }; //@parameter index--> depending whic slide is target
  //function--->call anime js function to animate


  var animateTextY = function animateTextY(index) {
    anime.timeline({
      loop: false
    }).add({
      targets: index,
      translateY: [400, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function delay(el, i) {
        return 300 + 30 * i;
      }
    });
  }; //@parameter index--> depending whic slide is target
  //function--->call anime js function to animate


  var animateTextX = function animateTextX(index) {
    anime.timeline({
      loop: false
    }).add({
      targets: index,
      translateX: [800, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function delay(el, i) {
        return 500 + 30 * i;
      }
    });
  }; //function--->reset size of img


  var resetScale = function resetScale() {
    // on click reset the zoom var
    testzoom = 0; // scale img on original size

    setTimeout(function () {
      for (var i = 0; i < zoomWheel.length; i++) {
        zoomWheel[i].style.cssText = "transform:scale(1)";
      }
    }, 500);
  };

  /* ----------------------------- recover the var ---------------------------- */
  //recover carousel container
  var carouselSlide = document.querySelector(".carousel-slide"); // recover images

  var carouselImages = document.getElementsByClassName("slide"); //wheel event

  var zoomWheel = document.getElementsByClassName("wheelImg"); //var to increase with wheel event

  var testzoom = 0; // counter for slideshow

  var counter = 1;
  /* ------------------------------- media query ------------------------------ */
  //js media query desktop and tablet

  var x = window.matchMedia("(min-width: 1024px)"); // recover the window size

  var windowSize = document.documentElement.clientWidth;
  /* ----------------------------- text animation ----------------------------- */
  // Wrap every letter in a span of h1,h2

  var textWrapper = document.querySelector(".ml12");
  var textWrapper2 = document.querySelector(".ml13");
  var textWrapper3 = document.querySelector(".ml14");
  var textWrapper4 = document.querySelector(".ml15");
  var textWrapper5 = document.querySelector(".ml16");
  var textWrapper6 = document.querySelector(".ml11"); //regex to replace the html text into span and br

  textWrapper.innerHTML = textWrapper.textContent.replace(/\S{8,}/g, "<span class='letter'>$&<br>");
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S{2}\s\S{7}/, "<span class='letter'>$&<br>");
  textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S{2}\s\S{5}/, "<span class='letter'>$&<br>");
  textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S{2}\s\S{6}/g, "<span class='letter'>$&<br>");
  textWrapper5.innerHTML = textWrapper5.textContent.replace(/\S{8,}/g, "<span class='letter'>$&<br>");
  textWrapper6.innerHTML = textWrapper6.textContent.replace(/\S{2}\s\S{5}/, "<span class='letter'>$&<br>");
  /* -------------------- listener to resize to prevent bug ------------------- */
  // add listener because of different translate in different screen, prevent bug when screen switch fro portrait
  //to landscape

  window.addEventListener("resize", function () {
    //resize if windwo size is smaller tha 1024
    if (windowSize <= 1024) {
      //reload to homepage
      location.href = "index.html";
      return false;
    } else {
      //reload the home page
      location.href = "index.html";
      return false;
    }
  }); //call the slideshow function

  slideShow();
}
/* -------------------------------------------------------------------------- */

/*                               PAGE PORTFOLIO                               */

/* -------------------------------------------------------------------------- */
//recover main


var mainPortfolio = document.getElementById("portfolio"); //var back potfolio

var backPortfolio = document.getElementById("back__portfolio"); //var main portfolio

var frontPortfolio = document.getElementById("portfolio__main__mobile"); //if the page is the portfolio page

if (mainPortfolio) {
  //var for desktop screen
  var x = window.matchMedia("(min-width: 1024px)"); //var for mobile screen

  var y = window.matchMedia("(min-width: 768px)"); //recover the div to scroll

  var divToscroll = document.getElementById("portfolio"); // recover backslider

  var backPortfolio = document.getElementById("back__portfolio"); //recover the project in fron porfolio

  var frontproject = document.getElementsByClassName("project"); //At the beginning we set this flag as false. If we can detect the device is a mobile device in the next line, then we set it as true.

  var deviceIsMobile = false; //if devise is mobile device is mobile=true conditions find on stack overflow

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    deviceIsMobile = true;
  } //if we use desktop or smaller desktop but not a table


  if ((x.matches || y.matches) && deviceIsMobile === false) {
    /* -------------------------------- function -------------------------------- */
    var scrollBack = function scrollBack() {
      var _loop2 = function _loop2(i) {
        //on mouse over translate the back portfolio
        frontproject[i].addEventListener("mouseover", translateXBack); //on mouse out remevo the event

        frontproject[i].addEventListener("mouseout", removeTranslate);

        function translateXBack() {
          // translate the back depending on i
          backPortfolio.style.transform = "translateX(" + -i * 10 + "%)"; // add animation to the transition

          backPortfolio.style.transition = "transform 0.5s cubic-bezier(1,-0.19,.15,1.19)";
        }

        function removeTranslate() {
          //remove the event
          document.removeEventListener("mouseover", translateXBack);
        }
      };

      //give event to all project div
      for (var i = 0; i < frontproject.length; i++) {
        _loop2(i);
      }
    };

    // add css propety to back portfolio
    back__portfolio.style.cssText = "overflow-y: visible;background-color:#101111;width:300%;overflow-x: auto;position: fixed;opacity:1;"; //we need overflow y to scroll on x because the scroll is reversed

    mainPortfolio.style.cssText = "overflow-y: visible;";
    /* ------------ script found on stackoverflow to prevent default error ------------ */

    var eventListenerOptionsSupported = function eventListenerOptionsSupported() {
      var supported = false;

      try {
        var opts = Object.defineProperty({}, "passive", {
          get: function get() {
            supported = true;
          }
        });
        window.addEventListener("test", null, opts);
        window.removeEventListener("test", null, opts);
      } catch (e) {}

      return supported;
    };

    var defaultOptions = {
      passive: false,
      capture: false
    };
    var supportedPassiveTypes = ["scroll", "wheel", "touchstart", "touchmove", "touchenter", "touchend", "touchleave", "mouseout", "mouseleave", "mouseup", "mousedown", "mousemove", "mouseenter", "mousewheel", "mouseover"];

    var getDefaultPassiveOption = function getDefaultPassiveOption(passive, eventName) {
      if (passive !== undefined) return passive;
      return supportedPassiveTypes.indexOf(eventName) === -1 ? false : defaultOptions.passive;
    };

    var getWritableOptions = function getWritableOptions(options) {
      var passiveDescriptor = Object.getOwnPropertyDescriptor(options, "passive");
      return passiveDescriptor && passiveDescriptor.writable !== true && passiveDescriptor.set === undefined ? Object.assign({}, options) : options;
    };

    var overwriteAddEvent = function overwriteAddEvent(superMethod) {
      EventTarget.prototype.addEventListener = function (type, listener, options) {
        var usesListenerOptions = _typeof(options) === "object" && options !== null;
        var useCapture = usesListenerOptions ? options.capture : options;
        options = usesListenerOptions ? getWritableOptions(options) : {};
        options.passive = getDefaultPassiveOption(options.passive, type);
        options.capture = useCapture === undefined ? defaultOptions.capture : useCapture;
        superMethod.call(this, type, listener, options);
      };

      EventTarget.prototype.addEventListener._original = superMethod;
    };

    var supportsPassive = eventListenerOptionsSupported();

    if (supportsPassive) {
      var addEvent = EventTarget.prototype.addEventListener;
      overwriteAddEvent(addEvent);
    }
    /* ------------------------------- */
    //call to function that activate the scroll on the back portfolio


    scrollBack(); //add listener to scroll transform scroll form vertical to horizontal

    divToscroll.addEventListener("wheel", function (e) {
      if (e.type != "wheel") {
        return;
      }

      var delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1;
      delta = delta * -50; // the delta y is transomed to left scrool

      document.documentElement.scrollLeft -= delta; // safari needs also this

      document.body.scrollLeft -= delta; //the cancelable attribute value is true, and while executing a listener for the event with passive set to false

      e.preventDefault();
    });
  } // If media query matches and device is mobile
  else if (y.matches || x.matches && deviceIsMobile === true) {
      // portfolio y hide
      mainPortfolio.style.cssText = "overflow-y: hidden;"; //reset the slider to prevent bug

      var windowSize = document.documentElement.clientWidth; // on resize reload the page this is important if we switch between portrait to landscape on ipad we don't need the scroll back with mouse

      window.addEventListener("resize", function () {
        if (windowSize <= 1024) {
          //reload the page
          location.href = "porfolio.html";
          return false;
        } else {
          location.href = "porfolio.html";
          return false;
        }
      });
    }
}
/* -------------------------------------------------------------------------- */

/*                                PROJECT PAGE                                */

/* -------------------------------------------------------------------------- */
// recover for all standard project pages


var projectPage = document.getElementById("project__page"); //various project

var projectPageVarious = document.getElementById("various__project__page"); // if the page is a project page standard

if (projectPage) {
  //recover next and prev button
  var nexProj = document.getElementsByClassName("next_proj"); //recover next and prev button

  var prevProj = document.getElementsByClassName("prev_proj"); //recover the thumb

  var thumb = document.getElementsByClassName("cursor"); //recover the container

  var container = document.getElementsByClassName("container"); //the index for slide is 1

  var slideIndex = 1; //add event to button

  nexProj[0].addEventListener("click", plusSlides); //add event to button

  prevProj[0].addEventListener("click", minusSlides); //call the fucntion to show slide number 1

  showSlidesThumb(slideIndex); //call the thumb control

  currentSlide();
} //if the page is the various project page
else if (projectPageVarious) {
    //the function will open the lightbox
    var openModal = function openModal() {
      //display the lightbox
      lightbox.style.display = "flex"; //depending on lenght create the div for img

      for (var i = 0; i < arrToshow.length; i++) {
        var div = document.createElement("div");
        div.classList.add("mySlides");
        containerLightBox.appendChild(div);
        var img = document.createElement("img");
        div.appendChild(img);
        img.src = arrToshow[i].firstElementChild.currentSrc;
        currentSlideVarious(this.dataset.index);
      }
    };

    var closeModal = function closeModal() {
      //lightbox disply none
      document.getElementById("myModal").style.display = "none"; //empty the array

      for (var i = 0; i < arrToshow.length; i++) {
        containerLightBox.innerHTML = "";
      }
    }; // Thumbnail image controls


    var currentSlideVarious = function currentSlideVarious(n) {
      showSlides(slideIndex = n);
    };

    //recover all the button
    var btn = document.querySelectorAll(".category button"); // recover the div containig the img

    var product = document.querySelectorAll(".itembox");
    var productImg = document.querySelectorAll(".itembox img"); //recover the lightbox

    var lightbox = document.getElementById("myModal"); //recover the container for lightbox

    var containerLightBox = document.getElementById("modal-content"); //close modal

    var closeBan = document.getElementsByClassName("close"); //recover next and prev button

    var nexProj = document.getElementsByClassName("next_proj"); //recover next and prev button

    var prevProj = document.getElementsByClassName("prev_proj"); //the index for slide is 1

    var slideIndex = 1; //create empty array

    var arrToshow = [];
    /* -------------------------------- listener -------------------------------- */
    // add event to close the light box

    closeBan[0].addEventListener("click", closeModal); //add event to button

    nexProj[0].addEventListener("click", plusSlides); //add event to button

    prevProj[0].addEventListener("click", minusSlides); //for each button

    btn.forEach(function (item) {
      // remove active class from all button
      item.addEventListener("click", function () {
        for (var i = 0; i < btn.length; i++) {
          btn[i].classList.remove("active");
        } //but on click dd the active class


        item.classList.add("active"); //for each click reset the arra to show

        arrToshow = []; //show product fo each

        product.forEach(function (pic) {
          //display none by default
          pic.style.display = "none"; // recover the filter text on lower caser

          var products = item.textContent.toLowerCase(); // the data attribut is === filter text disply this category
          //if all display all the pic

          if (pic.getAttribute("data-att") === products || products === "all") {
            //display the correct img
            pic.style.display = "block"; //push the correct div into the arr

            arrToshow.push(pic); // add index to the div dependi on the lenght of the filter

            for (var _i2 = 0; _i2 <= arrToshow.length; _i2++) {
              pic.dataset.index = _i2;
            }
          }
        });
      });
    }); // for each product when the page is load not on click as upside

    product.forEach(function (pic) {
      //add event for all picture
      pic.addEventListener("click", openModal); //push the picture in the array

      arrToshow.push(pic); // add index to the div dependi on the lenght of the filter

      for (var i = 0; i <= arrToshow.length; i++) {
        pic.dataset.index = i;
      }
    });
  }
/* ------------------------ slidshow function control ----------------------- */
// Next/previous controls


function plusSlides() {
  // increase index
  showSlides(slideIndex += 1);
} // Next/previous controls


function minusSlides() {
  //decrease index
  showSlides(slideIndex -= 1);
} // Thumbnail image controls


function currentSlide() {
  var _loop3 = function _loop3(i) {
    //add listener to thumb
    thumb[i].addEventListener("click", function () {
      //show slide where the parameter is the number of thumb + 1
      showSlides(slideIndex = i + 1);
    });
  };

  // add event to all the thumb to create the lightbox
  //the image coresponding on the thumb will be opened on click
  for (var i = 0; i < thumb.length; i++) {
    _loop3(i);
  }
} // show slide function
//@ param n---> index


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
} //same as show slide but we add the thumb active controls


function showSlidesThumb(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
/* -------------------------------------------------------------------------- */

/*                                CONTACT PAGE                                */

/* -------------------------------------------------------------------------- */


var contactPage = document.getElementById("wrapper_contact");

if (contactPage) {
  // this function will recover all the value from input
  var getValue = function getValue() {
    // creation of array to put the valus
    var newDataForm = []; // for each input recover the value

    dataForm = inputForm.forEach(function (element) {
      // push this value in the form
      newDataForm.push(element.value);
    });
    newDataForm.push(textArea.value); // check for first capital letter and at least one other letter

    var regName = /^[A-Z][a-z]+$/; // if this test is true for the value at index 0

    if (regName.test(newDataForm[0])) {
      // cal the action for the notification
      notif(inputName, true, 0, "nom correct"); // else is false
    } else {
      // call the action for the notification
      notif(inputName, false, 0, "la première lettre doit être majuscule", newDataForm);
    } // test the surname


    if (regName.test(newDataForm[1])) {
      // if this test is true for the value at index 1
      notif(inputSurName, true, 1, "prénom vrai"); //else is false
    } else {
      // call the function for notification
      notif(inputSurName, false, 1, "la première lettre doit être majuscule", newDataForm);
    } // regex for age user could put age from 1 to 199


    var ageExp = /((^[1-9]{1})([0-9]{0,1}$))|((^[1]{1})([0-9]{2}$))/; // if this test is true for the value at index 2

    if (ageExp.test(newDataForm[2])) {
      // call the function for notification
      notif(inputAge, true, 2, "age vrai"); // i have tokeep this console because without this the last if at line 89 don't work?

      console.log(ageExp.test(newDataForm[2]));
    } else {
      notif(inputAge, false, 2, "âge faux", newDataForm);
    } // user can enter a french or swiss mobile or fix numbner as 021 or +41 21 +33 21 or 4121


    var phoneExp = /(^\+?[41]{2})[^0][0-9]{8}$|^0{1}[0-9]{9}$|(^\+?[33]{2})[^0][0-9]{8}$/; // if this test is true for the value at index 3

    if (phoneExp.test(newDataForm[3])) {
      // call the function for notification
      notif(inputPhone, true, 3, "tél vrai");
    } else {
      // call the function for notification
      notif(inputPhone, false, 3, "tél faux", newDataForm);
    } // thise regex test the mail input


    var myMail = /^[a-z0-9][a-z0-9._-]+@[a-z0-9][a-z0-9._-]+\.[a-z]{2,}$/; // if this test is true for the value at index 4

    if (myMail.test(newDataForm[4])) {
      // call the function for notification
      notif(inputMail, true, 4, "mail vrai");
    } else {
      // call the function for notification
      notif(inputMail, false, 4, "mail faux", newDataForm);
    }

    var textAreaExp = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/;

    if (textAreaExp.test(newDataForm[5])) {
      // call the function for notification
      notif(textArea, true, 5, "message validé");
    } else {
      // call the function for notification
      notif(textArea, false, 5, "message invalide", newDataForm);
    } // if all the test are tru send the from


    if (regName.test(newDataForm[0]) === true && regName.test(newDataForm[1]) === true && phoneExp.test(newDataForm[3]) === true && myMail.test(newDataForm[4]) === true && ageExp.test(newDataForm[2]) === true && textAreaExp.test(newDataForm[5]) === true) {
      // display the pop-up
      popUp.style.cssText = "display: flex;"; // back button onclick reload the page

      reloadPage.addEventListener("click", refreshPage);
    } else {//empty else
    }
  }; // function to display the message


  var notif = function notif(input, _boolean, i, string, array) {
    // if true
    if (_boolean) {
      // input border green
      input.style.cssText = "border:4px solid #00b894;"; // message to define

      messageError[i].innerText = string; // color of text

      messageError[i].style.color = "#00b894"; // if the input is empty
    } else if (array[i] === "") {
      // show this message for all the empty input
      messageError[i].innerText = "veuillez rentrer cette valeur"; // blue color

      input.style.border = "4px solid #f9ca24"; //blue color

      messageError[i].style.color = "#f9ca24"; // else if the test is false
    } else {
      //red border
      input.style.border = "4px solid #d63031"; // red color

      messageError[i].style.color = "#d63031"; // text to define it depend from input

      messageError[i].innerText = string;
    }
  }; // this function reload the page after click the back button


  var refreshPage = function refreshPage() {
    window.location.reload();
  };

  /* -------------------------------------------------------------------------- */

  /*                              Recover from dom                              */

  /* -------------------------------------------------------------------------- */
  // recover document input name
  var inputForm = document.querySelectorAll("input"); // var name

  var inputName = document.getElementById("nom"); // recover document input name

  var inputSurName = document.getElementById("surname"); // var phone

  var inputPhone = document.getElementById("phone"); //var mail

  var inputMail = document.getElementById("email"); //var age

  var inputAge = document.getElementById("age"); //var textarea

  var textArea = document.getElementById("message"); // message div

  var messageError = document.getElementsByClassName("message-error"); // recover the pop-up to show in case of all true

  var popUp = document.getElementById("wrapper-pop-up"); // var button to reload

  var reloadPage = document.getElementById("reload"); // array for valu

  var dataName = []; // recover the button

  var button = document.getElementById("submit"); // add event

  button.addEventListener("click", getValue);
  /* -------------------------------------------------------------------------- */

  /*                        function to recover the value                       */

  /* -------------------------------------------------------------------------- */

  logoAnime(".sphere-animation", ".Layer_1 path");
}
/* -------------------------------------------------------------------------- */

/*                                  anime js                                  */

/* -------------------------------------------------------------------------- */


function logoAnime(path, selection) {
  var sphereEl = document.querySelector(path);
  var spherePathEl = sphereEl.querySelectorAll(selection);
  var pathLength = spherePathEl.length;
  var hasStarted = false;
  var aimations = [];
  fitElementToParent(sphereEl);

  function fitElementToParent(el, padding) {
    var timeout = null;

    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, {
        scale: 100
      });
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(anime.set(el, {
        scale: ratio
      }), 10);
    } // resize();
    // window.addEventListener('resize', resize);

  }

  var breathAnimation = anime({
    begin: function begin() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEl[i],
          stroke: {
            value: ["rgba(255,255,255,1)", "rgba(80,80,80,.5)"],
            duration: 1000
          },
          translateX: [8, -16],
          translateY: [4, -8],
          easing: "easeOutQuad",
          autoplay: false
        }));
      }
    },
    update: function update(ins) {
      aimations.forEach(function (animation, i) {
        var percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });
  var shadowAnimation = anime({
    targets: "#sphereGradient",
    x1: "25%",
    x2: "25%",
    y1: "0%",
    y2: "75%",
    duration: 20000,
    easing: "easeOutQuint",
    autoplay: false
  }, 0);

  function init() {
    breathAnimation.play();
    shadowAnimation.play();
  }

  init();
}