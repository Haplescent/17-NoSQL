const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const db = require("./models/index.js");

var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/workout_db";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGODB_URI, options);

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});
console.log(`remote db is at ${process.env.MONGODB_URL}`);
console.log(`connected to ${MONGODB_URI}`);

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/workout-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => console.log(`listening at ${PORT}`));
