Zoomer = {
  config: {
    maxZoom: 2
  , zoomSpeed: 1
  }
, position: {
    x: 1
  , y: 1
  }
, mousePosition: {
    x: 1
  , y: 1
  }
, lastScrollState: 0
, zoomLevel: 1
, followMouse: false
, overflower: document.createElement('div')
, zoomWrapper: document.createElement('div')
, overflowPreventer: document.createElement('div')
, init: function (elementSelector) {
    var self = this
    self.element = document.querySelector(elementSelector)
    if(!self.element) return false
    self.realHeight = self.element.clientHeight
    self.realWidth = self.element.clientWidth
    self.setRequiredStyles()
    self.setListeners()
  }
, setListeners: function () {
    var self = this
    self.currentScrollTop = self.zoomWrapper.scrollTop
    self.zoomWrapper.addEventListener('scroll', _.throttle(function () {
      self.zoom(self.calcDiff(self.zoomWrapper.scrollTop))
    }))
    self.zoomWrapper.addEventListener('mousemove', _.throttle(function (e) {
      self.followToMouse(e.clientX, e.clientY)
      self.mousePosition.x = e.clientX
      self.mousePosition.y = e.clientY
    }, 20))
    self.zoomWrapper.addEventListener('mousedown', function () {
      self.followMouse = true
    })
    self.zoomWrapper.addEventListener('mouseout', function () {
      self.followMouse = false
    })
    self.zoomWrapper.addEventListener('mouseup', function () {
      self.followMouse = false
    })
  }
, zoom: function (newZoom) {
    var self = this
    var newHeight = Math.round(self.realHeight * newZoom)
    , zoomDiff = newZoom / self.zoomLevel
    , newWidth = Math.round(self.realWidth * newZoom)
    , goToX = self.mousePosition.x - (self.mousePosition.x - self.position.x) * zoomDiff
    , goToY = self.mousePosition.y - (self.mousePosition.y - self.position.y) * zoomDiff

    self.zoomLevel = newZoom

    self.goTo(goToX, goToY)

    self.element.style.height = newHeight + 'px'
    self.element.style.width = newWidth + 'px'
  } // Takes a factor (ex. 2)
, calcDiff: function (newScrollTop) {
    var self = this
    , currentScrollState = (newScrollTop / self.maxScrollTop *-1 + 1) * self.config.maxZoom

    // var scrollDiff = self.currentScrollTop - newScrollTop
    // self.currentScrollTop = newScrollTop
    // return scrollDiff * self.config.zoomSpeed / self.scrollHeight + 1

    self.lastScrollState = currentScrollState
    return currentScrollState
  }
, setRequiredStyles: function () {
    var self = this
    self.scrollHeight = self.config.maxZoom / self.config.zoomSpeed * innerHeight
    self.maxScrollTop = self.scrollHeight - self.zoomWrapper.clientHeight

    self.overflower.className = 'zoomer__overflower'
    self.zoomWrapper.className = 'zoomer__wrapper'
    self.overflowPreventer.className = 'zoomer__preventer'

    self.overflower.style.height = self.scrollHeight + 'px'

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
, followToMouse: function (newX, newY) {
    var self = this
    , newPosX
    , newPosY

    if(!self.followMouse) return false

    newPosX = self.position.x + newX - self.mousePosition.x
    newPosY = self.position.y + newY - self.mousePosition.y
    self.goTo(newPosX, newPosY)
  }
}