let precioOriginal
let porcentajeDescuento
let precioConDescuento
let opcion

alert("Bienvenidos a la calculadora de descuentos! Por favor ingresa los siguientes datos.")


function calcularDescuento(precio, porcentajeDescuento) {
    return precio - (precio * porcentajeDescuento / 100);
}

function calculadora() {
    do {
        do {
            opcion = prompt("Ingrese la operacion para hacer el descuento \n%")
        }while (
            opcion != "%"
        );
        precioOriginal = parseFloat(prompt("Ingrese el precio del producto: "));
        porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

        if (!isNaN(precioOriginal) && !isNaN(porcentajeDescuento) && porcentajeDescuento >= 0 && porcentajeDescuento <= 100) {
            precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
            alert("El precio con un " + porcentajeDescuento + "% de descuento es: $" + precioConDescuento);
            break;
        } else {
            alert("Ingrese numeros validos. El porcentaje de descuento debe estar entre 0 y 100.");
        }
    } while (true);
}

calculadora();
