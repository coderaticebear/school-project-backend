const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  firtname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  addressOne: {
    type: String,
  },
  addressTwo: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    requried: true,
  },
  zip: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = Profile = mongoose.model("Profile", profileSchema);
