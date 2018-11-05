// Displays all characters
app.get("/api/characters", function(req, res) {
    return res.json(characters);
  });

  // Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
    // console.log(req)
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;
    // console.log('REQ OBJECT: ', req)
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter);
  
    characters.push(newcharacter);
  
    res.json(newcharacter);
  });