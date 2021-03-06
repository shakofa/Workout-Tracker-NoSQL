const express = require("express");
//const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/api.js");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();


//this middleware logs out each request each time or automatically log the routes calls
app.use(logger("dev"));


app.use(express.urlencoded({extended: true}));
app.use(express.json());


//this will use all the html and js files inside the public folder

app.use(express.static("public"));



//mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false});


  mongoose.connect(
     process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
      useFindAndModify: false
    }
  );




//routes
app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));



app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});

