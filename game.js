var humanScoreEl = document.getElementById('human-score')
var botScoreEl = document.getElementById('bot-score')
var rockEl = document.getElementById('rock')
var paperEl = document.getElementById('paper')
var scissorsEl = document.getElementById('scissors')

var choicesElements = [rockEl, paperEl, scissorsEl]

var choices = ["r", "p", "s"]
var humanScore = 0
var botScore = 0

function startRound(event) {
  var humanChosenEl
  // make sure we're referring to the correct element
  if (event.target.matches('img')) {
    humanChosenEl = event.target.parentElement
  } else {
    humanChosenEl = event.target
  }

  var humanChoice = humanChosenEl.dataset.letter
  
  // randomly choose computerChoice
  var random = Math.floor(Math.random() * choices.length)
  var computerChoice = choices[random]
  var computerChosenEl = document.querySelector('[data-letter="'+ computerChoice +'"]')

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


  console.log(humanChosenEl, computerChosenEl)

  // hide all three images
  choicesElements.forEach(function(img) {
    img.style.display = 'none'
  })
  humanChosenEl.style.display = "block"
  computerChosenEl.style.display = "block"

//   // display (alert) comparison results (won, tied, lost round)
//   alert("You " + result)

//   // show stats
//   alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)
}

rockEl.addEventListener('click', startRound)
paperEl.addEventListener('click', startRound)
scissorsEl.addEventListener('click', startRound)