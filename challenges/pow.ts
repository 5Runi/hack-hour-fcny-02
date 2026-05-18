/**
 * Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Assume y will always be a non-negative integer, but x may be any number.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * 
 * Input is going to be x= base(any number) and y=power (non-negative integer)
 * 
 * Output will be a number
 * 
 * Pseudocode: write a for loop that runs y times; create a result variable to store solution of each loop;; end of function return the result variable after looping. 
 * 
 * (x)**y
 * 
 * Extension: Use recursion.
 */



function pow(base: number, power: number): number {
  const result = base**power;
  return result; // Placeholder return value for type safety - replace for your solution
}




/**
 * Extension: Use recursion.
 * 
 * For this method it helps me to think about your loop. For recursion is a function inside of our main function that calls our outer function.
 * Need base case: When power is 0 return 1; an if statement- doesnt always have to be but could also be a logical or terinary operator; 
 * For recursion we'll work our way to the base case which in this situation is going from power to countdown to 1; 
 * If we're decrementing do we need a counter variable? Or decrement power itself. 
 * 
 */

// function powRecurse(base: number, power: number): number {
//   let result;
//   if (power === 0) return 1;
//   else {
//     //need base to multiply by itself; power decrement; and to run powRecurse
//     result *= base;
//     power -= 1;
//     powRecurse(base, power)
//   }
//   return result; // Placeholder return value for type safety - replace for your solution
// }



// * Example:
// * powRecurse(2,4) => 2^4 = 16
// * Rational: 2 * 2 * 2 * 2 = 16

//  Kim's solution:
function powRecurse(base: number, power: number): number { // Base: 2, Power: 4 / Base: 2, Power: 3 / Base: 2, Power: 2 / Base: 2, Power: 1
  // Base case: any number raised to the power of 0 is 1
  if (power === 0) return 1;
  // Base case: any number raised to the power of 1 is the number itself
  if (power === 1) return base; // 
  // Recursive case: multiply base by the result of powRecurse with reduced power
  return base * powRecurse(base, power - 1); // 2 * powRecurse(2, 4 - 1) /  2 * 2 *  powRecurse(2, 3 - 1) / 2 * 2 * 2* powRecurse(2, 2 - 1) / 2 * 2 * 2* 2 / 
}





// Tail call optimized version:
// function powRecurseTCO(
//   base: number,
//   power: number,
//   value: number = base // Initialize 'value' to 'base'
// ): number {
//   // Base case: any number raised to the power of 0 is 1
//   if (power === 0) return 1;
//   // Base case: if power is 1, return the accumulated 'value'
//   if (power === 1) return value;
//   // Recursive case: call powRecurseTCO with decremented power and updated value
//   return powRecurseTCO(base, power - 1, value * base);
// }


console.log(powRecurse(2,4))

export { pow, powRecurse };













// fq