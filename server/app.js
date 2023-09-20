const express = require("express");
const cors = require('cors');
const logger = require("./logger");
const app = express();

const quotes = require("./quotes.json")

app.use(logger);

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.send(`Welcome to the quotes API! There are ${quotes.length} available.`);
});

app.get("/quotes", (req, res) => {
    res.send(quotes);
});

app.get("/quotes/random", (req, res) => {
    const randIdx = Math.floor(Math.random() * quotes.length);
    res.send(quotes[randIdx]);
})

app.get("/quotes/:id", (req, res) => {
    const idx = req.params.id;
    if(quotes.length > idx > 0){
        res.send(quotes[idx]);
    }else{
        res.status(404).send({
            error: "Quote not found"
        })
    }
})


app.post("/quotes", (req, res) => {
    const newQuote = req.body;

    newQuote["id"] = quotes.length;

    quotes.push(newQuote);

    res.status(201).send(newQuote);
})

module.exports = app