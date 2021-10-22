export const formatDate = (weatherDate: number) => {
  const newDate = new Date(weatherDate * 1000);
  return newDate;
};

export const mean = (arr: number[]) =>
  arr.reduce((a, b) => a + b, 0) / arr.length;

export const mode = (arr: number[]) => {
  const mode: any = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  return max;
};
