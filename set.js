// Chapter 9 - Sets

class Set {
  constructor() {
    this.data = []
  }
  add(element){return this.data.indexOf(element) > -1 ? false : this.data.push(element)}
  remove(element){let pos = this.data.indexOf(element);return pos > -1 ? this.data.splice(pos,1) : false}
  union(set){
    for(let el of set.data) {
      this.data.indexOf(el) > -1 || el == "" ? null : this.data.push(el)
    }
    return true
  }
  inters(set){
    let combSet = this.data.concat(set.data), outp = []
    for(let el of combSet) {
      combSet.indexOf(el) != combSet.lastIndexOf(el) && outp.indexOf(el) < 0 ? outp.push(el) :  null
    }
    return outp
  }
  subs(set) {
    if(set.data.length > this.data.length){return false}
    // unefficent, I know
    return set.data.map(a => this.data.indexOf(a) > -1).indexOf(false) < 0
  }
  diff(set) {
    return this.data.filter(a => set.data.indexOf(a) < 0)
  }
}

module.exports = Set
