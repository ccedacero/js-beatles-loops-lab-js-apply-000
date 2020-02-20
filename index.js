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

// Create a function `johnLennonFacts`. 

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
  
  
//     * This function will accept one argument, an array of facts about John
//       Lennon (note that it might not be exactly the following facts):

//     ```js
//     const facts = [
//       "He was the last Beatle to learn to drive",
//       "He was never a vegetarian",
//       "He was a choir boy and boy scout",
//       "He hated the sound of his own voice"
//     ];
//     ```

//     * Use a while loop to loop over the facts array and add `"!!!"` to the end of
//     every fact.

//     * Return an array of strings with exclamation points.



do {
  i = i + 1;
  result = result + i;
} while (i < 5);


// Create a function `iLoveTheBeatles` which accepts a number as a parameter. 
  function iLoveTheBeatles(num) {
    let phrase = [];
    let str = 'I love the Beatles!';
    do {
      i = i + 1;
      phrase
      
    }
    while (num < 15)
  }

//     * The function should create a variable that stores an empty array. 
//     * Implement a do-while loop inside the function that adds `"I love the
//       Beatles!"` to the empty array. 
//     * The loop should then increment the number passed in as a parameter. The
//       condition of the loop should check to see that the parameter number is
//       less than `15`. 

It should contain a number of strings that represents the
//       difference between the input number and `15`.
//     * Return the array with the strings `"I love the Beatles!"`.