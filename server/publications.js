Meteor.publish('placesList', function () {
  return Places.find({}, {fields: {'images': false}})
})