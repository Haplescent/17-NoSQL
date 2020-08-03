const workoutController = require("../controller/workout-controller.js");

module.exports = function (app) {
  app.get("/api/workouts", workoutController.getWorkout);
  app.get("/api/workouts/range", workoutController.getWorkoutRange);
  app.put("/api/workouts/:id", workoutController.addExercise);
  app.post("/api/workouts", workoutController.addWorkout);

  //   app.delete("/deleteWorkout", workoutController.deleteWorkout);

  //   app.patch("/updateWorkout", workoutController.updateWorkout);
};
