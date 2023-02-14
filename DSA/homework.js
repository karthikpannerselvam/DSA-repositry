// 1st one
for (let i = 1; i <= 4; i++) {
  let str = "";
  for (let j = 4; j > i; j--) {
    str += "  ";
  }
  for (let k = i; k >= 1; k--) {
    str += k + " ";
  }
  console.log(str);
}

//2nd one
let n = 4;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += i + " ";
  }
  console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += i + " ";
  }
  console.log(row);
}

//3rd one

let d = 4;
for (let i = 1; i <= d; i++) {
  let row = "";
  for (let j = 1; j <= d - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += k + " ";
  }
  console.log(row);
}
for (let i = d - 1; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= d - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += k + " ";
  }
  console.log(row);
}

//4th on

let a = 15;
for (let i = 1; i <= a; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Superstar Rajnikanth");
  } else if (i % 3 == 0) {
    console.log("Superstar");
  } else if (i % 5 == 0) {
    console.log("Rajnikanth");
  } else {
    console.log(i);
  }
}

for (let j = 1; j <= 4; j++) {
  let str = 4;
  for (let i = 1; i <= 4; i++) {
    str = +" ";
    console.log(str);
  }

  let n = 4;
  for (let k = 1; k <= 4; k++) {
    n = str + k + "";
    console.log(n);
  }
}

let x = 4;
for (let i = 1; i <= x; i++) {
  let run = "";
  for (let j = 1; j <= x - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= i; k++) {
    run += k + "";
  }
  console.log(run);
}

let y = 3;
for (let i = n; i > 0; i--);
{
  i = i + " ";
}
console.log(i);
