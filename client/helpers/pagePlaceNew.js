Template.pagePlacesNew.helpers({
  placeSchema: function () {
    return Schema.place
  }
, oreOptions: function () {
    var allPlaces = Places.find({}, {fields: { ore: true }}).fetch()
  , allOres = []
    _.each(allOres, function (place) {
      if(place.ore && allPlaces.indexOf(place) < 0) {
        allOres.push({
          label: place.ore
        , value: place.ore
        })
      }
    })
    return allOres
  }
})