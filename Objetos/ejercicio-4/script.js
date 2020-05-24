const eventoboton = document.querySelector('.button');

const imprimirevento = (evento) => {
    console.log(evento);
}

eventoboton.addEventListener('click', imprimirevento);