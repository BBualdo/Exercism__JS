const alphabeth = "abcdefghijklmnopqrstuvwxyz";

export const isPangram = (str) => {  
  for (const letter of alphabeth) {
    if (!str.toLowerCase().includes(letter)) return false;
  }

  return true;
};