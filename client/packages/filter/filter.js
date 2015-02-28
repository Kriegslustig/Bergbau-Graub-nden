Filter = {
  items: []
, itemsDep: new Tracker.Dependency
, filters: {}
, concatinatedFilter: {}
, collection: {}
, getItems: function () {
    var self = this
    self.itemsDep.depend()
    return self.items
  }
, _setItems: function (newValue) {
    var self = this
    self.items = newValue
    self.itemsDep.changed()
  }
, updateFilter: function () {
    var self = this
    self.concatinatedFilter = {}
    _.map(self.filters, function (filterObject) {
      _.extend(self.concatinatedFilter, filterObject.generateFilter())
      return filterObject
    })
    self._setItems(self.queryItems(self.concatinatedFilter))
  }
, newFilter: function (filterName, newProps) {
    var self = this
    self.filterTemplate = {attributes: {
        sampleAttribute: {
          dataType: 'bool'
        , value: true
        }
      }
    , generateFilter: function () {
        // this should be overwritten
        that = this
        return {boolVal: that.attributes.sampleAttribute.value}
      }
    , setAttribute: function (attribute, newValue) {
        var that = this
        if(that.attributes[attribute]
          && that.attributes[attribute].dataType
          && typeof newValue == that.attributes[attribute].dataType) {
          that.attributes[attribute].value = newValue
          self.updateFilter()
        }
      }
    }
    self.filters[filterName] = _.extend(self.filterTemplate, newProps)
  }
, queryItems: function () {
    var self = this
    return self.collection.find(self.concatinatedFilter).fetch()
  }
}