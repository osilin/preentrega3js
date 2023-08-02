const tabla = document.querySelector("tbody")

function agruparCarrito(prod) {
    return `<tr>
                <th scope="row">${prod.cod}</th>
                <td>${prod.nombre}</td>
                <td>$ ${prod.precio.toLocaleString()}</td>
                <td>❌</td>
            </tr>`
}

function armarCarrito() {
    tabla.innerHTML = ""
    if (carritoDeProductos.length > 0) {
        carritoDeProductos.forEach((prod) => {
            tabla.innerHTML += agruparCarrito(prod)
        })
    }
}

armarCarrito() 