function validarNumero() {
    const numero = document.getElementById("codigo");
    const mensaje_codigo = document.getElementById("mensaje_codigo");
    const valor = parseInt(numero.value);

    if (isNaN(valor) || valor < 1 || valor > 500) {
        mensaje_codigo.textContent = "Por favor, ingresa un número válido entre 1 y 500.";
    } else {
        mensaje_codigo.textContent = "El número ingresado es válido";
    }
}

function validarNombre(){
    const nombre = document.getElementById("nombre");
    const mensaje_nombre = document.getElementById("mensaje_nombre");
    const valor = nombre.value;

    if(valor.length >= 6 && valor.includes(" ")){
        mensaje_nombre.textContent = "El nombre ingresado es válido.";
    } else {
        mensaje_nombre.textContent = "El nombre ingresado no es válido. Debe contener al menos 6 letras y un espacio.";
    }
}

function validarTelefono(){
    const telefono = document.getElementById("telefono");
    const mensaje_telefono = document.getElementById("mensaje_telefono");
    const valor = telefono.value;

    if(valor.length != 9 || isNaN(parseInt(valor))){
        mensaje_telefono.textContent = "El número de teléfono ingresado no es válido. Debe contener exactamente 9 dígitos.";  
    } else {
        mensaje_telefono.textContent = "El número de teléfono ingresado es válido.";
    }
}

function validarEmail(){
    const email = document.getElementById("email");
    const mensaje_email = document.getElementById("mensaje_email");
    const valor = email.value;

    if(valor.includes("@") && valor.includes(".") && valor.length >= 8){
        mensaje_email.textContent = "El email es válido";
    } else {
        mensaje_email.textContent = "El email es inválido";
    }
}

function validarDNI() {
    const dni = document.getElementById("dni");
    const mensaje_dni = document.getElementById("mensaje_dni");
    const valor = dni.value.trim();

    const regex = /^[0-9]{8}[a-zA-Z]$/;

    if (regex.test(valor)) {
        mensaje_dni.textContent = "DNI válido en formato";
    } else {
        mensaje_dni.textContent = "DNI inválido. Debe tener 8 números y una letra";
    }
}

function validarTodo() {
    validarNumero();
    validarNombre();
    validarTelefono();
    validarEmail();
    validarDNI();
}

function borrarTodo() {
    const ids = ["codigo", "nombre", "telefono", "email", "dni"];
    const mensajes = ["mensaje_codigo", "mensaje_nombre", "mensaje_telefono", "mensaje_email", "mensaje_dni"];

    ids.forEach(id => {
        document.getElementById(id).value = "";
    });

    mensajes.forEach(id => {
        document.getElementById(id).textContent = "";
    });
}
