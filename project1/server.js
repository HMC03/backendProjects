const express = require('express')
const app = express()
const PORT = 3003

app.get('/', (req,res) => {
    console.log('Woohoo', req.method)
    res.sendStatus(200)
})

app.get('/hayden', (req,res) => {
    console.log('/hayden endpoint reached')
    res.send("Welcome to Hayden's Site!")
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))