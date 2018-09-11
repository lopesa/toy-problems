
// console.log(reverseString('somestring'));
console.log(reverseArray(['s', 't', 'r', 'i', 'n', 'g']));

// function reverseString(string) {
//   var arr = string.split('');
//   var temp;
//   for (var i = 0; i < arr.length / 2; i ++) {
//     temp = arr[i];
//     // if block is for the odd numbered strings
//     if (arr[arr.length - i - 1]) {
//       arr[i] = arr[arr.length - i - 1];
//       arr[arr.length - i - 1] = temp;
//     }
//   }
//   return arr.join('');
// }

function reverseArray(array) {
  let temp;
  let i = 0;
  let arrayIndexLength = array.length - 1;
  while (i <= Math.floor(arrayIndexLength / 2))  {
    temp = array[i];
    array[i] = array[arrayIndexLength - i];
    array[arrayIndexLength - i] = temp;
    i++;
  }
  return array
}

