// This is giving us back a function
import express from "express";

// Here we call this function, which gives us back an object - 'the server object'
const app = express();
const PORT = 3000;

// when we receive a GET request to 'base' path ('/') on this this server, run this function ('handle in this way'). - Shows the program is running.
// Must send back a response (res), or call the next function.
app.get("/", (req, res) => {
  res.send("Hello World!"); // will be performed when a GET request to 'localhost:3000' is made
});

// Takes in the port as the first arg.
// This callback function is called when the app is listening, and prints out the assoc mess.
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
