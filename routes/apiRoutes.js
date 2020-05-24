const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", function(req, res) {
        Workout.find({}).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    });
router.post("/api/workouts", function (req, res) {
    console.log(req.body,"the post route");
        req.body.day = Date.now();
        Workout.create({

        }).then(data =>
            res.json(data)).catch(err => {
                console.log(err)
                res.json(err)
            })
    });
router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(res, "the put route");
        Workout.findByIdAndUpdate(
            params.id, {
            $push: { exercises: body }
        },
            { new: true }
        ).then(data => res.json(data))
            .catch(err => {
                console.log(err)
                res.json(err)
            })
    });
module.exports = router;