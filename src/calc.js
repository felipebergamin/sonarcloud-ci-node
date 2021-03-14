const sum = (...numbers) => {
  return numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

const minus = (...numbers) => {
  return numbers.reduce((prev, curr) => {
    return prev - curr;
  }, 0);
};

const times = (...numbers) => {
  return numbers.reduce((prev, curr) => {
    return prev * curr;
  }, 0);
};

const divide = (a, b) => {
  return a / b;
};

const pow = (a, b) => {
  return Math.pow(a, b);
};

module.exports = {
  sum,
  minus,
  times,
  divide,
  pow,
};
