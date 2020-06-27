console.log("Conectó");

//EJERCICIO 1
function tipoMotor() {
    motor = parseInt(prompt("Introduce el tipo de motor: 1, 2, 3, 4"));

    switch (motor) {
        case 0:
            console.log('No se ha establecido un valor definido para el tipo de bomba');
            alert('No se ha establecido un valor definido para el tipo de bomba');
            break;
        case 1:
            console.log('La bomba es una bomba de agua');
            alert('La bomba es una bomba de agua');
            break;
        case 2:
            console.log('La bomba es una bomba de gasolina');
            alert('La bomba es una bomba de gasolina');
            break;
        case 3:
            console.log('La bomba es una bomba de hormigón');
            alert('La bomba es una bomba de hormigón');
            break;
        case 4:
            console.log('La bomba es una bomba de pasta alimenticia');
            alert('La bomba es una bomba de pasta alimenticia')
            break;
        default:
            console.log('No existe un valor válido para tipo de bomba');
            alert('No existe un valor válido para tipo de bomba');
    }
}
tipoMotor();
console.log(motor);


//EJERCICIO 2
var numero = 100;
var product = parseInt(prompt("Introduce el tipo de producto: 1, 2, 3"));

function obtenerImporteConImpuestos(sinImpuestos, producto) {

    if (producto === 1) {
        sinImpuestos += sinImpuestos * 0.21;
        return sinImpuestos;
    }
    if (producto === 2) {
        sinImpuestos += sinImpuestos * 0.1;
        return sinImpuestos;
    }
    if (producto === 3) {
        sinImpuestos += sinImpuestos * 0.05;
        return sinImpuestos;
    }
    if (producto !== 1 || producto !== 2 || producto !== 3) {
        sinImpuestos = "No valido";
        return sinImpuestos;
    }
}
resultado = obtenerImporteConImpuestos(numero, product);
alert("     Producto: " + product + "     Valor: " + numero + "     Valor con impuesto: " + resultado);
console.log(resultado);