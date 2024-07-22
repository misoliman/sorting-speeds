const compare1 = document.querySelector("#compare")

compare1.addEventListener("click", async () => {
    const items = document.querySelectorAll(".item1")
    await algorithm1(items)
    algorithm1Finised = true
    if (algorithm2Finised) {
        compare.disabled = false
        size.disabled = false

    }
})