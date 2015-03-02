Meteor.methods({
  newPlace: function (data) {
    if(!Meteor.user()) return false
    console.log(data)
    check(data, Schema.place)
    var owners = _.map(data.owners, function (owner) {
      return {
        name: owner.ownerName
      , start: owner.start
      , stop: owner.stop
      }
    })
  , newPlace = {
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
    , owners: owners
    , usage: {
        start: data.usageStart
      , stop: data.usageStop
      }
    }
    console.log(newPlace)
    Places.insert(newPlace)
  }
})