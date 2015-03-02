Schema = {}
Schema.place = new SimpleSchema({
  locationName: {
    type: String
  , label: 'Location Name'
  }
, locationLatitude: {
    type: Number
  , label: 'Latitude'
  }
, locationLongitude: {
    type: Number
  , label: 'Longitude'
  }
, type: {
    type: String
  , label: 'Type'
  }
, ores: {
    type: String
  , label: 'Ores'
  , optional: true
  }
// , finds: {
//     type: Object
//   , label: 'Finds'
//   , optional: true
//   }
// , images: {
//     type: Object
//   , label: 'Images'
//   , optional: true
//   }
// , references: {
//     type: Object
//   , label: 'References'
//   , optional: true
//   }
, owners: {
    type: Array
  , optional: true
  }
, 'owners.$': {
    type: Object
  , label: 'Owner'
  }
, 'owners.$.ownerName': {
    type: String
  , label: 'Name'
  }
, 'owners.$.start': {
    type: Number
  , label: 'Start'
  }
, 'owners.$.name': {
    type: Number
  , label: 'Stop'
  }
, usageStart: {
    type: Number
  , label: 'Usage Start'
  }
, usageStop: {
    type: Number
  , label: 'Usage Stop'
  }
})