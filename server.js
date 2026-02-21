const express = require("express");
const app = express();

app.use(express.json());

let sensorData = {};

app.post("/api/data", (req, res) => {
  sensorData = req.body;
  console.log(sensorData);
  res.json({ status: "OK" });
});

app.get("/api/data", (req, res) => {
  res.json(sensorData);
});
app.get("/", (req, res) => {
  res.send("UrbanEye Backend is Running 🚀");
});
app.listen(3000, () => console.log("UrbanEye API Running"));
