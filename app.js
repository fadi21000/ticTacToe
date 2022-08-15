class Main {
  constructor() {
    // variables
    this.streak = document.querySelector(".streak");
    this.all_i_ele = document.querySelectorAll("span");
    // this.x_icon = '<i class="fa-solid fa-xmark"></i>';
    this.x_icon = '<img src="x.png" width="50" />';
    this.o_icon = '<img src="o.png" width="50" />';
    // this.o_icon = '<i class="fa-solid fa-o"></i>';
    this.printWord = document.querySelector(".h2");
    this.printPlayer = document.querySelector(".span");
    // for change between x and o
    this.changeIcons = this.x_icon;
    // empty array to store the values x and o inside
    this.numberArray = new Array(this.all_i_ele.length);
    // Fill the array with a null value
    this.numberArray.fill(null);
    // Button to choose a second person to play
    this.personButton = document.querySelector("#person-button");
    // Play with computer button
    this.pcButton = document.querySelector("#pc-button");
    // this is container
    this.containerStartGame = document.querySelector(".play-with-div");
    // Game restart container
    this.containerPlayGame = document.querySelector("#containerPlayGame");
    // Game restart Button
    this.play_button = document.getElementById("play");
    this.data = [
      // row
      { num: [0, 1, 2], streakClass: "streak-row-top" },
      { num: [3, 4, 5], streakClass: "streak-row-center" },
      { num: [6, 7, 8], streakClass: "streak-row-bottom" },
      // column
      { num: [0, 3, 6], streakClass: "streak-column-left" },
      { num: [1, 4, 7], streakClass: "streak-column-center" },
      { num: [2, 5, 8], streakClass: "streak-column-right" },
      // diagonal
      { num: [0, 4, 8], streakClass: "streak-diagonal-A" },
      { num: [2, 4, 6], streakClass: "streak-diagonal-B" },
    ];
    this.winner;
    // audio files
    this.audio = new Audio("mouse_click.mp3");
    this.winnerAudio = new Audio("winner.wav");
    // functions
    // Choose to start playing with a person or a pc
    this.personButton.addEventListener("click", this.handlePersonFun);

    // restart the game
    this.play_button.addEventListener("click", this.playFun);

   
  }

  //this function Choose to start playing with a person or a pc
  handlePersonFun = () => {
    // Store and check values and display the result
    this.all_i_ele.forEach((ele) =>
      ele.addEventListener("click", this.handleChange)
    );
    // hide #containerStartGame
    this.containerStartGame.className = "d-none";
    // show #containerPlayGame
    this.containerPlayGame.className = "";
  };
  CheckWinner = () => {
    for (const iterator of this.data) {
      var { num, streakClass } = iterator;
      var tile1 = this.numberArray[num[0]];
      var tile2 = this.numberArray[num[1]];
      var tile3 = this.numberArray[num[2]];
      if (tile1 != null && tile1 === tile2 && tile1 === tile3) {
        this.all_i_ele.forEach(
          (allElements) => (allElements.style.pointerEvents = "none")
        );
        this.winner = tile1;
        this.winnerAudio.play();
        this.streak.classList.add(streakClass);
        break;
      }
    }
  };
  // change between x and o
  handleChange = (event) => {
    var eventElements = event.target;
    // Get the number of each item ( data-index="1" )
    let index_Element = eventElements.dataset.index;
    // toggle between x and o
    if (this.changeIcons === this.x_icon) {
          eventElements.innerHTML = this.x_icon;
          eventElements.style.pointerEvents = "none";
          this.numberArray[index_Element - 1] = "x";
          this.changeIcons = this.o_icon;
          this.audio.play();
     
    } else {
        eventElements.innerHTML = this.o_icon;
        eventElements.style.pointerEvents = "none";
        this.numberArray[index_Element - 1] = "o";
        this.changeIcons = this.x_icon;
        this.audio.play();
       
    }
    // Check winner
    this.CheckWinner();

    if(this.streak.classList.length > 1){
      this.printWord.innerText = " the winner is  " ;
      this.printPlayer.innerHTML = this.winner;
    }else if(this.streak.classList.length == 1 &&
       this.numberArray.includes(null)==false){
        this.printWord.innerText = " Draw! " ;
        this.printPlayer.innerHTML ="";
    }else{
    this.printWord.innerText = " turn at " ;
    let g;
    console.log(this.changeIcons.includes("x.png"))
    this.changeIcons.includes("x.png")?true:g="o";
    this.changeIcons.includes("o.png")?true:g="x";
    this.printPlayer.innerHTML = g;
    }
    
  };
  // restart the game function
  playFun = () => {
    this.all_i_ele.forEach((ele) => {
      ele.innerHTML = "";
      ele.style.pointerEvents = "auto";
      ele.classList.remove("o");
      ele.classList.remove("x");
    });
    this.streak.className = "streak";
    this.numberArray.fill(null);
    this.printWord.innerText = "" ;
    this.printPlayer.innerHTML = "";
  };
}
var person = new Main();
class App extends Main {
  constructor() {
    // variables
    super();
    this.number = rando(0, 8);
    this.pcButton.addEventListener("click", this.handleChangePc);
  }
  handleChangePc = () => {
    // hide #containerStartGame
    this.containerStartGame.className = "d-none";
    // show #containerPlayGame
    this.containerPlayGame.className = "";

    this.all_i_ele.forEach((ele) =>
      ele.addEventListener("click", (event) => {
        let eventElements = event.target,
          index_Element = eventElements.dataset.index;
        if (this.changeIcons === this.x_icon) {
          eventElements.innerHTML = this.x_icon;
          eventElements.style.pointerEvents = "none";
          this.numberArray[index_Element - 1] = "x";
          this.changeIcons = this.o_icon;
          this.audio.play();
          if (this.changeIcons === this.o_icon) {
            if (this.numberArray[this.number] === null) {
              this.numberArray[this.number] = "o";
              this.all_i_ele[this.number].innerHTML = this.o_icon;
              this.all_i_ele[this.number].style.pointerEvents = "none";
              this.changeIcons = this.x_icon;
              
              this.audio.play();
            } else {
              var nullValue = this.numberArray.indexOf(null);
              if (nullValue !== -1) {
                this.numberArray[nullValue] = "o";
                this.all_i_ele[nullValue].innerHTML = this.o_icon;
                this.changeIcons = this.x_icon;
                this.all_i_ele[nullValue].style.pointerEvents = "none";
                this.audio.play();
              }
            }
          }
        } else {
          this.numberArray[this.number] = "o";
          this.all_i_ele[this.number].innerHTML = this.o_icon;
          this.all_i_ele[this.number].style.pointerEvents = "none";
          this.changeIcons = this.x_icon;
          this.audio.play();
        }
        // Check winner
        this.CheckWinner();
        if (this.streak.classList.length > 1) {
          this.printWord.innerText ="the winner is ";
          this.printPlayer.innerText = this.winner;
        } else if(this.streak.classList.length == 1&&
          this.numberArray.includes(null)==false){
            this.printWord.innerText = "Draw!";
          this.printPlayer.innerText = "";
          }
        else {
          this.printWord.innerText = "turn at ";
          this.printPlayer.innerText = "x";
        }
      })
    );
  };
}
var pc = new App();
