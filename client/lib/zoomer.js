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
    x: 1
  , y: 1
  }
, currentWidth: 0
, currentHeight: 0
, zoomLevel: 1
, followMouse: false
, overflower: document.createElement('div')
, zoomWrapper: document.createElement('div')
, overflowPreventer: document.createElement('div')
, init: function (elementSelector) {
    var self = this
    self.element = document.querySelector(elementSelector)
    if(!self.element) return false
    self.setRequiredStyles()
    self.currentHeight = self.element.clientHeight
    self.currentWidth = self.element.clientWidth
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
, zoom: function (diff) {
    var self = this
    var newHeight = Math.round(self.element.clientHeight * diff)
    , newWidth = Math.round(self.element.clientWidth * diff)
    , goToX
    , goToY
    
    self.zoomLevel = self.zoomLevel * diff

    goToX = self.mousePosition.x - (self.mousePosition.x - self.position.x) * diff      
    goToY = self.mousePosition.y - (self.mousePosition.y - self.position.y) * diff

    self.goTo(goToX, goToY)

    self.currentHeight = newHeight
    self.element.style.height = newHeight + 'px'
    self.currentWidth = newWidth
    self.element.style.width = newWidth + 'px'
  } // Takes a factor (ex. 2)
, calcDiff: function (newScrollTop) {
    var self = this
  , scrollDiff = self.currentScrollTop - newScrollTop
    self.currentScrollTop = newScrollTop
    return scrollDiff / self.scrollHeight + 1
  }
, setRequiredStyles: function () {
    var self = this
    self.scrollHeight = self.config.maxZoom * 10 * self.element.clientHeight / self.config.maxZoom

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