const text_3 = document.getElementById("text_3")
let array = ["CAST"]
let wordIndex = 0
let letterIndex = 0

const createLetter = (selector,table) =>{
     const letter = document.createElement("h4")
    selector.appendChild(letter)

    letter.textContent = table[wordIndex][letterIndex]

    if (table[wordIndex][letterIndex] === " ") {
        letter.textContent = "\u00A0"
    } else {
        letter.textContent = table[wordIndex][letterIndex]
    }

}

const loop = () => {
    setTimeout(() =>{
        if(letterIndex < array[wordIndex].length) {
            createLetter(text_3,array,"rgba(205, 70, 49, 1)")
            letterIndex++
            loop()
        }
    },200)
}
loop()


