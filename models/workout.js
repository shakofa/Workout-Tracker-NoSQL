const  mongoose = require("mongoose");
const schema = require("schema");

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: () => new Date(),
        
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Enter exercise type',
            },
            name: {
                type: string,
                trim: true,
                required: 'Enter exercise name',
            },
            distance: {
                type: Number,
            },
            weight: {
                type: numbe,
            },
            duration: {
                type: number,
                required: 'Enter exercise duration',
            },
            sets: {
                type: number,
                required: 'Enter exercise sets',
            },
            reps: {
                type: number,
                required: 'Enter exercise reps',
            },
        },
    ],
});


const workout = mongoose.model('workout', workoutSchema);
module.exports = workout;