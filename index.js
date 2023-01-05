
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
  for (let val of array1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of array2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

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