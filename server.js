const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const db = require("./models/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/workout_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const workoutRoutes = require("./routes/workout-routes.js")(app);

app.listen(PORT, () => console.log(`listening at ${PORT}`));
