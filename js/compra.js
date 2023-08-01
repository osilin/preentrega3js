const tabla = document.querySelector(".table tbody")

function prodsTabla(prods) {
    return `<tr>
                <td>${prods.nombre}</td>
                <td>$ ${prods.precio.toLocaleString()}</td>
                <td>❌</td>
            </tr>`
}

function armarCarrito() {
    tabla.innerHTML = ""
    if (carritoDeProductos.length > 0) {
        carritoDeProductos.forEach((prods) => {
            tabla.innerHTML += prodsTabla(prods)
        })
    }
}

armarCarrito()