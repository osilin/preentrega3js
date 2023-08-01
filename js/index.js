const contenedor = document.querySelector("div#contenedor.contenedor")
const logoCarrito = document.getElementById("logCarrito")




function retornoDeProdsHTML(producto) {
    return `<div class="row justify-content-center">
        <div class="col-lg-3 col-12 mt-5">
      <div class="card">
          <img src=${producto.imagen} class="card-img-top img-thumbnail img-fluid"
              alt="vela de soja Pecera">
          <div class="card-body text-center">
              <h5 class="card-title text-light fs-3">${producto.nombre}</h5>
              <p class="card-text fs-4 text-light mt-5">$ ${producto.precio}</p>
              <button type="button" class="btn btn-secondary btn-lg mt-2 border-white" id="${producto.id}">Agregar al carrito</button>
          </div>
      </div>
  </div>
</div>`
}

function actBotones() {
    const botonProd = document.querySelectorAll("button.btn.btn-secondary.btn-lg")
    botonProd.forEach((boton) => {
        boton.addEventListener("click", () => {
            //console.log (boton.id)
            let producto = listaDeProductos.find((prods) => prods.id === parseInt(boton.codigo))
            carritoDeProductos.push(producto)
            localStorage.setItem("CarritoDeProductos", JSON.stringify(carritoDeProductos)
            )
            console.table(carritoDeProductos)
        })
    })
}




function cargarProductos(lista) {
    contenedor.innerHTML = ""
    lista.forEach((producto) => {
        contenedor.innerHTML += retornoDeProdsHTML(producto)
    })
    actBotones()
}

cargarProductos(listaDeProductos)


logoCarrito.addEventListener("mouseover", () => {
    logoCarrito.title = "Carrito"
})