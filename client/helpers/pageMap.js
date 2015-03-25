Template.pageMap.helpers({
  listPlaces: function () {
    return placesFilter.getItems()
  }
})

Template.pageMap.rendered = function () {
  var thisZoomer = Object.create(Zoomer)
  thisZoomer.init('.map')
}