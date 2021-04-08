// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/syntax", (request, response) => {
  response.sendFile(__dirname + "/views/syntax.html");
});

app.get("/problems", (request, response) => {
  response.sendFile(__dirname + "/views/problems.html");
});

app.get("/mario", (request, response) => {
  response.sendFile(__dirname + "/views/mario.html");
});

app.get("/variables", (request, response) => {
  response.sendFile(__dirname + "/views/variables.html");
});

app.get("/problems", (request, response) => {
  response.sendFile(__dirname + "/views/problems.html");
});


app.get("/binary", (request, response) => {
  response.sendFile(__dirname + "/views/binary.html");
});

app.get("/datatypes", (request, response) => {
  response.sendFile(__dirname + "/views/datatypes.html");
});

app.get("/placeholders", (request, response) => {
  response.sendFile(__dirname + "/views/placeholders.html");
});

app.get("/terminals", (request, response) => {
  response.sendFile(__dirname + "/views/terminals.html");
});

app.get("/index", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/selection", (request, response) => {
  response.sendFile(__dirname + "/views/selection.html");
});

app.get("/insertion", (request, response) => {
  response.sendFile(__dirname + "/views/insertion.html");
});

app.get("/bubble", (request, response) => {
  response.sendFile(__dirname + "/views/bubble.html");
});

app.get("/typecasting", (request, response) => {
  response.sendFile(__dirname + "/views/typecasting.html");
});

app.get("/bugs", (request, response) => {
  response.sendFile(__dirname + "/views/bugs.html");
});

app.get("/linear", (request, response) => {
  response.sendFile(__dirname + "/views/linear.html");
});

app.get("/forloops", (request, response) => {
  response.sendFile(__dirname + "/views/forloops.html");
});

app.get("/exit", (request, response) => {
  response.sendFile(__dirname + "/views/exit.html");
});

app.get("/arrays", (request, response) => {
  response.sendFile(__dirname + "/views/arrays.html");
});

app.get("/command", (request, response) => {
  response.sendFile(__dirname + "/views/command.html");
});

app.get("/functions", (request, response) => {
  response.sendFile(__dirname + "/views/functions.html");
});

app.get("/magic", (request, response) => {
  response.sendFile(__dirname + "/views/magic.html");
});

app.get("/while", (request, response) => {
  response.sendFile(__dirname + "/views/while.html");
});

app.get("/operators", (request, response) => {
  response.sendFile(__dirname + "/views/operators.html");
});

app.get("/dowhile", (request, response) => {
  response.sendFile(__dirname + "/views/dowhile.html");
});

app.get("/boolean", (request, response) => {
  response.sendFile(__dirname + "/views/boolean.html");
});

app.get("/unit1", (request, response) => {
  response.sendFile(__dirname + "/views/unit1.html");
});

app.get("/unit2", (request, response) => {
  response.sendFile(__dirname + "/views/unit2.html");
});

app.get("/unit3", (request, response) => {
  response.sendFile(__dirname + "/views/unit3.html");
});

app.get("/caesar", (request, response) => {
  response.sendFile(__dirname + "/views/caesar.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
