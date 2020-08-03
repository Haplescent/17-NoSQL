// From documentation
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: Date,
  exercises: Array,
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
