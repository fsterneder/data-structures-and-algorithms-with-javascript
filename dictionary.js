//  Chapter 7 - Dictionary

class Dictionary {
  constructor() {
    this.data = {}
    this.add = (key,element) => this.data[key] = element
    this.find = (key) => this.data[key]
    this.remove = (key) => delete this.data[key]
    this.showAll = () => {
      for(let i of Object.keys(this.data).sort((a,b)=>a>b))
        {console.log(i +':'+this.data[i])}
    }
    // auxiliary functions
    this.count = () => Object.keys(this.data).length
    this.clear = () => this.data = {}
  }
}

module.exports = Dictionary
