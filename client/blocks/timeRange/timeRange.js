timeRange = {
  config: {
    elemClass: 'timeRange'
  , barElemClass: 'timeRange__bar'
  , step: 100
  }
, events: {}
, position: 0
, max: 2000
, init: function () {
    var self = this
    self.element = document.querySelector('.' + self.config.elemClass)
    self.bar = document.querySelector('.' + self.config.barElemClass)
  }
, stepUp: function () {
    var self = this
    self.setPosition(self.position + self.config.step)
  }
, stepDown: function () {
    var self = this
    self.setPosition(self.position - self.config.step)
  }
, setPosition: function (newPosition) {
    var self = this
    newPosition = newPosition > self.max ? self.max : newPosition
    newPosition = newPosition < 0 ? 0 : newPosition
    self.position = newPosition
    self.updateElementPosition()
    self.events.change = new CustomEvent('change', {
      detail: {position: self.position}
    })
    self.element.dispatchEvent(self.events.change)
  }
, updateElementPosition: function () {
    var self = this
    if(self.element) {
      self.bar.style.left = Math.round(self.element.clientWidth / self.max * self.position) + 'px'
    }
  }
}

Template.timeRange.rendered = function () {
  timeRange.init()
}