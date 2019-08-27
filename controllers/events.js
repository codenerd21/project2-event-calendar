const Event = require('../models/event');

module.exports = {
  new: newEvent,
  create,
  index
};

function index(req, res) {
    res.render('events/events');
}

function create(req, res, next) {
  const event = new Event(req.body);
  event.user = req.user._id;
  event.save(function(err) {
    if(err) return next(err);
    res.redirect('/events');
  });
}

function newEvent(req, res) {
  res.render('events/new');
}