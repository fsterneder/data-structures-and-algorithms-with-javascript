// Modify the priority queue example from Example 5-5 so that the higher-priority elements have higher numbers rather than lower numbers.
// Test your implementation with the example in the chapter.

class PriorityQ {
  constructor(){
    this.data = []
    this.enqueue = (element) => this.data.push(element)
    this.dequeue = () => this.data.splice(this.data.map(a=>a.code).indexOf(Math.max.apply(null,this.data.map(a=>a.code))),1)
  }
}

class Patient{
  constructor(name,code){
    this.name = name
    this.code = code
  }
}

var p = new Patient("Smith",5);
var ed = new PriorityQ();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
debugger
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
// another round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
