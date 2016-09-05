// Hashing

class HashTable {
  constructor(){
    this.table = new Array(137)
  }
  hash(data) {return data.toString().split('').map(a=>a.charCodeAt(0)).reduce((a,b) => a+(b*31)) % this.table.length}
  put(key,element) {this.table[this.hash(key)] = element}
  get(key) {return this.table[this.hash(key)]}
  show() {let outp=[];for(let [i,el] of this.table.entries()) {el != undefined ? outp.push(`${i} : ${el}`) : null} ;return outp}
}

// TP
let a = new HashTable()
let names = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
debugger
