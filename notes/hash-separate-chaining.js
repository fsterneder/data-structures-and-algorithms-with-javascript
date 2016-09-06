// Sperate Chaining
// Separate chaining is a technique where each array element of a hash table stores another data structure, such as another array, which is then used to store keys.

class HashTable {
  constructor(size, h){
    this.table = new Array(size)
    this.horner = h
  }
  hash(data) {return data.toString().split('').map(a=>a.charCodeAt(0)).reduce((a,b) => a+(b*this.horner)) % this.table.length}
  put(key, element) {
    let _hash = this.hash(key)
    if(this.table[_hash] != undefined){
      this.table[_hash].push([key,element])
    } else {
      this.table[_hash] = []
      this.table[_hash].push([key,element])
    }
  }
  get(key) {
    let _hash = this.hash(key)
    function getN(arr,n){
      if(arr[n][0] == key){return arr[n]}
      else{return getN(arr,n+1)}
    }
    return getN(this.table[_hash],0)
  }
  show() {let outp=[];for(let [i,el] of this.table.entries()) {el != undefined ? outp.push(`${i} : ${el}`) : null} ;return outp}
}

module.exports = HashTable
