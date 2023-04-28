const form = document.getElementById('form')
const date = document.getElementById('date')
const month = document.getElementById('month')
const year = document.getElementById('year')
const age = document.getElementById('age-span')

const dateNow = new Date()

function insertResult(yearResult, monthResult, dayResult) {
    let result = `${yearResult} years, ${monthResult} months and ${dayResult} days`
    age.innerText = result
}

function calculateAge(yearNow, monthNow, dayNow, year, month, day) {
    let yearResult = yearNow - year
    let monthResult
    let dayResult
    
    if (monthNow - month < 0) {
        yearResult = yearResult - 1
        monthResult = 12 + monthNow - month
    } else {
        monthResult = monthNow - month
    }

    if (dayNow - day < 0) {
        monthResult = monthResult - 1
        dayResult = 30 + dayNow - day
    } else {
        dayResult = dayNow - day
    }

    console.log(dayResult, dayNow);
    insertResult(yearResult, monthResult, dayResult)
}

function submitForm(event) {
    event.preventDefault()

    let yn = dateNow.getFullYear()
    let mn = dateNow.getMonth() + 1
    let dn = dateNow.getDate()

    let y = year.value
    y = parseInt(y)
    let m = month.value
    m = parseInt(m)
    let d = date.value
    d = parseInt(d)

    calculateAge(yn, mn, dn, y, m, d)
}

form.addEventListener('submit', submitForm)