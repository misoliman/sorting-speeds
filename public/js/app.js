const generator = document.querySelector("#generator")
const size = document.querySelector("#size")
const speed = document.querySelector("#speed")
const section1 = document.querySelector(".section-1")
const section2 = document.querySelector(".section-2")

let timeDelay = 0

const getWidth = (item) => {
    const computedStyle = window.getComputedStyle(item);
    const widthString = computedStyle.getPropertyValue("width");
    const width = parseFloat(widthString);
    return width
}

const getRandom = () => {
    const screenWidth = window.innerWidth / 2;
    const minWidth = screenWidth / 10;
    const maxWidth = screenWidth * .9;
    return Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
}

size.addEventListener("input", () => {
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
});
