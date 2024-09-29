console.log('hey from carousel');

const imgContainer = document.getElementById('js-img-container');

let rotateNumber = 0;
let carouselInterval = setInterval(() => {
    if (rotateNumber <= -900) {
        rotateNumber = 0;
    } else {
        rotateNumber -= 300;
    }
    imgContainer.style.transform = `translateX(${rotateNumber}px)`;
    console.log(rotateNumber);
}, 1500);
