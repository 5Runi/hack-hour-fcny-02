/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/

export const mergeRanges = (intervals: number[][]): number[][] => {
  //IF interval is empty, immediately return--- edge case (good to think of edge cases off the bat, "I am thinking of one edge case now and will continue to consider this as i work through" "or at the end might say if i were to refactor i might add" or "should I consider the empty array as an edge case?")
  if (!intervals.length) return [];

  //sort intervals in ascending order of start time- we decide this simplifies the rest of the solution enough to be worth it
  intervals.sort((a, b) => a[0] - b[0]);

  //initialize results with the first interval, then iterate through the rest of the array
  const results = [intervals[0]];
  for (const curr of intervals) {
    const last = results[results.length-1];
    //if the intervals overlap, we merge them by updating last[1];
    if (curr[0] <= last[1]) last[1] = Math.max(last[1], curr[1]);
    //otherwise simply add the interval to the results
    else results.push(curr)
  }
  return results;
};
