const displayDaysArea = document.querySelector(".days")
const displayHourssArea = document.querySelector(".hours")
const displayMinutesArea = document.querySelector(".minutes")
const displaySecondsArea = document.querySelector(".secondes")
const timer = document.querySelector(".timer")

const endDate = new Date(2024, 0, 1, 0, 0, 0);

function updateCountdown() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference > 0) {
        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        days = days < 10 ? '0' + days : days
        hours = hours < 10 ? '0' + hours : hours
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds


        displayDaysArea.innerHTML = `<p>${days}</p>`
        displayHourssArea.innerHTML = `<p>${hours}</p>`
        displayMinutesArea.innerHTML = `<p>${minutes}</p>`
        displaySecondsArea.innerHTML = `<p>${seconds}</p>`

    } else {
        timer.innerHTML = "<p>The countdown is over!</p>"
    }
}


setInterval(updateCountdown, 1000);
