// Modify the Set class so that it uses a linked list to store its elements rather than an array.

const Node = require('../linked-list').Node
const LinkedList = require('../linked-list').LinkedList

class Set {
  constructor() {
    this.data = new LinkedList()
  }
  add(element){return this.data.find(element) === null ? this.data.insert(element) : false}

  remove(element){return this.data.remove(element)}

  union(set){
    for(let el of set.data) {
      this.data.indexOf(el) > -1 || el == "" ? null : this.data.push(el)
    }
    return true
  }

  inters(set){
    let combSet = this.data.display().concat(set.data.display()), outp = [];
    for(let el of combSet) {
      combSet.indexOf(el) != combSet.lastIndexOf(el) && outp.indexOf(el) < 0 ? outp.push(el) :  null
    }
    return outp
  }
  
  subs(set) {
    if(set.data.display().length > this.data.display().length){return false}
    // unefficent, I know
    return set.data.display().map(a => this.data.display().indexOf(a) > -1).indexOf(false) < 0
  }

  diff(set) {
    return this.data.display().filter(a => set.data.display().indexOf(a) < 0)
  }
}
