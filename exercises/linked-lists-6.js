// Write a program that allows you to place n people in a circle and specify that every mth person will be killed.
// The program should determine the number of the last two people left in the circle.
// Use a circularly linked list to solve the problem.

let CircularlyLL = require('../notes/circularly-linked-list')

function circle(mth,peopleArray) {
  let circ = new CircularlyLL()
  for(i of peopleArray) {
    circ.insert(i)
  }
  function kill(){
    if(circ.count() < 3) {return}
    else{
      circ.advance(mth-1)
      circ.removeCurrent()
      return kill()
    }
  }
  debugger
  kill()
  return circ.display()
}

circle(6,['first','second','third','fourth','fifth','sixth','seventh'])
