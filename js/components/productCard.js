const galleryCards = document.querySelector("#gallery-products");

export function buildCards(arrayProducts) {
    const fragment = document.createDocumentFragment();

    arrayProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img class="product-image" src="https://madmenmagazine.com/wp-content/uploads/2019/03/ropa-vegana-moda-slow-moda-masculina-madmenmag-4.jpg" alt="${product.title}">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">${product.price}$</p>
        `;

        fragment.append(card);
    });

    galleryCards.append(fragment);
}

//Esta funcion se encargara de construir las cards de cada producto, recibe un arreglo de productos y renderiza los datos en una card en HTML