'use strict'

let arbolitoNavidad = 0;
let cont = 1;
let triangulito ='▲';
let estrella = '★'
let tronco = '|';

arbolitoNavidad = prompt('De qué altura quires tu arbolito?');

console.log(arbolitoNavidad + estrella);

var acc = 0; 

for (let i = 0; i < arbolitoNavidad; i++){
    acc = acc + triangulito;
    console.log (acc);

}
console.log(arbolitoNavidad + tronco);
