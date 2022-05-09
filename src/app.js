const express = require('express')
const app = express()
const port = 7000

app.get('/api', (req, res) => {
    res.send({
        message: 'Hello Мухаммед! ',
        change : 'This is a change from us!!',
        change2 : "This too"
    })
})

app.listen(port, () => {
    console.log(`App on port ${port}`)
})