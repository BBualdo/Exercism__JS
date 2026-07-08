//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
* @param {number} num
* @return {number}
*/
export const steps = (num) => {
  if (num <= 0) throw new Error('Only positive integers are allowed');

  let count = 0;
  
  while (num !== 1) {
    count++;
    
    if (num % 2 === 0) num *= 0.5;
    else num = 3 * num + 1;
  }

  return count;
};
