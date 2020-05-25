'use strict'
let arbolNavidad = 0;
let cont = 1;
let str= ' ';
let triangulo = '▲';
let estrella = '★';
let tronco = '||'; 

arbolNavidad = prompt('De qué altura quieres tu arbol?');

console.log(str.repeat(arbolNavidad) + estrella);

for (let i = arbolNavidad; i >= 0; i--){

    console.log(str.repeat(i) + triangulo.repeat(cont));
    cont+=2;
}
console.log(str.repeat(arbolNavidad) + tronco);
