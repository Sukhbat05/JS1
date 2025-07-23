let grades = [100, 70, 30, -100, 20, -30, 100, 200, 300];
let grades2 = [-10, 70, 330, 100, 202];

function FindAvg(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}
let result = FindAvg(grades);
let result2 = FindAvg(grades2);
console.log(result);
console.log(result2);

function FindSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let result3 = FindSum(grades);
let result4 = FindSum(grades2);
console.log(result3);
console.log(result4);

function FindMin(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let result5 = FindMin(grades);
console.log(result5);

function Findmax(arr) {
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let result6 = Findmax(grades);
let result7 = Findmax(grades2);
console.log(result6);
console.log(result7);

function FindPositiveMin(arr) {
  let posmin = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < posmin && arr[i] > 0) {
      posmin = arr[i];
    }
  }

  return posmin;
}
let result8 = FindPositiveMin(grades);
console.log(result8);
