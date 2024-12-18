/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Tells whether Lasagna is ready to take out from the oven
 *
 * @param {number} timer
 * @returns {string}
 */

export function cookingStatus(timer) {
	if (timer === 0) return "Lasagna is done."
	return !timer ? "You forgot to set the timer." : "Not done, please wait."
}

/**
 * Calculates total time required to prepare all Lasagna layers
 *
 * @param {string[]} layers
 * @param {number} timePerLayer
 * @returns {number}
 */

export function preparationTime(layers, timePerLayer = 2) {
	return layers.length * timePerLayer;
}

/**
 * Calculates how much noodles and sauce are required to prepare Lasagna with given layers
 *
 * @param {string[]} layers
 * @returns {{noodles: number, sauce: number}}
 */

export function quantities(layers) {
	const result = {noodles: 0, sauce: 0};

	layers.forEach(layer => {
		layer === 'noodles' ? result.noodles += 50 :
		layer === 'sauce' ? result.sauce += 0.2 : null
	})

	return result;
}

/**
 * Adds friends super secret Lasagna ingredient to your recipe (the legal way of course)
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */

export function addSecretIngredient(friendsList, myList) {
	myList.push(friendsList[friendsList.length - 1])
}

/**
 * Calculates proportionally quantity of ingredient depending on amount of portions
 *
 * @param {{noodles: number, meat: number, mozzarella: number, sauce: number}} recipe
 * @param {number} numberOfPortions
 * @returns {{noodles: number, meat: number, mozzarella: number, sauce: number}}
 */

export function scaleRecipe(recipe, numberOfPortions) {
	const updatedRecipe = {...recipe};
	for (const [key, value] of Object.entries(updatedRecipe)) {
		updatedRecipe[key] = value * (numberOfPortions / 2)
	}

	return updatedRecipe;
}
