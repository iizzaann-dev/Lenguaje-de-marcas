document.getElementById("Titulo").innerHTML = "¡Hola desde JS!";
console.log("Esto es un error");

let nombre = "Carlos";
let edad = "23";
console.log("Usuario: ", nombre, "Edad: ", edad);
alert("Código terminado");

let num1 = 20;
let num2 = 21;

let sumaNums = num1 + num2;
console.log("Numero 1:", num1, "Numero 2:", num2, "La suma de estos dos numeros es:", sumaNums);


function sumar(a, b) {
    return a + b;
}

//Usamos el boton de sumar
const boton = document.getElementById("btnSumar");

// Hacemos un evento para el click  
boton.addEventListener("click", function() {
    const a = Number(document.getElementById("n1").value); //Hacemos una constante que almacene el valor de lo ingresado mediante el formulario mediante su ID
    const b = Number(document.getElementById("n2").value); //Hacemos una constante que almacene el valor de lo ingresado mediante el formulario mediante su ID
    console.log("El resultado es: " + sumar(a, b));        //Lo enseñamos en la consola
    alert("El resultado es: " + sumar(a, b)); //Usamos el alert para que al usuario le salga una alarta con el resultado
});

//Usamos el .value para almacenar el valor de la variable porque HTML no guarda el valor de lo introducido. Es decir, usamos esto como un puente    
