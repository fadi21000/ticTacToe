// x o variabels
var srick = document.querySelector(".srick"),
  all_i_ele = document.querySelectorAll("span"),
  xmarkIcon = '<i class="fa-solid fa-xmark"></i>',
  o_markIcon = '<i class="fa-solid fa-o"></i>',
  changeIcons = xmarkIcon;
var numberArray = new Array(all_i_ele.length);
numberArray.fill(null);
var play_button = document.getElementById("play");
all_i_ele.forEach((ele) => ele.addEventListener("click", Add_when_pressing));
play_button.addEventListener("click", playFun);
var audio = new Audio("mouse_click.mp3");
var winnerAudio = new Audio("winner.wav");
function Add_when_pressing(event) {
  var eventElements = event.target,
    getClassElements = eventElements.className,
    selectElement = document.querySelector(`.${getClassElements}`);
  var index_Element = eventElements.dataset.index;

  if (eventElements.innerHTML != "") {
    return;
  }
  if (changeIcons === xmarkIcon) {
    selectElement.innerHTML = xmarkIcon;
    numberArray[index_Element - 1] = "x";
    changeIcons = o_markIcon;
    audio.play();
  } else {
    selectElement.innerHTML = o_markIcon;
    numberArray[index_Element - 1] = "o";
    changeIcons = xmarkIcon;
    audio.play();
  }
  var array_x_o = ["x", "o"];
  var winner;
  for (let index = 0; index < array_x_o.length; index++) {
    let ele = array_x_o[index];

    switch (event.type == "click") {
      // row
      case numberArray[0] === ele &&
        numberArray[1] === ele &&
        numberArray[2] === ele:
        winner = ele;
        srick.classList.add("srick-row-top");
        break;
      case numberArray[3] === ele &&
        numberArray[4] === ele &&
        numberArray[5] === ele:
        winner = ele;
        srick.classList.add("srick-row-center");
        break;
      case numberArray[6] === ele &&
        numberArray[7] === ele &&
        numberArray[8] === ele:
        winner = ele;
        srick.classList.add("srick-row-bottom");
        break;
      // colomn
      case numberArray[0] === ele &&
        numberArray[3] === ele &&
        numberArray[6] === ele:
        winner = ele;
        srick.classList.add("srick-colomn-left");
        break;
      case numberArray[1] === ele &&
        numberArray[4] === ele &&
        numberArray[7] === ele:
        winner = ele;
        srick.classList.add("srick-colomn-center");
        break;
      case numberArray[2] === ele &&
        numberArray[5] === ele &&
        numberArray[8] === ele:
        winner = ele;
        srick.classList.add("srick-colomn-right");
        break;
      case numberArray[1] === ele &&
        numberArray[4] === ele &&
        numberArray[7] === ele:
        winner = ele;
        srick.classList.add("srick-colomn-center");
        break;
      case numberArray[2] === ele &&
        numberArray[5] === ele &&
        numberArray[8] == ele:
        winner = ele;
        srick.classList.add("srick-colomn-right");
        break;
      // diagonal
      case numberArray[0] === ele &&
        numberArray[4] === ele &&
        numberArray[8] == ele:
        winner = ele;
        srick.classList.add("srick-diagonal-A");
        break;
      case numberArray[2] === ele &&
        numberArray[4] === ele &&
        numberArray[6] == ele:
        winner = ele;
        srick.classList.add("srick-diagonal-B");
        break;

      default:
        break;
    }

    if (srick.classList.length > 1) {
      all_i_ele.forEach(
        (allElements) => (allElements.style.pointerEvents = "none")
      );
      document.querySelector(".h2").innerText = ": الرابح هو";
      document.querySelector(".span").innerText = winner;
      winnerAudio.play();
    } else {
      if (eventElements.innerHTML == xmarkIcon) {
        document.querySelector(".h2").innerText = " : الدور عند";
        document.querySelector(".span").innerText = "o";
      } else {
        document.querySelector(".h2").innerText = " : الدور عند";
        document.querySelector(".span").innerText = "x";
      }
    }
  }
}
function playFun() {
  all_i_ele.forEach((ele) => (ele.innerHTML = ""));
  srick.className = "srick";
  numberArray.fill(null);
  all_i_ele.forEach(
    (allElements) => (allElements.style.pointerEvents = "auto")
  );

}
