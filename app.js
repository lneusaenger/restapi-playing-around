const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv/config");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

// import the routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//routes

// GET -> fetch the data
// POST -> push the data
// PATCH -> update the data
// DELETE -> delete the data

app.get("/", (req, res) => {
    res.send("I'm inside the homepage");
});

//create a listening port

//connect the mongoDB 
mongoose.connect(process.env.DB_CONNECTION);

app.listen(3000);

