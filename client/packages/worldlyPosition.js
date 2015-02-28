worldlyPosition = {
  config: {
    topLongitude: 10000
  , leftLatitude: 20000
  , bottomLongitude: 14000
  , rightLatitude: 26000
  }
, field: {}
, calcVars: function () {
    var self = this
    // Measured from left to right
    self.field.width = self.config.rightLatitude - self.config.leftLatitude
    self.field.latitudeConversionRate = self.field.width / 100
    // Measured from top to bottom
    self.field.height = self.config.bottomLongitude - self.config.topLongitude
    self.field.longitudeConversionRate = self.field.height / 100
  }
, longitudeToPercent: function (longitude) {
    var self = this
    self.calcVars()
  , relativeLongitude = longitude - self.config.topLongitude
    return relativeLongitude / self.field.longitudeConversionRate
  }
, latitudeToPercent: function (latitude) {
    var self = this
    self.calcVars()
  , relativeLatitude = latitude - self.config.leftLatitude
    return relativeLatitude / self.field.latitudeConversionRate
  }
}

Template.registerHelper('longitudeToPercent', function (longitude) {
  return worldlyPosition.longitudeToPercent(longitude)
})

Template.registerHelper('latitudeToPercent', function (latitude) {
  return worldlyPosition.latitudeToPercent(latitude)
})