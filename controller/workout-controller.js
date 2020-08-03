const db = require("../models/index.js");

module.exports = {
  getWorkout: async (req, res) => {
    const lastWorkout = await db.Workout.find();
    try {
      res.send(lastWorkout);
    } catch (err) {
      res.send(err);
    }
  },

  getWorkoutRange: async (req, res) => {
    const workoutRange = await db.Workout.find();
    try {
      res.send(workoutRange);
    } catch (err) {
      res.send(err);
    }
  },

  addWorkout: async (req, res) => {
    const newWorkout = new Workout({
      date: req.body.date,
      exercises: req.body.exercises,
    });

    try {
      await newWorkout.save();
      res.send(newWorkout);
    } catch (err) {
      res.send(err);
    }
  },

  deleteWorkout: async (req, res) => {
    Workout.findByIdAndDelete(req.body._id);
    try {
      res.send(Workout);
    } catch (err) {
      res.send(err);
    }
  },

  addWorkout: async (req, res) => {
    const newWorkout = new Workout({ name: req.body.name });

    try {
      await newWorkout.save();
      res.send(newWorkout);
    } catch (err) {
      res.send(err);
    }
  },
};
