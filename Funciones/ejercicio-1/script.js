a = parseInt(prompt("Ingrese un número: "));
b = parseInt(prompt("Ingrese otro número: "));
function multiplicacion(a, b) {
    const result = a * b;

    return result;
}

const multiResult = multiplicacion(a, b);
console.log('El resultado es: ' + multiResult);