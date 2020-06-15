// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 is an example of a closure, the function counter it access count from outsaide the function's scope; counter2 is an example of a function that doesnt access any data from outside the function's scope.
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses closure because it accesses count from outer function's scope.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * I used counter1 example most of the time (using closure in for loop for example) unless I dont want the data to be access outside the function (for privacy) in that time I use counter2 example.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(num){
  let randomNumber = [];
  for(let i = 0; i < num; i++){
   randomNumber.push(Math.floor(Math.random()*3));
  }

   return randomNumber;

}

console.log(inning(10)); //this is a test.




/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore (inning, num) {
  let score = {};
  let homeScore = inning(num);
  let awayScore =  inning(num);

   const reducer = (accumulator, currentValue) => accumulator + currentValue;

   score.Home = homeScore.reduce(reducer);
   score.Away = awayScore.reduce(reducer);

   return score;
}


 console.log(finalScore(inning, 9)); //this is a test.





/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, num) {
  let score = {};
  let homeScore = inning(num);
  let awayScore =  inning(num);
  let sumHome = 0;
  let sumAway = 0;
  for (let i = 0; i < homeScore.length; i++){
    if(i === 0){
      console.log(`1st inning: ${sumHome += homeScore[i]} - ${sumAway += awayScore[i]}`);
    } else if (i === 1) {
      console.log(`2nd inning: ${sumHome += homeScore[i]} - ${sumAway += awayScore[i]}`);
    } else if (i === 2) {
      console.log(`3rd inning: ${sumHome += homeScore[i]} - ${sumAway += awayScore[i]}`);
    } else  {
      console.log(`${i+1}th inning: ${sumHome += homeScore[i]} - ${sumAway += awayScore[i]}`);
    }
  }

   const reducer = (accumulator, currentValue) => accumulator + currentValue;

   score.Home = homeScore.reduce(reducer);
   score.Away = awayScore.reduce(reducer);
   
   let message = `Final Score: ${score.Home} - ${score.Away}`
   
   return message;
}


console.log(scoreboard(inning, 9)); //this is a test.





