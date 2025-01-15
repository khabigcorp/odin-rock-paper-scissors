function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0)
    {   
        return "rock";
    }
    else if (randomNumber === 1)
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    let humanChoice = prompt("What do you choose, rock, paper, or scissors?");
    return humanChoice;
}

function playRound(event)
{
    if (winnerExists) return;

    const winnerDiv = document.querySelector(".winner");
    const humanChoice = event.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();

    if (humanChoice !== computerChoice)
    {
        if (humanChoice === "paper")
        {
            if (computerChoice === "rock")
            {
                winnerDiv.textContent = "You win this turn";
                humanScore++;
            }
            else if (computerChoice === "scissors")
            {
                winnerDiv.textContent = "You lose this turn";
                computerScore++;
            }
        }
        else if (humanChoice === "rock")
        {
            if (computerChoice === "scissors")
            {
                winnerDiv.textContent = "You win this turn";
                humanScore++;
            }
            else if (computerChoice === "paper")
            {
                winnerDiv.textContent = "You lose this turn";
                computerScore++;
            }
        
        }
        else if (humanChoice === "scissors")
        {
            if (computerChoice === "paper")
            {
                winnerDiv.textContent = "You win this turn";
                humanScore++;
            }
            else if (computerChoice === "rock")
            {
                winnerDiv.textContent = "You lose this turn";
                computerScore++;
            }
        }
    }
    else
    {
        winnerDiv.textContent = "It's a draw this turn";
    }

    checkWinner();
    updateScore();
}
let humanScore = 0;
let computerScore = 0;
let winnerExists = false;
function checkWinner()
{
    const winnerDiv = document.querySelector(".winner");
    if (humanScore == 5 || computerScore == 5)
    {
        winnerExists = true;
        if (humanScore == 5)
        {
            winnerDiv.textContent = "You won the game."
        }
        else if (computerScore == 5)
        {
            winnerDiv.textContent = "You lost the game.";
        }
    }
    
}

function updateScore()
{
    const scoreDiv = document.querySelector(".score");
    scoreDiv.textContent = `Human: ${humanScore}, Computer ${computerScore}`;
}

const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const rockButton = document.querySelector(".rock");

paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);
rockButton.addEventListener("click", playRound);