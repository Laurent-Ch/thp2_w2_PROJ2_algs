const fs = require('fs');

// Get data from an external file
const fileName = process.argv[2];
function readFileData() {
  try {
      const data = fs.readFileSync(fileName, 'utf8');
      return data;
  } catch (error) {
      console.error("cannot read file");
  }
}
let originalData = readFileData().split(" ").map(n => parseInt(n, 10));
let data = [...originalData];

// Easy access to the result
class Result {
  
  constructor(arr) {
    this.ctr = 0;
    this.mergedArr = this.mergeSort(arr); 
  }

  // Merge sort (recursive)
  mergeSort(arr) {
    const half = arr.length / 2;
    if (arr.length <= 1) {
      return arr;
    }
    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
      this.ctr++;
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...right];
  }
}

let mergeResult = new Result(data);
console.log(`Tri fusion : ${mergeResult.ctr} comparaisons ; ${mergeResult.mergedArr}`);


