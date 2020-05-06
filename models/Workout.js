const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises: [{
        type: {
            type: String,
            required: "Enter the exercise type"
        },
        name: {
            type: String,
            required: "Enter the exercise name"
        },
        duration: {
            type: Number,
            required: "Enter the duration of the exorcist"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
      }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;