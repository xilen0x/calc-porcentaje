function calculo() {
    let monto = document.getElementById('monto').value;
    let porc = document.getElementById('porcentaje').value;
    porc = porc / 100;
    let res = monto * porc;
    console.log(porc)
    console.log(monto)
    console.log(res)
    document.getElementById('diezmo').innerHTML = res;
}