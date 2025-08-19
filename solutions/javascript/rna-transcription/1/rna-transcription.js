const rnaTranslationCode = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
};

export const toRna = (dna) => {
  return Array.from(dna).map(i => rnaTranslationCode[i]).join("");
};
