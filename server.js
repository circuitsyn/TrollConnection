// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
// Express extends NODE HTTP objects
// express() calls the express function and gives us an application instance that we save to our app variable
// on the app object, now we can create routes such as http GET or POST requests
var app = express();
var PORT = process.env.PORT || 8080;

// =================== Sets up the Express app to handle data parsing ==================== //
// Middleware functions are functions added to the stack that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. 

// These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.

// express.urlencoded() provides middleware for automatically parsing forms with the content-type application/x-www-urlencoded and storing the result as a dictionary (object) in req.body
// The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. 
app.use(express.urlencoded({ extended: true }));

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
// A new body object containing the parsed data is populated on the request object after the middleware
app.use(express.json());



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
// Bind our application to the TCP PORT to start listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });