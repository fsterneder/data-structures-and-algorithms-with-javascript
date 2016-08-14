// Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list. Larger can mean either greater than when working with numeric values, or further down in the alphabet, when working with textual values.

function List() {
  this.dataStore = [];
  // mutator methods
  this.append = (element) => this.dataStore[this.dataStore.length] = element;
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
  // exercise
  this.insertLarge = insertIfLarger;

  function insertIfLarger(element){
    switch (typeof(element)){
      case "string":
        break;
      case "number":
        break;
      default:
        throw new Error('wrong datatype');
        break;
    }
  }
}

var names = new List();

names.append("Cynthia");
names.append("Ray");
names.append("Barbara");
names.append('Slice');
names.print();
//debugger;
names.insertLarge(()=>{});
