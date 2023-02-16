// BUBBLE Sort PseudoCode
// start looping from the variable called i the end of thhe array towards the beginning
// start an inner loop with a variable called j from thhe beginning until i - 1
// array[j] is greater thhat arra[j+1], swap those two values return the sorted array

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}




const bubbleSortRf = (array) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

    }
  }
  return array;
}
console.log(bubbleSortRf([37, 45, 29, 8]))