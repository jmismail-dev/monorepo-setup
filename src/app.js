const express = require('express')
const app = express()
const port = 7000

app.get('/api', (req, res) => {
    res.send({
        message: 'Hello Mohamed! '
    })
})

app.listen(port, () => {
    console.log(`App on port ${port}`)
})