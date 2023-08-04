const contenedorTarjetas = document.getElementById ('contenedorTarjetas');
const eventos = data.events;

function crearTarjeta (objeto) {        
    return   `<div class="card" style="width: 18rem;">         
                <img class="imagecard" src="${objeto.image}">
                <div class="card-body d-flex flex-column align-items-center text-center">
                    <h5 class="card-title">${objeto.name}</h5>
                    <p class="card-text">${objeto.description}</p>
                    <div class="divpya d-flex justify-content-around align-items-center pt-4">                       
                        <p class="cardtextp card-text">$${objeto.price}</p>
                        <a class="botona text-decoration-none border border-2 p-1" href="../pages/Details.html" class="btn btn-primary">Details</a>
                    </div>                  
                </div>
            </div>`       
}

function mostrarTarjeta (listaDeEventos){
    let card = ""
    let eventosFiltrados = filtrarEventosFechaMayorA(listaDeEventos, 2022)
    for (let evento of eventosFiltrados){
        card += crearTarjeta(evento)
    }
    contenedorTarjetas.innerHTML = card
}

function filtrarEventosFechaMayorA(eventos, fechaParaFiltrar) {
    let eventosFiltrados = []
    for (let evento of eventos){
        let anio = parseInt(evento.date.split('-')[0]) 
        // 2022-02-03.split('-') -> ["2022","02","03"]
        if (anio > fechaParaFiltrar) {
            eventosFiltrados.push(evento)
        }
    }
    return eventosFiltrados
} 

mostrarTarjeta(eventos)