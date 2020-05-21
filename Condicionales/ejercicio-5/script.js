'use strict'

const state = document.querySelector('.sucess');
const content = '<h1>CORRECTO</h1> <p>Los datos son correctos</p>';

state.innerHTML = content;

const state= document.querySelector('.warning');
const content = '<h1>AVISO</h1> <p>Tenga cuidado</p>';

state.innerHTML = content;


const state= document.querySelector('.error');
const content = '<h1>Error</h1> <p>Ha surgido un error</p>';

state.innerHTML = content;
