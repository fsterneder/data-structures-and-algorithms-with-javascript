// Chapter 10 - Binary Tree & Binary Search Tree

class Node {
  constructor(data,left=null,right=null){
    this.data = data
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }
  insert(data){
    let insertNode = new Node(saneInput(data))
    if(this.root === null){return this.root = insertNode}
    else{return traverseBST(this.root)}

    function traverseBST(currNode){
      if(insertNode.data <= currNode.data){
        if(currNode.left === null){return currNode.left = insertNode}
        else {return traverseBST(currNode.left)}
      }
      else if(insertNode.data > currNode.data){
        if(currNode.right === null){return currNode.right = insertNode}
        else {return traverseBST(currNode.right)}
      }
      else {return false}
    }
    function saneInput(data){
      switch (typeof data) {
        case 'string':
          !Number.isNaN(Number.parseInt(data)) ?
          data = Number.parseInt(data) :
          data = data.split('').map(a => a.charCodeAt(0)).reduce((b,c) => b+c)
          break;
        case 'number':
          break;
        default:
          throw new Error('wrong data type')
      }
      return data
    }
  }
  show(){
    let outp = []
    showInOrder(this.root)
    return outp

    function showInOrder(node){
      if(node !== null){
        showInOrder(node.left)
        outp.push(node.data)
        showInOrder(node.right)
      }
    }
  }
  showPre(){
    let outp = []
    showPreOrder(this.root)
    return outp

    function showPreOrder(node){
      if(node !== null){
        outp.push(node.data)
        showPreOrder(node.left);showPreOrder(node.right)
      }
    }
  }
  showPost(){
    let outp = []
    showPostOrder(this.root)
    return outp

    function showPostOrder(node){
      if(node !== null){
        showPostOrder(node.left);showPostOrder(node.right)
        outp.push(node.data)
      }
    }
  }
  min(node=this.root){
    return getMinLeaf(node)

    function getMinLeaf(node){
      if(node.left == null){return node}
      else {return getMinLeaf(node.left)}
    }
  }
  max(node=this.root){
    return getMaxLeaf(node)

    function getMaxLeaf(node){
      if(node.right == null){return node}
      else {return getMaxLeaf(node.right)}
    }
  }
  find(target){
    return searchBST(this.root)
    
    function searchBST(node){
      if(node !== null){
        if(node.data === target){return node}
        else {
          if(node.data >= target){return searchBST(node.left)}
          else if(node.data < target){return searchBST(node.right)}
          else {return false}
        }
      }
    }
  }
  remove(target){
    root = removeNode.call(this,this.root,target)

    function removeNode(node, data) {
      if(node == null) {return null}

      if(data == node.data) {
        if (node.left == null && node.right == null) {return null}
        if (node.left == null) {return node.right}
        if (node.right == null) {return node.left}
        var tempNode = this.min(node.right)
        node.data = tempNode.data
        node.right = removeNode.call(this,node.right, tempNode.data)
        return node
      }
      else if (data < node.data) {
        node.left = removeNode.call(this,node.left, data)
        return node
      }
      else {
        node.right = removeNode.call(this,node.right, data)
        return node
      }
    }
  }
}

module.exports = {BinarySearchTree: BinarySearchTree,Node: Node}
