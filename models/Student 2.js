const mongoose = requrie("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        firstName: {
            type: String,
            require: "Student must have a first name"
        },
        lastName: {
            type: String,
            require: "Student must have a last name"
        }
    },
    classRoom: {
        type: String
    },
    hours: {
        type: Number,
        default: 6
    },
    startTime: {
        type: String,
        default: "0800"
    },
    day: [{
        date: {
            type: Date,
            Default: Date.Now
        },
        scores: [{
            time: {
                type: string
            },
            score: {
                type: Number,
                min: 1,
                max: 5
            },
            recoredBy: Schema.types.ObjectId, ref: "User"
        }],
        comments: {
            type: String
        }
    }],
    createdAt: {
        type: Date,
        default: Date.Now
    },
    updatedAt: {
        type: Date,
        default: Date.Now
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;