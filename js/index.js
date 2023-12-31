const numeradorCarrito = document.querySelector("span#cantC")
const contenedor = document.querySelector("div#contenedor.contenedor")
const logoCarrito = document.getElementById("logCarrito")
const barraBusqueda = document.querySelector("input")

logoCarrito.addEventListener("mouseover", () => {
    logoCarrito.title = "Carrito"
})

function visualizarNumCarrito() {
    numeradorCarrito.textContent = carritoDeProductos.length
}

carritoDeProductos.length > 0 && visualizarNumCarrito()


function retornarProdsDeHTML(producto) {
    return `<div class="row justify-content-center retCards">
        <div class="col-lg-11 col-12 mt-5">
      <div class="card">
          <img src=${producto.imagen} class="card-img-top img-thumbnail img-fluid"
              alt="vela de soja Pecera">
          <div class="card-body text-center">
              <h5 class="card-title text-light fs-3 fw-bolder">${producto.nombre}</h5>
              <p class="card-text fs-4 text-light mt-5 fw-bolder">$ ${producto.precio}</p>
              <button type="button" class="btn btn-secondary btn-lg mt-2 border-white" id="${producto.cod}">Agregar al carrito</button>
          </div>
      </div>
  </div>
</div>`
}

function mandarACarrito() {
    const botones = document.querySelectorAll("button.btn.btn-secondary.btn-lg")
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            let producto = listaDeProductos.find((prod) => prod.cod === parseInt(boton.id))
            carritoDeProductos.push(producto)
            localStorage.setItem("CarritoDeProductos", JSON.stringify(carritoDeProductos))
            console.table(carritoDeProductos)
            visualizarNumCarrito()
        })

    })
}

function obtenerProductos(lista) {
    contenedor.innerHTML = ""
    lista.forEach((producto) => {
        contenedor.innerHTML += retornarProdsDeHTML(producto)
    })
    mandarACarrito()
}
obtenerProductos(listaDeProductos)

barraBusqueda.addEventListener("search", () => {
    localStorage.setItem("ultimaBusqueda", barraBusqueda.value)
    const resultado = listaDeProductos.filter((prod) => prod.nombre.toLowerCase().includes(barraBusqueda.value.toLowerCase()))
    obtenerProductos(resultado)
})




