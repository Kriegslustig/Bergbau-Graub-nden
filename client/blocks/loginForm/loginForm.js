Template.loginForm.events({
  'submit .loginForm': function (e) {
    var username = e.target[0].value
  , password = e.target[1].value
    Meteor.loginWithPassword(username, password, function (err) {
      if(err) {
        console.log(err)
      }
    })

    return false
  }
})