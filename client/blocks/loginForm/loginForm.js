Template.loginForm.events({
  'submit .loginForm': function (e) {
    var username = e.target[0].value
  , password = e.target[1].value
  , sendMeBackTo = ''
    Meteor.loginWithPassword(username, password, function (err) {
      if(err) {
        console.log(err)
      } else if (sendMeBackTo = Session.get('sendMeBackTo')) {
        Router.go(sendMeBackTo)
      }
    })

    return false
  }
})