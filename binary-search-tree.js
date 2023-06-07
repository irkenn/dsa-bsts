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
    let newNode = new Node(val);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    
    let currentNode = this.root;
    
    while(currentNode){

      if(currentNode.val > val ){
        if(currentNode.left === null){
          currentNode.left = newNode;
          return;  
        }
        currentNode = currentNode.left;
        
        }
        else{
            if(currentNode.right === null){
              currentNode.right = newNode;
            return;
            }
            currentNode = currentNode.right;
          } 
      }
    }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    if(!this.root){
      this.root = newNode;
      return;
    }
    
     function helperInsert(currentNode){
        if(currentNode.val > val ){
          if(currentNode.left === null){
            currentNode.left = newNode;
            return;  
          }
          
          helperInsert(currentNode.left);
        }
        else{
          if(currentNode.right === null){
              currentNode.right = newNode;
            return;
            }
            helperInsert(currentNode.right);
          } 
    }
    let rootNode = this.root;
     helperInsert(rootNode);  
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root){
      return undefined;
    }
    
    let currentNode = this.root;
    while(currentNode){
      if(val == currentNode.val){
        return currentNode;
      }
      else if (val > currentNode.val){
        currentNode = currentNode.right;
      }
      else if (val < currentNode.val){
        currentNode = currentNode.left;
      }
      else{
        return undefined;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(!this.root){
      return undefined;
    }

    function helperFind(currentNode, value){
      if(currentNode === null){
        return undefined;
      }
      else if(value == currentNode.val){
        return currentNode;
      }
      else if(value > currentNode.val){
        return helperFind(currentNode.right, value);
      }
      else if(value < currentNode.val){
        return helperFind(currentNode.left, value);
      }
      else{
        return undefined;
      }
    }
    return helperFind(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if(!this.root){
      return null;
    }

    function traverser(node, output){
      output.push(node.val);
      if(node.left) traverser(node.left, output);
      if(node.right) traverser(node.right, output);
    }
    let arr = [];
    traverser(this.root, arr);
    return arr;
    }
    
    /** dfsInOrder(): Traverse the array using in-order DFS (DEPTH FIRST TRAVERSAL).
     * Return an array of visited nodes. */
    
  dfsInOrder() {
      
    if(!this.root){
      return null;
    }
  
    function traverser(node, output){
      if(node.left) traverser(node.left, output);
      output.push(node.val);
      if(node.right) traverser(node.right, output);
    }
    let arr = [];
    traverser(this.root, arr);
    return arr;
    }
  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    
    if(!this.root){
      return null;
    }
  
    function traverser(node, output){
      if(node.left) traverser(node.left, output);
      if(node.right) traverser(node.right, output);
      output.push(node.val);
    }
    let arr = [];
    traverser(this.root, arr);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(){
    if(!this.root){
      return null;
    }

    //I think I need a queue
    let queue = [];
    let output = [];
    queue.push(this.root);
    while(queue.length > 0){
      let currentNode = queue.shift();
      output.push(currentNode.val)
      
      if(currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
    }
    return output;
    }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
      
    if(!this.root){
      return null;
    }
    function helperFind(currentNode, value, previousNode=null){
      if(currentNode === null){
        return undefined;
      }
      else if(value == currentNode.val){
        return {currentNode:currentNode, previousNode:previousNode};
      }
      else if(value > currentNode.val){
        return helperFind(currentNode.right, value, currentNode);
      }
      else if(value < currentNode.val){
        return helperFind(currentNode.left, value, currentNode);
      }
      else{
        return undefined;
      }
    }
    let result = helperFind(this.root, val);
    console.log('result', result);
    
    if(!result){
      return null;
    }

    function removeRecursively(curr, prev){
      
      if (!curr.right && !curr.left){
        if(prev.left && prev.left == curr){
          prev.left = null;
        }
        else if(prev.right && prev.right == curr){
          prev.right = null;
        }
      }
      else if (curr.right && curr.left){
        curr = curr.right
        removeRecursively(curr.right);
      }else if (curr.left && !curr.right){
          curr = curr.left;
      }else if (curr.right && !curr.left){
        curr = curr.right;
      }
    }
    let { currentNode, previousNode} = result;
    removeRecursively(currentNode, previousNode);
    return currentNode;
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
