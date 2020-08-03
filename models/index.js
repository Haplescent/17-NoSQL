// From documentation
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workout_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("connected");
});

const workoutSchema = new mongoose.Schema({
  date: Date,
  exercises: Array,
});

const Workout = mongoose.model("Workout", workoutSchema);

db.Workout = Workout;
module.exports = db;
