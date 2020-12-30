let form = document.querySelector("form");
var monto = "";
var porc = "";


function calculo() {

    var monto = document.getElementById('monto').value;
    console.log(monto)
    var porc = document.getElementById('porcentaje').value;
    console.log(porc)
    porc = porc / 100;
    let res = monto * porc;
    document.getElementById('diezmo').innerHTML = res;
    Swal.fire({
        icon: 'info',
        title: "Resultado",
        text: ("El porciento de {}", monto),
        text: ("es {}", res),
        grow: "fullscreen"
    })
}

function validar(e) {
    e.preventDefault();
    if (!validator.isEmpty(form.monto.value)) {
        monto = true;
    } else {
        form.monto.style.backgroundColor = '#f5adab';
    }
    if (!validator.isEmpty(form.porcentaje.value)) {
        porcentaje = true;
    } else {
        form.porcentaje.style.backgroundColor = '#f5adab';
    }
    if (monto && porcentaje == true) {
        calculo();
    }
}


form.addEventListener("submit", validar);