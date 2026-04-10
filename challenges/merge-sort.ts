/* SOLUTION 1: RECURSIVE

  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.
  
*/

const mergeSort = (array: number[]): number[] => {
  //base case: for arrays with a single element, return the array
  if (array.length <=1) return array;
  //slice the array in half, recursively sorting each half
  const mid = Math.ceil(array.length/2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  /**given two sorted arrays (left & right), merge them together into a single array ('sortedArray') by comparing the first element from each until one of the two is empty */

  return [];
};

/**SOLUTION 2: USING HELPER FUNCTIONS
 * time complexit O(nlog n)
 */

export default mergeSort;
