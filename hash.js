// Chapter 8 - Hashing

class HashTable {
  constructor(size,h){
    this.table = new Array(size)
    this.horner = h
  }
  hash(data) {return data.toString().split('').map(a=>a.charCodeAt(0)).reduce((a,b) => a+(b*this.horner)) % this.table.length}
  put(key,element) {this.table[this.hash(key)] = element}
  get(key) {return this.table[this.hash(key)]}
  show() {let outp=[];for(let [i,el] of this.table.entries()) {el != undefined ? outp.push(`${i} : ${el}`) : null} ;return outp}
}

module.exports = HashTable
