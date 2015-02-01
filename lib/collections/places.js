// place
//   location:
//     name {string}
//     coordinates {object}
//       latitude {int}
//       longitude {int}
//   type {string}
//   thingsFound [type = mine ?] {array} {string}
//   images {array} {images}
//   references {array} {reference._id}
//   owners {object}
//     name {object}
//       start {int}
//       stop {int}
//   usage {object}
//     start {int}
//     stop {int}
Places = new Mongo.Collection('places')