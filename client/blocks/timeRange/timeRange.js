timeRange = {
  config: {
    elemClass: 'timeRange'
  , barElemClass: 'timeRange__bar'
  , step: 10
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