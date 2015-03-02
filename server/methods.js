Meteor.methods({
  newPlace: function (data) {
    if(!Meter.user()) return false
    check(data, Schema.place)
    Places.insert({
      location: {
        name: data.locationName
      , coordinates: {
          longitude: data.locationLongitude
        , latitude: data.locationLatitude
        }
      }
    , type: data.type
    , ores: data.ores.split(', ')
    , finds: data.finds
    , images: data.images
    , references: data.references
    , owners: data.owners
    , usage: {
        start: data.usageStart
      , stop: data.usageStop
      }
    })
  }
})