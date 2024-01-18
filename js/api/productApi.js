export async function getProducts(url, startProduct, endProduct) {
    try {
        const response = await fetch(`${url}?offset=${startProduct}&limit=${endProduct}`);
        const products = await response.json();

        //Utiliza el destructuring para sacar los datos interesantes y crear un nuevo objeto con esos datos
        const informationCards = products.map(({ title, price, images }) => ({ title, price, images }));

        return informationCards
    } catch (error) {
        console.error("Error fetching products: ", error);
    } finally {
        console.log("Finished fetching products");
    }
}
// Esta funcion asincronica me devuelve una promesa la cual contiene los datos de los productos recibidos del end-point