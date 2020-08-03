const workoutController = require("../controller/workout-controller.js");

module.exports = function (app) {
  app.get("/api/workouts", workoutController.getWorkouts);

  app.post("/api/workouts", workoutController.addWorkout);

  //   app.delete("/deleteWorkout", workoutController.deleteWorkout);

  //   app.patch("/updateWorkout", workoutController.updateWorkout);
};
