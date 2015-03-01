placesFilterController = {
  placeType: Object.create(FilterCheckboxes)
, init: function () {
    var self = this
    timeRange.element.addEventListener('changed', self.updateTime)
    self.placeType.element.addEventListener('changed', self.updateType)
  }
, updateTime: function (e) {
    placesFilter.subFilters.usage.setAttribute('start', e.detail.position)
  }
, updateType: function (e) {
    console.log(e.detail)
    placesFilter.subFilters.placeType.setAttribute('types', e.detail.trueList)
  }
}

Template.placesFilterController.rendered = function () {
  placesFilterController.init()
}

document.addEventListener('filterCheckboxesRendered', function (detail) {
  if(detail.name == placesFilterController.placeType.name) {
    placesFilterController.placeType.items = []
    // TODO: These types will probably need to be denormalized into a seperate collection
    var allPlacesWithTypes = Places.find({}, {fields: {type: true}}).fetch()
    _.each(allPlacesWithTypes, function (place) {
      placesFilterController.placeType.items.push({
        name: place.type
      , label: place.type
      })
    })
    placesFilterController.placeType.init()
  }
})