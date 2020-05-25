'use strict'

const geekGirls = [

    {
        name: 'María',
        age: 29,
        job: 'diseñadora',
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química',
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista',
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz',
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora',
    },
]
geekGirls[5] = {name: 'Laura', age: 15, job: 'estudiante' },
geekGirls[6] = {name: 'Estefanía', age: 40, job: 'diseñadora' }

let girls = countGeekGirls(geekGirls);

function countGeekGirls (geekGirls) {

    var acc = 0;

    for ( let i = 0; i < geekGirls.length; i++) {

        acc = acc + 1;
    }

    return acc;
}

console.log("La cantidad de Geek girls es : " + girls);

let media = averageAge(geekGirls);

function averageAge(geekGirls){
      
    var acc = 0; //variable acumuladora
    length = geekGirls.length;

    for(let  j = 0; j < geekGirls.length; j ++) {

        acc = (acc + geekGirls[j].age);// la acumuladora es igual a lo que está acumulando mas el array 
    }

    return acc / length; // devuelve lo que acumuló divido el length del array
}

 console.log("La media de la edad es : " + media);

 let youngest = theYoungest(geekGirls);

 function theYoungest(geekGirls) {
     
         let age = 100;
         let young = " ";

         for (let i = 0; i < geekGirls.length; i++ ) {
             if (geekGirls[i].age < age){
                age = geekGirls[i].age;
                young = geekGirls[i].name;
             };   
         }
         return young
     };


 console.log( "La geekGirl más joven es: " + youngest)


 const geekGirlsJob = geekGirls.filter(item =>{
     return item.job === 'diseñadora';
 }, 0)

 console.log("El número de diseñadoras es: " +geekGirlsJob.length);