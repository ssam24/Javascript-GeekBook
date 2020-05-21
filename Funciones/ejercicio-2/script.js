a = parseInt(prompt("Ingrese un número: "));
b = parseInt(prompt("Ingrese otro número: "));
c = parseInt(prompt("Ingrese otro número: "));
d = parseInt(prompt("Ingrese otro número: "));

function media (a, b, c, d) {

    const result = (a + b + c + d) / 4;
    return result;
}

const mediaResult = media(a, b, c, d);

console.log ('El resultado es: ' +  mediaResult);