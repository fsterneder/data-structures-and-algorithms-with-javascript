// Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.  

function List() {
  this.dataStore = [];
  // mutator methods
  this.add = (...element) => {for(i in element){this.dataStore[this.dataStore.length] = element[i]}}
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
  this.insertSmall = insertIfSmaller;

  function insertIfLarger(element){
    switch (typeof(element)){
      case "string":
        if(this.dataStore.filter(a=>a>element) == 0){this.add(element)}
        break;
      case "number":
        if(Math.max.apply(null,this.dataStore.filter(a=>typeof(a)=='number'))<element){this.add(element)}
        break;
      default:
        throw new Error('wrong datatype');
        break;
    }
  }
  function insertIfSmaller(element){
    switch (typeof(element)){
      case "string":
        if(this.dataStore.filter(a=>a<element) == 0){this.add(element)}
        break;
      case "number":
        if(Math.min.apply(null,this.dataStore.filter(a=>typeof(a)=='number'))>element){this.add(element)}
        break;
      default:
        throw new Error('wrong datatype');
        break;
    }
  }
}

var names = new List();
names.add('Barbara','Cynthia','Sylvester','Slice');
names.print();
names.insertSmall('Adolf');
names.insertSmall('Xenophon');
names.print();

let numbers = new List();
numbers.add(12,10,9,7,'t');
numbers.print();

numbers.insertSmall(5);
numbers.insertSmall(1000);
numbers.print();
