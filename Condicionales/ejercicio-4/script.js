'use strict'

let dogAge = parseInt(prompt("Ingrese la edad de su perro: "));

if (dogAge === 1) {
    console.log("Su perro tiene 15 años");
} else if (dogAge === 2) {
    dogAge = 15 + 9
    console.log ("Su perro tiene " + dogAge + " años");
} else if (dogAge > 2) {
    dogAge = (dogAge * 5) +15 + 9; 
    console.log("Su perro tiene " + dogAge + " años");
}