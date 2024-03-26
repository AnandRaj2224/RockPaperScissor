// function to get a move from computer.
 function getComputerChoice() {
    let move = Math.random();   // returns a value from <= 0 and >1.
    let choice ='';             // created a variable to store computer choice.
    // divided value of move in 3 parts and assigined name to each part.
    if(move >= 0 && move <= 0.33)
    {
      choice ='ROCK';
    }
    else if(move >= 0.33 && move <= 0.66)
    {
      choice ='PAPER';
    }
    else
    {
      choice ='SCISSORS';
    }
    return choice;
}
// function to play the game.
function playRound(playerSelection,computerSlection){
  let outcome='';
   if(playerSelection==='ROCK')
   {
    if(computerSlection==='SCISSORS')
    {
      outcome='U WIN!';
      wins++;
      youPoints++;
    }
    else if(computerSlection==='PAPER')
    {
      outcome='U LOSE';
      loses++;
      computerPoints++;
    }
    else{
      outcome='ITS A DRAW';
      draws++;
    }
   }
   else if(playerSelection==='SCISSORS')
   {
    if(computerSlection==='SCISSORS')
    {
      outcome='ITS A DRAW';
      draws++;
    }
    else if(computerSlection==='PAPER')
    {
      outcome='U WIN!';
      wins++;
      youPoints++;
    }
    else{
      outcome='U LOSE';
      loses++;
      computerPoints++;
    }
   }
   else if(playerSelection==='PAPER')
   {
    if(computerSlection==='SCISSORS')
    {
      outcome='U LOSE';
      loses++;
      computerPoints++;
    }
    else if(computerSlection==='PAPER')
    {
      outcome='ITS A DRAW';
      draws++;
    }
    else{
      outcome='U WIN!';
      wins++;
      youPoints++;
    }
   }
   else
   {
    outcome ='invalid choice';
   }
    roundNumber++;
    console.log( `YOUR CHOICE : ${playerSelection}`);
    console.log(`COMPUTER CHOICE : ${computerSlection}`);
    console.log(outcome);
}
// when rock is clicked.
const rock = document.querySelector(".rock");
rock.addEventListener("click",handleRockClick);
//when paper is clicked.
const paper = document.querySelector(".paper");
paper.addEventListener("click",handlePaperClick);
//when scissor is clicked.
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click",handleScissorsClick);

// Define separate event handler functions for each button
function handleRockClick() {
  playRound("ROCK", getComputerChoice());
  updateScoreBoard(wins, loses, draws, youPoints, computerPoints,winner);
}

function handlePaperClick() {
  playRound("PAPER", getComputerChoice());
  updateScoreBoard(wins, loses, draws, youPoints, computerPoints,winner);
}

function handleScissorsClick() {
  playRound("SCISSORS", getComputerChoice());
  updateScoreBoard(wins, loses, draws, youPoints, computerPoints,winner);
}

// function for displaying score and winner.

// Initialize game statistics
let wins = 0;
let loses = 0;
let draws = 0;
let youPoints = 0;
let computerPoints = 0;
let roundNumber = 0;
let winner = '';

// Get references to the HTML elements
const winElement = document.querySelector(".win");
const loseElement = document.querySelector(".lose");
const drawElement = document.querySelector(".draw");
const youPointsElement = document.querySelector(".you");
const computerPointsElement = document.querySelector(".computer");
const winnerElement = document.querySelector(".winner");

// Update the content of the elements after each round
function updateScoreBoard(wins, loses, draws, youPoints, computerPoints, winner) {
    winElement.textContent = wins;
    loseElement.textContent = loses;
    drawElement.textContent = draws;
    youPointsElement.textContent = youPoints;
    computerPointsElement.textContent = computerPoints;
    winnerElement.textContent = determineWinner();
}
function determineWinner(){
  if(roundNumber === 5)
  {
    if(youPoints>computerPoints) return 'YOU';
    else if (youPoints<computerPoints) return  'COMPUTER';
    else return 'DRAW';
  }
  else return '';
}