if(Places.find({}).count() < 1) {
  Places.insert({
    location: {
      locationName: 'My Home'
    , coordinates: {
        longitude: 12323
      , latitude: 24412
      }
    }
  , type: 'home'
  , owners: [
    {
      ownerName: 'superman'
    , start: 10
    , stop: 100
    }
  ]
  , usage: {
      start: 1
    , stop: 1000
    }
  })
  Places.insert({
    location: {
      locationName: 'A mine! :o'
    , coordinates: {
        longitude: 10323
      , latitude: 22412
      }
    }
  , type: 'mine'
  , ores: ['eisen']
  , owners: [
    {
      ownerName: 'superman'
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

if(Meteor.users.find({}).count() < 1) {
  Accounts.createUser({
    username: 'superman'
  , password: 'megasicher'
  })
}