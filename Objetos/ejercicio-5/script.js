function message () {

    const name = document.getElementById('myName').required;
   
    console.dir(name);
}

// value -> Muestra el valor ingresado
// nodeName -> Muestra el tipo de etiqueta por la que ingresó el dato
// required -> Muestra si el campo es requerido o no (true/false)