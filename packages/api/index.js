const express = require('express')
const common = require('../common/lib/common')
const port = process.env.PORT || 3001
const app = express()
// const commonFn = require('common')

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