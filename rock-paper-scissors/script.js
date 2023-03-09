const playerChoice = document.getElementById('player-choice')
const resultText = document.getElementById('result')
let chosenHand = ''
let computerChoice = ''
let result = ''

function determineResult() {
    if (chosenHand == computerChoice) result = 'Draw!'
    if ((chosenHand == 'Rock') && (computerChoice == 'Scissors')) result = 'Win!'
    if ((chosenHand == 'Rock') && (computerChoice == 'Paper')) result = 'Loss!'
    if ((chosenHand == 'Paper') && (computerChoice == 'Rock')) result = 'Win!'
    if ((chosenHand == 'Paper') && (computerChoice == 'Scissors')) result = 'Loss!'
    if ((chosenHand == 'Scissors') && (computerChoice == 'Paper')) result = 'Win!'
    if ((chosenHand == 'Scissors') && (computerChoice == 'Rock')) result = 'Loss!'

    resultText.innerText = result
}

function generateRandomChoice () {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    if (randomNumber == 1) computerChoice = 'Rock'
    if (randomNumber == 2) computerChoice = 'Paper'
    if (randomNumber == 3) computerChoice = 'Scissors'
    document.getElementById('computer-choice').innerText = computerChoice
    determineResult()
}

function chooseRock () {
    chosenHand = 'Rock'
    playerChoice.innerText = chosenHand
    generateRandomChoice()
}

function choosePaper () {
    chosenHand = 'Paper'
    playerChoice.innerText = chosenHand
    generateRandomChoice()
}

function chooseScissors () {
    chosenHand = 'Scissors'
    playerChoice.innerText = chosenHand
    generateRandomChoice()
}