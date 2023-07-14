"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment

// const ageJohn = 20;
// const ageMark = 20;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe

// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

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
// if (isJohnOlder) 
// {
//     console.log("John ist älter!");
// }
// else if (isJohnEqual) 
// {
//     console.log("beide gleich alt!");
// }
// else 
// {
//     console.log("John ist jünger!");
// }

/************ Ternäre (ternary) Schreibweise ************/ 
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = prompt("Was macht Jane?");

// job = "driver";         // .. fährt TAXI! / UBER
// job = "diver";          // .. taucht im Rhein!
// job = "artist";         // .. malt ein Bild!
// job = "pilot";          // .. macht etwas anderes! --> default
// job = "teacher";        // .. unterrichtet!
// job = "instructor";     // .. unterrichtet!

switch (job) {
    case "driver":
        console.log("Jane fährt TAXI! / UBER!");
        break;
    case "diver":
        console.log("Janetaucht im Rhein!");
        break;
        case "artist":
            console.log("Jane malt ein Bild!!");
            break;
        case "stripper":
            console.log("Jane ist Anders!");
            break;
    default:
        console.log("Ab zum Arbeitsamt!");
        break;
}