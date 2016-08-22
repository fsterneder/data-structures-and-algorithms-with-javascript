// Create a Person class that stores a person’s name and their gender.
// Create a list of at least 10 Person objects.
// Write a function that displays all the people in the list of the same gender.

class Person{
  constructor (name,gender){
    this.name = name
    this.gender = gender
  }
}

let List = require('../lists')

let names = ['John','Bon','Jovey','Heinricht','Heiny','Georg','Marmel','Ade','Ketuschu','Domio','Okkk','Rando','Exoo','Moboo','Yaby','Nobo','Karlsi','Mabondo','Numami','Esthabo','Minta','Haur']
let gender = ['Male','Female','Transsexual Male','Transsexual Female','Metrosexual Male','Metrosexual Female','Other','None','Prefer Not to Say']

let ex3 = new List()

ex3.displayGender = (gender) => console.log(ex3.dataStore.filter(a=>a.gender == gender));

(()=>{
  for(let i=0;i<10;i++){
    ex3.add(new Person(names[Math.floor(Math.random()*names.length)],gender[Math.floor(Math.random()*gender.length)]))
  }
})()

ex3.print()
ex3.displayGender('Male')
