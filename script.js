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

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice !== computerChoice)
        {
            if (humanChoice === "paper")
            {
                if (computerChoice === "rock")
                {
                    console.log("You win this turn");
                    humanScore++;
                }
                else if (computerChoice === "scissors")
                {
                    console.log("You lose this turn");
                    computerScore++;
                }
            }
            else if (humanChoice === "rock")
            {
                if (computerChoice === "scissors")
                {
                    console.log("You win this turn");
                    humanScore++;
                }
                else if (computerChoice === "paper")
                {
                    console.log("You lose this turn");
                    computerScore++;
                }
            
            }
            else if (humanChoice === "scissors")
            {
                if (computerChoice === "paper")
                {
                    console.log("You win this turn");
                    humanScore++;
                }
                else if (computerChoice === "rock")
                {
                    console.log("You lose this turn");
                    computerScore++;
                }
            }
        }
        else
        {
            console.log("It's a draw this turn");
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    if (humanScore > computerScore)
    {
        console.log("You win!")
    }
    else if (humanScore == computerScore)
    {
        console.log("It's a tie.");
    }
    else
    {   
        console.log("You lose.")
    }
}

playGame();