var bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    role: {
      type: String,
      default: "Teacher",
      allowNull: false
    },
    email: {
        type: String,
        allowNull: false
    },
    password: {
        type: String
    },
    first_name: {
        type: String,
        allowNull: false
    },
    last_name: {
        type: String,
        allowNull: false
    },
    school: {
        type: String,
        allowNull: false
    },
    students: {
        type: String
    }
    },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
userSchema.methods.encryptPassowrd = function(password){ return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null); 
}
const User = mongoose.model("User", userSchema);

module.exports = User;