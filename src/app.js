const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
    res.send({
        message: 'Hello Мухаммед! '
    })
})

app.listen(port, () => {
    console.log(`App on port ${port}`)
})