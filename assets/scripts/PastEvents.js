const contenedorTarjetas = document.getElementById ('contenedorTarjetas');
const eventos = data.events;


function crearTarjeta (objeto) {        
    return  `<div class="card" style="width: 18rem;">         
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

function mostrarTarjeta (listaDeEventos){
    let card = ""
    let eventosFiltrados = filtrarEventosFechasMenorA(listaDeEventos, 2023)
    for (let evento of eventosFiltrados){
        card += crearTarjeta(evento)
    }
    contenedorTarjetas.innerHTML = card
}

function filtrarEventosFechasMenorA (eventos, fechaParaFiltrar) {
    let eventosFiltrados = []
    for (let evento of eventos){
        let anio = parseInt (evento.date.split('-')[0])
        if (anio < fechaParaFiltrar) {
            eventosFiltrados.push(evento)
        }
    }
    return eventosFiltrados
}

mostrarTarjeta(eventos)