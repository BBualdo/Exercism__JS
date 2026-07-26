export class Squares {
	/**
	 * @type {number}
	 * @private
	 */
	_number;
	
	/**
	 * @type {number}
	 * @private
	 */
	_sumOfSquares;

	/**
	 * @type {number}
	 * @private
	 */
	_squareOfSum;
	
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
		
		this._sumOfSquares = sum;
		return this._sumOfSquares;
	}

	/** @return {number} */
	get squareOfSum() {
		let sum = 0;

		for (let i = 1; i <= this._number; i++) {
			sum += i;
		}
		
		this._squareOfSum = sum ** 2;
		return this._squareOfSum;
	}

	/** @return {number} */
	get difference() {
		return Math.abs(this._squareOfSum - this._sumOfSquares);
	}
}
