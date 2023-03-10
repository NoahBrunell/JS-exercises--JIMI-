const resultText = document.getElementById('result')
let chosenHand = ''
let computerChoice = ''
let result = ''

document.getElementById('play-again').addEventListener('click', () => {
    chosenHand = ''
    computerChoice = ''
    result = ''
    document.getElementById('play-again').style.display = 'none'
})

function determineResult() {
    if (chosenHand == computerChoice) result = 'Draw!'
    if ((chosenHand == 'Rock') && (computerChoice == 'Scissors')) result = 'Win!'
    if ((chosenHand == 'Rock') && (computerChoice == 'Paper')) result = 'Loss!'
    if ((chosenHand == 'Paper') && (computerChoice == 'Rock')) result = 'Win!'
    if ((chosenHand == 'Paper') && (computerChoice == 'Scissors')) result = 'Loss!'
    if ((chosenHand == 'Scissors') && (computerChoice == 'Paper')) result = 'Win!'
    if ((chosenHand == 'Scissors') && (computerChoice == 'Rock')) result = 'Loss!'

    resultText.innerHTML = result
    document.getElementById('play-again').style.display = 'block'
}

function generateRandomChoice () {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    if (randomNumber == 1) computerChoice = 'Rock'
    if (randomNumber == 2) computerChoice = 'Paper'
    if (randomNumber == 3) computerChoice = 'Scissors'
    determineResult()
}

function chooseRock () {
    chosenHand = 'Rock'
    generateRandomChoice()
}

function choosePaper () {
    chosenHand = 'Paper'
    generateRandomChoice()
}

function chooseScissors () {
    chosenHand = 'Scissors'
    generateRandomChoice()
}