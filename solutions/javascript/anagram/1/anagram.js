/**
 * @param {string} target
 * @param {string[]} words
 * @return {string[]}
 */
export const findAnagrams = (target, words) => {
	const anagrams = /** @type {string[]} */ [];

	const sortedTarget = sortLetters(target);

	for (let i = 0; i < words.length; i++) {
		if (words[i].toLowerCase() === target.toLowerCase() || words[i].length !== target.length) continue;

		const sortedWord = sortLetters(words[i]);
		for (let j = 0; j < sortedTarget.length; j++) {
			if (sortedWord[j] !== sortedTarget[j]) break;
			if (j === sortedTarget.length - 1) anagrams.push(words[i]);
		}
	}

	return anagrams;
};

/**
 * @param {string} word
 * @return {string}
 */
const sortLetters = word => {
	return [...word.toLowerCase()].toSorted().join('');
};
