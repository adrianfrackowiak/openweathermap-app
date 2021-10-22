export const formatDate = (weatherDate: number) => {
  const newDate = new Date(weatherDate * 1000);
  return newDate;
};
