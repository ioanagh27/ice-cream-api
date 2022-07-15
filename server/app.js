const express = require("express");

//create an Express server
const app = express();


//set up a route
app.get("/", (req, res)=> {
    res.send("Welcome to the ice cream API!");
})


module.exports = app;
