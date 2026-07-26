export class Squares {
	/**
	 * @type {number}
	 * @private
	 */
	_number;

	/** @param {number} number */
	constructor(number) {
		this._number = number;
	}

	/** @return {number} */
	get sumOfSquares() {
		let sum = 0;

		for (let i = 1; i <= this._number; i++) {
			sum += i ** 2;
		}

		return sum;
	}

	/** @return {number} */
	get squareOfSum() {
		let sum = 0;

		for (let i = 1; i <= this._number; i++) {
			sum += i;
		}

		return sum ** 2;
	}

	/** @return {number} */
	get difference() {
		return Math.abs(this.sumOfSquares - this.squareOfSum);
	}
}
