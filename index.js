const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const blogRoute = require('./routes/blogs')

//our whole project is sort of in this variable "app"
const app = express()

//shoot config file in order to run .env 
require('dotenv').config()
const PORT = process.env.PORT || 5000

//middleware
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

//routes middleware -> blogRoute will be a suffix to '/home'
app.use('/blogs', blogRoute)

//Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}, () => {
    console.log("Finally, connected to DB!")
})

//here our app listens => https://localhost:<PORT>
app.listen(PORT, () => {
    console.log(`We are listening at PORT ${PORT}`)
})