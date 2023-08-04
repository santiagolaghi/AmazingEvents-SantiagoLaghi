 //Ejercicio Uno (1)
 let numero1 = Number(prompt("Ingrese el primer numero"))
 let numero2 = Number(prompt("Ingrese el segundo numero"))

 console.log(numero1 > numero2 ? "Es Mayor" : "Es Menor")

//Ejercicio Dos (2)
 let numero3 = Number(prompt("Ingrese el primer numero"))
 let numero4 = Number(prompt("Ingrese el segundo numero"))

 console.log(numero3 == numero4 ? "Son iguales" : "Son diferentes")
//Ejercicio Tres 3
 let primerNumero = Number(prompt("Ingrese el primer numero"))
 let segundoNumero = Number(prompt("Ingrese el segundo numero"))
 function EsMasGrande(primerNumero, segundoNumero) {
     if (primerNumero > segundoNumero) {
         console.log(primerNumero)
     }
     else if (primerNumero < segundoNumero) {
         console.log(segundoNumero)
     } else { 
         console.log("Son iguales")
     }

}
//Ejercicio Cuatro (4)
EsMasGrande(primerNumero, segundoNumero, tercerNumero)

let primerNumero = Number(prompt("Ingrese el primer numero"))
let segundoNumero = Number(prompt("Ingrese el segundo numero"))
let tercerNumero = Number(prompt("Ingrese el tercer numero"))
function EsMasGrande(primerNumero, segundoNumero, tercerNumero) {
    if (primerNumero < segundoNumero && primerNumero < tercerNumero) {
        console.log(primerNumero)
    }
    if (primerNumero > segundoNumero && segundoNumero < tercerNumero) {
        console.log(segundoNumero)
    }
    if (primerNumero > tercerNumero && segundoNumero > tercerNumero) {
        console.log(tercerNumero)
    }

}
//Ejercicio Cinco (5)
const persona1 = {
    nombre : "Santiago",
    edad : 22,
    altura: 174,
}
const persona2 = {
    nombre : "Leo",
    edad : 23,
    altura: 170,
}
function personaMasAlta(persona1, persona2){
    return persona1.altura > persona2.altura ? persona1 : persona2
}
console.log ("Persona mas alta: " + personaMasAlta(persona1,persona2).nombre)

function personaMasGrande (persona1,persona2){
    return persona1.edad < persona2.edad ? persona2 : persona1 
}
console.log("Persona mas grande " + personaMasGrande(persona1,persona2).nombre)


//Ejercicio Seis (6)
let nombreIngresado = prompt("Ingresa tu nombre")
let edadIngresada = Number(prompt("Ingresa tu edad"))
let alturaIngresada = Number(prompt("Ingresa tu altura en centimetros"))
let visionIngresada = Number(prompt("Ingresa tu vision, del 1 al 10"))

if ((edadIngresada > 18) && (alturaIngresada > 150) && (visionIngresada >= 8)){
    console.log(`${nombreIngresado} esta capacitado para conducir`)
}else {
    console.log(`${nombreIngresado} no esta capacitado para conducir`)
}

//Ejercicio Siete (7)
let nombreCliente = prompt("Ingresa tu nombre")
let tipoDePase = prompt("Ingrese su tipo de pase (vip o normal)")
let poseeEntrada = prompt("Posee entrada? si o no")

if (alumno1.nombre === nombreCliente){
    console.log(`Bienvenido, ${nombreCliente}!`)
}
if (tipoDePase == "vip"){
    console.log("Bienvenido!")
}

if (poseeEntrada == "si"){
    let deseaUtilizarla = (prompt("Desea utilizarla? si o no"))
    if (deseaUtilizarla == "si"){
        console.log("Bienvenido!")
    }
}

if (((nombreCliente !== alumno1.nombre) && (tipoDePase !== "vip")) && (poseeEntrada == "no")){
    let deseaComprar = (prompt("Desea comprar? si o no"))
    if (deseaComprar == "no"){
        alert("Nos vemos la proxima!")
    }else if (deseaComprar == "si"){
        let dineroDisponible = Number(prompt("Ingrese dinero disponible utilizando solo numeros"))
        if (dineroDisponible >= 1000){
            alert("Bienvenido a nuestra tienda")
        }else if (dineroDisponible < 1000){
            alert("La venta no se pudo realizar")
        }
    }
}

