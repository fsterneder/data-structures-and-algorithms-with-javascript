// Add a function to the BST class that counts the number of edges in a BST.

const Node = require('../binary-tree').Node
const BinarySearchTree = require('../binary-tree').BinarySearchTree

BinarySearchTree.prototype.getNodeCount = function(){
  return (this.showOrder().length - 1)
}
