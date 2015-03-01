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
  , owners: [
    {
      name: 'superman'
    , start: 10
    , stop: 100
    }
  ]
  , usage: {
      start: 1
    , stop: 1000
    }
  })
}