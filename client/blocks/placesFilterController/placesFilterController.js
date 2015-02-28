placesFilterController = {
  init: function () {
    var self = this
    timeRange.element.addEventListener('change', self.updateTime)
  }
, updateTime: function (e) {
    var self = this
  , newTime = e.detail.position
    placesFilter.filters.usage.setAttribute('start', newTime)
    console.log(newTime)
    console.log(placesFilter.filters.usage.attributes.start)
  }
}

Template.placesFilterController.rendered = function () {
  placesFilterController.init()
}