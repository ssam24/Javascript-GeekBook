'use strict'

const contador = {
    valorInicial: 0,
    valorMaximo: 20,
    valorActual: 0,
    valorMinimo: 0,
    aumentarValor: +1,
    disminuirValor: -1,
}

contador.aumentar = function (){
    this.valorActual = this.valorActual + this.aumentarValor;
    return this.valorActual;
}
console.log(contador.aumentar());

contador.disminuir = function () {
    this.valorActual = this.valorActual + this.disminuirValor;
    return this.valorActual;
}
console.log(contador.disminuir());

contador.reestablecer = function () {
    this.valorActual = 0;
    return this.valorActual;
}
console.log(contador.reestablecer());

contador.maximo = function () {
    this.valorMaximo = 20;
    return this.valorMaximo;
}
console.log(contador.maximo());