//Ejercicio Ocho (8)
let numeroIncognita = 4
let numeroIngresado = Number(prompt("Adivine el numero del 1 al 10"))
if (numeroIngresado === numeroIncognita){
    alert("Ganaste, adivinaste el numero")
}else if (numeroIngresado < numeroIncognita){
    numeroIngresado = Number(prompt("El numero ingresado es menor, vuelve a intentarlo"))
    if (numeroIngresado === numeroIncognita){
        alert("Ganaste, adivinaste el numero")
    }else if (numeroIngresado < numeroIncognita){
        numeroIngresado = Number(prompt("El numero ingresado es menor, vuelve a intentarlo"))
        if (numeroIngresado === numeroIncognita){
            alert("Ganaste, adivinaste el numero")
        }else if(numeroIngresado < numeroIncognita){
            alert("Usaste la cantidad maxima de intentos.")        
        }else if(numeroIngresado > numeroIncognita){
            alert("Usaste la cantidad maxima de intentos.") 
        }
    }else if (numeroIngresado > numeroIncognita){
        numeroIngresado = Number(prompt("El numero ingresado es mayor, vuelve a intentarlo"))
        if (numeroIngresado === numeroIncognita){
            alert("Ganaste, adivinaste el numero")
        }else if(numeroIngresado < numeroIncognita){
            alert("Usaste la cantidad maxima de intentos.")        
        }else if(numeroIngresado > numeroIncognita){
            alert("Usaste la cantidad maxima de intentos.") 
        }
    }
}else if (numeroIngresado > numeroIncognita){
     Number(prompt("El numero ingresado es mayor, vuelve a intentarlo"))
     if (numeroIngresado === numeroIncognita){
        alert("Ganaste, adivinaste el numero")
    }else if (numeroIngresado < numeroIncognita){
        numeroIngresado = Number(prompt("El numero ingresado es menor, vuelve a intentarlo"))
        if (numeroIngresado === numeroIncognita){
            alert("Ganaste, adivinaste el numero")
        }else if(numeroIngresado < numeroIncognita){
            alert("Usaste la cantidad maxima de intentos.")        
        }else if(numeroIngresado > numeroIncognita){
            alert("Usaste la cantidad maxima de intentos.") 
        }
    }else if (numeroIngresado > numeroIncognita){
        numeroIngresado = Number(prompt("El numero ingresado es mayor, vuelve a intentarlo"))
        if (numeroIngresado === numeroIncognita){
            alert("Ganaste, adivinaste el numero")
        }else if(numeroIngresado < numeroIncognita){
            alert("Usaste la cantidad maxima de intentos.")        
        }else if(numeroIngresado > numeroIncognita){
            alert("Usaste la cantidad maxima de intentos.") 
        }
    }
}

//Ejercicio Nueve (9)
ingresarEdad = Number(prompt("Ingrese su edad"))
soyInfante = ((ingresarEdad >= 0) && (ingresarEdad <= 12))
soyAdolescente = ((ingresarEdad >= 13) && (ingresarEdad <= 18))
soyMayorJoven = ((ingresarEdad >= 19) && (ingresarEdad <= 45))
soyAnciano = ((ingresarEdad >= 46) && (ingresarEdad <= 100))

if (soyInfante){
    alert("Eres un infante.")
}else if (soyAdolescente){
    alert("Eres un adolescente.")
}else if (soyMayorJoven){
    alert("Eres un mayor joven.")
}else if (soyAnciano){
    alert("Eres un anciano.")
}else if (ingresarEdad > 100){
    prompt("En realidad tienes esa edad?")
}

//Ejercicio Diez (10)

let jugador1 = prompt("Ingrese nombre del jugador 1")
let jugador2 = prompt("Ingrese nombre del jugador 2")

let eleccionJugador1 = prompt(`${jugador1}, ingresa 'PIEDRA', 'PAPEL' o 'TIJERAS' en mayusculas`)
let eleccionJugador2 = prompt(`${jugador2}, ingresa 'PIEDRA', 'PAPEL' o 'TIJERAS' en mayusculas`)

