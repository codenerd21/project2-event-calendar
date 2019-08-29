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
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
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
  review: [feedbackSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Event', eventSchema);
