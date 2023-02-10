
// return an object with the count of list of characters
const charCount = (str) => {
  let result = {}
  for (let i = 0; i < str.length; i++) {
    let characters = str[i].toLowerCase()
    if (/[a-z0-9]/.test(characters)) {
      if (result[characters]) {
        result[characters]++
      } else {
        result[characters] = 1
      }
    }

  }
  return result
}
// REFACTORING QUESTIONS
// Can you check the result?
// can you derive the result differently?
// can you understand it at a glance?
// can you use the result or method for some other problem?
// can you improve the performance of your solution?
// can you think of other ways to refactor?
// how have other people solved this problem?

const charCountRefactored = (str) => {
  let result = {}
  for (let characters of str) {
    characters = characters.toLowerCase()
    if (/[a-z0-9]/.test(characters)) {
      result[characters] = ++result[characters] || 1
    }
  }
  return result
}

// TOP 5 STEPS
// 1 understand the problem
// Explore Concrete examples
// Break it down
// Solve Simplify
// Look Back and Refactor


// write a function called same which accepts two arrays
const same = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false
  };
  for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2)
    console.log(correctIndex)
    if (correctIndex === -1) {
      return false;
    }
    array2.splice(correctIndex, 1)
  }
  return true
}


const sameRefactored = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let i = 0; i < array1.length; i++) {
    if (frequencyCounter1[array1[i]]) {
      frequencyCounter1[array1[i]]++
    } else {
      frequencyCounter1[array1[i]] = 1
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (frequencyCounter2[array2[i]]) {
      frequencyCounter2[array2[i]]++
    } else {
      frequencyCounter2[array2[i]] = 1
    }
  }
  // for (let val of array1) {
  //   frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  // }
  // for (let val of array2) {
  //   frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  // }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter1[key ** 2] !== frequencyCounter2[key]) {
      return false
    }
    return true
  }
}

// console.log(sameRefactored([1, 2, 4], [1, 4, 8]))


//Anagrams 
//Given 2 strings write a function to determine if the second string is an anagram

const anagram = (string1, string2) => {

  let stringOneContainer = {}
  let stringTwoContainer = {}

  if (string1.length !== string2.length) {
    return false
  }

  for (let i = 0; i < string1.length; i++) {
    if (stringOneContainer[string1[i]]) {
      stringOneContainer[string1[i]]++

    } else {
      stringOneContainer[string1[i]] = 1
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (stringTwoContainer[string2[i]]) {
      stringTwoContainer[string2[i]]++

    } else {
      stringTwoContainer[string2[i]] = 1
    }
  }

  const keys1 = Object.keys(stringOneContainer);
  const keys2 = Object.keys(stringTwoContainer);

  for (let key of keys1) {
    if (stringOneContainer[key] !== stringTwoContainer[key]) {
      return false;
    }
  }
  return true;
}
console.log(anagram('test', 'tesaat'))
// write a function called sumZero which accepts a sorted array of integers
// function returns first pair that sum is zero
const sumZero = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}

const sumZeroMultiplePointers = (array) => {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    let sum = array[left] + array[right]
    if (sum === 0) {
      return [array[left], array[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}
console.log(sumZeroMultiplePointers([-1, 1, 2, 3,]))


// countUniqueValues implement a function which accepts a 
//sorted array returns the count of unique values 

const countUniqueValues = (array) => {

  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] != array[j]) {
      i++
      array[i] = array[j]
    }
  }
  return i + 1


}
// console.log(countUniqueValues([-1, 1, 2, 3,]))



// get max number of values that equal to the given target 
const maxSubarraySums = (arr, num) => {

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySums([2, 5, 6, 1, 21, 2, 1, 3], 2))
// O(N) Time Complexity 
const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    return null
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 5, 6, 1, 21, 2, 1, 3], 2))


//Binary Search 
const BinarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== element) {
    if (elem < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
}

// Naive String Search
// loop over the longer string
// loop over the shorter string
// if characters do match keep going
// if you complete the inner loop and find a match, increment the count of matches
// return the count

const naiveSearch = (long, short) => {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count
}
