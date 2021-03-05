let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
slides[0].style.display = "block";
let timeId

move(0)


function validIndex() {
    if (slideIndex === 4)
        slideIndex = 0
    if (slideIndex === -1)
        slideIndex = 3
}

function showSlides() {
    slideIndex += 1
    validIndex()
    let slides = document.getElementsByClassName("mySlides");
    for (let j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }

    slides[slideIndex].style.display = "block";

}

function move(i) {
    slideIndex += i
    validIndex()
    let slides = document.getElementsByClassName("mySlides");
    for (let j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    clearInterval(timeId)
    timeId = setInterval(showSlides, 3000);
}