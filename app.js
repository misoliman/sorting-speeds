const express = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.send("Hello from home")
})

app.get("/about", (req, res) => {
    res.send("Hello from about")
})

app.listen(port, () => {
    console.log("Server is up on port", port)
})