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
<<<<<<< HEAD
=======
  console.log(user.password)
>>>>>>> 578dba9cb645ab23e4d517390d17527509de5f96
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
<<<<<<< HEAD
=======
  console.log(inputPass,"hello")
  console.log(this.password,"hellooooooooooo")
>>>>>>> 578dba9cb645ab23e4d517390d17527509de5f96
  bcrypt.compare(inputPass, this.password, function (err, isMatch) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, isMatch);
    }
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = { User};
<<<<<<< HEAD
=======
 
>>>>>>> 578dba9cb645ab23e4d517390d17527509de5f96
