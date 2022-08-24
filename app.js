const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/users')
const app = express()


app.use(express.json())

app.use( "/users" , userRouter)


//connection to mongodb

mongoose.connect("mongodb://localhost/devofsatyajit", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
});
const con = mongoose.connection

con.on('open' , ()=>{
    console.log("db connected...")
})


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));





// server config...
app.listen('3000', ()=>{
    console.log("server connected..")
})