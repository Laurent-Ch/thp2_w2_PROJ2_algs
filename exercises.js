// SUBJECT 1
// DATA USED FOR 1, 3, 5
array1 = [10, 15, 3, 7];
k1 = 17;  // true
k2 = 19;  // false
k3 = 20;  // false

// Exercise 1
function sumCheck(arr, k) {
  let counter = 0;
  let arrLength = arr.length;
  for (i = 0; i < arrLength - 1; i++) {
    for (j = i + 1; j < arrLength; j++) {
      counter++;
      if (k == arr[i] + arr[j]) {
        return [true, counter];
      }
    }
  }
  return [false, counter];
}
console.log("Exercise 1:");
console.log(sumCheck(array1, k1));
console.log(sumCheck(array1, k2));
console.log(sumCheck(array1, k3));
console.log("");

// Exercise 3, unconvincing
// let counter3 = 0;
// function sumCheckv2(arr, k, i = 0) {
//   let arrLength = arr.length;
//   let result = false;
//   if (i > arrLength - 2) {
//     return [result, counter3];
//   }
//   for (let j = i + 1; j < arrLength; j++) {
//     counter3++;
//     if (arr[i] + arr[j] == k) {
//       result = true;  
//       return [result, counter3];
//     }
//   }
//   return sumCheckv2(arr, k, i + 1);
// }
// console.log("Exercise 3:");
// console.log(sumCheckv2(array1, k1));
// counter3 = 0;
// console.log(sumCheckv2(array1, k2));
// console.log("");

// Exercise 3
function sumCheckv2(arr, nb) {
  counter = 0;
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    // NB Declaring an array and slicing/splicing it will return the removed element(s) whereas it won't if you do it separately.
    let workingArr = [...arr];
    workingArr.splice(i, 1);
    counter++;
    let checkDiff = nb - arr[i];
    if (workingArr.includes(checkDiff)) {
      return [true, counter];
    }
  }
  return [false, counter];
}
console.log("Exercise 3:");
console.log(sumCheckv2(array1, k1));
console.log(sumCheckv2(array1, k2));
console.log(sumCheckv2(array1, k3));
console.log("");

// Exercise 5
function sumCheckv3(arr,k) {
  let tempArr = [];
  let counter = 0;
  for (let i = 0; i < arr.length ; i++) {
    counter++;
    let diff = k - arr[i];
      if (tempArr[diff] !== undefined) {
        return [true, counter];
      } else {
        tempArr[arr[i]] = "there";
      }
  }
  return [false, counter];
}
console.log("Exercise 3:");
console.log(sumCheckv3(array1, k1));
console.log(sumCheckv3(array1, k2));
console.log(sumCheckv3(array1, k3));
console.log("");

// SUBJECT 2
// DATA USED FOR 2, 4, 6
array2 = [3, 7, 8, 3, 6, 1];      // 3
array3 = [1, 4, 5, 8];            // 1
array4 = [10, 15, 4, 3, 7, 6, 2]; // 4

// Exercise 2
function viewCheck(arr) {
  let counter = 0;
  let arrLength = arr.length;
  let viewtCtr = 0;
  for (let i = 0; i < arrLength; i++) {
    let tmpView = true;
    for (j = i + 1; j < arrLength; j++) {
      counter++;
      if (arr[i] <= arr[j]) {
        tmpView = false;
      }
    }
  if (tmpView) viewtCtr++;
  }
  return [`result: ${viewtCtr}, steps: ${counter}`];
}
console.log("Exercise 2:")
console.log(viewCheck(array2));
console.log(viewCheck(array3));
console.log(viewCheck(array4));
console.log("");

// Exercise 4
const viewCheckv2 = (arr) => {
  let workingArr = [...arr];
  let counter = 0;
  let result = 0;
  let workingArrLength = workingArr.length;
  if (workingArrLength > 0 && workingArrLength < 2){
    view = 1;
  }
  for (let i = 0; i < workingArrLength - 1; i++){
    counter++;
    // New array from i + 1 to the end
    let arrNew = arr.slice(i + 1);
    if(Math.max(...arrNew) < arr[i]){
      result += 1;
    }
}
  // + 1 because the last building automatically has a view.
  return [`result: ${result + 1}, steps: ${counter}`];  
}
console.log("Exercise 4:")
console.log(viewCheckv2(array2));
console.log(viewCheckv2(array3));
console.log(viewCheckv2(array4));
console.log("");

// Exercise 6
const viewCheckv3 = (arr) => {
  let workingArr = [...arr];
  let workingArrLength = workingArr.length;
  let counter = 0;
  let result = 1;
  let currentMax = workingArr[workingArrLength - 1];
  for (let i = workingArrLength - 2; i > 0; i--) {
    counter++;
    if (workingArr[i] > currentMax) {
      currentMax = workingArr[i];
      result++;
    }
  }
  return [`result: ${result}, steps: ${counter}`];  
}
console.log("Exercise 6:")
console.log(viewCheckv3(array2));
console.log(viewCheckv3(array3));
console.log(viewCheckv3(array4));
console.log("");
