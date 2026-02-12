
function par_impar(num1){

    if(num1 %2 == 0){
        console.log("Es par");
        return "Es par";
    }
    else {
        console.log("No es par")
        return "No es par";
    }
}

function procesarDato (){
    let input = document.getElementById("numero").value;
    let numero = parseInt(input);
    let mensaje = par_impar(numero);

    document.getElementById("resultado").innerText = mensaje; 
}

function areaTriangulo(){
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);

    let cuenta = (base * altura) / 2;

    document.getElementById("resultadoArea").innerText = "El área del triángulo es: " + cuenta;
    console.log("El área del triángulo es: " + cuenta);
}