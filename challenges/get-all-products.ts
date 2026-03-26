/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]// move through index is the one not multiplied

getAllProducts([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

This problem is solvable in O(n) time complexity, but be careful! 
What if there is a zero in the input array? What if there are
multiple zeroes?

*/

/**
 * 
 * input: array of integers may be positive, negative, or zero;
 * output: array; pushing products of input multiplications to the array
 * edgecase: zero(s), one number (arr.length > 1)
 * approach: access each number in the array except one for each attempt(map)(filter); 
 * goal of O(n) time  
 */

const getAllProducts = (array: number[]): number[] => {
  let products: number[] = [];
  for (let i =0; i < array.length; i++) {
    
  }

  return [];
};

export default getAllProducts;