if ((eleccionJugador1 === "PIEDRA") && (eleccionJugador2 === "TIJERAS")){
    alert(`El ganador es ${jugador1}`)
}else if ((eleccionJugador1 === "PIEDRA") && (eleccionJugador2 === "PAPEL")){
    alert(`El ganador es ${jugador2}`)
}else if ((eleccionJugador1 === "PIEDRA") && (eleccionJugador2 === "PIEDRA")){
    alert("Es un empate")
}else if ((eleccionJugador1 === "PAPEL") && (eleccionJugador2 === "TIJERAS")){
    alert(`El ganador es ${jugador2}`)
}else if ((eleccionJugador1 === "PAPEL") && (eleccionJugador2 === "PAPEL")){
    alert("Es un empate")
}else if ((eleccionJugador1 === "PAPEL") && (eleccionJugador2 === "PIEDRA")){
    alert(`El ganador es ${jugador1}`)
}else if ((eleccionJugador1 === "TIJERAS") && (eleccionJugador2 === "TIJERAS")){
    alert("Es un empate")
}else if ((eleccionJugador1 === "TIJERAS") && (eleccionJugador2 === "PAPEL")){
    alert(`El ganador es ${jugador1}`)
}else if ((eleccionJugador1 === "TIJERAS") && (eleccionJugador2 === "PIEDRA")){
    alert(`El ganador es ${jugador2}`)
}else {
    alert("Algunos de los jugadores han hecho trampa")
}

//Ejercicio Once (11)

let colorIngresado = prompt("Ingrese un color en minusculas")

switch(colorIngresado) {
    case 'blanco':
        alert("Falta de color.");
        break;
    case 'negro':
        alert("Falta de color.");
        break;
    case 'verde':
        alert("El color de la naturaleza.");
        break;
    case 'azul':
        alert("El color del agua.");
        break;
    case 'amarillo':
        alert("El color del sol.");
        break;
    case 'rojo':
        alert("El color del fuego.");
        break;
    case 'marron':
        alert("El color de la tierra.");
        break;
    default:
        alert("Excelente eleccion, no lo teniamos pensado.")
}

//Ejercicio Doce (12)

let valor1 = Number(prompt("Ingrese un numero"))
let valor2 = Number(prompt("Ingrese otro numero"))
let operacionIngresada = prompt("Seleccione operacion (suma, resta, multiplicacion, division)")

if (operacionIngresada === "suma"){
    alert(`${valor1} + ${valor2} = ${valor1 + valor2}`)    
}else if (operacionIngresada === "resta"){
    alert(`${valor1} - ${valor2} = ${valor1 - valor2}`)
}else if (operacionIngresada === "multiplicacion"){
    alert(`${valor1} * ${valor2} = ${valor1 * valor2}`)
}else if ((operacionIngresada === "division") && (valor1 !== 0) && (valor2 !== 0)){
    alert(`${valor1} / ${valor2} = ${valor1 / valor2}`)
}else if ((operacionIngresada === "division") && ((valor1 === 0) || (valor2 ===0))){
    alert("ERROR")
}

//Ejercicio Trece (13)

let apellidoDNI = prompt("Ingrese su apellido")
let nombreDNI = prompt("Ingrese su nombre")
let generoDNI = prompt("Ingrese su genero")
let fechaNacimientoDNI = prompt("Ingrese su fecha de nacimiento dd/mm/aaaa")
let nacionalidadDNI = prompt("Ingrese su nacionalidad")

let casoAfirmativo = prompt(`${apellidoDNI}, ${nombreDNI}, ${generoDNI}, ${fechaNacimientoDNI}, ${nacionalidadDNI}, "Estan correctos sus datos? Ingrese 'si' o 'no'"`)

if (casoAfirmativo === "si"){
    let personaDNI = {
        apellido: apellidoDNI,
        nombre: nombreDNI,
        genero: generoDNI,
        fechaDeNacimiento: fechaNacimientoDNI,
        nacionalidad: nacionalidadDNI
    }
    console.table(personaDNI)
    console.log("Registro exitoso!")
}else if (casoAfirmativo === "no"){
    alert("Vuelva a intentarlo en 1 mes.")
}

function registrarDNI() {
      const datosDNI = {
        nombre: prompt("Ingrese su nombre completo:"),
        apellido: prompt("Ingrese su apellido:"),
        fechaNacimiento: prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):"),
        numeroDocumento: prompt("Ingrese su número de documento:"),
        direccion: prompt("Ingrese su dirección:"),
        nacionalidad: prompt("Ingrese su nacionalidad:")
      };

      console.log("Datos ingresados:");
      console.table(datosDNI);

      const confirmacion = confirm("¿Los datos ingresados son correctos?");
      if (confirmacion) {
        const dni = { ...datosDNI };
        console.log("Registro exitoso:");
        console.table(dni);
      } else {
        console.log("Vuelva a intentarlo en 1 mes.");
      }
    }