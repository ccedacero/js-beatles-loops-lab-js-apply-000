
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
