placesFilter = Object.create(Filter)
placesFilter.collection = Places

placesFilter.newFilter('usage', {
  attributes: {
    start: {
      value: -1000
    , dataType: 'integer'
    }
  , stop: {
      value: 2000
    , dataType: 'integer'
    }
  }
, generateFilter: function () {
    self = this
    return {
      'usage.start': {
        $gte: self.attributes.start.value
      , $lte: self.attributes.stop.value
      }
    }
  }
})