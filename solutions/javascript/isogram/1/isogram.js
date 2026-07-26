/**
 * @param {string} str
 * @return {boolean}
 */
export const isIsogram = str => {
	const usedLetters = /** @type {string[]} */ [];

	for (let i = 0; i < str.length; i++) {
		const char = str[i].toLowerCase();
		if (char === ' ' || char === '-') continue;

		if (usedLetters.includes(char)) return false;
		usedLetters.push(char);
	}

	return true;
};
