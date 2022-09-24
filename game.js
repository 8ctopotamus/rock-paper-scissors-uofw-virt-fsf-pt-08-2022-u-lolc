var humanScoreEl = document.getElementById('human-score')
var botScoreEl = document.getElementById('bot-score')
var rockImg = document.getElementById('rock')
var paperImg = document.getElementById('paper')
var scissorsImg = document.getElementById('scissors')

var choices = ["r", "p", "s"]
var humanScore = 0
var botScore = 0

// while(keepPlaying) {
//   // prompt humanChoice
//   var humanChoice = prompt("Choose r, p, s")
//   console.log('human choice:', humanChoice)

//   // check if the humanChoice is valid
//   if (!choices.includes(humanChoice)) {
//     alert("Bad input!")
//     continue;
//   }

//   // randomly choose computerChoice
//   var random = Math.floor(Math.random() * choices.length)
//   var computerChoice = choices[random]
//   console.log('computer choice:', computerChoice)

//   var result
//   if (humanChoice === computerChoice) {
//     ties++
//     result = "tied!"
//   } else if (
//     humanChoice === "r" && computerChoice === "s" ||
//     humanChoice === "p" && computerChoice === "r" ||
//     humanChoice === "s" && computerChoice === "p"
//   ) {
//     wins++
//     result = "won!"
//   } else {
//     losses++
//     result = "lost!"
//   }

//   // display (alert) comparison results (won, tied, lost round)
//   alert("You " + result)

//   // show stats
//   alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)

//   keepPlaying = confirm("Want to play again?")
// }

function startRound() {
  console.log('Starting round....')
}

rockImg.addEventListener('click', startRound)
paperImg.addEventListener('click', startRound)
scissorsImg.addEventListener('click', startRound)