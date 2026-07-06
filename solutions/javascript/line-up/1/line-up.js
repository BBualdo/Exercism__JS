const SUFFIX_MAP = {
  1: "st",
  2: "nd",
  3: "rd"
};

const FORMAT_NUMBER_EXCEPTIONS = [11, 12, 13];

/**
* @param {string} name
* @param {number} orderNumber
* @return {string}
*/
export const format = (name, orderNumber) => {
    return `${name}, you are the ${formatNumber(orderNumber)} customer we serve today. Thank you!`;
};

/**
* @param {number} number
* @return {string}
*/
const formatNumber = (number) => {
    const stringifiedNum = number.toString();
    for (const exception of FORMAT_NUMBER_EXCEPTIONS) {
      if (stringifiedNum.endsWith(exception)) return number + "th";
    }
  
    const lastDigit = number.toString().at(-1);
    return number + (SUFFIX_MAP[lastDigit] ?? "th");
};