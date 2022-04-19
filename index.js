// File : index.js
const express = require("express");
const bodyParser = require("body-parser");
const auth = require('./middleware/auth');
const shop = require('./routes/shop');
const user = require('./routes/user');

const app = express();
app.use(bodyParser.json());

// PORT
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);
app.use("/shop", shop);


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});