// place
//   location:
//     name {string}
//     coordinates {object}
//       latitude {int}
//       longitude {int}
//   type {string}
//   ore [type = mine ?] {array} {string}
//   finds {array} {find._id}
//   images {array} {images}
//   references {array} {reference._id}
//   owners {array}
//     name {object}
//     start {int}
//     stop {int}
//   usage {object}
//     start {int}
//     stop {int}
Places = new Mongo.Collection('places')