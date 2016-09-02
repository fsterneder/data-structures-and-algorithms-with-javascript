class PriorityQ {
  constructor(){
    this.data = []
    this.enqueue = (element) => this.data.push(element)
    this.dequeue = () => this.data.splice(this.data.map(a=>a.code).indexOf(Math.min.apply(null,this.data.map(a=>a.code))),1)
  }
}

module.exports = PriorityQ
