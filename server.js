const express = require('express');
const cors = require("cors")
const users = require("./routes/index.js")
const rides = require("./routes/rides.js")
const db = require('./db')
const logger = require('morgan')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    })
}
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
 