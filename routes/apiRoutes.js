const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", function(req, res) {
    Workout.find().then(results => {
        res.json(results);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;