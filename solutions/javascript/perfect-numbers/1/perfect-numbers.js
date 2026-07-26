/**
 * @param {number} number
 * @return {'perfect' | 'abundant' | 'deficient'}
 */
export const classify = number => {
	if (number <= 0) throw new Error('Classification is only possible for natural numbers.');

	const aliquots = /** @type {number[]} */ [];

	for (let i = 1; i < number; i++) {
		if (number % i === 0) aliquots.push(i);
	}

	const sumOfAliquots = sum(aliquots);

	if (sumOfAliquots === number) return 'perfect';
	if (sumOfAliquots < number) return 'deficient';
	return 'abundant';
};

/**
 * @param {number[]} numArr
 * @return {number}
 */
const sum = numArr => {
	return numArr.reduce((acc, num) => acc += num, 0);
}