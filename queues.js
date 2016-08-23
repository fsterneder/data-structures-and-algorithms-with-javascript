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

module.exports = Queue

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

//radixSort([22,23,95,45,48,99,92,20,01,34,59,23,11,56,62,91])
radixSort([45,72,93,51,21,16,70,41,27,31])
