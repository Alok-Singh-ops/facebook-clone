const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongooseSetup = require("./mongo/connection");
const { handleNewUser } = require("./controllers/signUp");
const { handleSignIn } = require("./controllers/signIn");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongooseSetup.connectToDatabase();

app.post("/signup", handleNewUser);
app.post("/signin", handleSignIn);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
