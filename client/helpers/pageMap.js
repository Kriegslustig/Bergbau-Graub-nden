Template.pageMap.helpers({
  listPlaces: function () {
    return placesFilter.getItems()
  }
})

Template.pageMap.rendered = function () {
  thisZoomer = Object.create(Zoomer)
  thisZoomer.init('.map')
}