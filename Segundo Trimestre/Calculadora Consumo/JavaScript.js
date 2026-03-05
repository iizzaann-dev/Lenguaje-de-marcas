function calculoKiloVatiosHora () {
    let nombre = document.getElementById("nombre_dispositivo").value;
    let vatios = parseInt(document.getElementById("vatios").value);
    let horas = parseFloat(document.getElementById("horas").value);
    let precio_kWh = parseFloat(document.getElementById("precio_kWh").value);
    let dias = parseFloat(document.getElementById("dias").value);

    if (isNaN(vatios) || isNaN(horas) || isNaN(precio_kWh) || isNaN(dias) || nombre == "") {
        total.textContent = "Total: ";
        return;
    }

    if (horas < 0 || horas > 24){
        total.textContent = "Total: ";
        return;
    }

    if (dias < 1 || dias > 31){
        total.textContent = "Total: ";
        return;
    }

    if (vatios < 0 || precio_kWh < 0){
        total.textContent = "Total: ";
        return;
    }

    let calculoVatios = vatios / 1000;
    let calculoHoras = calculoVatios * horas;
    let calculoDias = calculoHoras * dias;
    let costoTotal = calculoDias * precio_kWh;

    total.textContent = "Total: " + costoTotal.toFixed(2) + "€";

    console.log(nombre + ": " + costoTotal.toFixed(2) + "€")
    return costoTotal;
}



let automatico = document.querySelectorAll("input");

automatico.forEach (input => {
    input.addEventListener("input", calculoKiloVatiosHora);
})

const palabra = document.getElementById('palabra');
const pasarRaton = document.getElementById('pasarRaton');

palabra.onmouseenter = () => {
    pasarRaton.style.display = 'block'; 
    const r = palabra.getBoundingClientRect();
    pasarRaton.style.left = r.right + window.scrollX + 'px';
    pasarRaton.style.top  = r.top + window.scrollY + 'px';
}

palabra.onmouseleave = () => pasarRaton.style.display = 'none';
