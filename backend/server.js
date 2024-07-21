const express = require('express')
const app = express()
var cors = require('cors')
 const bodyParser = require("body-parser")
app.use(bodyParser.json());

const connectDB = require("./config/dbconnection")
const bookSchema = require("./models/bookmodel")
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
const PORT = 5000
connectDB()
app.use("/books" , require("./routes/BooksRoutes"))

app.listen(PORT , () => { 
    console.log(` server is running at ${PORT}`)
})