const Event = require('../models/event');

module.exports = {
  create
};

function create(req, res) {
  Event.findById(req.params.id, function(err, event) {
    event.reviews.push(req.body);
    console.log(event.reviews);
    event.save(function(err) {
      res.redirect(`/events/${event._id}`);
    });
  });
}