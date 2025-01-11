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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

console.log(getHumanChoice());