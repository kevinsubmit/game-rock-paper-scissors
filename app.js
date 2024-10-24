/*-------------------------------- Constants --------------------------------*/
const choices = ["rock", "paper", "scissors"];

/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/
const resultDisplay = document.querySelector("#result-display");
const buttons = document.querySelectorAll("button");

/*-------------------------------- Functions --------------------------------*/
// TODO improve the play function to be:
// const play = (event) => {
//   getPlayerChoice(event);  // captures player choice, updates state
//   getComputerChoice();  // randomly selects computers choice, updates state
//   compare();            // determines winning result
//   render();             // renders result message back to the user 
// };

function play(event) {
  playerChoice = event.target.getAttribute("id");
  // Anohter way to get the id of an element
  // playerChoise = event.target.id
  computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Draw case where playerChoice === computerChoice
  if (playerChoice === computerChoice) {
    msg = "game is a draw.";
  }

  // Non draw cases:
  // rock > scissor
  // rock < paper
  // scissors > paper
  // scissors < rock
  // paper > rock
  // paper < scissors
  if (playerChoice === "rock") {
    if (computerChoice === "scissor") {
      msg = "You win.";
    } else if (computerChoice === "paper") {
      msg = "You lose.";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      msg = "You win.";
    } else if (computerChoice === "rock") {
      msg = "You lose.";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      msg = "You win.";
    } else if (computerChoice === "scissors") {
      msg = "You lose.";
    }
  }
  // DRY version of the compare logic
  // if (playerChoice === computerChoice) {
  //   msg = 'You tied!';
  // } else if (playerChoice === choices[0] && computerChoice === choices[2]) { 
  //   // "rock" vs. "scissors"
  //   msg = 'Congrats! You win!';
  // } else if (playerChoice === choices[1] && computerChoice === choices[0]) { 
  //   // "paper" vs. "rock"
  //   msg = 'Congrats! You win!';
  // } else if (playerChoice === choices[2] && computerChoice === choices[1]) { 
  //   // "scissors" vs. "paper"
  //   msg = 'Congrats! You win!';
  // } else {
  //   msg = 'You lose! Try again?';
  // }

  // Display result
  resultDisplay.textContent = `Player chose ${playerChoice}, computer chose ${computerChoice}, ${msg}`;
}

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", play);
});

// Another way to add the event listeners, but this be WET
// document.querySelector('#rock').addEventListener('click', play);
// document.querySelector('#paper').addEventListener('click', play);
// document.querySelector('#scissors').addEventListener('click', play);

// This option or the one we wrote above, is more DRY(Dont Repeat Yourself)
// document.querySelectorAll('button').forEach(function (button) {
//   button.addEventListener('click', play);
// });