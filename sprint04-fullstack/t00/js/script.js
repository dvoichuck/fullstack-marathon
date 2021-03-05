let human = true

function  transformation() {
    if (human === true) {
        document.getElementById("hero").innerText = "Bruce Banner"
        document.getElementById('hero').style.fontSize = '60px'
        document.getElementById('hero').style.letterSpacing = '2px'
        document.getElementById('lab').style.background = '#ffb300'
        human = false
    }
    else {
        document.getElementById("hero").innerText = "Hulk"
        document.getElementById('hero').style.fontSize = '130px'
        document.getElementById('hero').style.letterSpacing = '6px'
        document.getElementById('lab').style.background = '#70964b'
        human = true
    }
}