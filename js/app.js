'use strict';

let userName = prompt("What is you name?")

alert("Hello, " + userName + " Welcome to my site!")

alert(userName + ", You should answer the following questions with: yes/no or y/n")

// First question
let colorRed = prompt("Do you like the color red?")

colorRed = colorRed.toLowerCase();

if (colorRed === 'yes' || colorRed ==='y') {
    // console.log("You like red!");
    alert("You like red!");
} else if (colorRed === 'no' || colorRed === 'n'){
    // console.log("You don't like red");
    alert("You don't like red");
} else{
    // console.log("You should answer with yes/no or y/n");
    alert("You should answer with yes/no or y/n");
}

// Second question
let iceCream = prompt("Do you like Ice Cream?")

iceCream = iceCream.toLowerCase();

if (iceCream === 'yes' || iceCream === 'y'){
    // console.log("You like Ice Cream!");
    alert("You like Ice Cream!");
} else if (iceCream === 'no' || iceCream === 'n'){
    // console.log("You don't like Ice Cream!");
    alert("You don't like Ice Cream!");
} else{
    // console.log("You should answer with yes/no or y/n");
    alert("You should answer with yes/no or y/n");
}

// Third question
let chocolate = prompt("Do you like Chocolate?")

chocolate = chocolate.toLowerCase();

if (chocolate === 'yes' || chocolate === 'y'){
    // console.log("You like Chocolate!");
    alert("You like Chocolate!");
} else if (chocolate === 'no' || chocolate === 'n'){
    // console.log("You don't like Chocolate!");
    alert("You don't like Chocolate!");
} else{
    // console.log("You should answer with yes/no or y/n");
    alert("You should answer with yes/no or y/n");
}

// Fourth question
let jordan = prompt("Do you like Jordan?")

jordan = jordan.toLowerCase();

if (jordan === 'yes' || jordan === 'y'){
    // console.log("You like Jordan!");
    alert("You like Jordan!");
} else if (jordan === 'no' || jordan === 'n'){
    // console.log("You don't like Jordan!");
    alert("You don't like Jordan!");
} else{
    // console.log("You should answer with yes/no or y/n");
    alert("You should answer with yes/no or y/n");
}

// Fifth question
let travel = prompt("Do you like to travel?")

travel = travel.toLowerCase();

if (travel === 'yes' || travel === 'y'){
    // console.log("You like to travel!");
    alert("You like to travel!");
} else if (travel === 'no' || travel === 'n'){
    // console.log("You don't like to travel!");
    alert("You don't like to travel!");
} else{
    // console.log("You should answer with yes/no or y/n");
    alert("You should answer with yes/no or y/n");
}
