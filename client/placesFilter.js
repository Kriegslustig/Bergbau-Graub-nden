placesFilter = Object.create(Filter)
placesFilter.collection = Places

placesFilter.newSubFilter('usage', {
  attributes: {
    start: {
      value: -1000
    , dataType: 'number'
    }
  , stop: {
      value: 2000
    , dataType: 'number'
    }
  }
, generateSubFilter: function () {
    self = this
    return {
      'usage.start': {
        $gte: self.attributes.start.value
      , $lte: self.attributes.stop.value
      }
    }
  }
})