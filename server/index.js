//starts a server and listens to request
// require("dotenv").config();//imports dotenv module, and read, parses and assigns variables to process.env.
const app = require('./app');//imports from app.js (refer to app.js file)
const port = 3000;

//starts server on specified port
app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})