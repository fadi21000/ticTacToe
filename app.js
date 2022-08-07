class Main {
  constructor() {
    // variables
    this.streak = document.querySelector(".streak");
    this.all_i_ele = document.querySelectorAll("span");
    this.x_icon = '<i class="fa-solid fa-xmark"></i>';
    this.o_icon = '<i class="fa-solid fa-o"></i>';
    // for change between x and o
    this.changeIcons = this.x_icon;
    // empty array to store the values x and o inside
    this.numberArray = new Array(this.all_i_ele.length);
    // Fill the array with a null value
    this.numberArray.fill(null);
    this.array_x_o = ["x", "o"];
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
    this.cont;
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
        this.all_i_ele.forEach((allElements) => (allElements.style.pointerEvents = "none"));
        this.winner = tile1;
        this.streak.classList.add(streakClass);
        this.winnerAudio.play();
      }
    }
  };

  // change between x and o
  handleChange = (event) => {
    var eventElements = event.target;
    // Define each item via Class name
    let selectElement = document.querySelector(`.${eventElements.className}`);
    // Get the number of each item ( data-index="1" )
    let index_Element = selectElement.dataset.index;

    if (this.changeIcons === this.x_icon) {
      selectElement.innerHTML = this.x_icon;
      this.numberArray[index_Element - 1] = "x";
      this.changeIcons = this.o_icon;
      this.audio.play();
    } else {
      selectElement.innerHTML = this.o_icon;
      this.numberArray[index_Element - 1] = "o";
      this.changeIcons = this.x_icon;
      this.audio.play();
    }
    // Check winner
    this.CheckWinner();

    if (event.target.innerHTML == this.x_icon) {
      document.querySelector(".h2").innerText = " : الدور عند";
      document.querySelector(".span").innerText = "o";
    } else {
      document.querySelector(".h2").innerText = " : الدور عند";
      document.querySelector(".span").innerText = "x";
    }
  };
  // restart the game function
  playFun = () => {
    this.all_i_ele.forEach((ele) => {
      ele.innerHTML = "";
      ele.style.pointerEvents = "auto";
    });
    this.streak.className = "streak";
    this.numberArray.fill(null);
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
          getClassElements = eventElements.className,
          selectElement = document.querySelector(`.${getClassElements}`),
          index_Element = eventElements.dataset.index;
        if (this.changeIcons === this.x_icon) {
          selectElement.innerHTML = this.x_icon;
          this.numberArray[index_Element - 1] = "x";
          this.changeIcons = this.o_icon;
          this.audio.play();
          if (this.changeIcons == this.o_icon) {
            if (this.numberArray[this.number] == null) {
              this.numberArray[this.number] = "o";
              this.all_i_ele[this.number].innerHTML = this.o_icon;
              this.changeIcons = this.x_icon;
              this.audio.play();
            } else {
              var nullValue = this.numberArray.indexOf(null);
              if (nullValue !== -1) {
                this.numberArray[nullValue] = "o";
                this.all_i_ele[nullValue].innerHTML = this.o_icon;
                this.changeIcons = this.x_icon;
                this.audio.play();
              }
            }
          }
        } else {
          this.numberArray[this.number] = "o";
          this.all_i_ele[this.number].innerHTML = this.o_icon;
          this.changeIcons = this.x_icon;
          this.audio.play();
        }
          // Check winner
          this.CheckWinner();
        if (this.streak.classList.length > 1) {
          document.querySelector(".h2").innerText = ": الرابح هو";
          document.querySelector(".span").innerText = this.winner;
        } else {
          document.querySelector(".h2").innerText = " : الدور عند";
          document.querySelector(".span").innerText = "x";
        }
      })
    );
  };
}
var pc = new App();
