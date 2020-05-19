let cenaNavidad = 128;
let totalPersonas = 9;
let totalIgualitario = cenaNavidad / totalPersonas;

console.log(
    'El total a pagar por cada uno es:' + 
    totalIgualitario);

//pero Ana debe pagar más que el resto

let totalAna = 2 + totalIgualitario;
console.log('Ana debe pagar:' + totalAna);

//el nuevo total para los demás sería 

let totalNuevo = (cenaNavidad - totalAna) / 8;
console.log('El valor a pagar por las demás personas es:'
 + totalNuevo); 
