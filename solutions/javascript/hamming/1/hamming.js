/*
* @param {string} dna1
* @param {string} dna2
* @return {number}
*/
export const compute = (dna1, dna2) => {
    if (dna1.length !== dna2.length) throw new Error('strands must be of equal length');

    let count = 0;
    for (let i = 0; i < dna1.length; i++) {
        if (dna1[i] !== dna2[i]) count++;
    }
    return count;
};
