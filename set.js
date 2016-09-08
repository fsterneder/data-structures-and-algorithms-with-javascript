// Sets

class Set {
  constructor() {
    this.data = []
  }
  add(element){return this.data.indexOf(element) > -1 ? false : this.data.push(element)}
  remove(element){let pos = this.data.indexOf(element);return pos > -1 ? this.data.splice(pos,1) : false}
  size(){}
  union(){}
  intersect(){}
  subset(){}
  difference(){}
}

module.exports = Set

// TP
let a = new Set()
debugger
