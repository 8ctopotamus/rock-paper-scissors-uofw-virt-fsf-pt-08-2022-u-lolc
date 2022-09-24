var humanScoreEl = document.getElementById('human-score')
var botScoreEl = document.getElementById('bot-score')
var rockImg = document.getElementById('rock')
var paperImg = document.getElementById('paper')
var scissorsImg = document.getElementById('scissors')

var imageElements = [rockImg, paperImg, scissorsImg]

var choices = ["r", "p", "s"]
var humanScore = 0
var botScore = 0

function startRound(event) {
  var humanChosenImg = event.target
  var humanChoice = humanChosenImg.dataset.letter
  
  // randomly choose computerChoice
  var random = Math.floor(Math.random() * choices.length)
  var computerChoice = choices[random]
  var computerChosenImg = document.querySelector('img[data-letter="'+ computerChoice +'"]')

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

  // hide all three images
  imageElements.forEach(function(img) {
    img.style.display = 'none'
  })
  humanChosenImg.style.display = "block"
  computerChosenImg.style.display = "block"

//   // display (alert) comparison results (won, tied, lost round)
//   alert("You " + result)

//   // show stats
//   alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)
}

rockImg.addEventListener('click', startRound)
paperImg.addEventListener('click', startRound)
scissorsImg.addEventListener('click', startRound)