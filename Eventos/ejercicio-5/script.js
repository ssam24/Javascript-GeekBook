'use strict'

const teacherOne = document.querySelector('.teacher--isra');
const teacherTwo = document.querySelector('.teacher--tuerto');
const teacherThree = document.querySelector('.teacher--nasi');

teacherOne.addEventListener('click', teacher);
teacherTwo.addEventListener('click', teacher);
teacherThree.addEventListener('click', teacher);

function teacher(event) {
    const choosenTeacher = event.currentTarget;
    if (choosenTeacher.classList.contains('teacher--selected')) {
        choosenTeacher.classList.remove('teacher--selected');
        choosenTeacher.querySelector('.favorite').innerHTML = 'Añadir';
    } else {
        choosenTeacher.classList.add('teacher--selected');
        choosenTeacher.querySelector('.favorite').innerHTML = 'Quitar';
    }

}

