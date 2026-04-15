/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/
//this solution begins with using syntactic sugar to create the class BinaryTree and its constructor function that accepts a number as an argument
//
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//this is our function that returns a boolean, we have also given it default parameters of -infinity and infinity

export const validBST = (tree: BinaryTree | null, min = -Infinity, max = Infinity): boolean => {
  //base case: if the node is null, we've reached the end of the branch and return true 
  if (!tree) return true; //base case if no tree return true, why? Ensures we stop recursing and also- this condition is debatable, the only condition we are breaking this on is whether it is breaking the rule of min max sorting- 
  if(tree.value < min || tree.value > max) return false; //check current node agains allowed min and max
  return (
    validBST(tree.left, min, tree.value) && validBST(tree.right, tree.value, max)
    //recursively check: 1. left subtree: all nodes must have values less than the current node's value. Update max to the current nodes value. 
    //2. the right subtree: all nodes must have values greater than the current node's value. Update min to the current node's value. 
  );
};
