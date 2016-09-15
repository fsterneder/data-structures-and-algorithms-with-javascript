// Binary Tree & Binary Search Tree

// TODO
// - Allow Duplicates
// - Remove a node with 2 children

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
      if(insertNode.data < currNode.data){
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
  showOrder(){
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
  min(){
    return getMinLeaf(this.root)

    function getMinLeaf(node){
      if(node.left == null){return node}
      else {return getMinLeaf(node.left)}
    }
  }
  max(){
    return getMaxLeaf(this.root)

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
          if(node.data > target){return searchBST(node.left)}
          else if(node.data < target){return searchBST(node.right)}
          else {return false}
        }
      }
    }
  }
  remove(target){
    return removeNode(this.root,null)
    
    function removeNode(node,_parent){
      if(node !== null){
        if(node.data === target && node.left === null && node.right === null){
          _parent.data > target ? _parent.left = null :
          _parent.right = null
          return true
        } else if (node.data === target && (node.left === null || node.right === null)){
          if(_parent.data < target){_parent.right = node.right}
          else if(_parent.data > target){_parent.left = node.left}
        } else if (node.data === target && node.left != null && node.right != null){
          //todo
          return false
        }
        else {
          if(target < node.data){return removeNode(node.left,node)} 
          else if(target > node.data){return removeNode(node.right,node)}
        }
      }
    }
  }
}

module.exports = {BinarySearchTree: BinarySearchTree,Node: Node}

// TP
/*
let a = new BinarySearchTree()
a.insert(50)
a.insert(12)
a.insert(3)
a.insert(100)
a.insert(160)
a.insert(60)
a.find(3)
a.remove(100)
debugger
*/
