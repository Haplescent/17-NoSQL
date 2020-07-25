const Workout = require("../models/index.js");

module.exports = {
  getWorkouts: async (req, res) => {
    const Workouts = await Workout.find();

    try {
      res.send(Workouts);
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

  //   deleteWorkout: async (req, res) => {
  //     Workout.findByIdAndDelete(req.body._id);
  //     try {
  //       res.send(Workout);
  //     } catch (err) {
  //       res.send(err);
  //     }
  //   },

  //   addWorkout: async (req, res) => {
  //     const newWorkout = new Workout({ name: req.body.name });

  //     try {
  //       await newWorkout.save();
  //       res.send(newWorkout);
  //     } catch (err) {
  //       res.send(err);
  //     }
  //   },
};
