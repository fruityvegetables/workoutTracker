const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const opts = { toJSON: { virtuals: true } };

const WorkoutSchema = new Schema({
    day: Date,
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
      }],
      totalDuration: {
          type: Number,
          default: 0
      }
    });
//}, opts);

// WorkoutSchema.virtual('totalDuration').get(function() {
//     return this.exercises.reduce((accumulator, exercise) => { 
//         return accumulator + exercise.duration 
//     });
//   });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;