const Event = require('../models/event');

module.exports = {
  new: newEvent,
  create,
  index
};

function index(req, res) {
    Event.find({}, function(err, events) {
      res.render('events/index', {events});
    });
}

function create(req, res, next) {
  if (!req.user) res.status(401).send('You are not authorized to do that.');
  const event = new Event(req.body);
  event.user = req.user._id;
  event.save(function(err) {
    if(err) return next(err);
    console.log(event);
    res.redirect('/events');
  });
}

function newEvent(req, res) {
  res.render('events/new');
}