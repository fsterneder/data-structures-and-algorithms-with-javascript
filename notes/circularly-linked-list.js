class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class CircularlyLL{
  constructor(){
    this.head = new Node('head')

    this.insert = (element) => {
      let newNode = new Node(element)
      newNode.next = this.head
      this.findLast().next = newNode
    }

    this.findLast = () => {
      function findLastN(node) {
        if(node.next == null || node.next.element == 'head') {return node}
        else {return findLastN(node.next)}
      }
      return findLastN(this.head)
    }

    this.find = (target) => {
      function find(target,node) {
        if(node.element == target) {return node}
        else if(node.next == null || node.next.element == 'head') {return null}
        else {return find(target,node.next)}
      }
      return find(target,this.head)
    }

    this.findBefore = (target) => {
      function findBefore(target,node){
        if(node.next.element == target) {return node}
        else if(node.next == null) {return null}
        else {return findBefore(target,node.next)}
      }
      return findBefore(target,this.head)
    }

    this.advance = (n) => {
      let that = this
      function advanceN(n){
        if(that.currentNode.element == 'head') {
          that.currentNode = that.currentNode.next
          return advanceN(n)
        }
        else if(n < 1) {return true}
        else {
          that.currentNode = that.currentNode.next
          return advanceN(n-1)
        }
      }
      advanceN(n)
    }

    this.currentNode = this.head

    this.remove = (element) => {
      let currentNode = this.find(element)
      this.findBefore(currentNode.element).next = currentNode.next
    }
    
    this.removeCurrent = () => {
      this.remove(this.currentNode.element)
      this.currentNode.next.element === 'head' ?
      this.currentNode = this.currentNode.next.next :
      this.currentNode = this.currentNode.next
    }

    this.count = () => {
      function countN(n,node){
        if(node.next.element === 'head'){return n}
        else{return countN(n+1,node.next)}
      }
      return countN(0,this.head)
    }

    this.display = () => {
      function displayN(node){
        if(node.next == null || node.next.element == 'head') {console.log(node.element);return}
        else if(node.element == 'head'){return displayN(node.next)}
        else {console.log(node.element);return displayN(node.next)}
      }
    displayN(this.head)
    }
  }
}

debugger
module.exports = CircularlyLL
