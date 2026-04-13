/**
 * Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Assume y will always be a non-negative integer, but x may be any number.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion.
 */

function pow(base: number, power: number): number {
  let result = 1; //initiate result variable to hold the final answer; for multiplying identity value is 1; if you start at zero it would return zero because x*0=0
  if (power === 0) return 1; //base case: any number to the power of 0 is 1
  //x is the base(can be any number) // y is the power- non-negative integer (natural numbers)
  //calculate x^y... what about negatives? 
  for (let i = 0; i < power; i++) {//this is our counter starting at 1 and going up to power
    result *= base;
  }; 
  return result; // Placeholder return value for type safety - replace for your solution
}

/**
 * Extension: Use recursion.
 */

function powRecurse(base: number, power: number): number {
  if (power === 0) return 1;//base case to let recursive call know its done
  return base * powRecurse(base, power -1); // power-1 allows the count down, otherwise it would be an infinite loop
}
console.log(powRecurse(3, 3));
export { pow, powRecurse };
