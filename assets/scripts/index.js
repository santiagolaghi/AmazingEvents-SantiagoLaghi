const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const eventos = data.events;

function crearTarjeta(objeto) {
    return `<div class="card" style="width: 18rem;">         
                <img class="imagecard" src="${objeto.image}">
                <div class="card-body d-flex flex-column align-items-center text-center">
                    <h5 class="card-title">${objeto.name}</h5>
                    <p class="card-text">${objeto.description}</p>
                    <div class="divpya d-flex justify-content-around align-items-center pt-4">                       
                        <p class="cardtextp card-text">$${objeto.price}</p>
                        <a class="botona text-decoration-none border border-2 p-1" href="./assets/pages/Details.html" class="btn btn-primary">Details</a>
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

