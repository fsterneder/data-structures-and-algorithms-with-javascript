// Linear Probing
// With linear probing, when there is a collision, the program simply looks to see if the next element of the hash table is empty. If so, the key is placed in that element. If the element is not empty, the program continues to search for an empty hash-table element until one is found.

class HashTable {
  constructor(size,h){
    this.table = new Array(size)
    this.values = []
    this.horner = h
  }
  hash(data) {return data.toString().split('').map(a=>a.charCodeAt(0)).reduce((a,b) => a+(b*this.horner)) % this.table.length}
  put(key,element) {
    let pos = this.hash(key)
    if(table[pos] != undefined) {
      }
    } else {
      this.table[pos] = key
      this.values[pos] = element
    }
  }
  get(key) {return this.table[this.hash(key)]}
  show() {let outp=[];for(let [i,el] of this.table.entries()) {el != undefined ? outp.push(`${i} : ${el}`) : null} ;return outp}
}

// TP
var a = new HashTable(137,31)

debugger
