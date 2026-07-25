/**
 * @param {Record<number, string[]>} data
 * @return {Record<string, number>}
 */
export const transform = data => {
	const obj = {};
	for (const [key, values] of Object.entries(data)) {
		values.forEach(value => obj[value.toLowerCase()] = Number(key));
	}

	return Object.keys(obj).sort().reduce((newObj, key) => {
		newObj[key] = obj[key];
		return newObj;
	}, {});
};