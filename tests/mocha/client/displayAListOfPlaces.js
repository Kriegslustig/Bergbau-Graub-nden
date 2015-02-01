if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function () {
    setTimeout(function (){
      describe('The Route "/"', function () {
        it('Should have the title "Map"', function () {
          var title = document.title
          console.log(title)
          chai.assert.include(title, 'Map')
        })
      })
      describe('A list of places', function () {
        it('Should have a main section with the class map', function () {
          var map = $('main.map')
          chai.assert.ok(map.length > 0)
        })
        it('Should contain map__places', function () {
          var placesList = $('main.map ul.map__places')
          chai.assert.ok(placesList.length > 0)
        })
        it('should at least contain one place', function () {
          var places = $('ul.map__places li.place')
          chai.assert.ok(places.length > 0)
        })
      })
      describe('A place', function () {
        it('Should include a location', function () {
          var title = $('li.place .place__location').text()
          chai.assert.ok(title.length > 0)
        })
      })
    }, 1000)
  })
}