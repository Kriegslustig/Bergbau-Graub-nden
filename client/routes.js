function redirectIfNotLoggedIn () {
  var self = this
  if(!Meteor.userId()) {
    Session.set('sendMeBackTo', self.url)
    self.redirect('login')
  } else {
    self.next()
  }
}

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

Router.route('/login', {
  name: 'login'
, action: function () {
    var self = this
    self.render('pageLogin')
  }
})

Router.route('/users', {
  name: 'users'
, onBeforeAction: redirectIfNotLoggedIn
, action: function () {
    var self = this
    self.render('pageUsers')
  }
})

Router.route('/places', {
  name: 'places'
, waitOn: function () {
    return Meteor.subscribe('placesList')
  }
, action: function () {
    var self = this
    self.render('pagePlaces')
  }
})

Router.route('/places/new', {
  name: 'places.new'
, onBeforeAction: redirectIfNotLoggedIn
, waitOn: function () {
    return Meteor.subscribe('placesList')
  }
, action: function () {
    var self = this
    self.render('pagePlacesNew')
  }
})

Router.route('/places/:_id/edit', {
  name: 'places.edit'
, onBeforeAction: redirectIfNotLoggedIn
, waitOn: function () {
    return Meteor.subscribe('placesList')
  }
, action: function () {
    var self = this
    self.render('pagePlacesEdit', {data: Places.findOne({_id: self.params._id})})
  }
})