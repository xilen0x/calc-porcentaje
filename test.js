var a = document.getElementById('monto').value;
var b = document.getElementById('porcentaje').value;
console.log(a)
console.log(b)


function test() {

    if (a < b) {
        alert(`{a} es menor a {b}`, a, b)
    } else {
        alert(`{a} es mayor a {b}`, a, b)
    }

}