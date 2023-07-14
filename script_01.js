"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment

const ageJohn = 20;
const ageMark = 18;

// Deklaration
let isJohnOlder, isJohnEqual;

isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe

console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(isJohnOlder)
// {
//     console.log("John ist älter!"); 
// }

/************ IF - ELSE ************/
// mit Alternative
// entweder ja oder nein

// if (true)
// if (false)  
if (isJohnOlder) 
{
    console.log("John ist älter!");
}
else 
{
    console.log("John ist jünger!");
}