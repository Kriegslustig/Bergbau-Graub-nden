Template.pageMap.helpers({
  listPlaces: function () {
    placesFilter.updateItems()
    return placesFilter.getItems()
  }
})