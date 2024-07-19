const compare1 = document.querySelector("#compare")

compare1.addEventListener("click", async () => {
    const items = document.querySelectorAll(".item1")
    const size = items.length;
    insertionSort(items)
})