const seconds = document.getElementById('seconds')
const text = document.getElementById('text')
let count = 10

function tick () {
    count = count - 1
    seconds.innerText = count
    if (count == 1) text.innerText = 'sekund'
    if (count == 0) {
        document.body.style.backgroundColor = 'red'
        document.body.style.color = 'white'
        seconds.innerText = 'Hej på dig!'
        text.innerText = ''
    }
}

for (let i = 0; i < 10; i++) {
    setTimeout(tick, (i + 1) * 1000)
}