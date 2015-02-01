if(Places.find({}).count() < 1) {
  Places.insert({
    location: {
      name: 'My Home'
    , coordinates: {
        longitude: 12323
      , latitude: 24412
      }
    }
  , type: 'home'
  , thingsFound: []
  , images: []
  , references: []
  , owners: {}
  , usage: {
      start: 0
    , stop: 1000
    }
  })
}