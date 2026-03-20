/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  //if i split the array in halves then iterate separately instead of nesting the loops, do i get O(n) time? 
  //how does the for loop look like when i split the array in halves?
  //what about using a hash table to store the numbers and their indices as we iterate through the array?
  //so is the hash table approach O(n) time complexity?
  //what about sorting the array first and then using two pointers to find the target sum? would that be O(n log n) due to sorting?
  //what about using a set to store the numbers we've seen so far and check if the complement (target - current number) exists in the set? would that be O(n) time complexity?
  //what about using a map to store the numbers and their indices as we iterate through the array, and check if the complement (target - current number) exists in the map? would that be O(n) time complexity?
  //what about using a binary search to find the complement (target - current number) in the sorted array? would that be O(n log n) due to sorting and binary search?
  //input: array of numbers and a target number
  //output: boolean- true if two numbers in the array add up to the target, false otherwise
  //edge cases: what if the array is empty? what if the array has only one element? what if the target is zero? what if the target is negative? what if the array has duplicate numbers?
  //are repeating numbers allowed in the array? if so, can they be used to sum up to the target? for example, if the array is [2, 2, 3] and the target is 4, should the function return true because 2 + 2 = 4?
  //what if the array has negative numbers? for example, if the array is [-1, 1, 2] and the target is 0, should the function return true because -1 + 1 = 0? so we can assume that the array can have negative numbers and the target can also be negative?
  //what if the array has zero? for example, if the array is [0, 1, 2] and the target is 1, should the function return true because 0 + 1 = 1? so
  //we can assume that the array can have zero and the target can also be zero?
  //what if the array has multiple pairs that sum up to the target? for example, if the array is [1, 2, 3, 4] and the target is 5, should the function return true because 1 + 4 = 5 and 2 + 3 = 5? but then the problem states that there is exactly one solution, so we can assume that there will not be multiple pairs that sum up to the target.
  //ok, so if no duplicate elements means we will not have multiples of the same number in the array, but we can still have pairs that sum up to the target. for example, if the array is [1, 2, 3] and the target is 4, should the function return true because 1 + 3 = 4? so we can assume that there can be pairs that sum up to the target, but there will not be duplicate numbers in the array. And therefore we can use a set to store the numbers we've seen so far and check if the complement (target - current number) exists in the set. This would give us O(n) time complexity because we are iterating through the array once and checking for the complement in constant time.

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rationale:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rationale: No elements inside the array sum up to the target number
*/

export const twoSum = (arr: number[], target: number): boolean => {
  return false;
};

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

export const threeSum = (arr: number[], target: number): boolean => {
  return false;
};
