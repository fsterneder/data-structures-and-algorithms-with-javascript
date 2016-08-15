// Create a Person class that stores a person’s name and their gender.
// Create a list of at least 10 Person objects.
// Write a function that displays all the people in the list of the same gender.

class Person{
  constructor (name,gender){
    this.name = name;
    this.gender = gender;
  }
}

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
}

let names = ['John','Bon','Jovey','Heinricht','Heiny','Georg','Marmel','Ade','Ketuschu','Domio','Okkk','Rando','Exoo','Moboo','Yaby','Nobo','Karlsi','Mabondo','Numami','Esthabo','Minta','Haur'];
let gender = ['Male','Female','Transsexual Male','Transsexual Female','Metrosexual Male','Metrosexual Female','Other','None','Prefer Not to Say'];

let ex3 = new List();

ex3.displayGender = (gender) => console.log(ex3.dataStore.filter(a=>a.gender == gender));

(()=>{
  for(let i=0;i<10;i++){
    ex3.add(new Person(names[Math.floor(Math.random()*names.length)],gender[Math.floor(Math.random()*gender.length)]))
  }
})();

ex3.print();
ex3.displayGender('Male');
