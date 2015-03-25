Places.allow({
  insert: function (userId, doc) {
    return !!userId
  }
, update: function (userId, doc, fields, modifier) {
    return !!userId
  }
})