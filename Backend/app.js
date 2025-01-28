const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const morgan = require("morgan");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World Hi");
});

app.use("/api/v1/", userRoutes);

module.exports = app;
