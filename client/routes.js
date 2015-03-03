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
  name: 'placesNew'
, waitOn: function () {
    return Meteor.subscribe('placesList')
  }
, action: function () {
    var self = this
    self.render('pagePlacesNew')
  }
})

Router.route('/places/:_id/edit', {
  name: 'placesEdit'
, waitOn: function () {
    return Meteor.subscribe('placesList')
  }
, action: function () {
    var self = this
    self.render('pagePlacesEdit', {data: {
      _id: this.params._id
    }})
  }
})