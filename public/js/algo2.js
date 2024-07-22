const compare2 = document.querySelector("#compare")



compare2.addEventListener("click", async () => {

    const items = document.querySelectorAll(".item2")
    await algorithm2(items)
    algorithm2Finised = true
    if (algorithm1Finised) {
        compare.disabled = false
        size.disabled = false
    }

})