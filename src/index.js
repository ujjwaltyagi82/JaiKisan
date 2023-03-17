const express = require('express')
const mongoose = require('mongoose')
const route = require("./routes/route")

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://Ujju7982:jiOpJXHdr8UNZvNj@cluster0.y5didvs.mongodb.net/test',
{ useNewUrlParser: true })
    .then(() => console.log("Mongoose is connected"))
    .catch(error => console.log(error))

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('express is running on ' + (process.env.PORT || 3000))
})
