var humanScoreEl = document.getElementById('human-score')
var botScoreEl = document.getElementById('bot-score')
var rockImg = document.getElementById('rock')
var paperImg = document.getElementById('paper')
var scissorsImg = document.getElementById('scissors')

var choices = ["r", "p", "s"]
var humanScore = 0
var botScore = 0

function startRound(event) {
  var humanChoice = event.target.dataset.letter
  
  // randomly choose computerChoice
  var random = Math.floor(Math.random() * choices.length)
  var computerChoice = choices[random]
  
  var result
  if (humanChoice === computerChoice) {
    result = "TIED!"
  } else if (
    humanChoice === "r" && computerChoice === "s" ||
    humanChoice === "p" && computerChoice === "r" ||
    humanChoice === "s" && computerChoice === "p"
  ) {
    humanScore++
    result = "YOU WON!"
  } else {
    botScore++
    result = "BOT WON!"
  }

  console.log(result, humanScore, botScore)

//   // display (alert) comparison results (won, tied, lost round)
//   alert("You " + result)

//   // show stats
//   alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)
}

rockImg.addEventListener('click', startRound)
paperImg.addEventListener('click', startRound)
scissorsImg.addEventListener('click', startRound)