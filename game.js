var choices = ["r", "p", "s"]
var wins = 0
var losses = 0
var ties = 0
var keepPlaying = true

while(keepPlaying) {
  // prompt humanChoice
  var humanChoice = prompt("Choose r, p, s")
  console.log('human choice:', humanChoice)

  // randomly choose computerChoice
  var random = Math.floor(Math.random() * choices.length)
  var computerChoice = choices[random]
  console.log('computer choice:', computerChoice)

  var result
  if (humanChoice === computerChoice) {
    ties++
    result = "tied!"
  } else if (
    humanChoice === "r" && computerChoice === "s" ||
    humanChoice === "p" && computerChoice === "r" ||
    humanChoice === "s" && computerChoice === "p"
  ) {
    wins++
    result = "won!"
  } else {
    losses++
    result = "lost!"
  }

  // display (alert) comparison results (won, tied, lost round)
  alert("You " + result)

  // show stats
  alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)

  keepPlaying = confirm("Want to play again?")
}