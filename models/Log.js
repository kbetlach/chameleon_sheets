const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({

    date: {
        type: String,
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    },
    scores: [{
        time: {
            type: Number
        },
        score: {
            type: Number,
            min: 0,
            max: 5
        },
        recordedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }],
    comment: {
        type: String
    }
})

const Log = mongoose.model("Log", logSchema);

module.exports = Log
