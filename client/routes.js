Router.route('/', {
  name: 'map'
, waitOn: function () {
    return Meteor.subscribe('placesList')
  }
, action: function () {
    var self = this
    self.render('pageMap')
  }
})

Router.route('/users', {
  name: 'users'
, waitOn: function () {
    if(Meteor.user()) {
      return Meteor.subscribe('usersList')
    } else {
      return true
    }
  }
, action: function () {
    var self = this
    self.render('pageUsers')
  }
})