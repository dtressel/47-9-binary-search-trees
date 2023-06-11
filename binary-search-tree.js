class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // if tree is empty, create root node with val
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    // Otherwise traverse tree
    let testNode = this.root;
    // while loop breaks when encountering just added node or finding that value already exists
    while (testNode.val !== val) {
      if (val < testNode.val) {
        if (!testNode.left) {
          testNode.left = new Node(val);
        }
        testNode = testNode.left;
      }
      else {
        if (!testNode.right) {
          testNode.right = new Node(val);
        }
        testNode = testNode.right;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    // if tree is empty, create root node with val
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    function insertRecursivelyHelper(testNode) {
      if (testNode.val === val) return;
      if (val < testNode.val) {
        if (!testNode.left) {
          testNode.left = new Node(val);
        }
        testNode = testNode.left;
      }
      else {
        if (!testNode.right) {
          testNode.right = new Node(val);
        }
        testNode = testNode.right;
      }
      insertRecursivelyHelper(testNode);
    }
    insertRecursivelyHelper(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let testNode = this.root;
    while (testNode !== null) {
      if (testNode.val > val) testNode = testNode.left;
      else if (testNode.val < val) testNode = testNode.right;
      else return testNode;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function findRecursivelyHelper(testNode) {
      if (testNode === null) return;
      if (testNode.val > val) return findRecursivelyHelper(testNode.left);
      else if (testNode.val < val) return findRecursivelyHelper(testNode.right);
      else return testNode;
    }
    return findRecursivelyHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
