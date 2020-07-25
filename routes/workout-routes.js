const workoutController = require("../controller/workout-controller.js");

module.exports = function (app) {
  app.get("/Workout", workoutController.getWorkouts);

  app.post("/newWorkout", workoutController.addWorkout);

  //   app.delete("/deleteWorkout", workoutController.deleteWorkout);

  //   app.patch("/updateWorkout", workoutController.updateWorkout);
};
