import { requestProducts, updateStateProducts } from "./utils/productManager.js";

// Defino la constante API que lleva la url del end-point base y el boton de ver mas
const API = "https://api.escuelajs.co/api/v1";
const showMore = document.querySelector("#see-more");

//Ejecutable que llama a la funcion de utilidad updateStateProducts para renderizar nuevos productos cuando hago click en el boton
showMore.addEventListener("click", () =>{
    updateStateProducts(API)
});

//Peticion inicial para mostrar los productos apenas carga la pagina en el archivo de productApi
requestProducts(`${API}/products`);