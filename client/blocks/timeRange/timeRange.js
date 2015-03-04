timeRange = {
  config: {
    elemClass: 'timeRange'
  , grabbingClass: 'timeRange--js--grabbing'
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
    function followMouse (e) {
      self.setRealPosition(e.x)
      return false
    }
    self.element.addEventListener('mousedown', function (e) {
      if(e.toElement === self.element) {
        self.setRealPosition(e.x)
        self.element.className += ' ' + self.config.grabbingClass
        self.element.addEventListener('mousemove', followMouse)
        return false
      }
    })
    self.element.addEventListener('mouseup', function (e) {
      self.element.className = self.element.className.replace(' ' + self.config.grabbingClass, '')
      self.element.removeEventListener('mousemove', followMouse)
    })
    self.element.addEventListener('mouseout', function (e) {
      if(e.toElement === self.element || e.toElement ===  self.bar) return true
      self.element.className = self.element.className.replace(' ' + self.config.grabbingClass, '')
      self.element.removeEventListener('mousemove', followMouse)
    })
  }
}

Template.timeRange.rendered = function () {
  timeRange.init()
}