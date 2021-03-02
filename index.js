const jsSlider = document.querySelectorAll(".js-slider");

// 스와이프 한계를 검사
function checkLimit(value, limit) {
  if ( value > 0 ) {
    return 0;
  } else if ( value < limit ){
    return limit;
  } else {
    return value;
  }
}

// 스와이프 구동
function setPosition( event ) {
  let xPosition;
  let currentList = event.currentTarget.querySelector(".js-slider__list");
  let jsSliderMaxWidth = ( currentList.childElementCount * 300 - 800 ) * -1;

  if(currentList.style.left) {
    xPosition = parseInt(currentList.style.left.replace("px", ""));
    currentList.style.left = checkLimit(xPosition - event.deltaX, jsSliderMaxWidth) + "px";
  } else {
    xPosition = 0;
    currentList.style.left = checkLimit(xPosition - event.deltaX, jsSliderMaxWidth) + "px";
  }
}

function init() {
  let list;
  jsSlider.forEach( function(slider, index) {
    slider.addEventListener("wheel", setPosition);


    //jsSliderMaxWidth.push( (list.childElementCount * 300 - 800 ) * -1);
  })
}

if (jsSlider){
  init();
}
