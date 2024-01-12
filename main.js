const API = "https://api.escuelajs.co/api/v1/products";
const galleryCards = document.querySelector("#gallery-products");
const showMore = document.querySelector("#see-more");
let startProduct = 0;
let endProduct = 5;
let users = [];

async function getProducts() {
    try {
        const response = await fetch(`${API}?offset=${startProduct}&limit=${endProduct}`);
        const products = await response.json();

        const informationCards = products.map(product => ({
            title: product.title,
            price: product.price,
            images: product.images
        }));

        buildCards(informationCards);
    } catch (error) {
        console.error("Error fetching products: ", error);
    } finally {
        console.log("Finished fetching products");
    }
}

async function getUsers() {
    try {
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        const users = await response.json();

        const selectedUsers = users.map(user => ({
            name: user.name,
            avatar: user.avatar,
            role: user.role
        }));

        console.log(selectedUsers);
    } catch (error) {
        console.error("Error fetching users: ", error);
    }
}

function buildCards(arrayProducts) {
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

function updateStateProducts() {
    startProduct += endProduct;
    getProducts();
}

showMore.addEventListener('click', updateStateProducts);

getProducts();
getUsers();