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
    var self = this
    return {
      'usage.start': {
        $lte: self.attributes.start.value
      }
    , 'usage.stop': {
        $gte: self.attributes.start.value
      }
    }
  }
})

placesFilter.newSubFilter('placeType', {
  attributes: {
    types: {
      value: []
    , dataType: 'object'
    }
  }
, generateSubFilter: function () {
    var self = this
    return {
      'type': {
        $in: self.attributes.types.value
      }
    }
  }
})