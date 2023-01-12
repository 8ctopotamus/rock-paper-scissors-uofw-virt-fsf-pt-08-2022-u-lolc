/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/elements.js
const humanScoreEl = document.getElementById('human-score')
const botScoreEl = document.getElementById('bot-score')
const rockEl = document.getElementById('rock')
const paperEl = document.getElementById('paper')
const scissorsEl = document.getElementById('scissors')
const resultEl = document.getElementById('result')

;// CONCATENATED MODULE: ./src/js/helpers.js
function getRandomIdx(length) {
  return Math.floor(Math.random() * length)
}
;// CONCATENATED MODULE: ./src/images/rock.png
const rock_namespaceObject = __webpack_require__.p + "2993a8ab5ffbbe4d4f9d.png";
;// CONCATENATED MODULE: ./src/images/paper.png
const paper_namespaceObject = __webpack_require__.p + "0f1569381eb4c28b56f5.png";
;// CONCATENATED MODULE: ./src/images/scissors.png
const scissors_namespaceObject = __webpack_require__.p + "ac9048832337e53dd9e0.png";
;// CONCATENATED MODULE: ./src/js/main.js









rockEl.querySelector('img').src = rock_namespaceObject
paperEl.querySelector('img').src = paper_namespaceObject
scissorsEl.querySelector('img').src = scissors_namespaceObject

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

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log('Service worker registered!');
    }).catch((error) => {
      console.warn('Error registering service worker:');
      console.warn(error);
    });
  }
});
/******/ })()
;