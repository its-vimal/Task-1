const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/Vimal", (req,res) => {
    res.send("Hello Vimal")
})

app.listen(3000)