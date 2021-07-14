//Server side JS file

console.log("Server-side code is running");

const express = require("express");
const app = express();
const port = 3000;

//Serve files from the public directory

app.use(express.static("public"));


//Start the express web server listening on port 3000

app.listen(port, () => {
  console.log("Server is running on port 3000");
});

//Serve the homepage

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/index.html");
});
