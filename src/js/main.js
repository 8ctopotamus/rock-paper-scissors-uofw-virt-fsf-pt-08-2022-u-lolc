import '../css/styles.css'

import { rockEl, paperEl, scissorsEl, resultEl, humanScoreEl, botScoreEl } from './elements.js'
import { getRandomIdx } from './helpers'

var choicesElements = [rockEl, paperEl, scissorsEl]
var choices = ["r", "p", "s"]
var humanScore = 0
var botScore = 0
var clickable = true 

function resetUI() {
  clickable = true
  resultEl.innerText = "Rock Paper Scissors"
  // show all three choices
  choicesElements.forEach(function(el) {
    el.style.display = 'block'
    el.classList.remove('loser')
    var spans = el.querySelectorAll('span')
    for (var i = 0; i < spans.length; i++) {
      spans[i].remove()
    }
  })
}

function updateScores() {
  humanScoreEl.innerText = humanScore
  botScoreEl.innerText = botScore
}

function showResults(humanChosenEl, computerChosenEl, result) {
  clickable = false
  resultEl.innerText = result
  updateScores()
  // hide all three choice
  choicesElements.forEach(function(el) {
    el.style.display = 'none'
  })
  humanChosenEl.style.display = "block"
  computerChosenEl.style.display = "block"

  var humanSpan = document.createElement('span')
  humanSpan.innerText = "You"
  humanChosenEl.appendChild(humanSpan)

  var botSpan = document.createElement('span')
  botSpan.innerText = "Bot"
  computerChosenEl.appendChild(botSpan)

  if (result === 'YOU WON!') {
    computerChosenEl.classList.add('loser')
  } else if (result === 'BOT WON!') {
    humanChosenEl.classList.add('loser')
  }

  setTimeout(function() {
    resetUI()
  }, 3000)
}

function startRound(event) {
  if (!clickable) return

  var humanChosenEl
  // make sure we're referring to the correct element
  if (event.target.matches('img')) {
    humanChosenEl = event.target.parentElement
  } else {
    humanChosenEl = event.target
  }

  var humanChoice = humanChosenEl.dataset.letter
  
  // randomly choose computerChoice
  var random = getRandomIdx(choices.length)
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

  showResults(humanChosenEl, computerChosenEl, result)
}

rockEl.addEventListener('click', startRound)
paperEl.addEventListener('click', startRound)
scissorsEl.addEventListener('click', startRound)


if (module.hot) {
  module.hot.accept(err => {
    if (err) {
      console.log('HRM Error', err)
    }
  })
}