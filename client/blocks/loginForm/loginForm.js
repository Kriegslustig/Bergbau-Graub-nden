Template.loginForm.events({
  'submit .loginForm': function (e) {
    var username = e.target[0].value
  , password = e.target[1].value
    Meteor.loginWithPassword(username, password)

    return false
  }
})