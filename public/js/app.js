const generator = document.querySelector("#generator")
const size = document.querySelector("#size")
const speed = document.querySelector("#speed")
const section1 = document.querySelector(".section-1")
const section2 = document.querySelector(".section-2")
const firstAlgorithmButton = document.querySelector("#first-algorithm-show")
const secondAlgorithmButton = document.querySelector("#second-algorithm-show")
const drop1 = document.querySelectorAll(".drop-1")
const drop2 = document.querySelectorAll(".drop-2")
const dropMenuText1 = document.querySelector("#navbarDropdownMenu1")
const dropMenuText2 = document.querySelector("#navbarDropdownMenu2")
const stop = document.querySelector("#kill-switch")
const compare = document.querySelector("#compare")

let algorithm2Finised
let algorithm1Finised

compare.addEventListener("click", () => {
    algorithm2Finised = false
    algorithm1Finised = false
    compare.disabled = true
    size.disabled = true
})

let killSwitch = false

stop.addEventListener("click", () => {
    killSwitch = true
    setTimeout(() => {
        killSwitch = false
    }, 500);
})


const algorithms = {
    "bs": bubbleSort,
    "ss": selectionSort,
    "is": insertionSort,
    "ms": mergeSort,
    "qs": quickSort
}

let algorithm1 = algorithms["bs"]
let algorithm2 = algorithms["ss"]
dropMenuText1.innerText = "Bubble Sort"
dropMenuText2.innerText = "Selection Sort"

for (let item of drop1) {
    item.addEventListener("click", (e) => {
        dropMenuText1.innerText = e.target.innerText
        algorithm1 = algorithms[e.target.id]
    })
}

for (let item of drop2) {
    item.addEventListener("click", (e) => {
        dropMenuText2.innerText = e.target.innerText
        algorithm2 = algorithms[e.target.id]
    })
}

let timeDelay = 0
const delaySelector = document.querySelector("#speed")

delaySelector.addEventListener("input", () => {
    timeDelay = parseInt(delaySelector.value)
})

const getWidth = (item) => {
    const computedStyle = window.getComputedStyle(item);
    const widthString = computedStyle.getPropertyValue("width");
    const width = parseFloat(widthString);
    return width
}

const getRandom = () => {
    const screenWidth = window.innerWidth / 2;
    const minWidth = screenWidth / 10;
    const maxWidth = screenWidth * .94;
    return Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
}

const fillScreen = () => {
    section1.innerHTML = "";
    section2.innerHTML = "";
    let arrayItems = size.value;
    for (let i = 0; i < arrayItems; i++) {
        const newDiv1 = document.createElement("div")
        const newDiv2 = document.createElement("div");
        newDiv1.classList.add("item1");
        newDiv2.classList.add("item2");
        const randomWidth = getRandom();
        newDiv1.style.width = `${randomWidth}px`;
        newDiv2.style.width = `${randomWidth}px`;
        newDiv1.id = `section1-item-${i}`;
        newDiv2.id = `section2-item-${i}`;
        section1.appendChild(newDiv1);
        section2.appendChild(newDiv2);
    }
}

fillScreen()

size.addEventListener("input", () => {
    fillScreen()
});
