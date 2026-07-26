const BRACKET_PAIR_MAP = {
	'{': '}',
	'[': ']',
	'(': ')'
};

/**
 * @param {string} str
 * @return {boolean}
 */
export const isPaired = str => {
	const bracketQueue = [];

	for (const char of str) {
		if (Object.values(BRACKET_PAIR_MAP).includes(char) && char !== bracketQueue[0]) return false;

		const bracketToQueue = BRACKET_PAIR_MAP[char];
		if (bracketToQueue !== undefined) bracketQueue.unshift(bracketToQueue);

		if (char === bracketQueue[0]) bracketQueue.shift();
	}

	return bracketQueue.length === 0;
};