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
let playerSelection = prompt("Enter Your CHoice");
let computerSlection = getComputerChoice();
function playRound(playerSelection,computerSlection){
  let outcome='';
   if(playerSelection==='ROCK')
   {
    if(computerSlection==='SCISSORS')
    {
      outcome='U WIN!';
    }
    else if(computerSlection==='PAPER')
    {
      outcome='U LOSE';
    }
    else{
      outcome='ITS A DRAW';
    }
   }

   else if(playerSelection==='SCISSORS')
   {
    if(computerSlection==='SCISSORS')
    {
      outcome='ITS A DRAW';
    }
    else if(computerSlection==='PAPER')
    {
      outcome='U WIN!';
    }
    else{
      outcome='U LOSE';
    }
   }

   else if(playerSelection==='PAPER')
   {
    if(computerSlection==='SCISSORS')
    {
      outcome='U LOSE';
    }
    else if(computerSlection==='PAPER')
    {
      outcome='ITS A DRAW';
    }
    else{
      outcome='U WIN!';
    }
   }

   else
   {
    outcome ='invalid choice';
   }
   console.log( `YOUR CHOICE : ${playerSelection}`);
   console.log(`COMPUTER CHOICE : ${computerSlection}`);
    console.log(outcome);
}
playRound(playerSelection,computerSlection);