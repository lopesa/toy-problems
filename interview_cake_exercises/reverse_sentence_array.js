function reverseArray (arrayOfWords) {
  let lisf = [0, 0] // leftIndexStartFinish
  let risf = [arrayOfWords.length, arrayOfWords.length] // rightIndexStartFinish
  // let temp = []

  // loop
  let nextLeftSpace = arrayOfWords.indexOf(' ', lisf[1])
  lisf[0] = lisf[1];
  lisf[1] = nextLeftSpace;
  // check if nextLeftSpace is >= risf[0]
  temp = (lisf[0], lisf[1]));
  arrayOfWords.splice(lisf[0], lisf[1], )
}