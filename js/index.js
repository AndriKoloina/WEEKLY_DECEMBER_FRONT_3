const text_3 = document.getElementById("text_3")
let array2 = ["CAST"]
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
        if(letterIndex < array2[wordIndex].length) {
            createLetter(text_3,array2,"rgba(205, 70, 49, 1)")
            letterIndex++
            loop()
        }
        else{
            wordIndex++
            letterIndex = 0
            loop()
        }
    },200)
}
loop()


