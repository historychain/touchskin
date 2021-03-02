const jsSlider = document.getElementById("js-slider");
const jsSliderList = jsSlider.querySelector(".js-slider__list");
const jsSliderMaxWidth = (jsSliderList.childElementCount * 300 - 800) * -1;

function checkLimit(value) {

  if ( value > 0 ) {
    return 0;
  } else if ( value < jsSliderMaxWidth ){
    return jsSliderMaxWidth;
  } else {
    return value;
  }
}

function setPosition(event) {
  let xPosition;

  if(jsSliderList.style.left) {
    xPosition = parseInt(jsSliderList.style.left.replace("px", ""));
    jsSliderList.style.left = checkLimit(xPosition - event.deltaX) + "px";
  } else {
    xPosition = 0;
    jsSliderList.style.left = checkLimit(xPosition - event.deltaX)+ "px";
  }
}

function init() {
  jsSlider.addEventListener("wheel", setPosition);
}

init();