Template.pageMap.helpers({
  listPlaces: function () {
    placesFilter.updateFilter()
    return placesFilter.getItems()
  }
})