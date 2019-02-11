// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// Running the code above will return "The murderer is Miss Scarlet". The reason is because the declareMurderer function is accessing the scenario object above (is is a global variable).

// Episode 2

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Running the code above will return a TypeError, because it is trying to change the value of murderer when it is in fact a const variable and cannot be reassigned.

// Episode 3

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// firstVerdict will return "First Verdict: 'The murderer is Mrs. Peacock'", and secondVerdict will return "Second Verdict" 'The murderer is Professor Plum'" - This is because the firstVerdict can access the let murderer variable, which has been reassigned to Mrs. Peacock, however the secondVerdict cannot access this, so it refers to the initial value of murderer, which is Professor Plum, as it is a global variable.

// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// The first statement will return "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard", as the value of suspectThree has been mutated within the declare AllSuspects function. However the second will return "Suspect three is Mrs. Peacock", as it refers to the initial global value of suspectThree and cannot access the mutated variable within the declareAllSuspects function.

// Episide 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// The statement will return the value of the reassigned weapon, in this case "The weapon is the Revolver."

// Episode 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The statement will return "The murderer is Mrs. White" because when the changeMurderer function is called, nested within this function is the plotTwist function which in turn reassigns murderer to Mrs. White.

// Episode 7
//
// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The result will be "The murderer is 'Mr. Green'", this is because within the changeMurderer function, the variable 'murderer' has not been restricted to the function alone, so the value of this variable (i.e. Mr. Green) becomes static and cannot be overwritten by any subsequent functions.

// Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// The statement will return "The weapon is Candle Stick". This is because the scenario.weapon value is changed once plotTwist('Dining Room') is called, as the function then loops through the unexpectedOutcome function a second time, following the reassigned value of murderer now to "Colonel Mustard".

// Episode 9

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// The statement will return "The murderer is Professor Plum" This is because the value of the variable murderer is accessed by the global variable at the top. Although the value is then altered via the if statement, the updated variable is unable to be accessed beyond the if statement.

// Episode 10

let murderer = "Colonel Mustard"

if (murderer === "Colonel Mustard"){
  murderer = "Miss. Scarlet";
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The statement will return "The murderer is Miss. Scarlett", as the murderer variable has been permanently update via the if statement (as there is no limited scope on the variable 'murderer').
