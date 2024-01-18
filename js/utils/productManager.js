import { getProducts } from "../api/productApi.js";
import { buildCards } from "../components/productCard.js";

let startProduct = 0;
let endProduct = 5;

export async function requestProducts(API) {
    let data = await getProducts(API, startProduct, endProduct);
    buildCards(data);
}

export function updateStateProducts(API) {
    startProduct += endProduct;
    requestProducts(`${API}/products`);
}

//Administrador de estado por parte d elos productos, para renderizar y actualizar el estado d elos productos mostrados en pantalla