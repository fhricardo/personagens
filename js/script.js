const theImage = document.getElementById('theImage');
const theName = document.getElementById('name');
function changeImage(value) {
    switch (value) {
        case 1: theImage.src = "assets/gus-fring.webp";
            theName.innerHTML = "Gus Fring";
            break;
        case 2: theImage.src = "assets/hank-schrader.webp";
            theName.innerHTML = "Hank Schrader";
            break;
        case 3: theImage.src = "assets/hector-salamanca.webp";
            theName.innerHTML = "Hector Salamanca";
            break;
        case 4: theImage.src = "assets/jesse-pinkman.webp";
            theName.innerHTML = "Jesse Pinkman";
            break;
        case 5: theImage.src = "assets/mike-ehrmantraut.webp";
            theName.innerHTML = "Mike Ehrmantraut";
            break;
        case 6: theImage.src = "assets/saul-goodman.webp";
            theName.innerHTML = "Saul Goodman";
            break;
        case 7: theImage.src = "assets/skyler-white.webp";
            theName.innerHTML = "Skyler White";
            break;
        case 8: theImage.src = "assets/walter-white.webp";
            theName.innerHTML = "Walter White";
            break;
    }
}
function defaultImage() {
    theImage.src = "assets/bb-logo.webp";
    theName.innerHTML = "";
}