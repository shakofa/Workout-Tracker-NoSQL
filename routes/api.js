const router = require('express');
const workout = require('../models/workout.js');


//this route create the workout database
router.post('/api/workouts', (req, res) => {
    workout.create({}).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {res.json(err);
    });
});


//this route find the data by its id and update it.
router.put('/api/workouts/:id', ({body, params}, res) => {
    workout.findByIdAndUpdate(params.id, {$push: {excersises: body } }, {new: true, runValidators: true})
    .then((dbWorkout) => {res.json(dbWorkout);})
    .catch((err) => {res.json(err);
    });

});


//this route and aggregate function dynamically add up and return the total duration for each workout
router.get('/api/workouts/range', (req, res) => {
    workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$excersises.duration',
                }
            },
        },
    ])
    .sort({_id: -1}).limit(7).then((dbWorkouts) => {
        console.log(dbWorkouts);
        res.json(dbWorkouts)
      }).catch((err) => {res.json(err); });


      //this routes delete the workout by its id 
      router.delete('/api/workouts', ({ body }, res) => {
        Workout.findByIdAndDelete(body.id)
          .then(() => {
            res.json(true);
          })
          .catch((err) => {
            res.json(err);
          });
      });
      
      module.exports = router;
      
});