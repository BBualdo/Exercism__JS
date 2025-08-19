export const gigasecond = (date) => {
  const gigasecond = 1000000000;
  const dateInMs = date.getTime();

  return new Date(dateInMs + gigasecond * 1000);
};