Zoomer = {
  config: {
    maxZoom: 3
  , zoomSpeed: 10
  }
, position: {
    x: 1
  , y: 1
  }
, mousePosition: {
    x: 0
  , y: 0
  }
, disabled: false
, zoomLevel: 1
, overflower: document.createElement('div')
, zoomWrapper: document.createElement('div')
, overflowPreventer: document.createElement('div')
, init: function (elementSelector) {
    var self = this
    self.element = document.querySelector(elementSelector)
    if(!self.element) return false
    self.setRequiredStyles()
    self.setListeners()
  }
, setListeners: function () {
    var self = this
    self.currentScrollTop = self.zoomWrapper.scrollTop
    self.zoomWrapper.addEventListener('scroll', function () {
      if(self.disabled) return true
      self.disabled = false
      self.zoom(self.calcDiff(self.zoomWrapper.scrollTop))
    })
    self.zoomWrapper.addEventListener('mousemove', _.throttle(function (e) {
      self.mousePosition.x = e.clientX
      self.mousePosition.y = e.clientY
    }, 100))
  }
, zoom: function (diff) {
    var self = this
    setTimeout(function () {
      var newHeight = Math.round(self.element.clientHeight * diff)
      , newWidth = Math.round(self.element.clientWidth * diff)
      , goToX
      , goToY
      
      self.zoomLevel = self.zoomLevel * diff

      goToX = (self.mousePosition.x - self.mousePosition.x * self.zoomLevel)
      goToY = (self.mousePosition.y - self.mousePosition.y * self.zoomLevel)

      self.goTo(goToX, goToY)
      self.element.style.height = newHeight + 'px'
      self.element.style.width = newWidth + 'px'
    }, 30)
  } // Takes a factor (ex. x2)
, calcDiff: function (newScrollTop) {
    var self = this
  , scrollDiff = self.currentScrollTop - newScrollTop
    self.currentScrollTop = newScrollTop
    return scrollDiff / self.scrollHeight + 1
  }
, setRequiredStyles: function () {
    var self = this
    self.zoomWrapperHeight = Math.round(self.element.clientHeight * 100 / self.element.clientWidth) + 'vw'
    self.scrollHeight = self.config.maxZoom * 10 * self.element.clientHeight / self.config.maxZoom

    self.overflower.className = 'zoomer__overflower'
    self.zoomWrapper.className = 'zoomer__wrapper'
    self.overflowPreventer.className = 'zoomer__preventer'

    self.overflower.style.height = self.scrollHeight + 'px'
    self.zoomWrapper.style.height = self.zoomWrapperHeight
    self.zoomWrapper.style.width = '100vw'
    self.overflowPreventer.style.height = self.zoomWrapperHeight
    self.overflowPreventer.style.width = '100vw'

    self.element.parentNode.appendChild(self.zoomWrapper)
    self.element.parentNode.appendChild(self.overflowPreventer)
    self.overflowPreventer.appendChild(self.element)
    self.zoomWrapper.appendChild(self.overflower)

    self.zoomWrapper.scrollTop = self.scrollHeight
  }
, goTo: function (posX, posY) {
    var self = this
    self.position.x = posX
    self.position.y = posY
    self.element.style.transform = 'matrix(1,0,0,1,' + posX + ',' + posY + ')'
  }
}