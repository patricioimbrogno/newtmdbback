const express = require("express");
const app = express();
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose')
const routes = require("./routes/index");

app.use(cookieParser());
app.use(express.json());
app.use(volleyball);
app.use("/api", routes);


mongoose.connect("mongodb://localhost:27017/tmdb", ()=> {
  console.log("connected")
}, e => console.error(e))

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});