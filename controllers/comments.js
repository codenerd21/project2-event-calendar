const Event = require('../models/event');

module.exports = {
  create
};

function create(req, res) {
  Event.findById(req.params.id, function(err, event) {
    event.review.push(req.body);
    event.save(function(err) {
      res.redirect(`/events/${event._id}`);
    });
  });
}