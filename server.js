const express = require("express");
//const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = 3000;

const app = express();


//this middleware logs out each request each time or automatically log the routes calls
app.use(logger("dev"));


//this will use all the html and js files inside the public folder
app.use(express.static("public"));



app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect("mongodb://localhost/workout", {useNewUrlParser: true});


//routes

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
