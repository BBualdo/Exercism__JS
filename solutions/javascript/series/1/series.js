export class Series {
	/**
	 * @type {string}
	 * @private
	 */
	_series;

	/** @param {string} series */
	constructor(series) {
		if (series === '') throw new Error('series cannot be empty');
		this._series = series;
	}

	/**
	 * @param {number} sliceLength
	 * @return {number[][]}
	 */
	slices(sliceLength) {
		if (sliceLength === 0) throw new Error('slice length cannot be zero');
		if (sliceLength < 0) throw new Error('slice length cannot be negative');
		if (sliceLength > this._series.length) throw new Error('slice length cannot be greater than series length');

		const result = /** @type {number[][]} */ [];

		const resultsAmount = this._series.length - sliceLength + 1;

		for (let sliceIndex = 0; sliceIndex < resultsAmount; sliceIndex++) {
			const nums = [...this._series.substring(sliceIndex, sliceLength + sliceIndex)].map(element => Number(element));

			result.push(nums);
		}

		return result;
	}
}