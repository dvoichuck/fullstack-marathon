let avengers = document.getElementById("avengers")
avengers.style.display = "none"

let John_Wick = document.getElementById("John_Wick")
John_Wick.style.display = "none"

let Inception = document.getElementById("Inception")
Inception.style.display = "none"

function avengers_topic() {
    let avengers = document.getElementById("avengers")
    John_Wick.style.display = "none"
    Inception.style.display = "none"
    avengers.style.display = "flex"
}

function john_topic() {
    let avengers = document.getElementById("avengers")
    John_Wick.style.display = "flex"
    Inception.style.display = "none"
    avengers.style.display = "none"
}
function inception_topic() {
    let avengers = document.getElementById("avengers")
    John_Wick.style.display = "none"
    Inception.style.display = "flex"
    avengers.style.display = "none"
}