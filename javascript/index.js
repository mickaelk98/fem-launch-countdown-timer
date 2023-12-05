const displayDaysArea = document.querySelector(".days")
const displayHourssArea = document.querySelector(".hours")
const displayMinutesArea = document.querySelector(".minutes")
const displaySecondesArea = document.querySelector(".secondes")

function getTime() {
    const toDay = new Date()

    let days = toDay.getDate()
    let hours = toDay.getHours()
    let minutes = toDay.getMinutes()
    let secondes = toDay.getSeconds()

    days = days < 10 ? '0' + days : days
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    secondes = secondes < 10 ? '0' + secondes : secondes

    displayDaysArea.innerHTML = `<p>${days}</p>`
    displayHourssArea.innerHTML = `<p>${hours}</p>`
    displayMinutesArea.innerHTML = `<p>${minutes}</p>`
    displaySecondesArea.innerHTML = `<p>${secondes}</p>`

}

setInterval(getTime, 1000)
