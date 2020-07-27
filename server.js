const express = require("express");
const cors = require("cors");
const body = require("body-parser");
const app = express();

app.use(cors());
app.use(body.json());
const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!",
};

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage];

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/messages", (req, res) => {
  res.json(messages);
});

// app.post('/message', function (request, response) {

//   const newMessage = request.body
//    response.json(request.body)
// });

// app.listen(process.env.PORT);

// const port = process.env.PORT;
// console.log("port", port);

// Start our server so that it listens for HTTP requests!
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
