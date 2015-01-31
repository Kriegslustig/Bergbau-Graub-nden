# Steps
1) IA / URL Design
2) Database Schema
3) Packages Evaluation
4) Taskifying the whole Thing
    - Alalyzing Task
    - Write something like CRC-Cards
    - Writting tests
    - Getting it done
    - Refactoring
5) Goal

# IA / URL Design
```
/map
/places
/places/:_id
/references
/references/:_id
```

# Database Schema
## `places`
```
place
  location:
    name {string}
    coordinates
      latitude {int}
      longitude {int}
  type {string}
  [type = mine ? ->] thingsFound {array} {string}
  images {array} {images}
  references {reference._id}
  owners {array}
    name {string}
      start {int}
      stop {int}
  usage
    start {int}
    stop {int}
```
## `references`
```
reference
  book
    name {id}
    author {string}
  position {string}
```

# Package evaluation
* Admin Interface -> orionjs:core
* Router -> iron:router
* Testing -> mike:mocha