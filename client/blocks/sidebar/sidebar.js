sidebar = {
  config: {
    elemClass: 'sidebar'
  , elemOpenClass: 'sidebar--js--open'
  , toggleElemClass: 'sidebar__toggler'
  , toggleElemOpenClass: 'sidebar--js--open__toggler'
  }
, sidebarOpen: false
, init: function () {
    var self = this
    self.element = document.querySelector('.' + self.config.elemClass)
    self.toggler = document.querySelector('.' + self.config.toggleElemClass)
  }
, toggle: function () {
    var self = this
    if(!self.sidebarOpen) {
      self.open()
    } else {
      self.close()
    }
  }
, open: function () {
    var self = this
    if(self.element && self.element.className.indexOf(self.config.elemOpenClass) < 0) {
      self.element.className += ' ' + self.config.elemOpenClass
      self.toggler.className += ' ' + self.config.toggleElemOpenClass
      self.sidebarOpen = true
    }
  }
, close: function () {
    var self = this
    if(self.element && self.element.className.indexOf(self.config.elemOpenClass) > -1) {
      self.element.className = self.element.className.replace(' ' + self.config.elemOpenClass, '')
      self.toggler.className = self.toggler.className.replace(' ' + self.config.toggleElemOpenClass, '')
      self.sidebarOpen = false
    }
  }
}

Template.sidebar.rendered = function () {
  sidebar.init()
}