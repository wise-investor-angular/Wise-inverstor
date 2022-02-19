const mongoose = require("mongoose");
const db = require("./index.js");
const bcrypt = require("bcrypt");
const Salt = 10;

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
});

UserSchema.pre("save", function (next) {
  var user = this;
  console.log(user.email, "sign-up email ");
  console.log(user.password, "sign-up password");
  bcrypt.genSalt(Salt, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      } else {
        user.password = hash;
        next();
      }
    });
  });
});

UserSchema.methods.comparePassword = function (inputPass, callback) {
  console.log(inputPass, "login password");
  console.log(this.password, "login password");
  bcrypt.compare(inputPass, this.password, function (err, isMatch) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, isMatch);
    }
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = { User };
