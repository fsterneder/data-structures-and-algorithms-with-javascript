// Linear Probing
// With linear probing, when there is a collision, the program simply looks to see if the next element of the hash table is empty. If so, the key is placed in that element. If the element is not empty, the program continues to search for an empty hash-table element until one is found.

class HashTable {
  constructor(size=137,h=31){
    this.table = new Array(size)
    this.values = []
    this.horner = h
  }
  hash(data) {return data.toString().split('').map(a=>a.charCodeAt(0)).reduce((a,b) => a+(b*this.horner)) % this.table.length}
  put(key,element) {
    let pos = this.hash(key)
    if(this.table[pos] != undefined) {
      while(this.table[pos] != undefined){
        pos <= this.table.length ? pos++ : pos = 0
      }
      this.table[pos] = key
      this.values[pos] = element
    } else {
      this.table[pos] = key
      this.values[pos] = element
    }
  }
  get(key) {
    let pos = this.hash(key), turn = 0
    if(this.table[pos] != key) {
      while(this.table[pos] != key && turn < 20){
        pos <= this.table.length ? pos++ : pos = 0;
        turn++
      }
      return this.values[pos] || false
    } else {
      return this.values[pos]
    }
  }
  mod(key,value){
    let pos = this.hash(key), turn = 0
    if(this.table[pos] != key) {
      while(this.table[pos] != key && turn < 20){
        pos <= this.table.length ? pos++ : pos = 0;
        turn++
      }
      this.values[pos] = value
      return true
    } else {
      this.values[pos] = value
      return true
    }
  }
  show() {let outp=[];for(let [i,el] of this.table.entries()) {el != undefined ? outp.push(`${i} : ${el}`) : null} ;return outp}
}

module.exports = HashTable
