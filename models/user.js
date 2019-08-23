//first step - require mongoose
const mongoose = require('mongoose');

//set up Schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  email: String,
  avatar: String,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
