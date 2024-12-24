const productContainer = document.getElementById('products');

// Fetch de productos desde la API
fetch('https://fakestoreapi.com/products')
    .then(response => response.json()) // Convertir directamente la respuesta a JSON
    .then(products => {
        // Construcción de tarjetas dinámicas usando un bucle for
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const col = document.createElement('div');
            col.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4'); // Responsividad
            col.innerHTML = `
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text text-primary">Precio: $${product.price}</p>
                    </div>
                </div>
            `;
            productContainer.appendChild(col);
        }
    })