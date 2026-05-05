/*
 * You have an unsorted array of n + 1 integers, ranging from 1 to n,
 * with an extra number that is a duplicate. Find and return that number.
 * If no duplicates are found, return 0.
 * ex: [1,5,4,3,6,2,4,7] should return 4
 */
//so first of all, sorting is expensive. And this seems fairly simple so i don't think it's necessary. I do think there is an argument to be made for splitting the array in half and using a 2 pointer method; also 2 for loops to check the values, one as i and one as j;
export const duplicateNumber = (array: number[]): number => {
  //return a number- it insists that it will be just one number returned
  for (let i =0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === array[i]) return array[i];//return the element at i
    } 
 
  }
     return 0;
};

console.log(duplicateNumber([1, 2, 4, 3, 4,]))
/*
 * Extension:
 * You have an unsorted array of n + 1 positive integers, ranging from k to k +
 * (n - 1), with an extra number that is a duplicate.
 * Find and return the duplicate. Do this in O(n) time and O(1) space complexity.
 * If no duplicates are found, return 0.
 * ex: [3, 4, 7, 6, 8, 5, 6] should return 6
 */
//this is O(n^2)
// export const duplicateNumberAdvanced = (array: number[]): number => {
//   for (let n = 0; n < array.length; n++) {
//     for (let k= n + 1; k < array.length; k++) {
//       if (array[n] === array[k]) return array[n];
//     }
//   } 
//   return 0;
// };

//Use a set to make O(n) time and O(n) space
export const duplicateNumberAdvanced = (array: number[]): number => {
  //Set solution more solid than math solution which could get messed up if there is more then one duplicate. Set solution will return the FIRST duplicate consistently
  const seen = new Set<number>();
  for (let i = 0; i <array.length; i++) {
    if (seen.has(array[i])) return array[i]; //seen it before, it's a duplicate!
    seen.add(array[i]); //first time remember it
  }
  return 0;
};

console.log(duplicateNumberAdvanced([6, 17, 16, 15, 13, 12, 13, 7, 8, 9, 10, 11, 14]))


  //use math
  function findDuplicateMathy (arr: number[]):number {
    if (arr.length < 2) return 0; //edge case
    const n = arr.length-1; //number of distinct values possible
    const k = arr.reduce((min,val) => val< min ? val: min,arr[0]);//smallest value in the range could also use spreader but would overflow stack on large arrays
    const last = k+n-1;//largest value in each range
    const expectedSum = (n*(k+last))/2; //Gauss's formula
    const actualSum = arr.reduce((sum, val) => sum + val, 0);
    const duplicate = actualSum - expectedSum;
    return duplicate > 0 ? duplicate: 0;
  // }
  // const n = array.length -1; //n + 1 elements ranging over n values
  // //const k = Math.min(...array); //find where the range starts//So this could blow the stack if the array is too big. Replace with 
  // const k = array.reduce((min, val) => val < min ? val: min, array[0])
  // const expectedSum = n * k + (n * (n-1))/2; //sum of k through k + (n-1)
  // const actualSum = array.reduce((acc, val) => acc + val, 0);
  // const duplicate = actualSum - expectedSum;
  // return duplicate > 0 ? duplicate: 0;
}

console.log(findDuplicateMathy([21, 5, 6, 9, 8, 7, 11, 11, 20, 19, 18, 17, 16, 15, 14, 13, 12, 10 ]));