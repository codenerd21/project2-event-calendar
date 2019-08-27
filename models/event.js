const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },  
  date: {
    type: Date,
    default: Date.prototype.today
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
  }
}, {
  timestamps: true
});

Date.prototype.today = function () { 
  return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// Compile Schema into a Model and Export
// First Argument is name of model
// Second Argument is name of Schema you are compiling into Model

module.exports = mongoose.model('Event', eventSchema);
