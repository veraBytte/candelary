import {getProducts}  from "../api/productApi.js";

let startProduct = 0;
let endProduct = 5;
const API = "https://api.escuelajs.co/api/v1/products";

let llave = getProducts(API,startProduct,endProduct)

//Archivo de Test