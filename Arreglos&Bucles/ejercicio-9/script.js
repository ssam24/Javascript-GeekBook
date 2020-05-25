let arbolNavidad = 0;

arbolNavidad = parseInt(prompt('De qué tamaño quieres tu arbolito?:'))

let acc = '';

for (let i = 0; i < arbolNavidad; i++){
    acc = acc + '▲';

    console.log('' + acc); 
}