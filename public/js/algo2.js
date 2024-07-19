const compare2 = document.querySelector("#compare")

compare2.addEventListener("click", async () => {

    const items = document.querySelectorAll(".item2")
    const size = items.length;
    selectionSort(items)

})