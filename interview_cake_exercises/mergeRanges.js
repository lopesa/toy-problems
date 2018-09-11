// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// For example, given:
console.log(mergeRanges([
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 }
  ]));

// your function would return:

//   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

// Do not assume the meetings are in order. The meeting times are coming from multiple teams.


// CASES TO CONSIDER
// console.log(mergeRanges([
//     { startTime: 1,  endTime: 4 },
//     { startTime: 5,  endTime: 8 }
//   ]));

// console.log(mergeRanges([{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]))



function mergeRanges(ranges) {
  var holder = [];
  var builder = [];
  var returnVal = [];

  // holder with existing start or end time gets wiped
  ranges.forEach(function(range) {
    holder[range.startTime] = holder[range.startTime]  === undefined ? 'start' : undefined;
    holder[range.endTime] = holder[range.endTime]  === undefined ? 'end' : undefined;
  });

  holder.forEach(function(marker, index) {
    if (marker === undefined) return;
    if (marker === 'start') {
      builder.push({'startTime': index});
    }
    if (marker === 'end') {
      if (builder.length === 1) {
        returnVal.push({
          startTime: builder[0].startTime,
          endTime: index
        })
      }
      builder.pop();
    }
  });

  // catches multiple endings at the same last end time
  if (builder.length) {
    returnVal.push({
      startTime: builder[0].startTime,
      endTime: holder.length - 1
    })
  }

  return returnVal;
}