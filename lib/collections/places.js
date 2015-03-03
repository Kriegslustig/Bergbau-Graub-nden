// place
//   location:
//     name {string}
//     coordinates {object}
//       latitude {int}
//       longitude {int}
//   type {string}
//   ores [type = mine ?] {array} {string}
//   finds {array} {find._id}
//   images {array} {images}
//   references {array} {reference._id}
//   owners {array}
//     ownerName {object}
//     start {int}
//     stop {int}
//   usage {object}
//     start {int}
//     stop {int}
Places = new Mongo.Collection('places')

Schemas = {}
Schemas.Place = new SimpleSchema({
  location: {
    type: Object
  , label: 'Location'
  }
, 'location.locationName': {
    type: String
  , label: 'Location Name'
  }
, 'location.coordinates': {
    type: Object
  , label: 'Coodinates'
  }
, 'location.coordinates.latitude': {
    type: Number
  , label: 'Latitude'
  }
, 'location.coordinates.longitude': {
    type: Number
  , label: 'Longitude'
  }
, type: {
    type: String
  , label: 'Type'
  }
, ores: {
    type: [String]
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
    type: [Object]
  , optional: true
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
, 'owners.$.stop': {
    type: Number
  , label: 'Stop'
  }
, 'usage': {
    type: Object
  , label: 'Usage'
  }
, 'usage.start': {
    type: Number
  , label: 'Start'
  }
, 'usage.stop': {
    type: Number
  , label: 'Stop'
  }
})

Places.attachSchema(Schemas.Place)