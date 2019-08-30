const Event = require('../models/event');

module.exports = {
  new: newEvent,
  create,
  index,
  show,
  delete: deleteEvent,
  edit,
  update
};

function update(req, res) {
  if (!req.user) res.status(401).send('You are not authorized to do that.');
  Event.findByIdAndUpdate(req.params.id, req.body, function(err, event) {
  res.redirect(`/events/${req.params.id}`)
  });
}

function edit(req, res) {
  Event.findById(req.params.id, function(err, event) {
    res.render('events/edit', {event});
  });
};

function deleteEvent(req, res) {
  if (!req.user) res.status(401).send('You are not authorized to do that.');
  Event.findByIdAndDelete(req.params.id, function(err, event){
    res.redirect('/events');
  });
};

function show(req, res) {
  Event.findById(req.params.id, function(err, event) {
    res.render('events/show', {event});
  });
}

function index(req, res) {
    Event.find({}, function(err, events) {
      res.render('events', {events});
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