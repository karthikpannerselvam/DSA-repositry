// For getting a maximum value //
let a = [30, 40, 65, 89, 69, 20];
max = a[0];
for (let i = 1; i <= a.length - 1; i++) {
  if (max < a[i]) {
    max = a[i];
  }
}
console.log(max);

// For getting a minimum value //
let b = [30, 40, 65, 89, 69, 20];
min = b[0];
for (let i = 1; i >= b.length - 1; i++) {
  if (min < b[i]) {
    min = b[i];
  }
}
console.log(min);

// Finding the x value in the given array//
let c = [5, 80, 4, 8, 12, 3, 1];
let x = 7;
let match = false;

for (let i = 0; i < c.length; i++) {
  let k = c[i];
  if (x === k) {
    match = true;
    break;
  }
}
if (match === true) {
  console.log(x + "is found in the array");
} else {
  console.log(x + " is not found in the array");
}

//
let d = [5, 10, 8, 10, 7, 10, 34, 10];
let z = 10;

let arr = [];
for (let i = 0; i < a.length; i++) {
  let b = d[i];
  if (z === b) {
    arr.push(b);
  }
}

if (arr.length === 0) {
  console.log("x is not found");
} else {
  console.log("x is found " + arr.length + " times");
}
