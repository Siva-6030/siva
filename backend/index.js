const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
//env config
require('dotenv').config();
const db = require("./config/db");

//rest object
const app = express();

//database connection
db();

//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
});

// Import routes
const questionRouter = require("./routes/Question");
const answerRouter = require("./routes/Answer");

// Routes
app.use("/questions", questionRouter);
app.use("/answers", answerRouter);

// New route to send a string
app.get("/api/message", (req, res) => {
    const message = "Hello from the backend!";
    res.json({ message }); // Send the string as a JSON response
});

app.get("/", (req, res) => {
    res.send("This API is reserved for Quora clone");
});

// Server listening
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port no ${port}`);
});
