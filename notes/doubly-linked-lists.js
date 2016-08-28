
class Node {
  constructor(element){
    this.element = element
    this.previous = null
    this.next = null
  }
}

class DoublyLL {
  constructor(){
    this.head = new Node('head')
    this.insert = (element) => {
      let newNode = new Node(element)
      let prevNode = this.findLast()
      prevNode.next = newNode
      newNode.previous = prevNode
    }
    this.remove = (element) => {
      let removedNode = this.find(element)
      removedNode.previous.next = removedNode.next
      removedNode.next.previous = removedNode.previous
    }
    this.find = (target) => {
      function findN(target,node) {
        if(node.element === target) {return node}
        else {return findN(target,node.next)}
      }
      return findN(target,this.head)
    }
    this.findLast = () => {
      function findLastN(node) {
        if(node.next === null) {return node}
        else {return findLastN(node.next)}
      }
      return findLastN(this.head)
    }
    this.display = () => {
      let outp = []
      function display(node) {
        if(node.element !== 'head') {
          outp.push((outp.length + 1) + ") " + node.element) 
        }
        if(node.next == null){
          return outp
        }
        else {return display(node.next)}
      }
      return display(this.head).join('\n')
    }
  }
}
