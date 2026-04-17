/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5,
"buzz" in place of numbers divisible by 5 but not by 3,
and "fizzbuzz" in place of numbers divisible by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

const fizzbuzz = (num: number): (number | string)[] => {
  let results: (number | string)[] = [];
  //start at 1, increment up to and include num
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) results.push("fizzbuzz");
    else if (i % 5 === 0) results.push("buzz");
    else if (i % 3 === 0) results.push("fizz");
    else results.push(i);
  }
  return results;
};

// console.log(fizzbuzz(36));

/*

Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

//Initialize an array to hold the results

Put "fizz" in place of numbers divisible by 3 but not by 5 or 7,//as in 15, should NOT be included? 
%3===0 && %5... no. see have to catch it in an if else block, and if it trickles through.... so will work from the bottom up
"buzz" in place of numbers divisible by 5 but not by 3 or 7,//hhhmmmm
"bazz" in place of numbers divisible by 7 but not by 3 or 5,//good gravy
"fizzbuzz" in place of numbers divisible by 3 and 5 but not 7,//ok, well its just the 2 words appended, so I am tempted to use || or &&
and i guess i could append them or i could exclude them regardless of the words
"fizzbazz" in place of numbers divisible by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisible by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisible by 3, 5, and 7.

fizzbuzzbazz(25);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22,
23, 'fizz', 'buzz']

*/

const fizzbuzzbazz = (num: number): (number | string)[] => {
  let resultsExt: (number|string) [] = []//initialize array to push into; add typescript
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 ===0 ) resultsExt.push("fizzbuzzbazz");
    else if (i%5===0 && i%7===0) resultsExt.push("buzzbazz");
    else if (i%3 ===0 && i%7===0) resultsExt.push("fizzbazz");
    else if (i%3===0 && i%5===0) resultsExt.push("fizzbuzz");
    else if (i%7===0) resultsExt.push("bazz");
    else if (i%5===0) resultsExt.push("buzz");
    else if (i%3===0) resultsExt.push("fizz");
    else( resultsExt.push(i));
  }
  return resultsExt;
};

// console.log(fizzbuzzbazz(77));
// console.log(fizzbuzzbazz(212));

export { fizzbuzz, fizzbuzzbazz };
