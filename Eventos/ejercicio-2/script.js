function welcomeMessage () {
    const myName = document.getElementById('myname').value;
    document.getElementById('message').innerHTML = "Hola " + myName;
    console.log("Hola " + myName);
}

