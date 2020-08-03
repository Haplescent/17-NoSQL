const express = require("express");
const mongoose = require("mongoose");
// const db = require("./models/index.js");

mongoose.connect("mongodb://localhost/workout_db", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/workout-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => console.log(`listening at ${PORT}`));
