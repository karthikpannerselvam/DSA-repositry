// 1st one
let n = 4;
for (let i = 1; i <= n; i++) {
  let run = "";
  for (let j = 1; j <= n - i; j++) {
    run += "  ";
  }
  for (let k = 1; k <= i; k++) {
    run += k + " ";
  }
  for (let l = i - 1; l >= 1; l--) {
    run += l + " ";
  }
  console.log(run);
}
for (let i = n - 1; i >= 1; i--) {
  let run = "";
  for (let j = 1; j <= n - i; j++) {
    run += "  ";
  }
  for (let k = 1; k <= i; k++) {
    run += k + " ";
  }
  for (let l = i - 1; l >= 1; l--) {
    run += l + " ";
  }
  console.log(run);
}
// 2nd one
let m = 6;
for (let i = 1; i <= m; i++) {
  let run = " ";
  for (let j = m; j <= 1; j++) {
    run += run + " ";
  }
  for (let k = 1; k <= 1; k++) {
    run += "   " + k;
  }
  if (i % 4 == 0) {
    console.log(" 3331333");
  }
  console.log(run);
}
//  Ex.No : 4
let p = 4;
for (let i = 1; i <= p; i++) {
  let run = " ";
  for (let j = p; j <= 1; j++) {
    run += run + " ";
  }
  for (let k = 1; k <= 1; k++) {
    run += "   " + k;
  }
  if (i % 3 == 0) {
    console.log("  22122");
  }
  console.log(run);
}
