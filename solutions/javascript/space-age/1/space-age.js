const earthYearInSeconds =  31_557_600;

const orbitalYearsMultipliers = {
  "mercury": 0.2408467,
  "venus": 0.61519726,
  "earth": 1,
  "mars": 1.8808158,
  "jupiter": 11.862615,
  "saturn": 29.447498,
  "uranus": 84.016846,
  "neptune": 164.79132
};

export const age = (planet, ageInSeconds) => {
  if (!Object.hasOwn(orbitalYearsMultipliers, planet)) {
    throw new Error("not a planet");
  }
  
  const multiplier = orbitalYearsMultipliers[planet];

  const ageOnPlanetInYears = ageInSeconds / (earthYearInSeconds * multiplier);
  
  return Math.round(ageOnPlanetInYears * 100) / 100;
};
