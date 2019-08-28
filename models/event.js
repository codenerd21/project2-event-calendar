const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  }
}, {
  timestamps: true
});

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },  
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  descrip: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  feedback: [feedbackSchema]
}, {
  timestamps: true
});


// Compile Schema into a Model and Export
// First Argument is name of model
// Second Argument is name of Schema you are compiling into Model

module.exports = mongoose.model('Event', eventSchema);
