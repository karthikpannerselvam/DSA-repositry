// FInd prime numbers using for loop

const primeis = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % 1 === 0) {
      return n + " isn't prime number";
    }
  }
  return n + " is a prime number";
};
console.log(primeis(947));

//FInding duplicate count

const findDuplicateCount = (x, arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      count++;
    }
  }
  if (count >= 0) {
    if (count === 1) {
      return "x is found " + count + " time";
    } else {
      return "x is found " + count + " times";
    }
  } else {
    return "x is not found";
  }
};

const findDuplicateCountInArr = (x, arr) => {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(findDuplicateCount(x[i], arr));
  }
  return result;
};
console.log(findDuplicateCountInArr([1, 2, 3], [1, 2, 2, 3, 3, 3, 4, 5, 6, 7]));
