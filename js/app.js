'use strict';
let score = 0;
let userName = prompt("What is you name?")

alert("Hello, " + userName + " Welcome to my site!")

alert(userName + ", You should answer the following questions with: yes/no or y/n")
// First question
function q1(){
    let colorRed = prompt("Do I like the color red?")

    colorRed = colorRed.toLowerCase();
    
    if (colorRed === 'yes' || colorRed ==='y') {
        alert("Correct, I like red!");
        score++;
    } else if (colorRed === 'no' || colorRed === 'n'){
        alert("Incorrect, I do like red");
    } else{
        alert("You should answer with yes/no or y/n");
    }
}
q1();


// Second question
function q2 (){
    let iceCream = prompt("Do I like Ice Cream?")

    iceCream = iceCream.toLowerCase();
    
    if (iceCream === 'yes' || iceCream === 'y'){
        alert("Correct, I like Ice Cream!");
        score++;
    } else if (iceCream === 'no' || iceCream === 'n'){
        alert("Incorrect, I do like Ice Cream!");
    } else{
        alert("You should answer with yes/no or y/n");
    }
}
q2();

// Third question

function q3(){
    let chocolate = prompt("Do I like Chocolate?")

    chocolate = chocolate.toLowerCase();
    
    if (chocolate === 'yes' || chocolate === 'y'){
        alert("Correct, I do like Chocolate!");
        score++;
    } else if (chocolate === 'no' || chocolate === 'n'){
        alert("Incorrect, I do like Chocolate!");
    } else{
        alert("You should answer with yes/no or y/n");
    }
}
q3();

// Fourth question
function q4(){
    let jordan = prompt("Do I like Jordan?")

    jordan = jordan.toLowerCase();
    
    if (jordan === 'yes' || jordan === 'y'){
        alert("Correct, I do like Jordan!");
        score++;
    } else if (jordan === 'no' || jordan === 'n'){
        alert("Incorrect, I do like Jordan!");
    } else{
        alert("You should answer with yes/no or y/n");
    }
}
q4();


// Fifth question
function q5(){
    let travel = prompt("Do I like to travel?")

    travel = travel.toLowerCase();
    
    if (travel === 'yes' || travel === 'y'){
        alert("Incorrect, I don't like travelling!");
    } else if (travel === 'no' || travel === 'n'){
        alert("Correct, I don't like to travel!");
        score++;
    } else{
        alert("You should answer with yes/no or y/n");
    }
}
q5();

// Sixth Question
function q6(){
    alert("I want to you guess a number between 1 and 10 \n You have 4 attempts to try");

    let guessNumber = null;
    
    
    for(let i=0; i<4; i++){
        guessNumber=prompt("Guess A Number..");
        guessNumber = parseInt(guessNumber);
    
        if (guessNumber >= 5 && guessNumber < 7) {
            alert('you are low but close')
        }
        else if (guessNumber <= 9 && guessNumber > 7) {
            alert('you are high but close')
        }
        else if (guessNumber < 7) {
            alert("Too Low");
        } else if (guessNumber > 7){
            alert("Too High");
        }else if(guessNumber===7){
            alert("correct, the number is 7")
            score++;
            break;
        }else{
            alert('wrong try again')
        }
        if (i===3) {
            alert('the correct answer is 7')
        }
    
    }
}
q6();


// Seventh Question
function q7(){
    let rainbow = null;

    let correctAnswers = ['red', 'blue', 'green', 'yellow', 'orange', 'indigo', 'violet'];
    
    let attempts = 6;
    
    hasAttempts:while (attempts) {
        rainbow = prompt("What is one color of a rainbow? \n You have 6 attempts.");
        attempts = attempts - 1;
        for (let i = 0; i < correctAnswers.length; i++) {

            if (rainbow === correctAnswers[i]) {
                alert("Correct here are the answers " + correctAnswers);
                break hasAttempts;
            }
        }
        alert('sorry wrong answer');
    }
    
    
    if (!attempts) {
        alert('sorry you ran out of tries , here are the answers '+ correctAnswers);
    }
}

alert(`You got ${score} out of 7.`)
q7();











// solved with for loop:

// for (let j=0; j<attempts;j++){
//     console.log(j);
//     rainbow = prompt("What is one color of a rainbow? \n You have 6 attempts.");
//     for (let i = 0; i < correctAnswers.length; i++) {
//         // console.log(correctAnswers[i]);  
//         // correctAnswers[0] =>red;
//         // correctAnswers[1] => blue;
//         if(rainbow === correctAnswers[i] ){
//             alert("Correct here are the answers "+ correctAnswers);
//             j=6;
//             // break;
//         }
//     }
//     // j=5
//     if (j==5) {
//         alert('sorry no more tries '+correctAnswers);
//     }else if(j<6){
//         alert('this is wrong');
//     }
// }


















// for (let i = 0; i < 5; i++) {
//     // i=0
//     console.log('inside first loop',i);
//     for (let j = 0; j <10; j++) {
//         console.log('inside second loop',j);

//     }
// }









// alert(`Thank you for playing my game ${userName}`);