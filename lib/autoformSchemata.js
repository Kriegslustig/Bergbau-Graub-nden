Schema = {}
Schema.place = new SimpleSchema({
  locationName: {
    type: String
  , label: 'Location'
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
, finds: {
    type: Object
  , label: 'Finds'
  }
, images: {
    type: Object
  , label: 'Images'
  }
, references: {
    type: Object
  , label: 'References'
  }
, owners: {
    type: Object
  , label: 'Owners'
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