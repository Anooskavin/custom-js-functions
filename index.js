
function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}


function customFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}


function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }

  return accumulator;
}


function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}


const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = customMap(numbers, (num) => num * num);
console.log(squaredNumbers);


const evenNumbers = customFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);


const sum = customReduce(numbers, (acc, num) => acc + num, 0);
console.log(sum);


customForEach(numbers, (num) => console.log(num));
