/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/

export const selectionSort = (arr: number[]): number[] => {
  //Outer loop to traverse the array
  for (let i = 0; i < arr.length -1; i++){
    //initialize a variable to keep track of the index of the smallest value
    let minIndex = i; 

    //Inner loop to find the index of the minimum element in the unsorted portion of the array
    for (let j = i+1; j < arr.length; j++) {
      //if the current element is smaller than the element at minIndex, update minIndex
      if (arr[j] < arr[minIndex]) {
        minIndex = j; //minIndex now holds the index of the smallest element in the unsorted part
      }
    }

    //if minIndex is different from i; it means we've found a smaller element than arr[i]
    //Swap the 
  }
  return [];
};

/*

Extension:

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

export const insertionSort = (arr: number[]): number[] => {
  return [];
};
