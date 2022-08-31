let tracked = []
const inputEl = document.getElementById("inputEl")
const buttonEl = document.getElementById("inputBtn")
const ulEl = document.querySelector(".ulEl")
const eventsInStorage = JSON.parse(localStorage.getItem("tracked"))
const currentUrl = document.getElementById("saveBtn")
const deleteBtn = document.getElementById("deleteBtn")

if (eventsInStorage) {
    tracked = eventsInStorage
    renderTracked(tracked)
}

currentUrl.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        tracked.push(tabs[0].url)
        localStorage.setItem("tracked", JSON.stringify(tracked))
        renderTracked(tracked)
    })
})

//render the urls in the dom
function renderTracked(data) {
    let items = ""
    data.forEach(element => {
        items +=
            `<li>
                <a target="_blank" href="${element}">
                ${element}
                </a>
            </li>`
    })
    ulEl.innerHTML = items
}

//listen for the save leads button click
buttonEl.addEventListener("click", () => {
    buttonAction()
})

//listen for the enter key press (on the save leads button)
inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        buttonAction()
    }
})

//listen for delete button click(double click)
deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    tracked = []
    renderTracked(tracked)
})

function buttonAction() {
    tracked.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("tracked", JSON.stringify(tracked))
    renderTracked(tracked)
}