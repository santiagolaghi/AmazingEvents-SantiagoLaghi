//Ejercicio Uno (1)

function saludar(nombre) {
    console.log("Hola " + nombre + " ¿" + "como estas" + "?")
}

saludar("Santiago")

//Ejercicio Dos (2)

function multiplicar(numero1, numero2) {
    return numero1 * numero2
}

console.log(multiplicar(4, 8))

//Ejercicio Tres (3)

function areaTriangulo(base, altura) {
    return base * altura / 2
}

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}

console.log(areaTriangulo(5, 3))
console.log(perimetroTriangulo(4, 5, 6))

//Ejercicio Cuatro (4)

function calcularPrecio(precio, cantidad) {
    let precioTotal = precio * cantidad
    if (cantidad >= 20) {
        precioTotal = precioTotal - precioTotal * 0.20
    } else if (cantidad >= 10) {
        precioTotal = precioTotal - precioTotal * 0.10
    }
    return precioTotal
}
console.log(calcularPrecio(200, 15))
console.log(calcularPrecio(250, 25))

//Ejercicio Cinco (5)

function esMayorDeEdad(edad) {
    return edad >= 18 ? "Eres Mayor de Edad" : "Eres Menor de Edad"
}
console.log(esMayorDeEdad(18))
console.log(esMayorDeEdad(13))
console.log(esMayorDeEdad(25))

//Ejercicio Seis (6)

function CalcularImpuesto(ingresoBrutoAnual) {
    let ingresoConImpuesto = ingresoBrutoAnual
    if (ingresoBrutoAnual <= 10000) {
        ingresoConImpuesto = ingresoConImpuesto - ingresoConImpuesto * 0.10
        // Impuesto del 10%
    } else if (ingresoBrutoAnual <= 20000) {
        ingresoConImpuesto = ingresoConImpuesto - ingresoConImpuesto * 0.15
        // Impuesto del 15%

    } else if (ingresoBrutoAnual > 20000) {
        ingresoConImpuesto = ingresoConImpuesto - ingresoConImpuesto * 0.20
        // Impuesto del 20%
    }
    return
}

//Ejercicio Siete (7)
function verificarDia(dia) {
    let mensaje = ""
    switch (dia) {
        case 1:
            mensaje = "Es dia laboral."
            break;
        case 2:
            mensaje = "Es dia laboral."
            break;
        case 3:
            mensaje = "Es dia laboral."
            break;
        case 4:
            mensaje = "Es dia laboral."
            break;
        case 5:
            mensaje = "Es dia laboral."
            break;
        case 6:
            mensaje = "Es fin de semana."
            break;
        case 7:
            mensaje = "Es fin de semana."
            break;
        default:
            mensaje = "No es un dia valido."
            break;
    }
    return mensaje
}

console.log(verificarDia(1))
console.log(verificarDia(6))
console.log(verificarDia(5))
console.log(verificarDia(-2))
