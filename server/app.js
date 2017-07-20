const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

//mongoose config
const mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/deri-kurniawan-1';
mongoose.Promise('bluebird');
mongoose.connect(url, (err)=>{
    if(err) console.log(err);
    console.log('you are conected on url: ', url);
});

//router declare


//app declare
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//router use


//app connect port
app.listen(process.env.PORT, ()=>{
    console.log('you are listening on port ', process.env.PORT);
});

module.exports = app;