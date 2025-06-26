let data = [];

// Usando Async / await.
window.addEventListener('load', async () => {
    console.log("Iniciando");

    const dataFetch = await fetch('https://fakestoreapi.com/products');
    data = await dataFetch.json();
        //.catch(error => console.error("Error al obtener productos:", error));

        const productList = document.getElementById('products-grid');
            if (productList) {
                data.forEach(product => {
                    const col = document.createElement("div");
                    col.className = "col-sm-6 col-md-4 col-lg-3"; // Responsive columns
                    col.innerHTML = getCardProduct(product);
                    productList.appendChild(col);
                });
            }
});

// Funcion que retorna los productos. Buenas practicas dividir código mediante funciones
const getCardProduct = (product) => {
    return `
            <div class="card h-100 shadow-sm">
                <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 200px; object-fit: contain;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text text-muted">${product.category}</p>
                    <p class="card-text text-primary fw-bold">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary mt-auto w-100" onclick="agregarProductoAlCarrito('${product.id}')">
                        <i class="bi bi-cart-plus me-2"></i>Agregar al carrito
                    </button>
                </div>
            </div>
        `;
}


// Funcion para mostrar el producto seleccionado en el carrito.
const crearProductoEnCarrito = (product) => {
    return `
        <div class="dropdown-item d-flex align-items-center py-3">
            <img src="${product.image}" alt="Producto 1" class="rounded me-3" style="width: 50px; height: 50px; object-fit: cover;">
            <div class="flex-grow-1">
                <h6 class="mb-1 fw-semibold" style="font-size: 0.9rem;">${product.title}</h6>
                <small class="text-primary fw-bold">${product.price.toFixed(2)}</small>
                <br>
                <small class="text-muted">Cantidad: 1</small>
            </div>
            <div class="d-flex flex-column align-items-center">
                <div class="btn-group-vertical" role="group" style="font-size: 0.7rem;">
                    <button type="button" class="btn btn-outline-secondary btn-sm px-2 py-1">+</button>
                    <button type="button" class="btn btn-outline-secondary btn-sm px-2 py-1">-</button>
                </div>
                <button type="button" class="btn btn-link text-danger p-0 mt-1" style="font-size: 0.8rem;">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `
}


// Funcion para obtener el productos que va al carrito.
const agregarProductoAlCarrito = (idProducto) => {
    //console.log('data', data);
    console.log('ProductoID', idProducto);
    const findProduct = data.find(product => product.id == idProducto)
    console.log('finProduct', findProduct)
    
    const containerCarrito = document.querySelector('.cart-items-container');
    if (containerCarrito) {
        containerCarrito.innerHTML = crearProductoEnCarrito(findProduct);
    }
}



// window.addEventListener('load', () => {
//     console.log("Iniciando");

//     fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(data => {

//             Usando Promesa.
//             const productList = document.getElementById('products-grid');

//             if (productList) {
//                 data.forEach(product => {
//                     const col = document.createElement("div");
//                     col.className = "col-sm-6 col-md-4 col-lg-3"; // Responsive columns

//                     col.innerHTML = `
//                         <div class="card h-100 shadow-sm">
//                             <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 200px; object-fit: contain;">
//                             <div class="card-body d-flex flex-column">
//                                 <h5 class="card-title">${product.title}</h5>
//                                 <p class="card-text text-muted">${product.category}</p>
//                                 <p class="card-text text-primary fw-bold">$${product.price.toFixed(2)}</p>
//                                 <button class="btn btn-primary mt-auto w-100">
//                                     <i class="bi bi-cart-plus me-2"></i>Agregar al carrito
//                                 </button>
//                             </div>
//                         </div>
//                     `;

//                     productList.appendChild(col);
//                 });
//             }
//         })
//         .catch(error => console.error("Error al obtener productos:", error));
// });






// Promesas
// 1) Usar una promesa. En una promesa quiere decir mandar hacer una accion y te prometo que vas a obtener un resultado exitoso o erroneo. Y tengo que esperar que una promesa se resuelva para empezar con la otra.
// Async/Await
// 2) Async Hace las acciones de manera asincrona. De manera simultanea.