// place
//   location:
//     name {string}
//     coordinates
//       latitude {int}
//       longitude {int}
//   type {string}
//   thingsFound [type = mine ?] {array} {string}
//   images {array} {images}
//   references {reference._id}
//   owners {array}
//     name {string}
//       start {int}
//       stop {int}
//   usage
//     start {int}
//     stop {int}
Places = new Mongo.Collection('places')