
//Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

var message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// prints: 'steal pound cake'



function reverseWords(arr) {
  // this 2 step bit doesn't work because the original array becomes
  // immutable after it becomes the string
  // ie the whole point of this exercise
  //arr = arr.join('');
  //arr = arr.split(' ');

  var indexes = [];
  var temp = [];

  // get the indexes of the spaces
  arr.forEach((item, index) => {
    if (item === ' ') {
      indexes.push(index);
    }
  });

  // console.log(indexes);
  // while (indexes.length > 1) {
  //   temp = arr.slice(0, indexes.shift());
  //   messages

  // }

  for (var i = 0; i < indexes.length / 2; i++) {
    temp = arr.slice(0, indexes[i]);
    arr[i] = arr.slice(indexes[indexes.length - i], i)
  }

  // var temp;
  // for (var i = 0; i < arr.length / 2; i ++) {
  //   temp = arr[i];
  //   // if block is for the odd numbered strings
  //   // if (arr[arr.length - i - 1]) {
  //     arr[i] = arr[arr.length - i - 1];
  //     arr[arr.length - i - 1] = temp;
  //   // }
  // }
  // console.log(arr)
  // return arr;
}