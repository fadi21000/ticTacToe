// variabels
var srick = document.querySelector(".srick"),
  all_i_ele = document.querySelectorAll("span"),
  xmarkIcon = '<i class="fa-solid fa-xmark"></i>',
  o_markIcon = '<i class="fa-solid fa-o"></i>',
  changeIcons = xmarkIcon,
  numberArray = new Array(all_i_ele.length),
  play_button = document.getElementById("play"),
  audio = new Audio("mouse_click.mp3"),
  winnerAudio = new Audio("winner.wav"),
  array_x_o = ["x", "o"],
  personButton = document.querySelector("#person-button"),
  startGame = document.querySelector(".play-with-div"),
  playGame = document.querySelector("#playGame"),
  pcButton = document.querySelector("#pc-button"),
  winner;
var cont;
// Fill the array with a null value
numberArray.fill(null);
// functions
personButton.addEventListener("click", personFun);
pcButton.addEventListener("click",pcFun);
play_button.addEventListener("click", playFun);

function personFun() {
  all_i_ele.forEach((ele) => ele.addEventListener("click", main));
  playGame.className="";
  startGame.className="d-none"
  }
  
function pcFun(){
  playGame.className="";
  startGame.className="d-none";
  let number=rando(0, 8);
  all_i_ele.forEach((ele) => ele.addEventListener("click", (event)=>{
    let eventElements = event.target,
    getClassElements = eventElements.className,
    selectElement = document.querySelector(`.${getClassElements}`),
    index_Element = eventElements.dataset.index;
    if(changeIcons===xmarkIcon){
      selectElement.innerHTML=xmarkIcon;
      numberArray[index_Element-1]="x";
      changeIcons = o_markIcon;
      audio.play();
      if(changeIcons == o_markIcon){
        
        if(numberArray[number]==null){
          numberArray[number]="o";
          all_i_ele[number].innerHTML=o_markIcon;
          changeIcons = xmarkIcon;
          audio.play();
        }else{
          var nullValue=numberArray.indexOf(null);
          if(nullValue!== -1){
            numberArray[nullValue]="o";
            all_i_ele[nullValue].innerHTML=o_markIcon;
            changeIcons = xmarkIcon;
            audio.play();
          }
          
        }
      }
      
    } else{
      numberArray[number]="o";
          all_i_ele[number].innerHTML=o_markIcon;
          changeIcons = xmarkIcon;
          audio.play();
    }
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
          document.querySelector(".h2").innerText = " : الدور عند";
          document.querySelector(".span").innerText = "x";
        
      }
    }
}));

}

function main(event) {
  var eventElements = event.target,
    getClassElements = eventElements.className,
    selectElement = document.querySelector(`.${getClassElements}`),
    index_Element = eventElements.dataset.index;
  // change between x and o
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

// restart the game function
function playFun() {
  all_i_ele.forEach((ele) => (ele.innerHTML = ""));
  srick.className = "srick";
  numberArray.fill(null);
  all_i_ele.forEach(
    (allElements) => (allElements.style.pointerEvents = "auto")
  );
}
