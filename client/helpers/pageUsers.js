Template.pageUsers.helpers({
  usersList: function () {
    return Meteor.users.find({})
  }
})