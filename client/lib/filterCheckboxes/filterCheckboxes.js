FilterCheckboxes = {
  title: 'Checkboxes'
, name: 'checkboxes'
, items: [{
    label: 'Example'
  , name: 'example'
  }]
, wrapperClassName: 'filterCheckboxes'
, init: function () {
    var self = this
    self.list = document.querySelector('.' + self.wrapperClassName + ' ' + self.wrapperClassName + '__list')
    if(self.list) {
      self.items.forEach(function (item) {
        self.list.appendChild(Blaze.renderWithData(Template.filterCheckboxesCheckbox, item))
      })
      self.allElements = self.list.querySelectorAll(self.wrapperClassName + '__item')
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
, _trueList: []
, _trueListDep: new Tracker.Dependency
, getTrueList: function () {
    var self = this
    _trueListDep.depend()
    return self._trueList
  }
, updateTrueList: function () {
    var self = this
    self._trueList = []
    _.each(self.allElements, function (element) {
      if(element.checked) {
        self._trueList.push(element.name)
      }
    })
    _trueListDep.changed()
  }
}