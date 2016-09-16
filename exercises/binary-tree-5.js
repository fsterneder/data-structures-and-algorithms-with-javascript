// Write a program that stores the words from a large text file in a BST and displays the number of times each word occurs in the text.

const Node = require('../binary-tree').Node
const BinarySearchTree = require('../binary-tree').BinarySearchTree

BinarySearchTree.prototype.insert = function(data){
  let insertNode = new Node(saneInput(data))
  if(this.root === null){return this.root = insertNode}
  else{return traverseBST(this.root)}

  function traverseBST(currNode){
    if(insertNode.data.num <= currNode.data.num){
      if(currNode.left === null){return currNode.left = insertNode}
      else {return traverseBST(currNode.left)}
    }
    else if(insertNode.data.num > currNode.data.num){
      if(currNode.right === null){return currNode.right = insertNode}
      else {return traverseBST(currNode.right)}
    }
    else {return false}
  }
  function saneInput(data){
    switch (typeof data) {
      case 'string':
        data = {str:data,num:data.split('').map(a => a.charCodeAt(0)).reduce((b,c) => b+c),oc:1}
        break;
      default:
        throw new Error('wrong data type')
    }
    return data
  }
}
BinarySearchTree.prototype.find = function(target){
  target = this.stc(target)
  try{return searchBST(this.root).data}
  catch(e){return false}
  
  function searchBST(node){
    if(node !== null){
      if(node.data.str === target.str){return node}
      else {
        if(node.data.num >= target.num){return searchBST(node.left)}
        else if(node.data.num < target.num){return searchBST(node.right)}
        else {return false}
      }
    }
  }
}
BinarySearchTree.prototype.remove = function(target){
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
    else if (data.num < node.data.num) {
       node.left = removeNode.call(this,node.left, data)
       return node
    }
    else {
       node.right = removeNode.call(this,node.right, data)
       return node
    }
  }
}
BinarySearchTree.prototype.stc = function(data){
  // String to charcode
  return {str:data,num:data.split('').map(a => a.charCodeAt(0)).reduce((b,c) => b+c)}
}

a = new BinarySearchTree();

(function popBST(bst){
  let words = readFromFile('binary-tree-5.txt').filter(a=> a != ""), a = new BinarySearchTree()

  for(word of words){
    let finding = bst.find(word)
    finding ? finding.oc++ : bst.insert(word)
  }

  function readFromFile(file) {
    let words = require('fs').readFileSync('/home/user/Projects/mcmillan/exercises/'+file,{encoding:'utf-8'})
    .toLowerCase().replace(/\(|\)|‘|’|,|\.|-|–|\"|\d/g,'').replace(/\n|\ \ /g,' ').split(' ').map(a => a.trim())
    return words
  }
})(a);

debugger
