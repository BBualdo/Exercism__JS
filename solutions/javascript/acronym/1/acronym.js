/**
 * @param {string} str
 * @return {string}
 */
export const parse = str => {
	const members = str.split(/[\s,-:_]+/);
	return members.reduce((str, member) => str += member[0].toUpperCase(), '');
};
