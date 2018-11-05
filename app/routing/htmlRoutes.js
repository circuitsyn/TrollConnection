// =============================================================

// Basic route that sends the user first to the AJAX Page
// Create a GET route for the root path
// callback function takes in a request and response object from express that we use the response object to send back HTML
app.get("/", function(req, res) {
    console.log(res)
    // Use express .sendFile method which takes the path of the file we want to serve to the client
    // The path.join() method joins all given path segments together
    // __dirname returns the path of the current application
    res.sendFile(path.join(__dirname, "home.html"));
    // res.sendFile(__dirname + "/view.html");
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });