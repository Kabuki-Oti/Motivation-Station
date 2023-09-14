//a logging middleware function for Express.js
//when a request is made to Express.js, middleware logs the HTTP method and original url (helps track requests from servers)
function logger(req, res, next) {

    console.log(req.method, req.originalUrl);//logs the HTTP method and original url
    next();
}

//????????may need cors middleware??

module.exports = logger;//refer to app.js file