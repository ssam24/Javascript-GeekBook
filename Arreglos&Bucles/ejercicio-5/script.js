const numbers = [1,2,3,4,5];

let acc = 0;

for(let i = 0; i<numbers.length; i++){
    acc = (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]);
    acc = acc / 5; 
    
}
// console.log(acc); 

media = average(numbers);

function average(numbers){
    var acc = 0;

    for(let i =0; i<numbers.length; i++){
        acc = acc + numbers[i];
    }
    return acc / numbers.length;
}
console.log('la media del número es: ' + media);
