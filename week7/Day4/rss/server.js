const express = require("express");
const cors = require("cors");
const ejs = require("ejs");
const axios = require("axios");
// const body-parser = require('body-parser')
// const rss-parser = require('rss-parser')

const app = express()
app.set('view engine', 'ejs')
app.use('/', express.static(__dirname + 'public/'))

app.get('/home',(req,res) =>{
    res.render('index')
})



app.listen('5003', () =>{
    console.log("on 5003");
})