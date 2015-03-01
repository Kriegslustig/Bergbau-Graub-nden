placesFilterController = {
  placeType: Object.create(FilterCheckboxes)
, placeOwners: Object.create(FilterCheckboxes)
, init: function () {
    var self = this
    timeRange.element.addEventListener('changed', self.updateTime)
    self.placeType.element.addEventListener('changed', self.updateType)
    self.placeOwners.element.addEventListener('changed', self.updateOwners)
  }
, updateTime: function (e) {
    placesFilter.subFilters.usage.setAttribute('start', e.detail.position)
  }
, updateType: function (e) {
    placesFilter.subFilters.placeType.setAttribute('types', e.detail.trueList)
  }
, updateOwners: function (e) {
    placesFilter.subFilters.placeOwners.setAttribute('owners', e.detail.trueList)
  }
}

Template.placesFilterController.rendered = function () {
  placesFilterController.init()
}

document.addEventListener('filterCheckboxesRendered', function (e) {
  var detail = e.detail
  placesFilterController.placeOwners.name = 'placeOwner'
  placesFilterController.placeType.name = 'placeType'
  if(detail.name === placesFilterController.placeType.name) {
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
  } else if(detail.name === placesFilterController.placeOwners.name) {
    placesFilterController.placeOwners.items = []
    // TODO: These types will probably need to be denormalized into a seperate collection
    var allPlacesWithOwners = Places.find({}, {fields: {owners: true}}).fetch()
  , ownersBuffer = []
    _.each(allPlacesWithOwners, function (place) {
      _.each(place.owners, function (owner) {
        if(ownersBuffer.indexOf(owner.name) < 0) {
          ownersBuffer.push(owner.name)
        }
      })
    })
    _.each(ownersBuffer, function (ownerName) {
      placesFilterController.placeOwners.items.push({
        name: ownerName
      , label: ownerName
      })
    })
    placesFilterController.placeOwners.init()
  }
})