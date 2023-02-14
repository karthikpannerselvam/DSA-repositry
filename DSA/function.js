n = 3;
function kutty(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + i + " ";
  }
  return str;
}
// kutty(3);
function call(n) {
  let str = "";
  for (let i = n; i >= 1; i--) {
    str = str + i + " ";
  }
  return str;
}
function space(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + i + " ";
    return str;
  }
}
// call(3);
function karthik(n) {
  for (let i = 1; i <= n; i++) {
    console.log(space(i) + kutty(i) + call(i - 1));
  }
}
karthik(5);

let n = 4;

function first(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i + " ";
  }
  return str;
}
// reverse staircase //
function second(n) {
  let string = "";
  for (let j = n; j >= 1; j--) {
    string += " " + j;
  }
  return string;
}

// space //
function spaces(n) {
  let str1 = "";
  for (let l = 1; l <= n; l++) {
    str1 += "  ";
  }
  return str1;
}
for (let i = 1; i <= n; i++) {
  console.log(first(i) + spaces(2 * (n - i)) + second(i));
}
