const contenedor = document.querySelector("div#contenedor.contenedor")


function retornoHTML(producto) {
    return `<div class="row justify-content-center">
        <div class="col-lg-4 col-12 mt-5">
      <div class="card">
          <img src=${producto.imagen}class="card-img-top img-thumbnail img-fluid"
              alt="vela de soja Pecera">
          <div class="card-body text-center">
              <h5 class="card-title text-light fs-3">${producto.nombre}</h5>
              <p class="card-text fs-4 text-light mt-5">$ ${producto.precio}</p>
              <button type="button" class="btn btn-secondary btn-lg mt-2 border-white" id=${producto.id}>Agregar al carrito</button>
          </div>
      </div>
  </div>
</div>`
}

function cargarProductos() {
    productos.forEach((producto) => {
        contenedor.innerHTML += retornoHTML(producto)

    });
}

cargarProductos()