const textareaEL = document.getElementById("textarea")
const totalcounterEl = document.getElementById("total-counter")
const remainingcounterEl = document.getElementById("remaining-counter")

textareaEL.addEventListener("keyup", () => {
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalcounterEl.innerText = textareaEL.value.length
    remainingcounterEl.innerText = textareaEL.getAttribute("maxLength") - textareaEL.value.length
}