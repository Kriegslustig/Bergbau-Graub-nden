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
    if(self.bar && self.element) self.setListeners()
  }
, stepUp: function () {
    var self = this
    self.setAbstractPosition(self.position + self.config.step)
  }
, stepDown: function () {
    var self = this
    self.setAbstractPosition(self.position - self.config.step)
  }
, setAbstractPosition: function (newPosition) {
    var self = this
    newPosition = newPosition > self.max ? self.max : newPosition
    newPosition = newPosition < 0 ? 0 : newPosition
    self.position = newPosition
    self.updateElementPosition()
    self.events.change = new CustomEvent('changed', {
      detail: {position: self.position}
    })
    self.element.dispatchEvent(self.events.change)
  }
, setRealPosition: function (newPosition) {
    var self = this
  , abstractPos = 0
    abstractPos = Math.round( newPosition / ( self.element.clientWidth / self.max ) / self.config.step ) * self.config.step
    console.log(newPosition, abstractPos)
    self.setAbstractPosition(abstractPos)
  }
, updateElementPosition: function () {
    var self = this
    if(self.element) {
      self.bar.style.left = Math.round(self.element.clientWidth / self.max * self.position) + 'px'
    }
  }
, setListeners: function () {
    var self = this
    self.element.addEventListener('click', function (e) {
      self.setRealPosition(e.x)
    })
  }
}

Template.timeRange.rendered = function () {
  timeRange.init()
}