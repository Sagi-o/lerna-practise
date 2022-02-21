const express = require('express')

// Import from common library
const common = require('../common/lib/common')

const port = process.env.PORT || 3001
const app = express()

app.get('/', (req, res) => {
    res.send('API server works!')
})

app.get('/common', (req, res) => {
    const result = common()
    res.send(result)
})

app.listen(port, (error) => {
    console.log(`Running server on localhost:${port}...`)
})