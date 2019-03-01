/*

  BubbleSortV2

  Bubble sort is considered the most basic sorting algorithm in Computer Science. 
    It works by starting at the first element of an array and comparing it to the second element:

    If the first element is greater than the second element, it swaps the two.
    It then compares the second to the third, and the third to the fourth, and so on.
    In this way, the largest values ‘bubble’ to the end of the array.
    Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
    Implement a function that takes an array and sorts it using this technique.

    NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

  Examples
    Input	
      input:[ 20, -10, -10, 2, 4, 299 ]	
    Output
      [ -10, -10, 2, 4, 20, 299 ]
*/

//this code is simpler but has wayyy more recursive calls
function bubbleSort(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      let temp = array[i];
      array[i] = array[i - 1];
      array[i - 1] = temp;
      return bubbleSort(array);
    }
  }
  return array;
}

//this has a lot less recursive calls
function bubbleSort(array) {
  let arrayIsSorted = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i-1] > array[i]) {
      let temp = array[i];
      array[i] = array[i-1];
      array[i - 1] = temp;
      arrayIsSorted = false;
    }
  }
  return arrayIsSorted ? array : bubbleSort(array);
}