const buttonEl = document.getElementById("inputBtn")
const inputEl = document.getElementById("inputEl")
let tracked = []
let ulEl = document.querySelector(".ulEl")

buttonEl.addEventListener("click", () => {
    tracked.push(inputEl.value)
    renderTracked()


})

function renderTracked() {
    let items = ""
    tracked.forEach(element => {
        items += `<li>${element}</li>`
    })
    ulEl.innerHTML = items
}