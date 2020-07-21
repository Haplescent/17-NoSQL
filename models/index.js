// From documentation
const mongoose = require("mongoose");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("connected");
  const workoutSchema = new mongoose.Schema({
    day: Date,
    exercises: Array,
  });

  const Workout = mongoose.model("Workout", workoutSchema);
});

module.exports = db;
