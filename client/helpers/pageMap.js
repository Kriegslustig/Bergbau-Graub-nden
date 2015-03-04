Template.pageMap.helpers({
  listPlaces: function () {
    placesFilter.updateItems()
    return placesFilter.getItems()
  }
})

Template.pageMap.rendered = function () {
  var thisZoomer = Object.create(Zoomer)
  thisZoomer.init('.map')
}