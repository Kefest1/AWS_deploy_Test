const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Knowit')
})

app.get('/test', (req, res) => {
    res.send('Test Passsed')
})

app.listen(4080)
