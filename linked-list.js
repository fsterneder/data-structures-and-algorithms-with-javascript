// Linked List

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
    this.currentNode = this.head
    this.find = (target) => {
      function find(target,node) {
        if(node.element == target) {return node}
        else if(node.next == null) {return null}
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
    this.findLast = () => {
      function findLast(node) {
        if(node.next == null) {return node}
        else {return findLast(node.next)}
      }
      return findLast(this.head)
    }
    this.insert = (element) => {
      this.findLast().next = new Node(element)
    }
    this.insertBefore = (target,element) => {
      try {
      let node = new Node(element)
      let targ = this.find(target)
      this.findBefore(target).next = node
      node.next = targ
      return true
      } catch(e) {
        return false
      }
    }
    this.remove = (element) => {
      try{
        let toDelete = this.find(element)
        this.findBefore(element).next = toDelete.next
        return true
      } catch(e){
        return false
      }
    }
    this.display = () => {
      let outp = []
      function displayN(node){
        if(node.next == null) {outp.push(node.element);return}
        else if(node.element == 'head'){return displayN(node.next)}
        else {outp.push(node.element);return displayN(node.next)}
      }
      displayN(this.head)
      return outp
    }
  }
}

module.exports = {LinkedList: LinkedList, Node: Node}
