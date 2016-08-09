// Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.

function Student(){
  this.studentGrades = [];
  this.add = add;
  this.average = average;
  
  function add(grade){
    this.studentGrades.push(grade);
  }
  function average(){
    return this.studentGrades.reduce((a,b)=>a+b)/this.studentGrades.length;
  }
}

var stefan = new Student();
stefan.add(24);
stefan.add(53);
stefan.add(30);
console.log(stefan.average());
