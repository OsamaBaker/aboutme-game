'use strict';

// let userName = prompt("What is you name?")

// alert("Hello, " + userName + " Welcome to my site!")

// alert(userName + ", You should answer the following questions with: yes/no or y/n")

// // First question
// let colorRed = prompt("Do I like the color red?")

// colorRed = colorRed.toLowerCase();

// if (colorRed === 'yes' || colorRed ==='y') {
//     // console.log("You like red!");
//     alert("Correct, I like red!");
// } else if (colorRed === 'no' || colorRed === 'n'){
//     // console.log("You don't like red");
//     alert("Incorrect, I do like red");
// } else{
//     // console.log("You should answer with yes/no or y/n");
//     alert("You should answer with yes/no or y/n");
// }

// // Second question
// let iceCream = prompt("Do I like Ice Cream?")

// iceCream = iceCream.toLowerCase();

// if (iceCream === 'yes' || iceCream === 'y'){
//     // console.log("You like Ice Cream!");
//     alert("Correct, I like Ice Cream!");
// } else if (iceCream === 'no' || iceCream === 'n'){
//     // console.log("You don't like Ice Cream!");
//     alert("Incorrect, I do like Ice Cream!");
// } else{
//     // console.log("You should answer with yes/no or y/n");
//     alert("You should answer with yes/no or y/n");
// }

// // Third question
// let chocolate = prompt("Do I like Chocolate?")

// chocolate = chocolate.toLowerCase();

// if (chocolate === 'yes' || chocolate === 'y'){
//     // console.log("You like Chocolate!");
//     alert("Correct, I do like Chocolate!");
// } else if (chocolate === 'no' || chocolate === 'n'){
//     // console.log("You don't like Chocolate!");
//     alert("Incorrect, I do like Chocolate!");
// } else{
//     // console.log("You should answer with yes/no or y/n");
//     alert("You should answer with yes/no or y/n");
// }

// // Fourth question
// let jordan = prompt("Do I like Jordan?")

// jordan = jordan.toLowerCase();

// if (jordan === 'yes' || jordan === 'y'){
//     // console.log("You like Jordan!");
//     alert("Correct, I do like Jordan!");
// } else if (jordan === 'no' || jordan === 'n'){
//     // console.log("You don't like Jordan!");
//     alert("Incorrect, I do like Jordan!");
// } else{
//     // console.log("You should answer with yes/no or y/n");
//     alert("You should answer with yes/no or y/n");
// }

// // Fifth question
// let travel = prompt("Do I like to travel?")

// travel = travel.toLowerCase();

// if (travel === 'yes' || travel === 'y'){
//     // console.log("You like to travel!");
//     alert("Incorrect, I don't like travelling!");
// } else if (travel === 'no' || travel === 'n'){
//     // console.log("You don't like to travel!");
//     alert("Correct, I don't like to travel!");
// } else{
//     // console.log("You should answer with yes/no or y/n");
//     alert("You should answer with yes/no or y/n");
// }

// // Sixth Question
// alert("I want to you guess a number between 1 and 10 \n You have 4 attempts to try");

// let guessNumber = prompt("Guess A Number..");
// guessNumber = parseInt(guessNumber);

// for(let i=0; i<4; i++){
//     if (guessNumber < 7) {
//         guessNumber = prompt("Too Low");
//     } else if (guessNumber > 7){
//         guessNumber = prompt("Too High");
//     }else if(guessNumber===7){
//         alert("correct, the number is 7")
//         break;
//     } else{
//         alert("The number is 7");
// }
// }


// Seventh Question
let rainbow = prompt("What is one color of a rainbow? \n You have 6 attempts.");

let correctAnswer = ['red', 'blue', 'green', 'yellow', 'orange', 'indigo', 'violet'];

let attempts = 6;

for (let i = 0; i < attempts; i++) {
    if(rainbow === correctAnswer[i]){
        alert("Correct");
        break;
    } 
    
    
}










// alert(`Thank you for playing my game ${userName}`);