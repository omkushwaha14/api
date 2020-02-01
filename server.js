const express = require('express')
const app = express()
const path = require('path')
const SERVER_PORT = process.env.PORT ||4444
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/pages', require('./routes/pages').route)
app.use('/api', require('./routes/api').route)
app.use('/', express.static(path.join(__dirname, 'public_static')))


 app.listen(SERVER_PORT, () => {
    console.log("Server started on http://localhost:4444/")
})
