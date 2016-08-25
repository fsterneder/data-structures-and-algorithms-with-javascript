class Queue {
  constructor(){
    this.data = []
    this.length = () => this.data.length
    this.enqueue = (element) => this.data.push(element)
    this.dequeue = () => this.data.shift()
    this.front = () => this.data[0]
    this.back = () => this.data[this.data.length-1]
    this.toString = () => this.data.join('\n')
    this.empty = () => this.data = []
  }
}

module.exports.Queue = Queue

function radixSort(toSort){
  let bin = []
  bin.toString = () => bin.map(a => a.data).join('|').trim()
  for(let i=0;i<10;i++){bin[i] = new Queue}
  for(let i of toSort){bin[i%10].enqueue(i)}
  let lenMap = bin.map(a => a.length())
  for(let i=0;i<10;i++){
    for(let j=0;j<lenMap[i];j++){
      let look = bin[i].dequeue()
      bin[Math.floor(look/10)].enqueue(look)
    }
  }
  console.log(bin.toString())
}

class PriorityQ {
  constructor(){
    this.data = []
    this.enqueue = (element) => this.data.push(element)
    this.dequeue = () => this.data.splice(this.data.map(a=>a.code).indexOf(Math.min.apply(null,this.data.map(a=>a.code))),1)
  }
}

module.exports.PriorityQ = PriorityQ

class Patient{
  constructor(name,code){
    this.name = name
    this.code = code
  }
}

module.exports.Patient = Patient
