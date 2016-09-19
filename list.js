// Chapter 3 - Lists

class List {
  constructor(){
    this.dataStore = [];
    // mutator methods
    this.add = (...element) => {for(let i in element){this.dataStore[this.dataStore.length] = element[i]}}
    this.remove = (element) => this.dataStore.splice(this.find(element),1);
    this.insertAfter = (element,after) => this.dataStore.splice(this.find(after)+1,0,element);
    this.clear = () => this.dataStore = [];
    // helper methods
    this.length = () => this.dataStore.length;
    this.find = (element) => this.dataStore.indexOf(element) > -1 ? this.dataStore.indexOf(element) : (function(){throw Error('yes');})(); 
    this.print = () => console.log(this.dataStore); 
    // positional methods
    this.pos = 0; 
    this.nextPos = () => this.pos > this.dataStore.length ? this.pos = this.lastPos() : this.pos += 1; 
    this.previousPos = () => this.pos < 0 ? this.pos = 0 : this.pos -= 1; 
    this.currentPos = () => this.pos > this.dataStore.length ? this.pos = this.lastPos() : this.pos; 
    this.movetoPos = (pos) => pos > this.dataStore.length || pos < 0 ? this.currentPos() : this.pos = pos; 
    this.firstPos = () => this.pos = 0; 
    this.lastPos = () => this.pos = this.dataStore.length - 1; 
    this.getPos = () => this.dataStore[this.pos]; 
    this.loopFront = function(fn){for(this.firstPos();this.currentPos() < this.length();this.nextPos()){fn(this.getPos())}} 
    this.loopBack = function(fn){for(this.lastPos();this.currentPos() >= 0;this.previousPos()){fn(this.getPos())}}
  }
}

module.exports = List;
