const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const DataModel = require('./Models/model')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://abhishekkumar:ELYGTicH3TIm3N3J@cluster0.096amnr.mongodb.net/test?retryWrites=true&w=majority")

app.get('/getData',(req,res)=>{
    DataModel.find() 
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(4000, () => {
    console.log("server started");
})
