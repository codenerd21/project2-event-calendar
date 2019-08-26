const Event = require('../models/event');

module.exports = {
  new: newEvent,
  create,
  index
};

function index(req, res) {
    res.render('events/events');
}

function create(req, res) {
  //add in ('events/events)
  //wait - someone mentioned using a bootstrap form instead.
}

function newEvent(req, res) {
  res.render('events/new');
}