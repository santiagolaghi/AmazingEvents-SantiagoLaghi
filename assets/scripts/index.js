const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const eventos = data.events;

function crearTarjeta(objeto) {
    return `<div class="card" style="width: 18rem;">         
            <img class="image" src="${objeto.image}">
            <div class="card-body">
            <h5 class="card-title">${objeto.name}</h5>
            <p class="card-text">${objeto.description}</p>
            <div class="d-flex justify-content-evenly align-items-center pt-5">
            <p class="card-text">${objeto.price}</p>
            <a href="./assets/pages/Details.html" class="btn btn-primary">Details</a>
            </div>                  
            </div>
            </div>`
}



function mostrarTarjeta(listaDeEventos) {
    let card = ""
    for (let evento of listaDeEventos) {
        card += crearTarjeta(evento)
    }
    contenedorTarjetas.innerHTML = card
}




mostrarTarjeta(eventos)



/*function sumar (numero1, numero2){
    console.log (numero1 + numero2)
}
sumar(1,2)*/

