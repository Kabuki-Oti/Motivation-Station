const express = require("express");//imports Express.js module
const cors = require('cors');//imports CORS middleware (ran npm install cors, now API is listening on port 3000)
const logger = require("./logger");//imports logging middleware (refer to logger.js file)
const app = express();
// const { [displayQuote], [createNewQuote] } = require("./");

const quotes = require("./quotes.json")

app.use(logger);

app.use(cors());
app.use(express.json())

//GET = request to retrieve data

//Returns a string stating the number of quotes available.
app.get("/", (req, res) => {
    res.send(`Welcome to the quotes API! There are ${quotes.length} available.`);
});

//Returns a JSON object containing all the quotes.
app.get("/quotes", (req, res) => {
    res.json(quotes);
});

//Returns a random quote from the collection as a JSON object.
app.get("/quotes/random", (req, res) => {
    const randIdx = Math.floor(Math.random() * quotes.length);//returns random quote
    res.send(quotes[randIdx]);//sends quotes at index randIdx in quotes array
})

//
app.get("/quotes/:id", (req, res) => {
    const idx = req.params.id;

    res.send(quotes[idx]);
})

//POST = request to send data

//Accepts a JSON object and uses it to create and store a new quote.
app.post("/quotes", (req, res) => {
    const newQuote = req.body;//gets body from request

    newQuote["id"] = quotes.length;//adds id to newQuote object. id is set to length of quotes array

    quotes.push(newQuote);//stores new quote in quotes array

    res.status(201).send(newQuote);//send sucess response back to client
})
