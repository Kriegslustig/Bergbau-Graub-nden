if(!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {
    describe('All Places', function () {
      var allPlaces = Places.find({})
      allPlaces.forEach(function (place) {
        it('Should have an attribute location', function () {
          console.log(JSON.stringify(place))
          chai.assert.isObject(place.location)
          chai.assert.isString(place.location.name)
          chai.assert.isObject(place.location.coordinates)
          chai.assert.isNumber(place.location.coordinates.latitude)
          chai.assert.isNumber(place.location.coordinates.longitude)
        })
        it('Should have an attribute type', function () {
          chai.assert.isString(place.type)
          if(place.type === 'mine') {
            chai.assert.isArray(place.thingsFound)
          }
        })
        it('Should have an attribute images', function () {
          chai.assert.isArray(place.images)
        })
        it('Should have an attribute references', function () {
          chai.assert.isArray(place.references)
        })
        it('Should have an attribute owners', function () {
          chai.assert.isObject(place.owners)
          if(place.owners.length > 0) {
            place.owners.forEach(function (owner, ownerName) {
              chai.assert.isString(ownerName)
              chai.assert.isNumber(owner.start)
              chai.assert.isNumber(owner.stop)
              chai.assert.ok(owner.stop > owner.start)
            })
          }
        })
        it('Should have an attribute usage', function () {
          chai.assert.isObject(place.usage)
          chai.assert.isNumber(place.usage.start)
          chai.assert.isNumber(place.usage.stop)
          chai.assert.ok(place.usage.stop > place.usage.start)
        })
      })
    })
  })
}