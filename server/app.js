const express = require("express");
const cors = require('cors');

const data = require("./data");

//create an Express server
const app = express();


//tell the app to listen to json bodies on  post request
app.use(express.json());

//add 'headers' to each response,
app.use(cors());


//set up a route
app.get("/", (req, res)=> {
    res.send("Welcome to the ice cream API!");
})

app.get("/flavours", (req, res) => {

    let flavours = data;

    if(req.query.vegan === "true") {
        flavours = flavours.filter(f => f["vegan"])
    }

    res.json({
        flavours: flavours.map(f => f["flavour"])
    })
})

app.get("/flavours/:id", (req, res) => {
    //extract parameter from url
    const id = req.params.id;

    //filter the data for that id
    const filteredData = data.filter(f => f["id"] == id);

    if(filteredData.length == 1) {
        //send the first filtered result
    res.json({
        flavour: filteredData[0]
        })
    } else {
        res.status(404).json({
            error: "No such ice cream"
        })
    }
})

app.post("/flavours", (req, res) => {

    const newFlavour = req.body;
    newFlavour["id"] = data.length + 1;
    data.push(newFlavour);
    
    res.status(201).json({
        success: true,
        flavour: newFlavour
    })
})




module.exports = app;
