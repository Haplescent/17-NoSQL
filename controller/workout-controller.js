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

  addExercise: async (req, res) => {
    db.Workout.findById(req.params.id, async (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        data.exercises.push(req.body);
        data.day = new Date().setDate(new Date().getDate());
        try {
          await data.save();
          res.send(data);
        } catch (err) {
          res.send(err);
        }
      }
    });
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
    const newWorkout = new db.Workout({
      day: new Date().setDate(new Date().getDate()),
    });

    try {
      await newWorkout.save();
      res.send(newWorkout);
    } catch (err) {
      res.send(err);
    }
  },
};
