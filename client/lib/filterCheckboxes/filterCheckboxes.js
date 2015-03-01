FilterCheckboxes = {
  name: 'FilterCheckboxes'
, items: [{
    label: 'Example'
  , name: 'example'
  }]
, wrapperClassName: 'filterCheckboxes'
, init: function () {
    var self = this
    self.element = document.querySelector('.' + self.wrapperClassName + '--' + self.name)
    self.list = self.element.querySelector('.' + self.wrapperClassName + '--' + self.name + ' .' + self.wrapperClassName + '__list')
    if(self.list) {
      self.items.forEach(function (item) {
        Blaze.renderWithData(Template.filterCheckboxesCheckbox, item, self.list)
      })
      self.allElements = self.list.querySelectorAll('.' + self.wrapperClassName + '__checkbox')
      self.setEvents()
    }
  }
, setEvents: function () {
    var self = this
    _.each(self.allElements, function (element) {
      element.addEventListener('change', function () {
        self.updateTrueList()
      })
    })
  }
, trueList: []
, updateTrueList: function () {
    var self = this
    self.trueList = []
    _.each(self.allElements, function (element) {
      if(element.checked) {
        self.trueList.push(element.name)
      }
    })

    self.element.dispatchEvent(new CustomEvent('changed', { detail: {trueList: self.trueList} }))
  }
}