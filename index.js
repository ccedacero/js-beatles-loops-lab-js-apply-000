// add solution here
// 1. Create a function `theBeatlesPlay`, which accepts two parameters--an array of
//   musicians and an array of instruments. 

//     * Create a variable with an empty array.
//     * Use a `for loop`, which iterates over the array of musicians. Be careful
//       about what value you set your `counter` variable to store. (Hint: Think
//       about what the first index of an array is). 
//     * The first time through the loop, it should create a string using the _first_
//       index of the musicians array **and** the first index of the instruments
//       array: `"John Lennon plays guitar"`. 
//     * Add this string to the empty array you created. The loop should make the
//       same sentence for every member of the musicians array. 
//     * The function should return the array of new strings containing what
//       instruments each musician plays.

function theBeatlesPlay(arrMusic,arrInstr) {
  
  let theyPlay = [];
  
  for (let i = 0 ; i < arrMusic.length; i++) {
    let str = arrMusic[i] + ' plays ' + arrInstr[i];
    theyPlay.push(str);
  } return theyPlay;
}


function johnLennonFacts(arr) {
  let facts = [];
  let i = 0;
  while(i <=arr.length) {
     let str = arr[i] + '!!!';
     facts.push(str);
     i++;
  }
  return facts;
}
  
// Create a function `iLoveTheBeatles` which accepts a number as a parameter. 
function iLoveTheBeatles(num) {
    let phrase = [];
    let str = 'I love the Beatles!';
    i = 0;
    // console.log(str.length)
    do {
    phrase.push(str[i]);
    num++;
    i++;
    }
    while (num < 15)
    return phrase;
  }
