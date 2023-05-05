const countEl = document.getElementById('count')
const minusEl = document.getElementById('minus')
const plusEl = document.getElementById('plus')
let count

if (!localStorage.getItem('count')) {
    count = 0
} else {
    count = parseInt(localStorage.getItem('count'))
}

countEl.innerText = count

minusEl.addEventListener('click', function(){
    count = count - 1
    localStorage.setItem('count', count)
    countEl.innerText = count
})

plusEl.addEventListener('click', function(){
    count++
    localStorage.setItem('count', count)
    countEl.innerText = count
})

