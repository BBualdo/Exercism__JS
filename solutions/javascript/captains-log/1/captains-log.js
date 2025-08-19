// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const prefix = "NCC-";
  const min = 1000;
  const max = 9999;
  
  const rand = Math.floor(Math.random() * (max - min) + min + 1);
  return prefix + rand;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const min = 41000;
  const max = 42000;

  return Math.random() * (max - min) + min;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetaryClasses = "DHJKLMNRTY";

  const randomIndex = Math.floor(Math.random() * (planetaryClasses.length));
  return planetaryClasses[randomIndex];
}
