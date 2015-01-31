Router.route('/', {
  name: 'map'
, action: function () {
    var self = this
    Meteor.subscribe('placesList')
    self.render('pageMap')
  }
, data: {
    metaTitle: function () {
      document.title = 'Bergbau Graubünden - Map'
    }
  }
})