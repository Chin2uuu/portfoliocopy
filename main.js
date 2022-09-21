const dynamicContent = document.getElementById("dynamic-text")
console.log(dynamicContent)


const phrases = ["Software Engineer....", "Mentor..", "Human being..."]
var phraseIndex = 0;
let letterIndex = 0;

function printLetters(phrase) {
    if (letterIndex == phrase.length) {

        clearLetters();
    }
    else if (letterIndex < phrase.length) {
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(() => {
            printLetters(phrase)

        }, 150);

    }
}
function clearLetters() {
    if (letterIndex == -1) {

        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex])
    }
    else if (letterIndex > -1) {
        let updatedPhrase = "";
        for (let index = 0; index < letterIndex; index++) {
            updatedPhrase += phrases[phraseIndex].charAt(index);

        }
        dynamicContent.textContent = updatedPhrase;
        letterIndex -= 1;
        setTimeout(clearLetters, 75);
    }
}
printLetters(phrases[0])