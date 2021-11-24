const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();
const mockAPIResponse = require("./mockAPI.js");
const PORT = 8081;
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
const API = process.env.MEANING_CLOUD_API;


app.use(express.static('dist'))
app.post("/url-input", async (req, res) => {
  try {
    const url = req.body.url;

    const response = await axios.post(
      "https://api.meaningcloud.com/sentiment-2.1",
      { key: API, url: url, lang: "en" }
    );

    res.status(201).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.listen(PORT, (error) => {
  if (error) {
    throw new Error(error);
  }
});

module.exports = app;