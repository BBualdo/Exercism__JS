/**
* @param {number} year
* @return {boolean}
*/
export const isLeap = (year) => {
  if (year % 100 === 0) return year % 400 === 0;
  return year % 4 === 0;
};