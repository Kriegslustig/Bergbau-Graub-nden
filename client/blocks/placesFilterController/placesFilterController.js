placesFilterController = {
  init: function () {
    var self = this
    timeRange.element.addEventListener('change', self.updateTime)
  }
, updateTime: function (e) {
    var self = this
  , newTime = e.detail.position
    placesFilter.subFilters.usage.setAttribute('start', newTime)
  }
}

Template.placesFilterController.rendered = function () {
  placesFilterController.init()
}