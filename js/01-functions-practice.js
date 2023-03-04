// PROBLEM 1
function halfNumber(x) {
  let result = x / 2;
  console.log(`Half of ${x} is ${result}`);
  return result;
}

halfNumber(250);

// PROBLEM 2
function sqaureNumber(x) {
  let sqaure = x * x;
  console.log(`The result of squaring the ${x} is ${sqaure}`);
  return sqaure;
}

sqaureNumber(9);

// PROBLEM 3
const percentOf = (x, y) => {
  let percent = (x / y) * 100;
  console.log(`${x} is ${percent}% of ${y}`);
  return percent;
};

percentOf(5, 20);

// PROBLEM 4
const findModulus = (x, y) => {
  let remainder = x % y;
  console.log(`${remainder} is the modulus of ${x} and ${y}`);
  return remainder;
};

findModulus(100, 20);
