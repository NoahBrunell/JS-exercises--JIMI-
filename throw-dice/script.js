const dice = document.getElementById('dice')

function pickRandom() {
    let number = Math.floor(Math.random() * 6 + 1)
    
    if (number == 1) dice.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/800px-Dice-1-b.svg.png" width="100%" height="100%">'
    if (number == 2) dice.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1024px-Dice-2-b.svg.png" width="100%" height="100%">'
    if (number == 3) dice.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1024px-Dice-3-b.svg.png" width="100%" height="100%">'
    if (number == 4) dice.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/120px-Dice-4-b.svg.png" width="100%" height="100%">'
    if (number == 5) dice.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/557px-Dice-5-b.svg.png" width="100%" height="100%">'
    if (number == 6) dice.innerHTML = '<img src="https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-6-Showing.png" width="100%" height="100%">'
}
