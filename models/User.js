const mongoose = require("mongoose");
const profileSchema = require("./Profile")

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  profile: profileSchema,
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = User = mongoose.model("User", userSchema);
