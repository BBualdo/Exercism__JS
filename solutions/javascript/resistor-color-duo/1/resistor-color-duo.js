const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const decodedValue = (colorsArr) => {
  let result = "";
  
  for (let i = 0; i < 2; i++) {
    result += COLORS.indexOf(colorsArr[i]);
  }

  return Number(result);
};
