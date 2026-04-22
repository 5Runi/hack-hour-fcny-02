/*

Write a function that works the same as Promise.all

From MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

The Promise.all() method returns a single Promise that resolves when all of the
promises passed as an iterable have resolved or when the iterable contains no
promises. It rejects with the reason of the first promise that rejects.

Hint:

use the Promise constructor. The Promise constructor takes in two arguments:
"resolve" and "reject". Calling "resolve" on a value will complete will the
value. Calling "reject" on a value will error-out with the value.

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
for info on the Promise constructor.

*/
/**comments from Kim's algo hour 4/22/26: without generics would have to use Promise<any>[] and lose type safety on the result */

export const promiseAll = <T>(promises: Promise<T>[]): Promise<T[]> => {
  //We construct and return a single outer promise. 
  const n: number = promises.length;
  //refer to docs MDN for promise() constructor explains resolve and reject there

  return new Promise((resolve, reject) => {//this doesnt actually get returned until it is resolved or rejected below
    let completed: number = 0;
    const results: T[] = new Array(n).fill(null);

    promises.forEach((promise: Promise<T>, i:number) => {//using forEach to iterate through promises array, and can access index as i as part of forEach (built in)
      promise
      .then((result)=> {
        completed++;
        results[i]= result;
        if (completed === n) resolve(results);//resolve is built into promises (it's an implicit return)
      })
      .catch((err) => {
        reject(err);
      });
    });
  })
  //Each.then() increments it; 

  //store results at an index instead of a push to keep in order
  return Promise.resolve([]);
};

//testing code below:

const p1 = new Promise(resolve => setTimeout(() => resolve('slow'), 700));
const p2 = new Promise(resolve => setTimeout(()=> resolve('medium'), 500));
const p3 = new Promise(resolve => setTimeout(() => resolve('fast'), 300));

promiseAll([p1, p2, p3]).then(results => console.log(results)) //['slow', 'medium', 'fast']