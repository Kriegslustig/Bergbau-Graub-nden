Meteor.publish('placesList', function () {
  return Places.find({}, {fields: {'images': false}})
})

Meteor.publish('usersList', function () {
  if(Meteor.user()) {
    return Meteor.users.find({}, {fields: {'username': true}})
  } else {
    return false;
  }
})