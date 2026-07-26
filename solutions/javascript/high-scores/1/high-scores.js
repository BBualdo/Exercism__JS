export class HighScores {
	/**
	 * @type {number[]}
	 * @private
	 */
	_scores;

	/** @param {number[]} scores */
	constructor(scores) {
		this._scores = scores;
	}

	/** @return {number[]} */
	get scores() {
		return this._scores;
	}

	/** @return {number} */
	get latest() {
		return this._scores.at(-1);
	}

	/** @return {number} */
	get personalBest() {
		return Math.max(...this._scores);
	}

	/** @return {number[]} */
	get personalTopThree() {
		return this._scores.toSorted((a, b) => b - a).slice(0, 3);
	}
}